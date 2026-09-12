import React, { useEffect, useState } from "react";
import { act, fireEvent, render, screen } from "@testing-library/react";
import { useCenterCarousel } from "./useCenterCarousel";

const TestCarousel = ({
  total,
  resetKey,
  onReady,
}: {
  total: number;
  resetKey?: string;
  onReady?: (api: ReturnType<typeof useCenterCarousel>) => void;
}) => {
  const api = useCenterCarousel(total, 2, resetKey);

  useEffect(() => {
    if (onReady) onReady(api);
  }, [api, onReady]);

  return (
    <div>
      <div data-testid="pivot-index">{api.pivotIndex}</div>
      <button type="button" onClick={() => api.goTo(total - 1)}>
        go-last
      </button>
      <div
        data-testid="container"
        ref={api.containerRef}
        {...api.containerHandlers}
        style={{ width: 300, overflow: "auto" }}
      >
        {Array.from({ length: total }, (_, index) => (
          <div
            key={index}
            ref={(el) => {
              api.itemRefs.current[index] = el;
            }}
            data-testid={`item-${index}`}
            style={{ width: 100, display: "inline-block" }}
          >
            item {index}
          </div>
        ))}
      </div>
    </div>
  );
};

test("resets to the beginning of a new list when the section key changes", () => {
  const { rerender } = render(<TestCarousel total={3} resetKey="jan" />);

  fireEvent.click(screen.getByRole("button", { name: "go-last" }));
  expect(screen.getByTestId("pivot-index")).toHaveTextContent("2");

  rerender(<TestCarousel total={2} resetKey="feb" />);
  expect(screen.getByTestId("pivot-index")).toHaveTextContent("0");
});

test("supports touch drag input without the initial scroll jump", () => {
  let api: ReturnType<typeof useCenterCarousel> | null = null;
  render(
    <TestCarousel total={3} onReady={(value) => {
      api = value;
    }} />,
  );

  const container = screen.getByTestId("container");
  let scrollLeftValue = 200;
  Object.defineProperty(container, "scrollLeft", {
    get: () => scrollLeftValue,
    set: (value: number) => {
      scrollLeftValue = value;
    },
    configurable: true,
  });
  Object.defineProperty(container, "scrollWidth", {
    value: 1000,
    configurable: true,
  });
  Object.defineProperty(container, "clientWidth", {
    value: 300,
    configurable: true,
  });
  Object.defineProperty(container, "setPointerCapture", {
    value: jest.fn(),
    writable: true,
    configurable: true,
  });
  Object.defineProperty(container, "hasPointerCapture", {
    value: jest.fn(() => true),
    writable: true,
    configurable: true,
  });
  Object.defineProperty(container, "releasePointerCapture", {
    value: jest.fn(),
    writable: true,
    configurable: true,
  });

  expect(api).not.toBeNull();
  act(() => {
    api!.containerHandlers.onPointerDown({
      pointerId: 7,
      pointerType: "touch",
      clientX: 220,
      target: {
        closest: () => null,
      },
      preventDefault: jest.fn(),
    } as any);
    api!.containerHandlers.onPointerMove({
      pointerId: 7,
      pointerType: "touch",
      clientX: 260,
      target: {
        closest: () => null,
      },
      preventDefault: jest.fn(),
    } as any);
  });

  expect(scrollLeftValue).toBe(160);
});

test("keeps the drag anchored to the starting position and clamps within valid scroll bounds", () => {
  let api: ReturnType<typeof useCenterCarousel> | null = null;
  render(
    <TestCarousel total={5} onReady={(value) => {
      api = value;
    }} />,
  );

  const container = screen.getByTestId("container");
  let scrollLeftValue = 120;
  Object.defineProperty(container, "scrollLeft", {
    get: () => scrollLeftValue,
    set: (value: number) => {
      scrollLeftValue = value;
    },
    configurable: true,
  });
  Object.defineProperty(container, "scrollWidth", {
    value: 700,
    configurable: true,
  });
  Object.defineProperty(container, "clientWidth", {
    value: 300,
    configurable: true,
  });
  Object.defineProperty(container, "setPointerCapture", {
    value: jest.fn(),
    writable: true,
    configurable: true,
  });
  Object.defineProperty(container, "hasPointerCapture", {
    value: jest.fn(() => true),
    writable: true,
    configurable: true,
  });
  Object.defineProperty(container, "releasePointerCapture", {
    value: jest.fn(),
    writable: true,
    configurable: true,
  });

  act(() => {
    api!.containerHandlers.onPointerDown({
      pointerId: 9,
      pointerType: "mouse",
      clientX: 200,
      target: { closest: () => null },
      preventDefault: jest.fn(),
    } as any);
    api!.containerHandlers.onPointerMove({
      pointerId: 9,
      pointerType: "mouse",
      clientX: 420,
      target: { closest: () => null },
      preventDefault: jest.fn(),
    } as any);
  });

  expect(scrollLeftValue).toBe(0);

  act(() => {
    api!.containerHandlers.onPointerDown({
      pointerId: 10,
      pointerType: "mouse",
      clientX: 200,
      target: { closest: () => null },
      preventDefault: jest.fn(),
    } as any);
    api!.containerHandlers.onPointerMove({
      pointerId: 10,
      pointerType: "mouse",
      clientX: 50,
      target: { closest: () => null },
      preventDefault: jest.fn(),
    } as any);
  });

  expect(scrollLeftValue).toBe(150);
});

import React from "react";

export const LoadError = ({
  what,
  error,
}: {
  what: string;
  error: Error;
}): JSX.Element => (
  <div>
    Error loading {what}: {error.message}
  </div>
);

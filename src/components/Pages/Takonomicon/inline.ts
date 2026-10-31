export type InlineNode =
  | { kind: "text"; text: string }
  | { kind: "bold" | "italic"; children: InlineNode[] }
  | { kind: "link"; href: string; children: InlineNode[] };

const TOKEN =
  /\\([*[\]()])|\*\*([^*]+?)\*\*|\*([^*]+?)\*|\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)|(https?:\/\/[^\s)\]]+[^\s)\].,;:!?])/g;

export const parseInline = (source: string): InlineNode[] => {
  const nodes: InlineNode[] = [];
  const pushText = (text: string) => {
    if (!text) return;
    const last = nodes[nodes.length - 1];
    if (last && last.kind === "text") last.text += text;
    else nodes.push({ kind: "text", text });
  };

  const token = new RegExp(TOKEN.source, "g");
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  while ((match = token.exec(source))) {
    pushText(source.slice(lastIndex, match.index));
    lastIndex = token.lastIndex;
    const [, escaped, bold, italic, linkLabel, linkHref, bareUrl] = match;
    if (escaped !== undefined) pushText(escaped);
    else if (bold !== undefined)
      nodes.push({ kind: "bold", children: parseInline(bold) });
    else if (italic !== undefined)
      nodes.push({ kind: "italic", children: parseInline(italic) });
    else if (linkLabel !== undefined && linkHref !== undefined)
      nodes.push({
        kind: "link",
        href: linkHref,
        children: /^https?:\/\//.test(linkLabel)
          ? [{ kind: "text", text: linkLabel }]
          : parseInline(linkLabel),
      });
    else if (bareUrl !== undefined)
      nodes.push({
        kind: "link",
        href: bareUrl,
        children: [{ kind: "text", text: bareUrl }],
      });
  }
  pushText(source.slice(lastIndex));
  return nodes;
};

export const plainText = (nodes: InlineNode[]): string =>
  nodes
    .map((node) =>
      node.kind === "text" ? node.text : plainText(node.children),
    )
    .join("");

const removeFirstChar = (nodes: InlineNode[]): [InlineNode[], boolean] => {
  const result: InlineNode[] = [];
  let done = false;
  for (const node of nodes) {
    if (done) {
      result.push(node);
      continue;
    }
    if (node.kind === "text") {
      if (node.text.length === 0) {
        result.push(node);
        continue;
      }
      const text = node.text.trimStart();
      if (text.length === 0) continue;
      done = true;
      const rest = text.slice(1);
      if (rest) result.push({ kind: "text", text: rest });
      continue;
    }
    const [children, childDone] = removeFirstChar(node.children);
    if (childDone) {
      done = true;
      result.push({ ...node, children } as InlineNode);
    } else {
      result.push(node);
    }
  }
  return [result, done];
};

export const dropFirstChar = (nodes: InlineNode[]): InlineNode[] =>
  removeFirstChar(nodes)[0];

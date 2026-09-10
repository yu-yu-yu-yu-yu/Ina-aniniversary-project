import React, { useState } from "react";
import styled from "styled-components";
import { copyEntryLink } from "../../utils/shareLink";

export const CopyLinkButton = styled.button`
  flex-shrink: 0;
  background: transparent;
  border: 2px solid var(--light-highlight);
  color: var(--light-highlight);
  border-radius: 50%;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition:
    background 0.2s,
    color 0.2s;
  &:hover {
    background: var(--light-highlight);
    color: var(--dark-highlight);
  }
`;

const ShareButtonWrap = styled.div`
  position: relative;
  display: inline-flex;
  flex-shrink: 0;
`;

const CopiedToast = styled.span`
  position: absolute;
  bottom: calc(100% + 6px);
  left: 50%;
  transform: translateX(-50%);
  background: var(--dark-highlight);
  color: var(--background);
  font-size: 12px;
  white-space: nowrap;
  padding: 4px 8px;
  border-radius: 6px;
  pointer-events: none;
  z-index: 1;
`;

interface ShareButtonProps {
  slug: string;
  label: string;
  className?: string;
}

const ShareButton = ({
  slug,
  label,
  className,
}: ShareButtonProps): JSX.Element => {
  const [copied, setCopied] = useState(false);

  const handleClick = async () => {
    const ok = await copyEntryLink(slug);
    if (!ok) return;
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  };

  return (
    <ShareButtonWrap className={className}>
      <CopyLinkButton
        type="button"
        onClick={handleClick}
        title={label}
        aria-label={label}
      >
        <i className="fa fa-share" aria-hidden="true" />
      </CopyLinkButton>
      {copied && <CopiedToast>Link copied!</CopiedToast>}
    </ShareButtonWrap>
  );
};

export default ShareButton;

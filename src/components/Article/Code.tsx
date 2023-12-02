"use client";
import React, { useState } from "react";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { CopyToClipboard } from "react-copy-to-clipboard";

const Code = ({ children: { props } }: any) => {
  const [copied, setCopied] = useState(false);

  const hasLang = /language-(\w+)/.exec(props?.className || "");
  const codeChunk = props.children as string;
  const language = props.className.replace(/language-/g, "") as string;

  if (hasLang && !props?.inline) {
    return (
      <div className="group relative">
        <SyntaxHighlighter
          style={oneDark}
          language={hasLang[1] === "typescript" ? "javascript" : hasLang[1]}
          PreTag="div"
          className="mockup-code scrollbar-thin scrollbar-track-base-content/5 scrollbar-thumb-base-content/40 scrollbar-track-rounded-md scrollbar-thumb-rounded"
          showLineNumbers={true}
          useInlineStyles={true}
        >
          {String(props.children).replace(/\n$/, "")}
        </SyntaxHighlighter>

        <div className="absolute bottom-1 right-1 rounded-sm bg-white/20 px-1 py-[.125rem] text-[.7rem] font-semibold uppercase tracking-wide text-white/70 shadow-sm backdrop-blur-sm">
          <span>{language}</span>
        </div>

        <CopyToClipboard
          text={codeChunk}
          onCopy={async () => {
            setCopied(true);
            await new Promise((resolve) => setTimeout(resolve, 1000));
            setCopied(false);
          }}
        >
          <div
            className={`absolute right-1 top-1 flex h-[1.75rem] min-w-[1.75rem] cursor-pointer items-center justify-center gap-1 rounded-sm bg-white/20 px-[.75rem]  text-xs font-semibold uppercase tracking-wide text-white/70 backdrop-blur-sm transition-colors hover:bg-accent group-hover:text-white ${
              copied && "bg-accent text-white"
            }`}
          >
            <svg
              className="group-hover:scale-10 transition-all"
              width={12}
              height="auto"
              viewBox="0 0 406 470"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M278 0.333496H43.3333C19.8666 0.333496 0.666626 19.5335 0.666626 43.0002V320.334C0.666626 332.067 10.2666 341.667 22 341.667C33.7333 341.667 43.3333 332.067 43.3333 320.334V64.3335C43.3333 52.6002 52.9333 43.0002 64.6666 43.0002H278C289.733 43.0002 299.333 33.4002 299.333 21.6668C299.333 9.9335 289.733 0.333496 278 0.333496ZM363.333 85.6668H128.667C105.2 85.6668 86 104.867 86 128.333V427C86 450.467 105.2 469.667 128.667 469.667H363.333C386.8 469.667 406 450.467 406 427V128.333C406 104.867 386.8 85.6668 363.333 85.6668ZM342 427H150C138.267 427 128.667 417.4 128.667 405.667V149.667C128.667 137.933 138.267 128.333 150 128.333H342C353.733 128.333 363.333 137.933 363.333 149.667V405.667C363.333 417.4 353.733 427 342 427Z"
                fill="currentColor"
              />
            </svg>

            <span>{copied ? "copied" : "copy code"}</span>
          </div>
        </CopyToClipboard>
      </div>
    );
  }

  return null;
};

export default Code;

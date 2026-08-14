"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type Line =
  | { type: "cmd"; text: string; html: string }
  | { type: "out"; html: string }
  | { type: "blank" };

const LINES: Line[] = [
  {
    type: "cmd",
    text: "$ curl -I https://teklu.dev/current-path",
    html: '<span class="prompt">$</span> curl -I https://teklu.dev<span class="path">/current-path</span>',
  },
  { type: "out", html: 'HTTP/1.1 <span class="err-status">404 Not Found</span>' },
  { type: "blank" },
  {
    type: "cmd",
    text: "$ kubectl get page /current-path -n portfolio",
    html:
      '<span class="prompt">$</span> kubectl get page <span class="path">/current-path</span> -n portfolio',
  },
  {
    type: "out",
    html:
      '<span class="err-line">Error from server (NotFound): pages "current-path" not found in namespace "portfolio"</span>',
  },
  { type: "blank" },
];

export default function NotFound() {
  const [rendered, setRendered] = useState<Line[]>([]);
  const [typingHtml, setTypingHtml] = useState<string | null>(null);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduced) {
      setRendered(LINES);
      setDone(true);
      return;
    }

    let cancelled = false;

    async function run() {
      for (const line of LINES) {
        if (cancelled) return;

        if (line.type === "blank") {
          setRendered((r) => [...r, line]);
          await sleep(120);
          continue;
        }

        if (line.type === "cmd") {
          let shown = "";
          for (const ch of line.text) {
            if (cancelled) return;
            shown += ch;
            setTypingHtml(escapeHtml(shown));
            await sleep(14 + Math.random() * 18);
          }
          setTypingHtml(null);
          setRendered((r) => [...r, line]);
          await sleep(180);
        } else {
          setRendered((r) => [...r, line]);
          await sleep(260);
        }
      }
      if (!cancelled) setDone(true);
    }

    run();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="nf-root">
      <div className="nf-stage">
        <div className="nf-terminal">
          <div className="nf-titlebar">
            <div className="nf-dots">
              <span className="nf-dot nf-lit" />
              <span className="nf-dot nf-dim" />
              <span className="nf-dot" />
            </div>
            <span className="nf-titlebar-label">teklu@arch: ~</span>
          </div>

          <div className="nf-body">
            {rendered.map((line, i) =>
              line.type === "blank" ? (
                <div key={i} className="nf-blank" />
              ) : (
                <div
                  key={i}
                  className="nf-line"
                  dangerouslySetInnerHTML={{ __html: line.html }}
                />
              )
            )}

            {typingHtml !== null && (
              <div className="nf-line">{typingHtml}</div>
            )}

            {done && (
              <div className="nf-line">
                <span className="prompt">$</span> <span className="nf-cursor" />
              </div>
            )}
          </div>
        </div>

        <div className="nf-footer">
          <p className={`nf-footer-text${done ? " show" : ""}`}>
            this route isn&apos;t scheduled on any node
          </p>
          <Link href="/" className={`nf-home-btn${done ? " show" : ""}`}>
            <span className="prompt">$</span> cd ~
          </Link>
        </div>
      </div>

      <style jsx global>{`
        .nf-root {
          --void: #08080a;
          --terminal: #101012;
          --border: #232326;
          --orange: #ff5a1f;
          --orange-dim: #8a3d17;
          --orange-soft: #ffb37a;
          --text: #e7e5e0;
          --text-dim: #6e6e73;

          min-height: 100vh;
          width: 100%;
          background: var(--void);
          background-image: radial-gradient(
            circle at 50% 0%,
            rgba(255, 90, 31, 0.06),
            transparent 60%
          );
          color: var(--text);
          font-family: "JetBrains Mono", "Fira Code", ui-monospace, "SF Mono",
            Menlo, Consolas, monospace;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
        }

        .nf-stage {
          width: 100%;
          max-width: 640px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 28px;
        }

        .nf-terminal {
          width: 100%;
          background: var(--terminal);
          border: 1px solid var(--border);
          border-radius: 10px;
          box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.02),
            0 30px 80px -20px rgba(255, 90, 31, 0.18),
            0 10px 30px -10px rgba(0, 0, 0, 0.6);
          overflow: hidden;
        }

        .nf-titlebar {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 11px 16px;
          background: #0b0b0d;
          border-bottom: 1px solid var(--border);
        }

        .nf-dots {
          display: flex;
          gap: 7px;
          flex-shrink: 0;
        }

        .nf-dot {
          width: 11px;
          height: 11px;
          border-radius: 50%;
          background: #2c2c30;
          border: 1px solid var(--border);
        }

        .nf-dot.nf-lit {
          background: var(--orange);
          border-color: var(--orange);
          opacity: 0.85;
        }

        .nf-dot.nf-dim {
          background: var(--orange-dim);
          border-color: var(--orange-dim);
          opacity: 0.7;
        }

        .nf-titlebar-label {
          font-size: 12px;
          color: var(--text-dim);
          letter-spacing: 0.02em;
          margin: 0 auto;
        }

        .nf-body {
          padding: 24px 22px 26px;
          font-size: 13.5px;
          line-height: 1.75;
          min-height: 230px;
        }

        .nf-line {
          white-space: pre-wrap;
          word-break: break-word;
        }

        .nf-line .prompt {
          color: var(--orange);
        }

        .nf-line .path {
          color: var(--orange-soft);
        }

        .nf-line .err-status {
          color: var(--orange);
          font-weight: 600;
        }

        .nf-line .err-line {
          color: var(--orange-soft);
        }

        .nf-blank {
          height: 1.75em;
        }

        .nf-cursor {
          display: inline-block;
          width: 7px;
          height: 15px;
          background: var(--orange);
          margin-left: 2px;
          vertical-align: -2px;
          animation: nf-blink 1s steps(1) infinite;
        }

        @keyframes nf-blink {
          0%,
          49% {
            opacity: 1;
          }
          50%,
          100% {
            opacity: 0;
          }
        }

        .nf-footer {
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 18px;
        }

        .nf-footer-text {
          color: var(--text-dim);
          font-size: 13px;
          letter-spacing: 0.01em;
          opacity: 0;
          transition: opacity 0.6s ease;
        }

        .nf-footer-text.show {
          opacity: 1;
        }

        .nf-home-btn {
          opacity: 0;
          transform: translateY(4px);
          transition: opacity 0.6s ease, transform 0.6s ease;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: transparent;
          color: var(--orange-soft);
          border: 1px solid var(--orange-dim);
          padding: 10px 18px;
          border-radius: 6px;
          font-family: inherit;
          font-size: 13.5px;
          cursor: pointer;
          text-decoration: none;
        }

        .nf-home-btn.show {
          opacity: 1;
          transform: translateY(0);
        }

        .nf-home-btn:hover {
          border-color: var(--orange);
          color: var(--text);
          background: rgba(255, 90, 31, 0.08);
        }

        .nf-home-btn:focus-visible {
          outline: 2px solid var(--orange);
          outline-offset: 3px;
        }

        .nf-home-btn .prompt {
          color: var(--orange);
        }

        @media (max-width: 480px) {
          .nf-body {
            font-size: 12.5px;
            padding: 20px 16px 22px;
          }
          .nf-titlebar-label {
            display: none;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .nf-cursor {
            animation: none;
            opacity: 1;
          }
          .nf-footer-text,
          .nf-home-btn {
            transition: none;
          }
        }
      `}</style>
    </div>
  );
}

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function escapeHtml(s: string) {
  return s.replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

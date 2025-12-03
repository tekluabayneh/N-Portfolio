import React, { useState, useRef, useEffect, type FormEvent } from "react";
import type { CommandPropesType } from "../../types/dataType";

export default function CommandInput({
  onCommand,
  accent,
  fontSize,
}: CommandPropesType) {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef(null);

  useEffect(() => {
    //@ts-expect-error  we do have the input
    inputRef.current?.focus();
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      onCommand(input);
      setHistory((prev) => [...prev, input]);
      setHistoryIndex(-1);
      setInput("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (history.length > 0) {
        const newIndex =
          historyIndex === -1
            ? history.length - 1
            : Math.max(0, historyIndex - 1);
        setHistoryIndex(newIndex);
        setInput(history[newIndex]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex !== -1) {
        const newIndex = historyIndex + 1;
        if (newIndex >= history.length) {
          setHistoryIndex(-1);
          setInput("");
        } else {
          setHistoryIndex(newIndex);
          setInput(history[newIndex]);
        }
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2">
      <span style={{ color: accent.primary }}>➜</span>
      <span className="text-gray-400">~</span>
      <input
        ref={inputRef}
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        className={`flex-1 bg-transparent outline-none text-white ${fontSize}`}
        placeholder="Type 'help' for available commands..."
        autoComplete="off"
        spellCheck="false"
      />
      <div
        className="w-2 h-5 bg-white animate-pulse"
        style={{ backgroundColor: accent.primary }}
      />
    </form>
  );
}

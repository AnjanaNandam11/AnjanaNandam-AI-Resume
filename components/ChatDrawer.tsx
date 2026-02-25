"use client";

import { useChat } from "@ai-sdk/react";
import { useEffect, useRef, useState, FormEvent } from "react";
import { useChatDrawer } from "./ChatProvider";
import { WELCOME_MESSAGE } from "@/lib/constants";

export default function ChatDrawer() {
  const { isOpen, setIsOpen } = useChatDrawer();
  const { messages, sendMessage, status, error } = useChat();
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const isLoading = status === "submitted" || status === "streaming";

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      return () => document.removeEventListener("keydown", handleKeyDown);
    }
  }, [isOpen, setIsOpen]);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed || isLoading) return;
    setInput("");
    sendMessage({ text: trimmed });
  }

  function getMessageText(message: (typeof messages)[number]): string {
    return message.parts
      .filter((part): part is { type: "text"; text: string } => part.type === "text")
      .map((part) => part.text)
      .join("");
  }

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="drawer-backdrop fixed inset-0 z-40"
        onClick={() => setIsOpen(false)}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
        <aside
          className="pointer-events-auto flex w-full max-w-lg flex-col rounded-2xl border border-white/[0.08] bg-[#0a0a0f] shadow-glow-lg animate-scale-in"
          style={{ height: "min(600px, 85vh)" }}
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/[0.06] px-5 py-4 rounded-t-2xl">
            <div>
              <h2 className="text-sm font-semibold text-white">Bloom</h2>
              <p className="text-xs text-muted">Anjana's AI Career Advocate</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="rounded-lg p-2 text-muted transition-colors hover:bg-white/5 hover:text-white"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-5 py-4">
            {/* Welcome message */}
            <div className="chat-message-assistant mb-4">{WELCOME_MESSAGE}</div>

            {/* Conversation */}
            {messages.map((message) => (
              <div
                key={message.id}
                className={`mb-4 ${
                  message.role === "user"
                    ? "chat-message-user"
                    : "chat-message-assistant"
                }`}
              >
                {getMessageText(message)}
              </div>
            ))}

            {/* Error message */}
            {error && (
              <div className="chat-message mb-4 mr-8 bg-red-950/40 text-red-400 text-xs">
                Error: {error.message}
              </div>
            )}

            {/* Typing indicator */}
            {isLoading &&
              messages.length > 0 &&
              messages[messages.length - 1].role === "user" && (
                <div className="chat-message-assistant mb-4 flex items-center gap-1.5">
                  <span className="typing-dot" style={{ animationDelay: "0ms" }} />
                  <span className="typing-dot" style={{ animationDelay: "200ms" }} />
                  <span className="typing-dot" style={{ animationDelay: "400ms" }} />
                </div>
              )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form
            onSubmit={handleSubmit}
            className="border-t border-white/[0.06] px-5 py-4 rounded-b-2xl"
          >
            <div className="flex items-center gap-2 rounded-xl bg-surface px-4 py-2 ring-1 ring-white/[0.06] focus-within:ring-accent/40 transition-all">
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about Anjana's experience..."
                className="flex-1 bg-transparent text-sm text-white placeholder:text-muted/60 outline-none"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="rounded-lg bg-accent p-2 text-white transition-all hover:bg-accent-light disabled:opacity-40 disabled:cursor-not-allowed"
              >
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                  />
                </svg>
              </button>
            </div>
          </form>
        </aside>
      </div>
    </>
  );
}

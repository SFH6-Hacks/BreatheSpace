import { HiXMark, HiChatBubbleLeftRight, HiPaperAirplane } from "react-icons/hi2";

export default function AIChatModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
      <div className="w-full max-w-2xl h-[75vh] bg-base border border-highlight rounded-xl flex flex-col overflow-hidden">

      
        <div className="flex items-center justify-between px-5 py-4 border-b border-highlight bg-dark">
          <div className="flex items-center gap-3">
            <HiChatBubbleLeftRight className="text-primary text-xl" />
            <h2 className="text-primary font-semibold text-lg">
              AI Assistant
            </h2>
          </div>

          <button
            onClick={onClose}
            className="text-muted hover:text-primary transition"
            aria-label="Close"
          >
            <HiXMark className="text-2xl" />
          </button>
        </div>


        <div className="flex-1 p-5 overflow-y-auto text-muted text-sm">
          <p className="opacity-60">
            This AI chat is currently in UI-only mode.
          </p>
        </div>


        <div className="p-4 border-t border-highlight bg-dark">
          <div className="flex items-center gap-3">
            <input
              type="text"
              placeholder="Type a message..."
              disabled
              className="flex-1 bg-base border border-highlight rounded-lg px-4 py-3 text-primary placeholder:text-muted focus:outline-none cursor-not-allowed"
            />
            <button
              disabled
              className="px-4 py-3 bg-primary rounded-lg text-white opacity-60 cursor-not-allowed"
            >
              <HiPaperAirplane className="text-lg" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

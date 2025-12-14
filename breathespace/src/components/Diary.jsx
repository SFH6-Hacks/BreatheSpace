import { useState } from "react";
import { HiXMark } from "react-icons/hi2";

export default function DiaryModal({ isOpen, onClose, onSave }) {
  const [entryText, setEntryText] = useState("");

  if (!isOpen) return null;

  const handleSave = () => {
    if (!entryText.trim()) return;

    const newEntry = {
      id: Date.now(),
      text: entryText.trim(),
      date: new Date().toLocaleString(),
    };

    // Call parent callback
    onSave(newEntry);

    // Clear input
    setEntryText("");
    onClose(); // optionally close modal after save
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
      <div className="w-full max-w-2xl h-[60vh] bg-base border border-highlight rounded-xl flex flex-col overflow-hidden">

        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-highlight bg-dark">
          <h2 className="text-primary font-semibold text-lg">
            📝 New Diary Entry
          </h2>
          <button
            onClick={onClose}
            className="text-muted hover:text-primary transition"
            aria-label="Close"
          >
            <HiXMark className="text-2xl" />
          </button>
        </div>

        {/* Textarea */}
        <div className="flex-1 p-4">
          <textarea
            value={entryText}
            onChange={(e) => setEntryText(e.target.value)}
            placeholder="Write your diary entry..."
            className="w-full h-full p-3 rounded-lg bg-base text-primary border border-highlight focus:outline-none resize-none"
          />
        </div>

        {/* Save Button */}
        <div className="p-4 border-t border-highlight bg-dark">
          <button
            onClick={handleSave}
            className="w-full px-4 py-2 bg-primary hover:bg-primary-hover text-white rounded-lg font-bold transition"
          >
            Save Entry
          </button>
        </div>
      </div>
    </div>
  );
}

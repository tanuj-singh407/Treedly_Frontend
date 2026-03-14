import { Send } from "lucide-react";

export default function InvoiceActions({ handleSubmit }) {

  return (
    <div className="flex justify-end gap-3">

      <button className="px-6 py-2 border rounded">
        Discard
      </button>

      <button
        onClick={handleSubmit}
        className="flex items-center gap-2 bg-teal-600 text-white px-6 py-2 rounded"
      >
        <Send size={16}/> Generate Invoice
      </button>

    </div>
  );
}
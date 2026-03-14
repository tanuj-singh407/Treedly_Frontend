import { CreditCard } from "lucide-react";

export default function PaymentSection({
  toCollect,
  setToCollect,
  pendingAmountToCollect,
  setPendingAmountToCollect
}) {

  return (
    <div className="space-y-4">

      {/* Section Header */}
      <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
        <CreditCard size={18} className="text-teal-600" />
        <h3 className="font-semibold text-slate-800">
          Payment Info
        </h3>
      </div>

      {/* To Collect */}
      <div className="space-y-1">
        <label className="text-xs font-semibold text-slate-500 uppercase">
          To Collect
        </label>

        <select
          value={toCollect}
          onChange={(e) => setToCollect(e.target.value === "true")}
          className="w-full px-4 py-2 rounded-lg border border-slate-200 bg-white
          focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 outline-none transition"
        >
          <option value="false">No</option>
          <option value="true">Yes</option>
        </select>
      </div>

      {/* Pending Amount */}
      {toCollect && (
        <div className="space-y-1">

          <label className="text-xs font-semibold text-slate-500 uppercase">
            Pending Amount To Collect
          </label>

          <div className="flex items-center gap-2">
            <span className="text-slate-400">₹</span>

            <input
              type="number"
              value={pendingAmountToCollect}
              onChange={(e) => setPendingAmountToCollect(e.target.value)}
              placeholder="Enter pending amount"
              className="w-full px-4 py-2 rounded-lg border border-slate-200
              focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 outline-none transition"
            />
          </div>

        </div>
      )}

    </div>
  );
}
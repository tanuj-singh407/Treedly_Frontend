import { Truck } from "lucide-react";

export default function ConsigneeSection({
  consignees,
  consigneeDetails,
  setConsigneeDetails,
  setConsigneeId
}) {

  const updateField = (field, value) => {
    setConsigneeDetails({
      ...consigneeDetails,
      [field]: value
    });
  };

  return (
    <div className="space-y-4">

      {/* Section Header */}
      <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
        <Truck size={18} className="text-teal-600" />
        <h3 className="font-semibold text-slate-800">
          Ship To
        </h3>
      </div>

      {/* Consignee Name */}
      <div className="space-y-1">
        <label className="text-xs font-semibold text-slate-500 uppercase">
          Consignee Name
        </label>
        <input
          list="consignees"
          value={consigneeDetails.name}
          placeholder="Search or enter consignee"
          onChange={(e) => updateField("name", e.target.value)}
          className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 outline-none transition"
        />
      </div>

      {/* Address */}
      <div className="space-y-1">
        <label className="text-xs font-semibold text-slate-500 uppercase">
          Shipping Address
        </label>
        <textarea
          rows="3"
          value={consigneeDetails.address}
          onChange={(e) => updateField("address", e.target.value)}
          placeholder="Full shipping address"
          className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 outline-none resize-none transition"
        />
      </div>

      {/* GSTIN */}
      <div className="space-y-1">
        <label className="text-xs font-semibold text-slate-500 uppercase">
          GSTIN
        </label>
        <input
          value={consigneeDetails.gstin}
          onChange={(e) => updateField("gstin", e.target.value)}
          placeholder="22ABCDE1234F1Z5"
          className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 outline-none transition"
        />
      </div>

      {/* Location Grid */}
      <div className="grid grid-cols-2 gap-3">

        <div className="space-y-1">
          <label className="text-xs font-semibold text-slate-500 uppercase">
            Country
          </label>
          <input
            value={consigneeDetails.country}
            onChange={(e) => updateField("country", e.target.value)}
            placeholder="India"
            className="w-full px-3 py-2 rounded-lg border border-slate-200 focus:border-teal-500 outline-none"
          />
        </div>

        <div className="space-y-1">
          <label className="text-xs font-semibold text-slate-500 uppercase">
            State
          </label>
          <input
            value={consigneeDetails.state}
            onChange={(e) => updateField("state", e.target.value)}
            placeholder="Delhi"
            className="w-full px-3 py-2 rounded-lg border border-slate-200 focus:border-teal-500 outline-none"
          />
        </div>

        <div className="space-y-1">
          <label className="text-xs font-semibold text-slate-500 uppercase">
            City
          </label>
          <input
            value={consigneeDetails.city}
            onChange={(e) => updateField("city", e.target.value)}
            placeholder="New Delhi"
            className="w-full px-3 py-2 rounded-lg border border-slate-200 focus:border-teal-500 outline-none"
          />
        </div>

        <div className="space-y-1">
          <label className="text-xs font-semibold text-slate-500 uppercase">
            Zip Code
          </label>
          <input
            value={consigneeDetails.zipCode}
            onChange={(e) => updateField("zipCode", e.target.value)}
            placeholder="110001"
            className="w-full px-3 py-2 rounded-lg border border-slate-200 focus:border-teal-500 outline-none"
          />
        </div>

      </div>

      {/* Dispatch & Payment */}
      <div className="grid grid-cols-2 gap-3">

        <div className="space-y-1">
          <label className="text-xs font-semibold text-slate-500 uppercase">
            Dispatched By
          </label>
          <input
            value={consigneeDetails.dispatchedBy}
            onChange={(e) => updateField("dispatchedBy", e.target.value)}
            placeholder="Courier / Transport"
            className="w-full px-3 py-2 rounded-lg border border-slate-200 focus:border-teal-500 outline-none"
          />
        </div>

        <div className="space-y-1">
          <label className="text-xs font-semibold text-slate-500 uppercase">
            Payment Terms
          </label>
          <input
            value={consigneeDetails.paymentTerms}
            onChange={(e) => updateField("paymentTerms", e.target.value)}
            placeholder="Net 30 / Advance"
            className="w-full px-3 py-2 rounded-lg border border-slate-200 focus:border-teal-500 outline-none"
          />
        </div>

      </div>

    </div>
  );
}
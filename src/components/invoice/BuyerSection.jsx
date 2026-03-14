import { User } from "lucide-react";

export default function BuyerSection({
  buyers,
  buyerDetails,
  setBuyerDetails,
  setBuyerId
}) {

  const updateField = (field, value) => {
    setBuyerDetails({
      ...buyerDetails,
      [field]: value
    });
  };

  return (
    <div className="space-y-4">

      {/* Section Header */}
      <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
        <User size={18} className="text-teal-600" />
        <h3 className="font-semibold text-slate-800">
          Bill To
        </h3>
      </div>

      {/* Buyer Name */}
      <div className="space-y-1">
        <label className="text-xs font-semibold text-slate-500 uppercase">
          Buyer Name
        </label>
        <input
          list="buyers"
          value={buyerDetails.name}
          placeholder="Search or enter buyer name"
          onChange={(e) => updateField("name", e.target.value)}
          className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 outline-none transition"
        />
      </div>

      {/* Address */}
      <div className="space-y-1">
        <label className="text-xs font-semibold text-slate-500 uppercase">
          Address
        </label>
        <textarea
          rows="3"
          value={buyerDetails.address}
          onChange={(e) => updateField("address", e.target.value)}
          placeholder="Full address"
          className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 outline-none resize-none transition"
        />
      </div>

      {/* GSTIN */}
      <div className="space-y-1">
        <label className="text-xs font-semibold text-slate-500 uppercase">
          GSTIN
        </label>
        <input
          value={buyerDetails.gstin}
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
            value={buyerDetails.country}
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
            value={buyerDetails.state}
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
            value={buyerDetails.city}
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
            value={buyerDetails.zipCode}
            onChange={(e) => updateField("zipCode", e.target.value)}
            placeholder="110001"
            className="w-full px-3 py-2 rounded-lg border border-slate-200 focus:border-teal-500 outline-none"
          />
        </div>

      </div>

      {/* Contact */}
      <div className="grid grid-cols-2 gap-3">

        <div className="space-y-1">
          <label className="text-xs font-semibold text-slate-500 uppercase">
            Contact Person
          </label>
          <input
            value={buyerDetails.contactName}
            onChange={(e) => updateField("contactName", e.target.value)}
            placeholder="John Doe"
            className="w-full px-3 py-2 rounded-lg border border-slate-200 focus:border-teal-500 outline-none"
          />
        </div>

        <div className="space-y-1">
          <label className="text-xs font-semibold text-slate-500 uppercase">
            Email
          </label>
          <input
            value={buyerDetails.email}
            onChange={(e) => updateField("email", e.target.value)}
            placeholder="john@email.com"
            className="w-full px-3 py-2 rounded-lg border border-slate-200 focus:border-teal-500 outline-none"
          />
        </div>

      </div>

    </div>
  );
}
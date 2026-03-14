import ItemRow from "./ItemRow";
import { Plus } from "lucide-react";

export default function ItemsTable({ items, addItem, updateItem, removeItem }) {
  return (
    <div className="space-y-4">

      {/* Header */}
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-slate-800">Line Items</h3>
        <button
          onClick={addItem}
          className="flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition"
        >
          <Plus size={16} />
          Add Item
        </button>
      </div>

      {/* Table */}
      <div className="border border-slate-200 rounded-xl overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 border-b border-slate-200">
            <tr className="text-left text-slate-600">
              <th className="px-3 py-3 font-semibold w-[35%]">Description</th>
              <th className="px-1 py-3 font-semibold w-[15%]">HSN/SAC</th>
              <th className="px-1 py-3 font-semibold w-[10%]">Qty</th>
              <th className="px-1 py-3 font-semibold w-[15%]">Rate</th>
              <th className="px-1 py-3 font-semibold w-[10%]">Discount</th>
              <th className="px-1 py-3 font-semibold w-[10%]">GST</th>
              <th className="px-3 py-3 font-semibold text-right w-[5%]">Action</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-100">
            {items.length === 0 ? (
              <tr>
                <td colSpan="7" className="text-center py-12 text-slate-400 italic">
                  No items added yet. Click "Add Item" to begin.
                </td>
              </tr>
            ) : (
              items.map((item, index) => (
                <ItemRow
                  key={index}
                  item={item}
                  index={index}
                  updateItem={updateItem}
                  removeItem={removeItem}
                />
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
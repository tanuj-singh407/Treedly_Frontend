import { Trash2 } from "lucide-react";

export default function ItemRow({ item, index, updateItem, removeItem }) {

  const gstOptions = [0, 5, 12, 18, 28];
  const discountOptions = [0, 5, 10, 15, 20];

  return (
    <tr className="hover:bg-slate-50 transition-colors">
      <td>
        <input
          value={item.descriptionOfGoods}
          onChange={(e) => updateItem(index, "descriptionOfGoods", e.target.value)}
          placeholder="Service or Product name"
          className="w-full bg-transparent border-b border-transparent focus:border-teal-500 p-1 outline-none px-3"
        />
      </td>

      <td>
        <input
          value={item.hsn_sac}
          onChange={(e) => updateItem(index, "hsn_sac", e.target.value)}
          placeholder="0000"
          className="w-20 bg-transparent border-b border-transparent focus:border-teal-500 p-1 outline-none"
        />
      </td>

      <td>
        <input
          type="number"
          value={item.quantity}
          onChange={(e) => updateItem(index, "quantity", e.target.value)}
          className="w-16 bg-transparent border-b border-transparent focus:border-teal-500 p-1 outline-none"
        />
      </td>

      <td>
        <div className="flex items-center gap-1">
          <span className="text-slate-400">₹</span>
          <input
            type="number"
            value={item.unitPrice}
            onChange={(e) => updateItem(index, "unitPrice", e.target.value)}
            placeholder="0.00"
            className="w-24 bg-transparent border-b border-transparent focus:border-teal-500 p-1 outline-none"
          />
        </div>
      </td>

      <td>
        <select
          value={item.discount}
          onChange={(e) => updateItem(index, "discount", e.target.value)}
          className="w-full bg-transparent border-b border-transparent focus:border-teal-500 p-1 outline-none"
        >
          {discountOptions.map((d) => (
            <option key={d} value={d}>{d}%</option>
          ))}
        </select>
      </td>

      <td>
        <select
          value={item.gstPercentage}
          onChange={(e) => updateItem(index, "gstPercentage", e.target.value)}
          className="w-full bg-transparent border-b border-transparent focus:border-teal-500 p-1 outline-none"
        >
          {gstOptions.map((g) => (
            <option key={g} value={g}>{g}%</option>
          ))}
        </select>
      </td>

      <td className="text-right">
        <button onClick={() => removeItem(index)} className="p-2 px-4 text-slate-400 hover:text-red-500 transition-colors">
          <Trash2 size={16} />
        </button>
      </td>
    </tr>
  );
}
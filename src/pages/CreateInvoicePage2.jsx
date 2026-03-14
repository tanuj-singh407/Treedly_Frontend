import { useEffect, useState } from "react";
import logo from "../assets/treedly-logo.png";
import { Plus, Trash2, FileText, Truck, User, CreditCard, Send } from "lucide-react";
import axios from "axios";
import api from "../api/apiClient";

export default function CreateInvoicePage2() {

    const [buyers, setBuyers] = useState([]);
    const [consignees, setConsignees] = useState([]);

    const [buyerId, setBuyerId] = useState(null);
    const [consigneeId, setConsigneeId] = useState(null);

    const [buyerDetails, setBuyerDetails] = useState({
        name: "",
        address: "",
        gstin: ""
    });

    const [consigneeDetails, setConsigneeDetails] = useState({
        name: "",
        address: "",
        gstin: ""
    });

    useEffect(() => {
        fetchBuyers();
        fetchConsignees();
    }, []);

    const fetchBuyers = async () => {

        const res = await api.get(`/api/Customers/buyers`);
        setBuyers(res.data);
    };

    const fetchConsignees = async () => {
        const res = await api.get(`/api/Customers/consignees`);
        setConsignees(res.data);
    };

    const [items, setItems] = useState([]);
    const [toCollect, setToCollect] = useState(false);
    const [pendingAmountToCollect, setPendingAmountToCollect] = useState("");

    const addItem = () => {
        setItems([
            ...items,
            {
                descriptionOfGoods: "",
                hsn_sac: "",
                quantity: 1,
                unit: "Nos",
                unitPrice: 0,
                gstPercentage: 18,
            },
        ]);
    };

    const removeItem = (index) => {
        setItems(items.filter((_, i) => i !== index));
    };

    const handleSubmit = () => {
        if (toCollect && !pendingAmountToCollect) {
            alert("Pending Amount To Collect is required");
            return;
        }

        const payload = {
            toCollect,
            pendingAmountToCollect: toCollect ? Number(pendingAmountToCollect) : 0,
        };

        console.log(payload);
    };

    const updateItem = (index, field, value) => {
        const updated = [...items];
        updated[index][field] = value;
        setItems(updated);
    };

    return (
        <div className="bg-[#f8fafc] min-h-screen py-10 px-4 sm:px-8">
            <div className="max-w-5xl mx-auto">

                {/* TOP BAR / BREADCRUMB */}
                <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center gap-2 text-slate-500">
                        <FileText size={18} />
                        <span className="text-sm font-medium">Invoices / New Invoice</span>
                    </div>
                    <div className="text-sm text-slate-400">Draft saved at 10:45 AM</div>
                </div>

                <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">

                    {/* HEADER SECTION */}
                    <div className="bg-slate-900 p-8 text-white flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                        <div className="flex items-center gap-5">
                            {/* Logo Container: Added white background and padding to ensure visibility */}
                            <div className="bg-[#0f1e3a] p-3 rounded-xl shadow-inner flex items-center justify-center min-w-15">
                                <img
                                    src={logo}
                                    className="h-12 w-auto object-contain"
                                    alt="Treedly Logo"
                                // If the logo is still hard to see, you can add: 
                                // style={{ filter: 'brightness(1)' }} 
                                />
                            </div>

                            <div>
                                <div className="flex items-center gap-2">
                                    <h2 className="text-2xl font-bold tracking-tight">CodeGo Trendz</h2>
                                    <span className="bg-teal-500/20 text-teal-400 text-[10px] uppercase px-2 py-0.5 rounded border border-teal-500/30">Verified</span>
                                </div>
                                <div className="flex flex-col text-slate-400 text-xs mt-1">
                                    <span>123 Tech Street, Code Land</span>
                                    <span className="font-mono text-teal-500/80">GSTIN: 27ABCDG1234H1Z3</span>
                                </div>
                            </div>
                        </div>

                        <div className="text-right border-l border-slate-700 pl-6 hidden md:block">
                            <h1 className="text-3xl font-light uppercase tracking-[0.2em] text-slate-400">Invoice</h1>
                            <div className="flex items-center justify-end gap-2 mt-1">
                                <span className="text-xs text-slate-500 uppercase font-bold">Number</span>
                                <p className="text-teal-500 font-mono font-bold">#INV-2026-001</p>
                            </div>
                        </div>
                    </div>

                    <div className="p-8 space-y-10">

                        {/* PARTIES SECTION */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
                                    <User size={18} className="text-teal-600" />
                                    <h3 className="font-semibold text-slate-800">Bill To</h3>
                                </div>
                                <div className="space-y-3">
                                    <input
                                        list="buyers"
                                        placeholder="Search Buyer"
                                        value={buyerDetails.name}
                                        onChange={(e) => {
                                            const name = e.target.value;

                                            const selected = buyers.find(b => b.name === name);

                                            if (selected) {
                                                setBuyerId(selected.id);

                                                setBuyerDetails({
                                                    name: selected.name,
                                                    address: selected.address,
                                                    gstin: selected.gstin
                                                });
                                            } else {
                                                setBuyerId(null);

                                                setBuyerDetails({
                                                    ...buyerDetails,
                                                    name
                                                });
                                            }
                                        }}
                                        className="w-full px-4 py-2 rounded-lg border border-slate-200"
                                    />

                                    <datalist id="buyers">
                                        {buyers.map(b => (
                                            <option key={b.id} value={b.name} />
                                        ))}
                                    </datalist>

                                    <textarea placeholder="Full Address" rows="3"
                                        className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 outline-none transition-all resize-none"
                                        value={buyerDetails.address}
                                        onChange={(e) =>
                                            setBuyerDetails({
                                                ...buyerDetails,
                                                address: e.target.value
                                            })
                                        }

                                    />
                                    <input placeholder="Buyer GSTIN" className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 outline-none transition-all"
                                        value={buyerDetails.gstin}
                                        onChange={(e) =>
                                            setBuyerDetails({
                                                ...buyerDetails,
                                                gstin: e.target.value
                                            })
                                        }
                                    />
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
                                    <Truck size={18} className="text-teal-600" />
                                    <h3 className="font-semibold text-slate-800">Ship To</h3>
                                </div>
                                <div className="space-y-3">
                                    <input
                                        className="w-full px-4 py-2 rounded-lg border border-slate-200"
                                        list="consignees"
                                        placeholder="Search Consignee"
                                        value={consigneeDetails.name}
                                        onChange={(e) => {
                                            const name = e.target.value;

                                            const selected = consignees.find(c => c.name === name);

                                            if (selected) {
                                                setConsigneeId(selected.id);

                                                setConsigneeDetails({
                                                    name: selected.name,
                                                    address: selected.address,
                                                    gstin: selected.gstin
                                                });
                                            } else {
                                                setConsigneeId(null);

                                                setConsigneeDetails({
                                                    ...consigneeDetails,
                                                    name
                                                });
                                            }
                                        }}
                                    />

                                    <datalist id="consignees">
                                        {consignees.map(c => (
                                            <option key={c.id} value={c.name} />
                                        ))}
                                    </datalist>

                                    <textarea
                                        value={consigneeDetails.address}
                                        onChange={(e) =>
                                            setConsigneeDetails({
                                                ...consigneeDetails,
                                                address: e.target.value
                                            })
                                        }

                                        placeholder="Shipping Address" rows="3" className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 outline-none transition-all resize-none" />

                                    <input
                                        value={consigneeDetails.gstin}
                                        onChange={(e) =>
                                            setConsigneeDetails({
                                                ...consigneeDetails,
                                                gstin: e.target.value
                                            })
                                        }

                                        placeholder="Shipping GSTIN" className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 outline-none transition-all" />
                                </div>
                            </div>
                        </div>

                        {/* ORDER LOGISTICS */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-slate-50 p-4 rounded-xl border border-slate-100">
                            <div className="space-y-1">
                                <label className="text-[10px] uppercase font-bold text-slate-500 ml-1">PO Number</label>
                                <input placeholder="PO-9921" className="w-full px-3 py-2 bg-white rounded-md border border-slate-200 text-sm focus:border-teal-500 outline-none" />
                            </div>
                            <div className="space-y-1">
                                <label className="text-[10px] uppercase font-bold text-slate-500 ml-1">Invoice Date</label>
                                <input type="date" className="w-full px-3 py-2 bg-white rounded-md border border-slate-200 text-sm focus:border-teal-500 outline-none" />
                            </div>
                            <div className="space-y-1">
                                <label className="text-[10px] uppercase font-bold text-slate-500 ml-1">E-Way Bill</label>
                                <input placeholder="Optional" className="w-full px-3 py-2 bg-white rounded-md border border-slate-200 text-sm focus:border-teal-500 outline-none" />
                            </div>
                            <div className="space-y-1">
                                <label className="text-[10px] uppercase font-bold text-slate-500 ml-1">Dispatch Mode</label>
                                <input placeholder="Road / Air" className="w-full px-3 py-2 bg-white rounded-md border border-slate-200 text-sm focus:border-teal-500 outline-none" />
                            </div>
                        </div>

                        {/* ITEMS TABLE */}
                        <div className="space-y-4">
                            <div className="flex justify-between items-end">
                                <h3 className="font-bold text-slate-800 text-lg">Line Items</h3>
                                <button
                                    onClick={addItem}
                                    className="group flex items-center gap-2 bg-teal-50 text-teal-700 px-4 py-2 rounded-lg border border-teal-200 hover:bg-teal-600 hover:text-white transition-all text-sm font-semibold"
                                >
                                    <Plus size={16} className="group-hover:rotate-90 transition-transform" />
                                    Add New Item
                                </button>
                            </div>

                            <div className="border border-slate-200 rounded-xl overflow-hidden shadow-sm">
                                <table className="w-full text-left border-collapse">
                                    <thead className="bg-slate-50 border-b border-slate-200 text-slate-600">
                                        <tr>
                                            <th className="p-4 font-semibold text-xs uppercase tracking-wider w-1/3">Description</th>
                                            <th className="p-4 font-semibold text-xs uppercase tracking-wider">HSN</th>
                                            <th className="p-4 font-semibold text-xs uppercase tracking-wider">Qty</th>
                                            <th className="p-4 font-semibold text-xs uppercase tracking-wider">Rate</th>
                                            <th className="p-4 font-semibold text-xs uppercase tracking-wider text-right">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100">
                                        {items.length === 0 ? (
                                            <tr>
                                                <td colSpan="5" className="p-12 text-center text-slate-400 italic">
                                                    No items added. Click "Add New Item" to start.
                                                </td>
                                            </tr>
                                        ) : (
                                            items.map((item, index) => (
                                                <tr key={index} className="hover:bg-slate-50/50 transition-colors">
                                                    <td className="p-3">
                                                        <input
                                                            value={item.descriptionOfGoods}
                                                            onChange={(e) =>
                                                                updateItem(index, "descriptionOfGoods", e.target.value)
                                                            }
                                                            placeholder="Service or Product name" className="w-full bg-transparent border-b border-transparent focus:border-teal-500 p-1 outline-none" />
                                                    </td>
                                                    <td className="p-3 text-sm">
                                                        <input
                                                            value={item.hsn_sac}
                                                            onChange={(e) =>
                                                                updateItem(index, "hsn_sac", e.target.value)
                                                            }
                                                            placeholder="0000" className="w-20 bg-transparent border-b border-transparent focus:border-teal-500 p-1 outline-none" />
                                                    </td>
                                                    <td className="p-3">
                                                        <input
                                                            value={item.quantity}
                                                            onChange={(e) =>
                                                                updateItem(index, "quantity", e.target.value)
                                                            }
                                                            type="number" defaultValue={1} className="w-16 bg-transparent border-b border-transparent focus:border-teal-500 p-1 outline-none" />
                                                    </td>
                                                    <td className="p-3">
                                                        <div className="flex items-center gap-1">
                                                            <span className="text-slate-400">₹</span>
                                                            <input
                                                                value={item.unitPrice}
                                                                onChange={(e) =>
                                                                    updateItem(index, "unitPrice", e.target.value)
                                                                }
                                                                type="number" placeholder="0.00" className="w-24 bg-transparent border-b border-transparent focus:border-teal-500 p-1 outline-none" />
                                                        </div>
                                                    </td>
                                                    <td className="p-3 text-right">
                                                        <button onClick={() => removeItem(index)} className="p-2 text-slate-400 hover:text-red-500 transition-colors">
                                                            <Trash2 size={18} />
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* TOTALS & SUMMARY */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
                            <div className="space-y-4">
                                <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
                                    <CreditCard size={18} className="text-teal-600" />
                                    <h3 className="font-semibold text-slate-800">Payment Info</h3>
                                </div>
                                <input placeholder="Payment Terms (e.g. Net 30)" className="w-full px-4 py-2 rounded-lg border border-slate-200 text-sm outline-none focus:border-teal-500" />
                                {/* TO COLLECT FIELD */}
                                <div className="space-y-3">

                                    <div className="flex items-center gap-4">
                                        <label className="text-sm font-semibold text-slate-700">
                                            To Collect
                                        </label>

                                        <select
                                            value={toCollect}
                                            onChange={(e) => setToCollect(e.target.value === "true")}
                                            className="px-3 py-2 rounded-lg border border-slate-200 text-sm outline-none focus:border-teal-500"
                                        >
                                            <option value="false">False</option>
                                            <option value="true">True</option>
                                        </select>
                                    </div>

                                    {/* Pending Amount (Only if To Collect = true) */}
                                    {toCollect && (
                                        <div>
                                            <label className="text-xs uppercase font-bold text-slate-500">
                                                Pending Amount To Collect
                                            </label>
                                            <div className="flex items-center gap-1 mt-1">
                                                <span className="text-slate-400">₹</span>
                                                <input
                                                    type="number"
                                                    value={pendingAmountToCollect}
                                                    onChange={(e) => setPendingAmountToCollect(e.target.value)}
                                                    required={toCollect}
                                                    placeholder="Enter pending amount"
                                                    className="w-full px-4 py-2 rounded-lg border border-slate-200 text-sm outline-none focus:border-teal-500"
                                                />
                                            </div>
                                        </div>
                                    )}
                                </div>

                                <textarea placeholder="Notes / Bank Details" className="w-full px-4 py-2 rounded-lg border border-slate-200 text-sm outline-none focus:border-teal-500 h-20" />
                            </div>

                            <div className="bg-slate-50 rounded-2xl p-6 space-y-3">
                                <div className="flex justify-between text-slate-600">
                                    <span>Subtotal</span>
                                    <span className="font-semibold">₹ 0.00</span>
                                </div>
                                <div className="flex justify-between text-slate-600">
                                    <span>Shipping</span>
                                    <input type="number" placeholder="0.00" className="w-20 text-right bg-transparent border-b border-slate-300 focus:border-teal-500 outline-none" />
                                </div>
                                <div className="flex justify-between text-slate-600">
                                    <span>Tax (GST)</span>
                                    <span className="font-semibold">₹ 0.00</span>
                                </div>
                                <div className="h-px bg-slate-200 my-2"></div>
                                <div className="flex justify-between text-slate-900 text-xl font-bold">
                                    <span>Total Amount</span>
                                    <span className="text-teal-700">₹ 0.00</span>
                                </div>
                            </div>
                        </div>

                        {/* ACTION BUTTONS */}
                        <div className="flex flex-col sm:flex-row justify-end gap-3 pt-6">
                            <button className="px-8 py-3 rounded-xl font-semibold text-slate-600 hover:bg-slate-100 transition-all border border-slate-200">
                                Discard Draft
                            </button>
                            <button
                                onClick={handleSubmit}
                                className="flex items-center justify-center gap-2 bg-teal-600 text-white px-10 py-3 rounded-xl font-bold shadow-lg shadow-teal-200 hover:bg-teal-700 hover:-translate-y-0.5 transition-all">
                                <Send size={18} />
                                Generate & Save
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
import { useEffect, useState } from "react";
import { FileText } from "lucide-react";
import api from "../api/apiClient";

import InvoiceHeader from "../components/invoice/InvoiceHeader";
import BuyerSection from "../components/invoice/BuyerSection";
import ConsigneeSection from "../components/invoice/ConsigneeSection";
import ItemsTable from "../components/invoice/ItemsTable";
import PaymentSection from "../components/invoice/PaymentSection";
import TotalsSection from "../components/invoice/TotalsSection";
import InvoiceActions from "../components/invoice/InvoiceActions";

export default function CreateInvoicePage() {

    const [buyers, setBuyers] = useState([]);
    const [consignees, setConsignees] = useState([]);

    const [buyerId, setBuyerId] = useState(null);
    const [consigneeId, setConsigneeId] = useState(null);

    const [buyerDetails, setBuyerDetails] = useState({
        name: "", address: "",
        gstin: "", country: "",
        state: "", city: "",
        zipCode: "", contactName: "",
        email: ""
    });

    const [consigneeDetails, setConsigneeDetails] = useState({
        name: "", address: "", gstin: "",
        country: "", state: "", city: "",
        zipCode: "", dispatchedBy: "", paymentTerms: ""
    });

    const [items, setItems] = useState([]);

    const [toCollect, setToCollect] = useState(false);
    const [pendingAmountToCollect, setPendingAmountToCollect] = useState("");

    /* ---------------- FETCH DATA ---------------- */

    useEffect(() => {
        fetchBuyers();
        fetchConsignees();
    }, []);

    const fetchBuyers = async () => {
        try {
            const res = await api.get("/api/Customers/buyers");
            setBuyers(res.data);
        } catch (err) {
            console.error(err);
        }
    };

    const fetchConsignees = async () => {
        try {
            const res = await api.get("/api/Customers/consignees");
            setConsignees(res.data);
        } catch (err) {
            console.error(err);
        }
    };

    /* ---------------- ITEMS ---------------- */

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
                discount: 0 // ✅ add discount field
            }
        ]);
    };

    const updateItem = (index, field, value) => {
        const updated = [...items];
        updated[index][field] = value;
        setItems(updated);
    };

    const removeItem = (index) => {
        setItems(items.filter((_, i) => i !== index));
    };

    /* ---------------- SUBMIT ---------------- */

    /* ---------------- SUBMIT ---------------- */

    const handleSubmit = async () => {
        if (toCollect && !pendingAmountToCollect) {
            alert("Pending Amount To Collect is required");
            return;
        }

        // Construct payload matching backend API
        const payload = {
            companyProfileId: 0, // replace with actual company ID if needed
            customerId: buyerId || 0,
            consigneeDetailsId: consigneeId || 0,
            consignee: { ...consigneeDetails },
            buyerDetailsId: buyerId || 0,
            buyer: { ...buyerDetails },
            poNumber: "",         // Add PO Number state if needed
            poDate: new Date().toISOString(),
            eWayBillNumber: "",   // Add eWayBillNumber state if needed
            dispatchedBy: consigneeDetails.dispatchedBy || "",
            paymentTerms: consigneeDetails.paymentTerms || "",
            shippingCharges: 0,   // optional
            toCollect: Boolean(toCollect),
            pendingAmountToCollect: toCollect
                ? Number(pendingAmountToCollect)
                : 0,
            items: items.map(item => ({
                productId: 0, // replace if you have product IDs
                descriptionOfGoods: item.descriptionOfGoods,
                hsn_SAC: item.hsn_sac,
                quantity: Number(item.quantity),
                unit: item.unit || "Nos",
                unitPrice: Number(item.unitPrice),
                discount: Number(item.discount || 0),
                gstPercentage: Number(item.gstPercentage || 0)
            }))
        };

        try {
            await api.post("/api/Invoices", payload);
            alert("Invoice Created Successfully");
            // Optionally clear form or navigate
        } catch (error) {
            console.error(error);
            alert("Failed to create invoice");
        }
    };

    /* ---------------- UI ---------------- */

    return (
        <div className="bg-[#f8fafc] min-h-screen py-10 px-4 sm:px-8">

            <div className="max-w-5xl mx-auto">

                {/* Breadcrumb */}

                <div className="flex justify-between items-center mb-6">

                    <div className="flex items-center gap-2 text-slate-500">
                        <FileText size={18} />
                        <span className="text-sm font-medium">
                            Invoices / New Invoice
                        </span>
                    </div>

                    <div className="text-sm text-slate-400">
                        Draft saved
                    </div>

                </div>

                {/* Invoice Card */}

                <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">

                    <InvoiceHeader />

                    <div className="p-8 space-y-10">

                        {/* Buyer + Consignee */}

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                            <BuyerSection
                                buyers={buyers}
                                buyerDetails={buyerDetails}
                                setBuyerDetails={setBuyerDetails}
                                setBuyerId={setBuyerId}
                            />

                            <ConsigneeSection
                                consignees={consignees}
                                consigneeDetails={consigneeDetails}
                                setConsigneeDetails={setConsigneeDetails}
                                setConsigneeId={setConsigneeId}
                            />

                        </div>

                        {/* Items */}

                        <ItemsTable
                            items={items}
                            addItem={addItem}
                            updateItem={updateItem}
                            removeItem={removeItem}
                        />

                        {/* Payment + Totals */}

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                            <PaymentSection
                                toCollect={toCollect}
                                setToCollect={setToCollect}
                                pendingAmountToCollect={pendingAmountToCollect}
                                setPendingAmountToCollect={setPendingAmountToCollect}
                            />

                            <TotalsSection items={items} />

                        </div>

                        {/* Actions */}

                        <InvoiceActions handleSubmit={handleSubmit} />

                    </div>

                </div>

            </div>

        </div>
    );
}
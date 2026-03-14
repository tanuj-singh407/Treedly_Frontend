export default function OrderLogistics({
  poNumber,
  setPoNumber,
  poDate,
  setPoDate,
  eWayBillNumber,
  setEWayBillNumber,
  dispatchedBy,
  setDispatchedBy,
  shippingCharges,
  setShippingCharges
}) {

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

      <input
        placeholder="PO Number"
        value={poNumber}
        onChange={(e)=>setPoNumber(e.target.value)}
        className="border px-3 py-2 rounded"
      />

      <input
        type="date"
        value={poDate}
        onChange={(e)=>setPoDate(e.target.value)}
        className="border px-3 py-2 rounded"
      />

      <input
        placeholder="E-Way Bill"
        value={eWayBillNumber}
        onChange={(e)=>setEWayBillNumber(e.target.value)}
        className="border px-3 py-2 rounded"
      />

      <input
        placeholder="Dispatched By"
        value={dispatchedBy}
        onChange={(e)=>setDispatchedBy(e.target.value)}
        className="border px-3 py-2 rounded"
      />

      <input
        type="number"
        placeholder="Shipping Charges"
        value={shippingCharges}
        onChange={(e)=>setShippingCharges(e.target.value)}
        className="border px-3 py-2 rounded"
      />

    </div>
  );
}
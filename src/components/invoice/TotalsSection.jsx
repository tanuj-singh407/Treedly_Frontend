export default function TotalsSection() {

  return (
    <div className="bg-slate-50 p-6 rounded">

      <div className="flex justify-between">
        <span>Subtotal</span>
        <span>₹0.00</span>
      </div>

      <div className="flex justify-between">
        <span>Tax</span>
        <span>₹0.00</span>
      </div>

      <div className="flex justify-between font-bold">
        <span>Total</span>
        <span>₹0.00</span>
      </div>

    </div>
  );
}
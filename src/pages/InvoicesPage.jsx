import { useNavigate } from "react-router-dom";

export default function InvoicesPage() {

  const navigate = useNavigate();

  return (
    <div>

      <h1 className="text-2xl font-bold mb-6">Invoices</h1>

      <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center bg-white">

        <p className="text-gray-500 mb-4">
          No invoices found
        </p>

        <button
          onClick={() => navigate("/invoices/create")}
          className="bg-teal-500 text-white px-4 py-2 rounded"
        >
          Create Invoice
        </button>

      </div>

    </div>
  );
}
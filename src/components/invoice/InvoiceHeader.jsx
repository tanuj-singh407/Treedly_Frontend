import logo from "../../assets/treedly-logo.png";

export default function InvoiceHeader() {
  return (
    <div className="bg-slate-900 p-8 text-white flex justify-between items-center">
      <div className="flex items-center gap-5">
        <div className="bg-[#0f1e3a] p-3 rounded-xl">
          <img src={logo} className="h-12" />
        </div>

        <div>
          <h2 className="text-2xl font-bold">CodeGo Trendz</h2>
          <p className="text-xs text-slate-400">
            123 Tech Street, Code Land
          </p>
        </div>
      </div>

      <div className="text-right">
        <h1 className="text-3xl tracking-widest text-slate-400">
          INVOICE
        </h1>
        <p className="text-teal-400 font-mono">#INV-2026-001</p>
      </div>
    </div>
  );
}
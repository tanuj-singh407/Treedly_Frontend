import logo from "../../assets/treedly-logo.png"

export default function LeftPanel() {
  return (
    <div className="w-1/2 relative overflow-hidden bg-linear-to-r from-[#081c3a] via-[#0c2c5a] to-[#0b3c60] text-white p-16 flex flex-col justify-between">

      <div className="absolute -top-20 -left-20 w-72 h-72 bg-teal-400 opacity-20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-green-400 opacity-20 blur-3xl rounded-full"></div>

      <div className="relative z-10">
        <img src={logo} alt="Treedly Logo" className="w-56" />
      </div>

      <div className="relative z-10 max-w-xl">
        <h1 className="text-5xl font-bold leading-tight">
          Focus on{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-teal-300 to-green-400">
            Growth
          </span>
          <br />
          Not Paperwork.
        </h1>

        <p className="mt-6 text-gray-300 text-lg">
          Launch your startup without GST stress. Treedly automates your
          compliance, invoicing and financial insights so you can focus on
          building your business.
        </p>
      </div>

      <div className="relative z-10 space-y-5">

        <div className="flex gap-4 items-start bg-white/5 p-4 rounded-xl backdrop-blur-md">
          <div className="text-teal-400 text-xl">✔</div>
          <div>
            <p className="font-semibold">Stress-Free Compliance</p>
            <p className="text-gray-300 text-sm">
              Automated filing workflows and audit ready reports.
            </p>
          </div>
        </div>

        <div className="flex gap-4 items-start bg-white/5 p-4 rounded-xl backdrop-blur-md">
          <div className="text-green-400 text-xl">⚡</div>
          <div>
            <p className="font-semibold">Startup Ready</p>
            <p className="text-gray-300 text-sm">
              AI powered invoice scanning and instant billing.
            </p>
          </div>
        </div>

        <div className="flex gap-4 items-start bg-white/5 p-4 rounded-xl backdrop-blur-md">
          <div className="text-teal-400 text-xl">📊</div>
          <div>
            <p className="font-semibold">Business Intelligence</p>
            <p className="text-gray-300 text-sm">
              Track tax liabilities, revenue and cashflow in real time.
            </p>
          </div>
        </div>

      </div>

    </div>
  );
}
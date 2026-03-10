import { NavLink } from "react-router-dom";
import logo from "../../assets/treedly-logo.png"
import { motion } from "framer-motion";
import { LogOut } from "lucide-react"; // optional icon library

export default function Sidebar() {

  const baseStyle =
    "flex items-center gap-3 px-4 py-3 rounded-lg transition";

  const loggingOut = () => {
    localStorage.removeItem("token")
  }

  return (
    <div className="w-64 h-screen bg-[#0f1e3a] text-white flex flex-col">

      {/* Logo */}
      <div className="flex justify-center items-center p-6 border-b border-gray-700">
        <img src={logo} alt="Treedly Logo" className="h-12 object-contain" />
      </div>

      {/* Menu */}
      <div className="flex flex-col p-4 gap-2">

        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `${baseStyle} ${isActive ? "bg-teal-500" : "hover:bg-teal-600"}`
          }
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/invoices"
          className={({ isActive }) =>
            `${baseStyle} ${isActive ? "bg-teal-500" : "hover:bg-teal-600"}`
          }
        >
          Invoices
        </NavLink>

        <NavLink
          to="/estimates"
          className={({ isActive }) =>
            `${baseStyle} ${isActive ? "bg-teal-500" : "hover:bg-teal-600"}`
          }
        >
          Estimates
        </NavLink>

        <NavLink
          to="/purchases"
          className={({ isActive }) =>
            `${baseStyle} ${isActive ? "bg-teal-500" : "hover:bg-teal-600"}`
          }
        >
          Purchases
        </NavLink>

        <NavLink
          to="/scan"
          className={({ isActive }) =>
            `${baseStyle} ${isActive ? "bg-teal-500" : "hover:bg-teal-600"}`
          }
        >
          Scan Bill
        </NavLink>

        <NavLink
          to="/gst"
          className={({ isActive }) =>
            `${baseStyle} ${isActive ? "bg-teal-500" : "hover:bg-teal-600"}`
          }
        >
          GST Filing
        </NavLink>

        <NavLink
          to="/profile"
          className={({ isActive }) => `${baseStyle} ${isActive ? "bg-teal-500" : "hover:bg-teal-600"}`}>
          Profile
        </NavLink>

      </div>

      {/* Bottom User */}
      <div className="mt-auto p-4 border-t border-gray-700">

        {/* User Info */}
        <div className="flex items-center gap-3 mb-3">

          <img
            src="https://i.pravatar.cc/100"
            alt="user"
            className="w-10 h-10 rounded-full border border-gray-500"
          />

          <div>
            <p className="text-sm font-semibold text-white">John Doe</p>
            <p className="text-xs text-gray-400">Admin</p>
          </div>

        </div>

        {/* Logout Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={loggingOut}
          className="flex items-center justify-center gap-2 w-full py-2 rounded-lg 
               bg-red-500/10 text-red-400 hover:bg-red-500/20 
               transition cursor-pointer"
        >
          <LogOut size={18} />
          Logout
        </motion.button>

      </div>

    </div>
  );
}
import { useState } from "react";
import { motion } from "framer-motion";
import LeftPanel from "../components/login_components/LeftPanel";
import RightPanel from "../components/login_components/RightPanel";

export default function LoginPage() {
  const [mode, setMode] = useState("login");
  const isLogin = mode === "login";

  return (
    <div className="min-h-screen flex bg-white overflow-hidden">
      <LeftPanel />

      {/* Perspective Container */}
      <div className="w-1/2 flex items-center justify-center bg-gray-50" style={{ perspective: "1200px" }}>
        
        <motion.div
          animate={{ rotateY: isLogin ? 0 : 180 }}
          transition={{ type: "spring", stiffness: 50, damping: 15 }}
          style={{ transformStyle: "preserve-3d" }}
          className="relative w-full max-w-md h-[600px]" 
        >
          {/* FRONT SIDE: LOGIN */}
          <div 
            className="absolute inset-0 w-full h-full bg-white p-8 shadow-xl rounded-2xl border border-gray-100"
            style={{ backfaceVisibility: "hidden" }}
          >
            <RightPanel mode="login" setMode={setMode} />
          </div>

          {/* BACK SIDE: REGISTER */}
          <div 
            className="absolute inset-0 w-full h-full bg-white p-8 shadow-xl rounded-2xl border border-gray-100"
            style={{ 
              backfaceVisibility: "hidden", 
              transform: "rotateY(180deg)" 
            }}
          >
            <RightPanel mode="register" setMode={setMode} />
          </div>
          
        </motion.div>
      </div>
    </div>
  );
}
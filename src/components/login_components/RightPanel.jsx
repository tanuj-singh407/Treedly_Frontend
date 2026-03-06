export default function RightPanel({ mode, setMode }) {
  const isLogin = mode === "login";

  return (
    <div className="flex flex-col h-full justify-center">
      <h2 className="text-3xl font-bold text-gray-800">
        {isLogin ? "Welcome back" : "Create Account"}
      </h2>

      <p className="text-gray-500 mt-2 mb-6 text-sm">
        {isLogin ? "New to Treedly? " : "Already have an account? "}
        <button 
          className="text-teal-600 font-semibold hover:underline cursor-pointer"
          onClick={() => setMode(isLogin ? "register" : "login")}
        >
          {isLogin ? "Join our community" : "Sign in here"}
        </button>
      </p>

      <div className="space-y-4">
        {!isLogin && (
          <>
            <input type="text" placeholder="Full Name" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-teal-400 outline-none bg-gray-50" />
            <div className="flex gap-2">
              <input type="text" placeholder="Username" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-teal-400 outline-none bg-gray-50" />
              <input type="text" placeholder="Mobile" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-teal-400 outline-none bg-gray-50" />
            </div>
          </>
        )}
        <input type="email" placeholder="Email" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-teal-400 outline-none bg-gray-50" />
        <input type="password" placeholder="Password" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-teal-400 outline-none bg-gray-50" />
      </div>

      {isLogin && (
        <div className="flex justify-between items-center text-xs my-4">
          <label className="flex items-center gap-2"><input type="checkbox" /> Stay secure</label>
          <span className="text-teal-600 cursor-pointer">Forgot password?</span>
        </div>
      )}

      <button className="w-full mt-6 bg-linear-to-r from-teal-500 to-green-500 text-white py-3 rounded-lg font-bold shadow-lg shadow-teal-500/20 hover:scale-[1.02] transition-transform cursor-pointer">
        {isLogin ? "Sign in →" : "Register Account"}
      </button>

      <p className="text-center text-[10px] text-gray-400 mt-8 tracking-widest uppercase">
        Trusted by Modern Startups
      </p>
    </div>
  );
}
import { useState } from "react";
import RegisterForm from "./RegisterForm";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

export default function RightPanel({ mode, setMode }) {
  const isLogin = mode === "login";
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    fullName: "",
    mobileNumber: "",
    businessName: "",
    city: "",
    billingRequirement: "",
    majorCustomers: "",
    preferredLanguage: "",
  });

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  const navigate = useNavigate()

  const userRegisteration = async () => {
    try {

      if (isLogin) {
        // LOGIN VALIDATION
        if (!formData.username || !formData.password) {
          toast.error("Username and Password are required");
          return;
        }

        const payload = {
          username: formData.username,
          password: formData.password,
        };

        const response = await axios.post(`${API_BASE_URL}/api/Auth/login`, payload);

        toast.success("Login successful");

        localStorage.setItem("token", response.data.token);
        
        navigate("/invoices");

      } else {

        // REGISTER VALIDATION
        for (const key in formData) {
          if (!formData[key]) {
            toast.error(`${key} is required`);
            return;
          }
        }

        const response = await axios.post(`${API_BASE_URL}/api/Auth/register`, formData);

        toast.success("Registration successful!");
        console.log(response.data);

        // reset form
        setFormData({
          username: "",
          email: "",
          password: "",
          fullName: "",
          mobileNumber: "",
          businessName: "",
          city: "",
          billingRequirement: "",
          majorCustomers: "",
          preferredLanguage: "",
        });
      }

    } catch (error) {
      if (error.response?.data) {
        toast.error(error.response.data);
      } else {
        toast.error("Something went wrong");
      }
    }
  };


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

      {isLogin ? (
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Username"
            className="input"
            value={formData.username}
            onChange={(e) =>
              setFormData({ ...formData, username: e.target.value })
            }
          />

          <input
            type="password"
            placeholder="Password"
            className="input"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />
        </div>
      ) : (
        <RegisterForm formData={formData} setFormData={setFormData} />
      )}

      {isLogin && (
        <div className="flex justify-between items-center text-xs my-4">
          <label className="flex items-center gap-2">
            <input type="checkbox" /> Stay secure
          </label>
          <span className="text-teal-600 cursor-pointer">
            Forgot password?
          </span>
        </div>
      )}

      <button
        onClick={userRegisteration}
        className="w-full mt-6 bg-linear-to-r from-teal-500 to-green-500 text-white py-3 rounded-lg font-bold shadow-lg shadow-teal-500/20 hover:scale-[1.02] transition-transform cursor-pointer"
      >
        {isLogin ? "Sign in →" : "Register Account"}
      </button>
    </div>
  );
}
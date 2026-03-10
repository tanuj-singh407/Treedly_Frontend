import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import ProfileCard from "../components/profile/ProfileCard";
import CompanyProfileCard from "../components/profile/CompanyProfileCard";
import { toast } from "react-toastify";

export default function ProfilePage() {

  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    fetchProfile();
    console.log(import.meta.env.VITE_API_BASE_URL,"import.meta.env.VITE_API_BASE_URL")
  }, []);
  const fetchProfile = async () => {
    try {

      const token = localStorage.getItem("token");

      const res = await axios.get(
        `${import.meta.env.VITE_API_BASE_URL}/api/Auth/profile`,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
      console.log(res, "resres")
      // setProfile(res.data);
      // setLoading(false);

    } catch (error) {

      toast.error("Failed to load profile");
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-full">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1 }}
          className="w-10 h-10 border-4 border-teal-500 border-t-transparent rounded-full"
        />
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="p-6 space-y-6"
    >

      <h1 className="text-2xl font-bold text-gray-800">
        Profile
      </h1>

      <ProfileCard user={profile} />

      <CompanyProfileCard company={profile.companyProfile} />

    </motion.div>
  );
}
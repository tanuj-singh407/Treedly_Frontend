import { motion } from "framer-motion";

export default function ProfileCard({ user }) {

  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      className="bg-white shadow-md rounded-xl p-6 flex items-center gap-6"
    >

      <img
        src={user.profilePictureUrl || "https://i.pravatar.cc/150"}
        alt="profile"
        className="w-24 h-24 rounded-full object-cover border"
      />

      <div className="grid grid-cols-2 gap-x-10 gap-y-3">

        <div>
          <p className="text-gray-500 text-sm">Full Name</p>
          <p className="font-semibold">{user.fullName}</p>
        </div>

        <div>
          <p className="text-gray-500 text-sm">Username</p>
          <p className="font-semibold">{user.username}</p>
        </div>

        <div>
          <p className="text-gray-500 text-sm">Email</p>
          <p className="font-semibold">{user.email}</p>
        </div>

        <div>
          <p className="text-gray-500 text-sm">Mobile</p>
          <p className="font-semibold">{user.mobileNumber}</p>
        </div>

        <div>
          <p className="text-gray-500 text-sm">Role</p>
          <p className="font-semibold">{user.roles?.join(", ")}</p>
        </div>

      </div>

    </motion.div>
  );
}
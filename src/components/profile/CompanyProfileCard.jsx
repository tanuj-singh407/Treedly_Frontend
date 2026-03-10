import { motion } from "framer-motion";

export default function CompanyProfileCard({ company }) {

  const field = (label, value) => (
    <div>
      <p className="text-gray-500 text-sm">{label}</p>
      <p className="font-medium">{value || "-"}</p>
    </div>
  );

  if (!company) return null;

  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      className="bg-white shadow-md rounded-xl p-6"
    >

      <div className="flex items-center gap-4 mb-6">

        <img
          src={company.logoUrl || "https://via.placeholder.com/100"}
          alt="logo"
          className="w-16 h-16 rounded object-cover border"
        />

        <div>
          <h2 className="text-lg font-bold">
            {company.businessName}
          </h2>
          <p className="text-sm text-gray-500">
            Company Profile
          </p>
        </div>

      </div>

      <div className="grid grid-cols-3 gap-5">

        {field("Address", company.address)}
        {field("City", company.city)}
        {field("GSTIN", company.gstin)}
        {field("MSME", company.msme)}
        {field("Email", company.email)}
        {field("Phone", company.phone)}
        {field("Billing Requirement", company.billingRequirement)}
        {field("Major Customers", company.majorCustomers)}
        {field("Preferred Language", company.preferredLanguage)}
        {field("Bank Name", company.bankName)}
        {field("IFSC", company.ifsc)}
        {field("Account No", company.accountNo)}

      </div>

      <div className="mt-6 space-y-3">

        <div>
          <p className="text-gray-500 text-sm">Conditions</p>
          <p>{company.conditions}</p>
        </div>

        <div>
          <p className="text-gray-500 text-sm">Declaration</p>
          <p>{company.declaration}</p>
        </div>

      </div>

    </motion.div>
  );
}
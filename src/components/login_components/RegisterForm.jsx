import React from "react";

export default function RegisterForm({ formData, setFormData }) {
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="space-y-3 max-w-xl mx-5">
      {/* Full Name */}
      <input
        name="fullName"
        placeholder="Full Name"
        value={formData.fullName}
        onChange={handleChange}
        className="input py-2.5"
      />

      {/* Username & Business Name */}
      <div className="flex gap-3">
        <input
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          className="input py-2.5"
        />
        <input
          name="businessName"
          placeholder="Business Name"
          value={formData.businessName}
          onChange={handleChange}
          className="input py-2.5"
        />
      </div>

      {/* Email & Mobile Number */}
      <div className="flex gap-3">
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="input py-2.5"
        />
        <input
          name="mobileNumber"
          placeholder="Mobile Number"
          value={formData.mobileNumber}
          onChange={handleChange}
          className="input py-2.5"
        />
      </div>

      {/* Password */}
      <input
        name="password"
        type="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        className="input py-2.5"
      />

      {/* City & Preferred Language */}
      <div className="flex gap-3">
        <input
          name="city"
          placeholder="City"
          value={formData.city}
          onChange={handleChange}
          className="input py-2.5"
        />

        <select
          name="preferredLanguage"
          value={formData.preferredLanguage}
          onChange={handleChange}
          className="input py-2.5 cursor-pointer"
        >
          <option value="">Preferred Language</option>
          <option value="english">English</option>
          <option value="hindi">Hindi</option>
        </select>
      </div>

      {/* Billing Requirement */}
      <div className="space-y-2">
        <p className="text-base font-semibold text-gray-700">
          Select your billing requirement *
        </p>

        <label className="flex items-center justify-between border rounded-xl p-2.5 cursor-pointer hover:border-teal-400 hover:bg-teal-50 transition">
          <span className="text-gray-700 text-sm">Basic Billing on Android App</span>
          <input
            type="radio"
            name="billingRequirement"
            value="androidApp"
            checked={formData.billingRequirement === "androidApp"}
            onChange={handleChange}
            className="accent-teal-500 h-4 w-4"
          />
        </label>

        <label className="flex items-center justify-between border rounded-xl p-2.5 cursor-pointer hover:border-teal-400 hover:bg-teal-50 transition">
          <span className="text-gray-700 text-sm">
            Billing, Stock Keeping, Collections on Laptop & App
          </span>
          <input
            type="radio"
            name="billingRequirement"
            value="laptopApp"
            checked={formData.billingRequirement === "laptopApp"}
            onChange={handleChange}
            className="accent-teal-500 h-4 w-4"
          />
        </label>
      </div>

      {/* Major Customers */}
      <div className="space-y-2">
        <p className="text-base font-semibold text-gray-700">
          Who are your major customers? *
        </p>

        <label className="flex items-center justify-between border rounded-xl p-2.5 cursor-pointer hover:border-teal-400 hover:bg-teal-50 transition">
          <span className="text-gray-700 text-sm">Retail Customers</span>
          <input
            type="radio"
            name="majorCustomers"
            value="retail"
            checked={formData.majorCustomers === "retail"}
            onChange={handleChange}
            className="accent-teal-500 h-4 w-4"
          />
        </label>

        <label className="flex items-center justify-between border rounded-xl p-2.5 cursor-pointer hover:border-teal-400 hover:bg-teal-50 transition">
          <span className="text-gray-700 text-sm">Distributors / Wholesalers</span>
          <input
            type="radio"
            name="majorCustomers"
            value="distributors"
            checked={formData.majorCustomers === "distributors"}
            onChange={handleChange}
            className="accent-teal-500 h-4 w-4"
          />
        </label>
      </div>
    </div>
  );
}
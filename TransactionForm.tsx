// src/components/TransactionForm.tsx

"use client";

import { useState } from "react";

export default function TransactionForm() {
  const [form, setForm] = useState({
    description: "",
    amount: "",
    date: "",
    category: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/transactions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      setForm({ description: "", amount: "", date: "", category: "" });
    } else {
      alert("Failed to add transaction");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 max-w-md w-full"
    >
      <input
        type="text"
        name="description"
        value={form.description}
        onChange={handleChange}
        placeholder="Description"
        required
        className="p-2 border rounded"
      />
      <input
        type="number"
        name="amount"
        value={form.amount}
        onChange={handleChange}
        placeholder="Amount"
        required
        className="p-2 border rounded"
      />
      <input
        type="date"
        name="date"
        value={form.date}
        onChange={handleChange}
        required
        className="p-2 border rounded"
      />
      <select
        name="category"
        value={form.category}
        onChange={(e) => setForm({ ...form, category: e.target.value })}
        required
        className="p-2 border rounded"
     >
        <option value="">Select Category</option>
        <option value="Food">Food</option>
        <option value="Rent">Rent</option>
        <option value="Travel">Travel</option>
        <option value="Shopping">Shopping</option>
        <option value="Utilities">Utilities</option>
      </select>

      <button
        type="submit"
        className="bg-black text-white py-2 px-4 rounded hover:bg-gray-800"
      >
        Add Transaction
      </button>
    </form>
  );
}

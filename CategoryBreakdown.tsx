"use client";

import { useEffect, useState } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#845EC2", "#D65DB1"];

export default function CategoryBreakdown() {
  const [data, setData] = useState<{ name: string; value: number }[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/transactions");
      const transactions = await res.json();

      if (Array.isArray(transactions)) {
        const categoryTotals: { [key: string]: number } = {};

        transactions.forEach((tx: any) => {
          if (tx.category) {
            categoryTotals[tx.category] = (categoryTotals[tx.category] || 0) + tx.amount;
          }
        });

        const chartData = Object.entries(categoryTotals).map(([name, value]) => ({
          name,
          value,
        }));

        setData(chartData);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Spending by Category</h2>
      <PieChart width={400} height={300}>
        <Pie
          dataKey="value"
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={100}
          fill="#8884d8"
          label
        >
          {data.map((_, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
}

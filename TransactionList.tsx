'use client';

import React, { useEffect, useState } from 'react';

type Transaction = {
  _id: string;
  title: string;
  amount: number;
  category: string;
  date: string;
};

const TransactionList = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/transactions');
        const data = await res.json();

        if (Array.isArray(data)) {
          setTransactions(data);
        } else {
          console.warn('Unexpected data format:', data);
          setTransactions([]);
        }
      } catch (err) {
        console.error('Error fetching transactions:', err);
        setError('Failed to load transactions.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p className="text-gray-600">Loading transactions...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="p-4">
      {transactions.length === 0 ? (
        <p className="text-gray-500">No transactions found.</p>
      ) : (
        <ul className="space-y-2">
          {transactions.map((txn) => (
            <li
              key={txn._id}
              className="bg-white shadow rounded-xl p-4 flex justify-between items-center"
            >
              <div>
                <p className="font-medium">{txn.title}</p>
                <p className="text-sm text-gray-500">{new Date(txn.date).toLocaleDateString()}</p>
              </div>
              <div className="text-right">
                <p className="font-semibold text-green-600">₹{txn.amount.toFixed(2)}</p>
                <p className="text-xs text-gray-400">{txn.category}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TransactionList;

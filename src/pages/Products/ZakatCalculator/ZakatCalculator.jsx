import React, { useState } from "react";
import Navbar from "../../../components/Navbar";

const ZakatCalculator = () => {
  const [cashSavings, setCashSavings] = useState("");
  const [goldValue, setGoldValue] = useState("");
  const [investments, setInvestments] = useState("");
  const [liabilities, setLiabilities] = useState("");
  const [zakat, setZakat] = useState(null);

  const nisabGoldValue = 85 * 60; // Approximate value of 85 grams of gold in local currency.

  const calculateZakat = () => {
    const totalAssets =
      parseFloat(cashSavings || 0) +
      parseFloat(goldValue || 0) +
      parseFloat(investments || 0);
    const totalLiabilities = parseFloat(liabilities || 0);

    const zakatableWealth = totalAssets - totalLiabilities;
    if (zakatableWealth >= nisabGoldValue) {
      const zakatAmount = (2.5 / 100) * zakatableWealth;
      setZakat(zakatAmount.toFixed(2));
    } else {
      setZakat(0);
    }
  };

  return (
    <>
    <Navbar />
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg w-full">
        <h1 className="text-3xl font-bold text-center text-teal-600 mb-6">Zakat Calculator</h1>

        {/* Cash and Savings Input */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="cash-savings">
            Cash & Savings:
          </label>
          <input
            type="number"
            id="cash-savings"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-400 outline-none"
            placeholder="Enter your cash & savings amount"
            value={cashSavings}
            onChange={(e) => setCashSavings(e.target.value)}
          />
        </div>

        {/* Gold Value Input */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="gold-value">
            Gold Value:
          </label>
          <input
            type="number"
            id="gold-value"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-400 outline-none"
            placeholder="Enter your gold value"
            value={goldValue}
            onChange={(e) => setGoldValue(e.target.value)}
          />
        </div>

        {/* Investments Input */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="investments">
            Investments:
          </label>
          <input
            type="number"
            id="investments"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-400 outline-none"
            placeholder="Enter your investments amount"
            value={investments}
            onChange={(e) => setInvestments(e.target.value)}
          />
        </div>

        {/* Liabilities Input */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="liabilities">
            Liabilities (debts):
          </label>
          <input
            type="number"
            id="liabilities"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-400 outline-none"
            placeholder="Enter your liabilities"
            value={liabilities}
            onChange={(e) => setLiabilities(e.target.value)}
          />
        </div>

        {/* Calculate Zakat Button */}
        <button
          onClick={calculateZakat}
          className="w-full bg-teal-600 text-white py-3 rounded-lg font-semibold hover:bg-teal-700 transition duration-300"
        >
          Calculate Zakat
        </button>

        {/* Zakat Result */}
        {zakat !== null && (
          <div className="mt-6 text-center">
            <p className="text-xl font-semibold text-teal-600">
              Your Zakat is: {zakat > 0 ? `₦${zakat}` : "You are not eligible to pay Zakat this year."}
            </p>
          </div>
        )}
      </div>
    </div>
    </>
  );
};

export default ZakatCalculator;

"use client";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Cell,
} from "recharts";

interface RevenueChartProps {
  monthlyRevenue: number;
  monthlyCost: number;
  monthlyProfit: number;
}

const formatCurrency = (value: number) =>
  new Intl.NumberFormat("en-IN", {
    notation: "compact",
    maximumFractionDigits: 1,
  }).format(value);

export default function RevenueChart({
  monthlyRevenue,
  monthlyCost,
  monthlyProfit,
}: RevenueChartProps) {
  const data = [
    {
      name: "Revenue",
      value: monthlyRevenue,
      color: "#84cc16",
    },
    {
      name: "Cost",
      value: monthlyCost,
      color: "#f97316",
    },
    {
      name: "Profit",
      value: monthlyProfit,
      color: "#2563eb",
    },
  ];

  return (
    <div className="w-full rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">

      <div className="mb-8">

        <h3 className="text-2xl font-bold text-slate-900">
          Revenue Comparison
        </h3>

        <p className="mt-2 text-slate-500">
          Monthly Revenue vs Electricity Cost vs Profit
        </p>

      </div>

      <div className="h-90 w-full">

        <ResponsiveContainer width="100%" height="100%">

          <BarChart
            data={data}
            margin={{
              top: 20,
              right: 10,
              left: 0,
              bottom: 10,
            }}
          >

            <CartesianGrid
              strokeDasharray="4 4"
              vertical={false}
            />

            <XAxis
              dataKey="name"
              tick={{
                fontSize: 13,
              }}
            />

            <YAxis
              tickFormatter={formatCurrency}
            />

           <Tooltip
  formatter={(value) => {
    const amount =
      typeof value === "number"
        ? value
        : Number(value ?? 0);

    return [`₹${amount.toLocaleString("en-IN")}`, ""];
  }}
/>

            <Bar
              dataKey="value"
              radius={[12, 12, 0, 0]}
            >
              {data.map((entry) => (
                <Cell
                  key={entry.name}
                  fill={entry.color}
                />
              ))}
            </Bar>

          </BarChart>

        </ResponsiveContainer>

      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-3">

        <div className="rounded-2xl bg-lime-50 p-5">

          <div className="mb-3 h-3 w-3 rounded-full bg-lime-500" />

          <p className="text-sm text-slate-500">
            Revenue
          </p>

          <h4 className="mt-2 text-xl font-bold">
            ₹{monthlyRevenue.toLocaleString("en-IN")}
          </h4>

        </div>

        <div className="rounded-2xl bg-orange-50 p-5">

          <div className="mb-3 h-3 w-3 rounded-full bg-orange-500" />

          <p className="text-sm text-slate-500">
            Electricity Cost
          </p>

          <h4 className="mt-2 text-xl font-bold">
            ₹{monthlyCost.toLocaleString("en-IN")}
          </h4>

        </div>

        <div className="rounded-2xl bg-blue-50 p-5">

          <div className="mb-3 h-3 w-3 rounded-full bg-blue-600" />

          <p className="text-sm text-slate-500">
            Profit
          </p>

          <h4 className="mt-2 text-xl font-bold">
            ₹{monthlyProfit.toLocaleString("en-IN")}
          </h4>

        </div>

      </div>

    </div>
  );
}
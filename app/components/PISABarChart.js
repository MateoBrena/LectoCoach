"use client";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "LatAm", value: 55 },
  { name: "Argentina", value: 54.5 },
  { name: "Uruguay", value: 41 },
  { name: "Chile", value: 34 },
  { name: "OCDE", value: 26.3 },
];

export default function PISABarChart() {
  return (
    <div className="w-full h-72 bg-gray-900 rounded-xl p-4">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <XAxis dataKey="name" stroke="#ccc" />
          <YAxis stroke="#ccc" />
          <Tooltip />
          <Bar dataKey="value" fill="#3b82f6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
"use client";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { year: 2012, value: 46 },
  { year: 2015, value: 52 },
  { year: 2018, value: 53 },
  { year: 2022, value: 53 },
];

export default function PISALineChart() {
  return (
    <div className="w-full h-72 bg-gray-900 rounded-xl p-4">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis dataKey="year" stroke="#ccc" />
          <YAxis stroke="#ccc" />
          <Tooltip />
          <Line type="monotone" dataKey="value" stroke="#3b82f6" strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
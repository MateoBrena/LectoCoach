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
  { year: 2006, value: 57.9 },
  { year: 2009, value: 51.6 },
  { year: 2012, value: 53.6 },
  { year: 2018, value: 52.1 },
  { year: 2022, value: 54.5 },
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
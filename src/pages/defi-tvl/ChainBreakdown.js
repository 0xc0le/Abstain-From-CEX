import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';
import { formatShorthand } from '../../utils/currency';

function ChainBreakdown() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get('https://api.llama.fi/v2/chains')
      .then((response) => {
        const sortedChains = response.data.sort((a, b) => b.tvl - a.tvl);
        const topChains = sortedChains.slice(0, 10).map((chain) => ({
          name: chain.name,
          tvl: chain.tvl
        }));
        setData(topChains);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching chains data:', error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading chain breakdown...</p>;

  return (
    <div>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 60 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" angle={-45} textAnchor="end" height={80} />
          <YAxis tickFormatter={formatShorthand} />
          <Tooltip formatter={(value) => formatShorthand(value)} />
          <Legend />
          <Bar dataKey="tvl" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ChainBreakdown;

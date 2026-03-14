import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';
import { useCex } from '../../contexts/CexContext';
import { formatShorthand } from '../../utils/currency';

function TvlChart() {
  const { defiTvl, defiTvl1d, defiTvl7d, loading } = useCex();

  if (loading) return <p>Loading chart...</p>;

  const now = Date.now();
  const data = [
    { time: now - 7 * 24 * 60 * 60 * 1000, date: '7 days ago', tvl: defiTvl7d },
    { time: now - 24 * 60 * 60 * 1000, date: '1 day ago', tvl: defiTvl1d },
    { time: now, date: 'Current', tvl: defiTvl }
  ];

  return (
    <div>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="time"
            type="number"
            domain={['dataMin', 'dataMax']}
            tickFormatter={(tick) => {
              const date = new Date(tick);
              const nowDate = new Date(now);
              const diffDays = Math.round(
                (nowDate - date) / (24 * 60 * 60 * 1000)
              );
              if (diffDays === 0) return 'Current';
              if (diffDays === 1) return '1 day ago';
              if (diffDays === 7) return '7 days ago';
              return `${diffDays} days ago`;
            }}
          />
          <YAxis
            domain={['dataMin', 'dataMax']}
            tickFormatter={formatShorthand}
          />
          <Tooltip
            formatter={(value) => formatShorthand(value)}
            labelFormatter={(label) => {
              const date = new Date(label);
              const nowDate = new Date(now);
              const diffDays = Math.round(
                (nowDate - date) / (24 * 60 * 60 * 1000)
              );
              if (diffDays === 0) return 'Current';
              if (diffDays === 1) return '1 day ago';
              if (diffDays === 7) return '7 days ago';
              return `${diffDays} days ago`;
            }}
          />
          <Legend />
          <Line type="monotone" dataKey="tvl" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default TvlChart;

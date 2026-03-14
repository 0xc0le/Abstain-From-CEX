import React from 'react';
import { useCex } from '../../contexts/CexContext';

function CexComparison() {
  const { defiTvl, cexTvl, loading } = useCex();

  if (loading) return <p>Loading comparison...</p>;

  return (
    <div>
      <p>DeFi TVL: ${defiTvl.toLocaleString()}</p>
      <p>CEX TVL: ${cexTvl.toLocaleString()}</p>
      <p>Ratio: {(defiTvl / cexTvl).toFixed(2)}</p>
    </div>
  );
}

export default CexComparison;

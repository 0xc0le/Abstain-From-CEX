import React from 'react';
import { useCex } from '../contexts/CexContext';
import formatCurrency from '../utils/currency';
import './cexstats.css';

function CexStats() {
  const { cexTvl, loading } = useCex();

  if (loading) {
    return (
      <div className="cexstats-skeleton" aria-busy="true">
        <div className="skeleton-number" />
        <div className="skeleton-line" />
      </div>
    );
  }

  return (
    <div>
      <h1>{formatCurrency(cexTvl)}</h1>
    </div>
  );
}

export default CexStats;

import React from 'react';
import Header from '../../components/header';
import ContentCard from '../../components/ContentCard';
import TvlChart from './TvlChart';
import ChainBreakdown from './ChainBreakdown';
import ProtocolList from './ProtocolList';
import CexComparison from './CexComparison';
import WhyDefiSection from './WhyDefiSection';

function DeFiTvl() {
  return (
    <div className="App">
      <Header />
      <div className="container mt-4">
        <ContentCard title="DeFi TVL Dashboard" className="content-card mb-4">
          <TvlChart />
        </ContentCard>
        <ContentCard title="Chain Breakdown" className="content-card mb-4">
          <ChainBreakdown />
        </ContentCard>
        <ContentCard title="Top Protocols" className="content-card mb-4">
          <ProtocolList />
        </ContentCard>
        <ContentCard title="CEX Comparison" className="content-card mb-4">
          <CexComparison />
        </ContentCard>
        <ContentCard title="Why DeFi?">
          <WhyDefiSection />
        </ContentCard>
      </div>
    </div>
  );
}

export default DeFiTvl;

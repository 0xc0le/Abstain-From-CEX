import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ProtocolList() {
  const [protocols, setProtocols] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get('https://api.llama.fi/protocols')
      .then((response) => {
        const defiProtocols = response.data.filter((item) =>
          ['Dexs', 'Lending', 'Liquid Staking'].includes(item.category)
        );
        const topProtocols = defiProtocols
          .sort((a, b) => b.tvl - a.tvl)
          .slice(0, 10);
        setProtocols(topProtocols);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching protocols:', error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading protocols...</p>;

  return (
    <div>
      <ul>
        {protocols.map((protocol) => (
          <li key={protocol.id}>
            {protocol.name}: ${protocol.tvl.toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProtocolList;

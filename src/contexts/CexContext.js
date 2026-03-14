import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useMemo
} from 'react';
import PropTypes from 'prop-types';

const CexContext = createContext();

export const useCex = () => useContext(CexContext);

function CexProvider({ children }) {
  const [cexTvl, setCexTvl] = useState(0);
  const [defiTvl, setDefiTvl] = useState(0);
  const [defiTvl1d, setDefiTvl1d] = useState(0);
  const [defiTvl7d, setDefiTvl7d] = useState(0);
  const [defiChange1d, setDefiChange1d] = useState(0);
  const [defiChange7d, setDefiChange7d] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.llama.fi/protocols')
      .then((res) => res.json())
      .then((json) => {
        const cexs = json.filter((item) => item.category === 'CEX');
        const totalCex = cexs
          .map((item) => item.tvl)
          .reduce((a, b) => a + b, 0);
        setCexTvl(totalCex);

        const defis = json.filter((item) =>
          ['Dexs', 'Lending', 'Liquid Staking'].includes(item.category)
        );
        const totalDefi = defis
          .map((item) => item.tvl)
          .reduce((a, b) => a + b, 0);
        setDefiTvl(totalDefi);

        const totalDefi1d = defis
          .map((item) => {
            const change = item.change_1d || 0;
            const safeChange = Math.max(-99, Math.min(99, change));
            return item.tvl / (1 + safeChange / 100);
          })
          .reduce((a, b) => a + b, 0);
        setDefiTvl1d(totalDefi1d);

        const totalDefi7d = defis
          .map((item) => {
            const change = item.change_7d || 0;
            const safeChange = Math.max(-99, Math.min(99, change));
            return item.tvl / (1 + safeChange / 100);
          })
          .reduce((a, b) => a + b, 0);
        setDefiTvl7d(totalDefi7d);

        const avgChange1d =
          defis.map((item) => item.change_1d || 0).reduce((a, b) => a + b, 0) /
          defis.length;
        setDefiChange1d(avgChange1d);

        const avgChange7d =
          defis.map((item) => item.change_7d || 0).reduce((a, b) => a + b, 0) /
          defis.length;
        setDefiChange7d(avgChange7d);

        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  const value = useMemo(
    () => ({
      cexTvl,
      defiTvl,
      defiTvl1d,
      defiTvl7d,
      defiChange1d,
      defiChange7d,
      loading
    }),
    [cexTvl, defiTvl, defiTvl1d, defiTvl7d, defiChange1d, defiChange7d, loading]
  );

  return <CexContext.Provider value={value}>{children}</CexContext.Provider>;
}

CexProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export { CexProvider };

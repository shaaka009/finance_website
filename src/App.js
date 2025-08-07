import './App.css';
import { useState, useEffect, useRef } from 'react';

function App() {
  const [capital, setCapital] = useState('');
  const [profit, setProfit] = useState('');
  const [valuation, setValuation] = useState('');
  const [summary, setSummary] = useState({
    valuation: 0,
    profit: 0,
    sbaLoan: 0,
    sellerFinancing: 0,
    buyerEquity: 0,
  });

  const debounceTimeout = useRef(null);

  useEffect(() => {
    // Debounce API call for real-time updates
    if (debounceTimeout.current) clearTimeout(debounceTimeout.current);
    debounceTimeout.current = setTimeout(() => {
      fetchCalculation();
    }, 300); // adjust delay as needed
  }, [capital, profit, valuation]);

  const fetchCalculation = async () => {
    try {
      const response = await fetch('http://localhost:3001/calculate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          capital: Number(capital),
          desiredProfit: Number(profit),
          targetValuation: Number(valuation),
        }),
      });

      const data = await response.json();
      setSummary({
        valuation: data.valuation,
        profit: data.profit,
        sbaLoan: data.sbaLoan,
        sellerFinancing: data.sellerFinancing,
        buyerEquity: data.buyerEquity,
      });
    } catch (error) {
      console.error('Error fetching calculation:', error);
    }
  };

  return (
    <div className="App">
      <div className="container">
        <div className="header">
          <div className="header-left">
            <h1>Miles' Finance Website</h1>
          </div>
          <div className="header-right">
            <h2>Acquisition Deal Calculator</h2>
            <p className="subtitle">Model a business acquisition deal structure. Input one target metric (Desired Profit After Debt, Available Cash, or Valuation) and parameters.</p>
          </div>
        </div>
        <div className="main-content">
          <div className="calculator-section">
            <div className="input-section">
              <h2>Enter ONE Target Metric</h2>
              <div className="input-group">
                <label>CAPITAL AVAILABLE</label>
                <input
                  type="text"
                  className="calculator-input"
                  placeholder="e.g., 150,000"
                  value={capital}
                  onChange={(e) => setCapital(e.target.value)}
                />
              </div>
              <div className="input-group">
                <label>DESIRED ANNUAL PROFIT (POST-DEBT)</label>
                <input
                  type="text"
                  className="calculator-input"
                  placeholder="e.g., 100,000"
                  value={profit}
                  onChange={(e) => setProfit(e.target.value)}
                />
              </div>
              <div className="input-group">
                <label>TARGET BUSINESS VALUATION</label>
                <input
                  type="text"
                  className="calculator-input"
                  placeholder="e.g., 750,000"
                  value={valuation}
                  onChange={(e) => setValuation(e.target.value)}
                />
              </div>
            </div>

            <div className="summary-section">
              <h2>Deal Summary</h2>
              <div className="summary-item">
                <span>Target Business Valuation</span>
                <span className="value">${summary.valuation ? summary.valuation.toLocaleString() : '0'}</span>

              </div>
              <div className="summary-item">
                <span>Est. Annual Profit (SDE/EBITDA)</span>
                <span className="value">${summary.profit ? summary.profit.toLocaleString() : '0'}</span>
              </div>
              <div className="summary-item">
                <span>SBA Loan (75.0%)</span>
                <span className="value">${summary.sbaLoan ? summary.sbaLoan.toLocaleString() : '0'}</span>
              </div>
              <div className="summary-item">
                <span>Seller Financing (10.0%)</span>
                <span className="value">${summary.sellerFinancing ? summary.sellerFinancing.toLocaleString() : '0'}</span>
              </div>
              <div className="summary-item">
                <span>Buyer Equity Required (15.0%)</span>
                <span className="value">${summary.buyerEquity ? summary.buyerEquity.toLocaleString() : '0'}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

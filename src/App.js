import './App.css';

function App() {
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
                />
              </div>
              <div className="input-group">
                <label>DESIRED ANNUAL PROFIT (POST-DEBT)</label>
                <input 
                  type="text" 
                  className="calculator-input"
                  placeholder="e.g., 100,000"
                />
              </div>
              <div className="input-group">
                <label>TARGET BUSINESS VALUATION</label>
                <input 
                  type="text" 
                  className="calculator-input"
                  placeholder="e.g., 750,000"
                />
              </div>
            </div>
            <div className="summary-section">
              <h2>Deal Summary</h2>
              <div className="summary-item">
                <span>Target Business Valuation</span>
                <span className="value">$0.00</span>
              </div>
              <div className="summary-item">
                <span>Est. Annual Profit (SDE/EBITDA)</span>
                <span className="value">$0.00</span>
              </div>
              <div className="summary-item">
                <span>SBA Loan (75.0%)</span>
                <span className="value">$0.00</span>
              </div>
              <div className="summary-item">
                <span>Seller Financing (10.0%)</span>
                <span className="value">$0.00</span>
              </div>
              <div className="summary-item">
                <span>Buyer Equity Required (15.0%)</span>
                <span className="value">$0.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

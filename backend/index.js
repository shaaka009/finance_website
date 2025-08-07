const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.post('/calculate', (req, res) => {
  const { capital, desiredProfit, targetValuation } = req.body;

  let valuation, profit;

  if (targetValuation) {
    valuation = targetValuation;
    profit = targetValuation * 0.2;
  } else if (desiredProfit) {
    profit = desiredProfit;
    valuation = desiredProfit / 0.2;
  } else if (capital) {
    valuation = capital / 0.15;
    profit = valuation * 0.2;
  } else {
    return res.status(400).json({ error: 'Need at least one input' });
  }

  const sbaLoan = valuation * 0.75;
  const sellerFinancing = valuation * 0.10;
  const buyerEquity = valuation * 0.15;

  return res.json({
    valuation: Math.round(valuation),
    profit: Math.round(profit),
    sbaLoan: Math.round(sbaLoan),
    sellerFinancing: Math.round(sellerFinancing),
    buyerEquity: Math.round(buyerEquity),
  });

});

app.listen(3001, () => {
  console.log('Backend running on http://localhost:3001');
});

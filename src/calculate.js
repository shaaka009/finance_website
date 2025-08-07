// calculate.js

function calculateDeal(input) {
  const {
    mode, // 'capital', 'profit', or 'valuation'
    value, // numeric input value
    multiple = 3, // profit multiple (default = 3)
    sbaPercent = 75, // % SBA loan
    sellerPercent = 10, // % seller financing
    interestRate = 0.1, // SBA interest rate (e.g., 0.1 for 10%)
    loanTermYears = 10, // SBA loan term
  } = input;

  const equityPercent = 100 - sbaPercent - sellerPercent;

  let valuation, annualProfit, capital;

  if (mode === 'capital') {
    capital = value;
    valuation = capital * 100 / equityPercent;
    annualProfit = valuation / multiple;
  } else if (mode === 'profit') {
    annualProfit = value;
    valuation = annualProfit * multiple;
    capital = (valuation * equityPercent) / 100;
  } else if (mode === 'valuation') {
    valuation = value;
    annualProfit = valuation / multiple;
    capital = (valuation * equityPercent) / 100;
  } else {
    throw new Error("Invalid mode. Must be 'capital', 'profit', or 'valuation'.");
  }

  // Calculate financing amounts
  const sbaLoan = Math.min((sbaPercent / 100) * valuation, 5000000); // SBA cap
  const sellerNote = (sellerPercent / 100) * valuation;
  const buyerEquity = capital;

  // SBA annual payment (simple amortized loan estimate)
  const r = interestRate / 12;
  const n = loanTermYears * 12;
  const monthlyPayment = sbaLoan * r / (1 - Math.pow(1 + r, -n));
  const annualDebtService = monthlyPayment * 12;

  const profitAfterDebt = annualProfit - annualDebtService;

  return {
    valuation,
    annualProfit,
    sbaLoan,
    sellerNote,
    buyerEquity,
    annualDebtService,
    profitAfterDebt,
  };
}

module.exports = { calculateDeal };

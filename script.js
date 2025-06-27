function convert() {
  const amount = parseFloat(document.getElementById('amount').value);
  const from = document.getElementById('from').value;
  const to = document.getElementById('to').value;
  let rate = 0;

  if (from === "USD" && to === "UZS") rate = 12500;
  else if (from === "EUR" && to === "UZS") rate = 13500;
  else if (from === "USD" && to === "EUR") rate = 0.93;
  else if (from === "EUR" && to === "USD") rate = 1.07;
  else rate = 1;

  const result = amount * rate;
  document.getElementById('result').innerText = `Результат: ${result.toFixed(2)} ${to}`;
}
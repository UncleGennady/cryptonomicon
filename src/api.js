const API_KEY =
  "ba06e3baaad2f6ac73e0ba21a5db4032393a3d7b6cec2fc5a278b25f00316f18";

export const loadTicker = (tickers) =>
  fetch(
    `https://min-api.cryptocompare.com/data/pricemulti?fsyms=${tickers.join(
      ","
    )}&tsyms=USD&api_key=${API_KEY}`
  )
    .then((r) => r.json())
    .then((rawData) =>
      Object.fromEntries(
        Object.entries(rawData).map(([key, value]) => [key, value.USD])
      )
    );

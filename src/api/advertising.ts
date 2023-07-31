const endpoints = {
  advertising: '/DAMKBAoDBwoDBAkOBAYFCw.csv',
  advertisingSmall: '/dataset.csv',
}

const fetchCsv = async (endpoint: string) => {
  const res = await fetch(endpoint);
  return res.text();
};

export const getchAdvertising = async () => fetchCsv(endpoints.advertising);

export const getchAdvertisingSmall = async () => fetchCsv(endpoints.advertisingSmall);

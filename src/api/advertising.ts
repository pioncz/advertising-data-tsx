const endpoints = {
  advertising: '/DAMKBAoDBwoDBAkOBAYFCw.csv',
  advertisingSmall: '/dataset.csv',
}

const fetchCsv = async (endpoint: string) => {
  try {
    const res = await fetch(endpoint);
    return res.text();
  } catch (err) {
    console.error(err);
    throw new Error('Error while fetching csv')
  }
};

export const getchAdvertising = async () => fetchCsv(endpoints.advertising);

export const getchAdvertisingSmall = async () => fetchCsv(endpoints.advertisingSmall);

export const getchAdvertising = async () => {
  const res = await fetch('/DAMKBAoDBwoDBAkOBAYFCw.csv');
  return res.text();
};

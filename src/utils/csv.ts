import reduce from 'lodash/reduce';
import compact from 'lodash/compact';

export const parseCsv = (input?: string) => {
  const lines = input?.split('\n');
  const headers = compact(lines?.[0].split(','));

  if (!lines || !headers?.length) return [];

  return reduce(lines.slice(1, lines.length), (acc: any, value) => {
    const values = value.split(',');
    const newEntry: any = {};
    headers.forEach((header, index) => newEntry[header] = values[index]);

    return [...acc, newEntry];
  }, []);
};
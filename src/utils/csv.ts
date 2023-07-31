import reduce from 'lodash/reduce';
import compact from 'lodash/compact';
import groupBy from 'lodash/groupBy';
import uniq from 'lodash/uniq';
import filter from 'lodash/filter';
import { parseToDate } from 'utils/date';

export const parseCsv = (input?: string): any[] => {
  const lines = input?.split('\n');
  const headers = compact(lines?.[0].split(','));

  if (!lines || !headers?.length) return [];

  return reduce(lines.slice(1, lines.length), (acc: any, value: any) => {
    const values = value.split(',');
    const newEntry: any = {};
    headers.forEach((header, index) => newEntry[header] = values[index]);

    return [...acc, newEntry];
  }, []);
};

export const formatDatasetFields = (
  dataset: any,
  formatFunction: (key: string, value: any) => any
) => {
  return dataset.map((entry: any) => {
    const newEntry = {...entry};

    for (const [key, value] of Object.entries(entry)) {
      newEntry[key] = formatFunction(key, value);
    }

    return newEntry;
  });
};

const sumValues = (arr: any, keysToSum: string[]) =>
  reduce(arr, (acc: any, value: any) => {
    keysToSum.forEach((keyToSum) => {
      acc[keyToSum] = (acc[keyToSum] || 0) + Number(value[keyToSum] || 0);
    });
    return acc;
  }, {});

export const prepareDataset = (dataset: any, keysToSum: string[], datasources?: string[]) => {
  const filteredDataset = datasources?.length ? dataset.filter((entry: any) => datasources.includes(entry.Datasource)) : dataset;

  const grouppedByDate = groupBy(filteredDataset, 'Date');

  const sumsForDates = reduce(grouppedByDate, (acc: any, value: any, key: string) => {
    acc[key] = sumValues(value, keysToSum);
    return acc;
  }, {});
  const arr = reduce(sumsForDates, (acc: any, value: any, key: string) => 
    [...acc, { Date: parseToDate(key), ...value }]
  , []);

  return arr;
}

export const getUniqueValues = (dataset: any, key: string): any[] => uniq(dataset.map((entry: any) => entry[key]))

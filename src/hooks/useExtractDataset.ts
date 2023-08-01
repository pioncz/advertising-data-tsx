import { useMemo } from 'react';
import { parseCsv, formatDatasetFields, prepareDataset, getUniqueValues } from 'utils/csv'

export const useExtractDataset = (data: string | undefined, datasources: string[] ) => {
  const stringDataset = useMemo(() => {
    if (data?.length) {
      return parseCsv(data);
    }
    return [];
  }, [data]);

  const allDatasources = useMemo(() => {
    return getUniqueValues(stringDataset, 'Datasource');
  }, [stringDataset]);

  const dataset = useMemo(() => {
    if (stringDataset?.length) {
      const typedDataset = formatDatasetFields(
        stringDataset,
        (key, value) => {
          if (['Clicks', 'Impressions'].includes(key)) {
            return parseInt(value);
          }
          return value;
        }
      );
      return prepareDataset(typedDataset, ['Clicks', 'Impressions'], datasources);
    }
    return [];
  }, [stringDataset, datasources]);

  return [dataset, allDatasources];
};
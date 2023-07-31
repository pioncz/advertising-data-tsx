import { parseCsv, formatDatasetFields, prepareDataset } from 'utils/csv';
import { parseToDate } from 'utils/date';

describe('parseCsv', () => {
  it('returns [] for undefined', () => {
    const result = parseCsv();
    expect(result).toEqual([]);
  });
  it('returns [] for empty file', () => {
    const result = parseCsv('');
    expect(result).toEqual([]);
  });
  it('returns [] for file with header, but without data', () => {
    const result = parseCsv('');
    expect(result).toEqual([]);
  });
  it('returns [] when there are 0 headers', () => {
    const result = parseCsv(`\nvalue1`);
    expect(result).toEqual([]);
  });
  it('returns array with 1 element for file with header and 1 data row', () => {
    const result = parseCsv(`header1,header2,header3\nvalue1,value2,value3`);
    expect(result).toEqual([{ header1: 'value1', header2: 'value2', header3: 'value3' }]);
  });
  it('sets missing values to undefined', () => {
    const result = parseCsv(`header1,header2,header3\nvalue1`);
    expect(result).toEqual([{ header1: 'value1', header2: undefined, header3: undefined }]);
  });
});

describe('formatDatasetFields', () => {
  it('returns same array if there are no fields provided', () => {
    const result = formatDatasetFields([{ a: 1, b: 1 }], (key, value) => value);
    expect(result).toEqual([{ a: 1, b: 1 }]);
  });

  it('returns modified values for provided keys and mutation function', () => {
    const result = formatDatasetFields([{ a: 1, b: 1 }, { a: 2, b: 2 }], (key, value) => key === 'b' ? 2 * value : value);
    expect(result).toEqual([{ a: 1, b: 2 }, { a: 2, b: 4 }]);
  });
});


describe('prepareDataset', () => {
  it('should return empty array if dataset is empty', () => {
    const dataset: any = [];
    const keysToSum = ['Number'];

    const result = prepareDataset(dataset, keysToSum);

    expect(result).toEqual([]);
  });

  it('should return 1 element with Date and Number 0, if dataset contains 1 element without keys from keysToSum', () => {
    const dataset = [
      { Date: '22.01.2019', Country: 'Poland' },
    ];
    const keysToSum = ['Number'];

    const result = prepareDataset(dataset, keysToSum);

    expect(result).toEqual([
      { Date: parseToDate('22.01.2019'), Number: 0 },
    ]);
  });

  it('should return 1 element with Date and Number 10, if dataset contains 1 element with keysToSum', () => {
    const dataset = [
      { Date: '22.01.2019', Country: 'Poland', Number: 10 },
    ];
    const keysToSum = ['Number'];

    const result = prepareDataset(dataset, keysToSum);

    expect(result).toEqual([
      { Date: parseToDate('22.01.2019'), Number: 10 },
    ]);
  });

  it('should return 1 element with Date and Number 20, if dataset contains 3 elements and only some of them contains correct key', () => {
    const dataset = [
      { Date: '22.01.2019', Country: 'Poland', Number: 10 },
      { Date: '22.01.2019', Country: 'Poland', Number: 10 },
      { Date: '22.01.2019', Country: 'Poland' },
    ];
    const keysToSum = ['Number'];

    const result = prepareDataset(dataset, keysToSum);

    expect(result).toEqual([
      { Date: parseToDate('22.01.2019'), Number: 20 },
    ]);
  });

  it('should return 2 elements, if dataset contains elements with different dates', () => {
    const dataset = [
      { Date: '22.01.2019', Country: 'Poland', Number: 10 },
      { Date: '23.01.2019', Country: 'Poland', Number: 20 },
    ];
    const keysToSum = ['Number'];

    const result = prepareDataset(dataset, keysToSum);

    expect(result).toEqual([
      { Date: parseToDate('22.01.2019'), Number: 10 },
      { Date: parseToDate('23.01.2019'), Number: 20 },
    ]);
  });

  it('should return filter out entries if datasources list is provided and is not empty', () => {
    const dataset = [
      { Date: '22.01.2019', Datasource: 'Poland', Number: 10 },
      { Date: '23.01.2019', Datasource: 'England', Number: 20 },
    ];
    const keysToSum = ['Number'];

    const result = prepareDataset(dataset, keysToSum, ['Poland']);

    expect(result).toEqual([
      { Date: parseToDate('22.01.2019'), Number: 10 },
    ]);
  });
});
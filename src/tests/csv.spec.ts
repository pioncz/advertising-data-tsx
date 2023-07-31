import { parseCsv, formatDatasetFields } from 'utils/csv';

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
    const result = formatDatasetFields([{ a: 1, b: 1 }], [], (value) => value);
    expect(result).toEqual([{ a: 1, b: 1 }]);
  });

  it('returns modified values for provided keys and mutation function', () => {
    const result = formatDatasetFields([{ a: 1, b: 1 }, { a: 2, b: 2 }], ['b'], (value) => 2 * value);
    expect(result).toEqual([{ a: 1, b: 2 }, { a: 2, b: 4 }]);
  });
});
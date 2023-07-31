import { parseCsv } from 'utils/csv';


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

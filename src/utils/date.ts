export const parseToDate = (date: string) => {
  const dateParts = date
    .split('.')
    .map(p => Number(p));
  return new Date(dateParts[2], dateParts[1] - 1, dateParts[0])
};

export const displayDate = (date: Date) => 
  `${date.getDate()}.${date.toLocaleString('en-US', { month: 'short' })}`;

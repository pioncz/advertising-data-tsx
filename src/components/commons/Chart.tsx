import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { styled } from '@mui/material/styles';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Legend, ResponsiveContainer } from 'recharts';
import { displayDate } from 'utils/date';
import { red } from '@mui/material/colors';

const Chart = ({ loading, error, dataset, xAxisDataKeys, yAxisDataKeys }: { loading: boolean, error?: any, dataset: any, xAxisDataKeys: string[], yAxisDataKeys: string[] }) => {
  const showChart = !loading && !error && dataset;

  return (
    <Root>
      {loading && <CircularProgress />}
      {error && <Error>{error?.message}</Error>}
      {showChart && (
        <ResponsiveContainer width="100%" height={300}>
          <LineChart width={600} height={300} data={dataset}>
            <CartesianGrid stroke="#ccc" vertical={false} />
            {xAxisDataKeys.map(xAxis => (
              <XAxis
                key={xAxis}
                dataKey={xAxis}
                tickFormatter={displayDate}
              />
            ))}
            {yAxisDataKeys.map((yAxis, i) => (
              <React.Fragment key={yAxis}>
                <YAxis dataKey={yAxis} yAxisId={yAxis} orientation={i % 2 === 0 ? 'left' : 'right'} />
                <Line type="monotone" yAxisId={yAxis} dataKey={yAxis} stroke={Colors[i]} dot={false} />
              </React.Fragment>
            ))}
            <Legend height={36} />
          </LineChart>
        </ResponsiveContainer>
      )}
    </Root>
  );
}

const Colors = [
  '#8884d8',
  '#82ca9d'
]

const Root = styled('div')(() => ({
  width: '100%',
  height: '100%',
  maxHeight: 300,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

const Error = styled('div')(({ theme }) => ({
  color: theme.palette.error.main,
  background: red[50],
  border: `1px solid ${theme.palette.error.main}`,
  padding: `${theme.spacing(2)} ${theme.spacing(4)}`,
}));

export default Chart;
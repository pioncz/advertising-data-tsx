import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { styled } from '@mui/material/styles';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Legend, ResponsiveContainer } from 'recharts';
import { displayDate } from 'utils/date';
import { red } from '@mui/material/colors';

const Chart = ({ loading, error, dataset }: { loading: boolean, error?: any, dataset: any }) => {
  const showChart = !loading && !error && dataset;

  return (
    <Root>
      {loading && <CircularProgress />}
      {error && <Error>{error?.message}</Error>}
      {showChart && (
        <ResponsiveContainer width="100%" height={300}>
          <LineChart width={600} height={300} data={dataset}>
            <Line type="monotone" yAxisId="Clicks" dataKey="Clicks" stroke="#8884d8" dot={false} />
            <Line type="monotone" yAxisId="Impressions" dataKey="Impressions" stroke="#82ca9d" dot={false} />
            <CartesianGrid stroke="#ccc" vertical={false} />
            <XAxis
              dataKey="Date"
              tickFormatter={displayDate}
            />
            <YAxis dataKey="Clicks" yAxisId="Clicks" />
            <YAxis dataKey="Impressions" yAxisId="Impressions" orientation='right' />
            <Legend height={36} />
          </LineChart>
        </ResponsiveContainer>
      )}
    </Root>
  );
}

const Root = styled('div')(({ theme }) => ({
  width: '100%',
  height: '100%',
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
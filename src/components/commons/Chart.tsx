import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { styled } from '@mui/material/styles';

const Chart = ({ loading, error }: { loading: boolean, error?: string }) => (
  <Root>
    {loading && <CircularProgress />}
  </Root>
);

const Root = styled('div')(({ theme }) => ({
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

export default Chart;
import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';

const Layout = ({ title, infoSection, filterSection, children }: { title: string, infoSection: React.ReactNode, filterSection: React.ReactNode, children: React.ReactNode }) => (
  <Root>
    <Typography variant="h5" mb={3}>
      {title}
    </Typography>
    <Item mb={1} >
    {infoSection}
    </Item>
    <Grid container spacing={1} sx={{ height: '100%' }}>
      <Grid item xs={12} md={3}>
        <Item sx={{ background: '#ddf3ff', height: '100%' }}>
          {filterSection}
        </Item>
      </Grid>
      <Grid item xs={12} md={9}>
        <Item sx={{ height: '100%', overflow: 'hidden' }}>
          {children}
        </Item>
      </Grid>
    </Grid>
  </Root>
);

const Root = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  padding: theme.spacing(2),
}));

const Item = styled(Box)(({ theme }) => ({
  padding: theme.spacing(1),
  border: `1px solid ${theme.palette.divider}`
}));

export default Layout;
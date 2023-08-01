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
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} sx={{ gridAutoColumns: '1fr', gridAutoFlow: 'column' }}>
        <Grid item xs={12} sx={{ fontSize: 18 }}>
          <Item>
            {infoSection}
          </Item>
        </Grid>
        <Grid item xs={3}>
          <Item sx={{ background: '#ddf3ff' }}>
            {filterSection}
          </Item>
        </Grid>
        <Grid item xs={9}>
          <Item>
            {children}
          </Item>
        </Grid>
      </Grid>
    </Box>
  </Root>
);

const Root = styled('div')(({ theme }) => ({
  padding: theme.spacing(2),
}));

const Item = styled('div')(({ theme }) => ({
  padding: theme.spacing(1),
  border: `1px solid ${theme.palette.divider}`
}));

export default Layout;
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const FilterDimensionInfo = () => (
  <>
    - Select zero to N <i>Datasources</i><br />
    - Select zero to N <i>Campaigns</i>
    <Box mb={2}>
      <Typography variant="caption">
      (where zero means "All")
      </Typography>
    </Box>
    Hitting "Apply", filters the chart to show a timeseries for both <i>Clicks</i> and <i>Impressions</i> for given <i>Datasources</i> and <i>Campaigns</i> - logical AND
  </>
);

export default FilterDimensionInfo;
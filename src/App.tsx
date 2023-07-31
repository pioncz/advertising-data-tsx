import React, { useState, useMemo } from 'react';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import FilterDimensionSection from './components/FilterDimensionSection';
import {
  useQuery,
} from 'react-query'
import { getchAdvertisingSmall } from 'api/advertising'
import Chart from 'components/commons/Chart'
import { parseCsv, formatDatasetFields, prepareDataset, getUniqueValues } from 'utils/csv'

function App() {
  const [datasources, setDatasources] = useState<string[]>([]);
  const { data, error, isLoading } = useQuery('advertising', getchAdvertisingSmall);

  const stringDataset = useMemo(() => {
    if (data?.length) {
      return parseCsv(data);
    }
    return [];
  }, [data]);

  const allDatasources = useMemo(() => {
    return getUniqueValues(stringDataset, 'Datasource');
  }, [stringDataset]);

  const dataset = useMemo(() => {
    if (stringDataset?.length) {
      const typedDataset = formatDatasetFields(
        stringDataset,
        (key, value) => {
          if (['Clicks', 'Impressions'].includes(key)) {
            return parseInt(value);
          }
          return value;
        }
      );
      return prepareDataset(typedDataset, ['Clicks', 'Impressions'], datasources);
    }
    return [];
  }, [stringDataset, datasources]);

  return (
    <Root>
      <Typography variant="h5" mb={3}>
        Adverity Advertising Data ETL-V Challenge
      </Typography>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} sx={{ gridAutoColumns: '1fr', gridAutoFlow: 'column' }}>
          <Grid item xs={12} sx={{ fontSize: 18 }}>
            <Item>
              - Select zero to N <i>Datasources</i><br />
              - Select zero to N <i>Campaigns</i>
              <Box mb={2}>
                <Typography variant="caption">
                (where zero means "All")
                </Typography>
              </Box>
              Hitting "Apply", filters the chart to show a timeseries for both <i>Clicks</i> and <i>Impressions</i> for given <i>Datasources</i> and <i>Campaigns</i> - logical AND
            </Item>
          </Grid>
          <Grid item xs={3}>
            <Item sx={{ background: '#ddf3ff' }}>
              <FilterDimensionSection allDatasources={allDatasources} selectedDatasources={datasources} onChange={setDatasources} />
            </Item>
          </Grid>
          <Grid item xs={9}>
            <Item>
              <Typography variant="h5" mb={3}>  
                Datasource "Doubleclick (dfa)" and "Metrics"; All Campaigns
              </Typography>
              <ChartWrapper>
                <Chart loading={isLoading} dataset={dataset} />
              </ChartWrapper>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </Root>
  );
}

const Root = styled('div')(({ theme }) => ({
  padding: theme.spacing(2),
}));

const Item = styled('div')(({ theme }) => ({
  padding: theme.spacing(1),
  border: `1px solid ${theme.palette.divider}`
}));

const ChartWrapper = styled('div')(() => ({
  height: 300,
  width: '100%',
}));

export default App;

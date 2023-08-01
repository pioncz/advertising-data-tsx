import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import FilterDimensionSection from './components/FilterDimensionSection';
import FilterDimensionInfo from 'components/FilterDimensionInfo'
import {
  useQuery,
} from 'react-query'
import { getchAdvertisingSmall } from 'api/advertising'
import Chart from 'components/commons/Chart'
import Layout from 'components/commons/Layout'
import { useExtractDataset } from 'hooks/useExtractDataset'

function App() {
  const [datasources, setDatasources] = useState<string[]>([]);
  const { data, error, isLoading } = useQuery('advertising', getchAdvertisingSmall);
  const [dataset, allDatasources] = useExtractDataset(data, datasources);

  return (
    <Layout
      title="Adverity Advertising Data ETL-V Challenge"
      infoSection={
        <FilterDimensionInfo />
      }
      filterSection={
        <FilterDimensionSection
          allDatasources={allDatasources}
          selectedDatasources={datasources}
          onChange={setDatasources}
        />
      }
    >
      <Typography variant="h5" mb={3}>  
        Datasources: {datasources.length ? datasources.join(', ') : 'All'}; All Campaigns
      </Typography>
      <ChartWrapper>
        <Chart loading={isLoading} dataset={dataset} error={error} />
      </ChartWrapper>
    </Layout>
  );
}



const ChartWrapper = styled('div')(() => ({
  height: 300,
  width: '100%',
}));

export default App;

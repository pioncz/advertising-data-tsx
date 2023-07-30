import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import SectionSelect from './commons/SectionSelect';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const datasourceOptions = [
  { key: '1', label: 'Google Ads', value: 'Google Ads' },
  { key: '2', label: 'Google Analytics', value: 'Google Analytics' },
];

const campaignOptions = [
  { key: '1', label: 'All', value: 'all' },
  { key: '2', label: 'Adventmarkt Touristik', value: 'Adventmarkt Touristik' },
];

const FilterDimensionSection = () => {
  const [datasource, setDatasource] = useState<string[]>([]);
  const [campaign, setCampaign] = useState<string>(campaignOptions[0].value);

  return (
    <>
      <Typography variant="h5" mb={3}>
        Filter dimension values
      </Typography>
      <StyledSectionSelect title="Datasource" value={datasource} setValue={(newValues) => setDatasource(newValues)} options={datasourceOptions} multiple />
      <StyledSectionSelect title="Campaign" value={[campaign]} setValue={(newValues) => setCampaign(newValues?.[0])} options={campaignOptions} />
      <Button variant="contained" disabled>
        Apply
      </Button>
    </>
  )
};

const StyledSectionSelect = styled(SectionSelect)(({ theme }) => ({
  marginBottom: theme.spacing(1),
}));

export default FilterDimensionSection;
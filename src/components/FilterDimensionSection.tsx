import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import SectionSelect from './commons/SectionSelect';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const campaignOptions = [
  { key: '1', label: 'All', value: 'all' },
];

const FilterDimensionSection = ({ allDatasources, selectedDatasources, onChange }: { allDatasources: string[], selectedDatasources: string[], onChange: (newValues: string[]) => void }) => {
  const [datasources, setDatasources] = useState<string[]>([]);
  const [campaign, setCampaign] = useState<string>(campaignOptions[0].value);

  const datasourceOptions = allDatasources.map((datasource) => ({ key: datasource, label: datasource, value: datasource }));
  const applyDisabled = selectedDatasources.length === datasources.length && !datasources.some(d => !selectedDatasources.includes(d));

  const handleApply = () => {
    onChange(datasources);
  };

  return (
    <>
      <Typography variant="h5" mb={3}>
        Filter dimension values
      </Typography>
      <StyledSectionSelect title="Datasource" value={datasources} setValue={(newValues) => setDatasources(newValues)} options={datasourceOptions} multiple />
      <StyledSectionSelect title="Campaign" value={[campaign]} setValue={(newValues) => setCampaign(newValues?.[0])} options={campaignOptions} disabled />
      <Button variant="contained" disabled={applyDisabled} onClick={handleApply}>
        Apply
      </Button>
    </>
  )
};

const StyledSectionSelect = styled(SectionSelect)(({ theme }) => ({
  marginBottom: theme.spacing(1),
}));

export default FilterDimensionSection;
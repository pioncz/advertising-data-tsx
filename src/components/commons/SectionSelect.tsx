import React from 'react';
import RefreshIcon from '@mui/icons-material/Refresh';
import IconButton from '@mui/material/IconButton';
import { ReactComponent as CircleIcon } from 'icons/CircleHalfFull.svg';
import { styled } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';

interface IOptions { key: string; label: string; value: string };

const SectionSelect = ({ className, title, value, setValue, options, multiple = false }: { className?: string,  title: string, value: string[], setValue: (value: string[]) => void, options: IOptions[], multiple?: boolean }) => (
  <div className={className}>
    <FilterTitle>
      <span>{title}</span>
      <IconButton disabled size="small">
        <CircleIcon />
      </IconButton>
      <IconButton aria-label="reset" size="small">
        <RefreshIcon />
      </IconButton>
    </FilterTitle>
    {multiple ? (
      <Select
        multiple
        value={value}
        onChange={(event: SelectChangeEvent<string[]>) => {
          const {
            target: { value },
          } = event;

          setValue(
            typeof value === 'string' ? value.split(',') : value,
          );
        }}
        renderValue={(selected) => (
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
            {selected.map((value) => (
              <Chip key={value} label={value} />
            ))}
          </Box>
        )}
        sx={{ width: '100%' }}
      >
        {options.map(({ key, label, value }) => (
          <MenuItem key={key} value={value}>{label}</MenuItem>
        ))}
      </Select>
    ): (
      <Select
        value={value?.[0] || ''}
        onChange={(event: SelectChangeEvent) => {
          const {
            target: { value },
          } = event;

          setValue([value]);
        }}
        sx={{ width: '100%' }}
      >
        {options.map(({ key, label, value }) => (
          <MenuItem key={key} value={value}>{label}</MenuItem>
        ))}
      </Select>
    )}

  </div>
);

const FilterTitle = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  fontSize: 16,
  fontWeight: 'bold',
}));

export default SectionSelect;

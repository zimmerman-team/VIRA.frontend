import React from 'react';
import { useTranslation } from 'react-i18next';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { Typography } from '@material-ui/core';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 16px;
`;

const Typo = styled(Typography)`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 12px;

  display: flex;
  align-items: center;
  letter-spacing: 0.15px;

  margin-right: 16px;
  color: #000000;
`;

interface BreakdownSelectProps {
  setSelectedBreakdown: Function;
  selectedBreakdown: string;
  breakdownOptions: string[];
}

export default function BreakdownSelect(props: BreakdownSelectProps) {
  const { t } = useTranslation();
  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    props.setSelectedBreakdown(event.target.value as string);
  };

  const menuItems = props.breakdownOptions.map((breakdown) => (
    <MenuItem value={breakdown} key={breakdown}>
      {breakdown}
    </MenuItem>
  ));

  return (
    <Wrapper>
      <Typo>{t('Breakdown by')}</Typo>
      <FormControl>
        <Select
          value={props.selectedBreakdown}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
          {/* <MenuItem value="">None</MenuItem>
          <MenuItem value={10}>One Year & Multi Year</MenuItem> */}
          {menuItems}
        </Select>
      </FormControl>
    </Wrapper>
  );
}

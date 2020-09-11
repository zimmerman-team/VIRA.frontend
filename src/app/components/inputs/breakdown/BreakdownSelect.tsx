import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { Typography } from '@material-ui/core';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
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

export default function BreakdownSelect() {
  const [item, setItem] = React.useState('');

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setItem(event.target.value as string);
  };

  return (
    <Wrapper>
      <Typo>Breakdown by</Typo>
      <FormControl>
        <Select
          value={item}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value="">None</MenuItem>
          <MenuItem value={10}>One Year & Multi Year</MenuItem>
        </Select>
      </FormControl>
    </Wrapper>
  );
}

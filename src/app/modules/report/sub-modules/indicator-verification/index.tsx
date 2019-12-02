import React from 'react';
import GetAppIcon from '@material-ui/icons/GetApp';
import { TooltipButton as Tooltip } from 'app/components/datadisplay/Tooltip';
import {
  Grid,
  Typography,
  Box,
  Checkbox,
  FormControlLabel,
} from '@material-ui/core';
import { ContainedButton } from 'app/components/inputs/buttons/ContainedButton';
import { SingleMultiLineTextField } from 'app/components/inputs/textfields/SingleMultiLineTextField';
import { outcomeCheckboxes } from 'app/modules/report/mock';

export const IndicatorVerificationLayout = () => {
  return (
    <Grid container>
      <Typography>
        <Box
          mb={2}
          mt={3}
          fontSize={16}
          display="flex"
          lineHeight={1.5}
          fontWeight={500}
          alignItems="center"
        >
          Please describe the key outcomes the project aims to achieve{' '}
          <Tooltip tip="Please describe the key outcomes the project aims to achieve" />
        </Box>
      </Typography>
      <SingleMultiLineTextField
        fullWidth
        multiline
        id="outcomes1"
        placeholder="Type"
        setValue={() => console.log('value set')}
      />
      <Typography>
        <Box
          mb={2}
          mt={4}
          fontSize={16}
          display="flex"
          lineHeight={1.5}
          fontWeight={500}
          alignItems="center"
        >
          Please tell us how you intend to monitor and report on the outcomes
          listed above{' '}
          <Tooltip tip="Please describe the key outcomes the project aims to achieve" />
        </Box>
      </Typography>
      <SingleMultiLineTextField
        fullWidth
        multiline
        id="outcomes2"
        placeholder="Type"
        setValue={() => console.log('value set')}
      />
      <Typography>
        <Box
          mb={5}
          mt={1}
          fontSize={12}
          fontWeight={300}
          lineHeight={1.33}
          color="#185568"
        >
          If you have baseline data (the data you track progress against) and a
          means of verification (how you intend to obtain the data and from
          which sources) please also provide that information.
        </Box>
      </Typography>
      <ContainedButton text="Add media (Optional)" icon={<GetAppIcon />} />
      <Box width="100%" height="24px" />
      <Typography>
        <Box
          mb={2}
          mt={4}
          fontSize={16}
          display="flex"
          lineHeight={1.5}
          fontWeight={500}
          alignItems="center"
        >
          Finally, please select which ones of these Insinger Foundation policy
          priorities the project aims to support.
        </Box>
      </Typography>
      <Grid container>
        {outcomeCheckboxes.map(checkbox => (
          <Grid item key={checkbox.value} lg={6}>
            <FormControlLabel
              label={checkbox.label}
              control={<Checkbox value={checkbox.value} />}
            />
          </Grid>
        ))}
      </Grid>
      <Typography>
        <Box
          mb={1}
          mt={1}
          fontSize={12}
          fontWeight={300}
          lineHeight={1.33}
          color="#185568"
        >
          For each priority selected, the relevant SDGs appear and can be
          selected based on our mapping
        </Box>
      </Typography>
    </Grid>
  );
};

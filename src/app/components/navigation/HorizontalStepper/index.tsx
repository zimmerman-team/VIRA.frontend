import React from 'react';
import {
  Button,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from '@material-ui/core';
import { styles } from 'app/components/navigation/HorizontalStepper/styles';
import 'styled-components/macro';

export type StepperProps = {
  steps: Step[];
};

type Step = {
  label: string;
  path: string;
  disabled?: boolean;
};

function getStepContent(step: number) {
  switch (step) {
    case 0:
      return 'Select campaign settings...';
    case 1:
      return 'What is an ad group anyways?';
    case 2:
      return 'This is the bit I really care about!';
    default:
      return 'Unknown step';
  }
}

export const HorizontalStepper = (props: StepperProps) => {
  const steps = props.steps;
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div css={styles.container}>
      <Stepper activeStep={activeStep}>
        {steps.map((step, index) => {
          const stepProps: { completed?: boolean } = {};
          const labelProps: { optional?: React.ReactNode } = {};
          return (
            <Step {...stepProps} css={styles.step}>
              <StepLabel {...labelProps} css={styles.stepLabel}>
                {step.label}
              </StepLabel>
            </Step>
          );
        })}
      </Stepper>

      {/*TEST PURPOSE TEST PURPOSE*/}
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography>All steps completed - you&apos;re finished</Typography>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          <div>
            <Typography>{getStepContent(activeStep)}</Typography>
            <div>
              <Button disabled={activeStep === 0} onClick={handleBack}>
                Back
              </Button>
              <Button variant="contained" color="primary" onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

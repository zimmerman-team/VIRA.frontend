import React from 'react';
import { Step, StepLabel, Stepper } from '@material-ui/core';
import { styles } from 'app/components/navigation/HorizontalStepper/styles';
import 'styled-components/macro';

export type StepperProps = {
  steps: Step[];
  onStepChange: Function;
  initialTabIndex: number;
};

type Step = {
  label: string;
  path: string;
  disabled?: boolean;
};

export const HorizontalStepper = (props: StepperProps) => {
  const { steps } = props;
  const [activeStep, setActiveStep] = React.useState(
    props.initialTabIndex || 0
  );

  React.useEffect(() => {
    if (props.initialTabIndex !== undefined) {
      setActiveStep(props.initialTabIndex);
    }
  }, [props.initialTabIndex]);

  return (
    <div css={styles.container}>
      <Stepper activeStep={activeStep}>
        {steps.map((step, index) => {
          return (
            <Step css={styles.step} key={step.label}>
              <StepLabel css={styles.stepLabel}>{step.label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
    </div>
  );
};

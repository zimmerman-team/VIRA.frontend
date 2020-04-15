import React from 'react';
import { Step, StepLabel, Stepper, useMediaQuery } from '@material-ui/core';
import { styles } from 'app/components/navigation/HorizontalStepper/styles';
import 'styled-components/macro';
import { useTranslation } from 'react-i18next';

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
  const isMobileWidth = useMediaQuery('(max-width: 600px)');
  const { steps } = props;
  const { t } = useTranslation();
  const [activeStep, setActiveStep] = React.useState(
    props.initialTabIndex || 0
  );

  React.useEffect(() => {
    if (props.initialTabIndex !== undefined) {
      setActiveStep(props.initialTabIndex);
      isMobileWidth && scrollToStep(props.initialTabIndex);
    }
  }, [props.initialTabIndex]);

  function scrollToStep(index: number) {
    const element = document.getElementById(`step-${index}`);

    if (element != null) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
        inline: 'start',
      });
    }
  }

  return (
    <div css={isMobileWidth ? styles.mobileContainer : styles.container}>
      <Stepper activeStep={activeStep}>
        {steps.map((step, index) => {
          return (
            <Step id={`step-${index}`} css={styles.step} key={step.label}>
              <StepLabel css={styles.stepLabel}>{t(step.label)}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
    </div>
  );
};

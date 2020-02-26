import { css } from 'styled-components/macro';
import { ProjectPalette } from 'app/theme';

export const styles: any = {
  container: css`
    width: 100%;
    && {
      [class*='MuiStepConnector-line'] {
        border-color: ${ProjectPalette.secondary.main};
      }

      [class*='MuiStepper-root'] {
        padding: 0;
      }

      [class*='MuiStep-horizontal']:first-child {
        padding-left: 0;
      }

      [class*='MuiStep-horizontal']:last-child {
        padding-right: 0;
      }
    }
  `,
  step: css`
  //Inactive state
  &&{
  [class *= 'MuiStepIcon-root']{
    width: 32px;
    height: 32px;
    border: 1px solid ${ProjectPalette.secondary.main};
    border-radius: 100%;
    color: white;
    > text{
      font-family: Inter;
      fill: ${ProjectPalette.secondary.main}; 
      font-size: 12px;
      line-height: 1.5;
      font-weight: 300;
    }
  }
  
  //Active state
  [class *= 'MuiStepIcon-active']{
    color: ${ProjectPalette.secondary.main};
    > text{
      font-family: Inter;
      fill: ${ProjectPalette.common.white}; 
      font-size: 12px;
      line-height: 1.5;
      font-weight: 300;
    }
  }
  
  //Finished state
  [class *= 'MuiStepIcon-completed']{
    color: ${ProjectPalette.secondary.main};    
  }
`,
  stepLabel: css`
    [class*='MuiStepLabel-label'] {
      font-size: 14px;
      font-weight: normal;
      line-height: 1.71;
      letter-spacing: 0.25px;
    }

    [class*='MuiStepLabel-completed'] {
      color: ${ProjectPalette.text.secondary};
    }
  `,
};

import { validateIndVerFields } from './validateIndVerFields';
import { validateOutcomeFields } from './validateOutcomeFields';
import { validateChallengesPlans } from './validateChallengesPlans';

export function isNavBtnEnabled(btnType: string, tabIndex: number, data: any) {
  if (btnType === 'back') {
    if (tabIndex === 0) {
      return false;
    }
    return true;
  }
  if (btnType === 'next' && tabIndex === 3) {
    return false;
  }
  switch (tabIndex) {
    case 0:
      return validateOutcomeFields(
        data.title,
        data.country,
        data.tarBenTotal,
        data.beneficiaryCounts
      );
    case 1:
      return validateIndVerFields(
        data.keyOutcomes,
        data.monRepOutcomes,
        data.policyPriorities
      );
    case 2:
      return validateChallengesPlans(
        data.keyImplChallenges,
        data.otherProjOutObs,
        data.futurePlans,
        data.otherComms
      );
    default:
      return true;
  }
}

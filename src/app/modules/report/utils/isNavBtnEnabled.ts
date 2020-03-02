import { validateIndVerFields } from './validateIndVerFields';
import { validateOutcomeFields } from './validateOutcomeFields';
import { validateChallengesPlans } from './validateChallengesPlans';
import { validatePolicyPrioritiesFields } from 'app/modules/report/utils/validatePolicyPriorities';

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
        data.country
        // data.tarBenTotal,
        // data.beneficiaryCounts,
        // data.policyPriority,
        // data.budget,
        // data.remainBudget
      );
    case 1:
      return validatePolicyPrioritiesFields(
        data.tarBenTotal,
        data.beneficiaryCounts,
        data.policyPriority,
        data.budget,
        data.remainBudget,
        data.insContribution
      );
    case 2:
      return validateIndVerFields(data.keyOutcomes, data.monRepOutcomes);
    case 3:
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

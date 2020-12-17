import { validateIndVerFields } from 'app/modules/report/utils/validateIndVerFields';
import { validateOutcomeFields } from 'app/modules/report/utils/validateOutcomeFields';
import { validateChallengesPlans } from 'app/modules/report/utils/validateChallengesPlans';
import { validatePolicyPrioritiesFields } from 'app/modules/report/utils/validatePolicyPriorities';

export function isNavBtnEnabled(btnType: string, tabIndex: number, data: any) {
  if (btnType === 'back') {
    /* todo: can this be simplified? */
    return tabIndex !== 0;
  }
  if (btnType === 'next' && tabIndex === 4) {
    return false;
  }
  switch (tabIndex) {
    case 0:
      return validateOutcomeFields(
        data.title,
        data.country.label,
        data.budget,
        data.remainBudget,
        data.insContribution
      );
    case 1:
      return validatePolicyPrioritiesFields(
        data.tarBenTotal,
        data.beneficiaryCounts,
        data.policyPriorities,
        data.sdgs,
        data.funders
      );
    case 2:
      return validateIndVerFields(
        data.keyOutcomes,
        data.inputsInvested,
        data.activitiesUndertaken,
        data.projectgoalsSocialbenefits,
        data.importantFactors,
        data.orgsPartners,
        data.partners
      );
    case 3:
      return validateChallengesPlans(
        data.keyImplChallenges,
        data.otherProjOutObs,
        data.addressChallenges,
        data.howImportantInsingerSupport,
        data.applyForMoreFunding,
        data.otherComms
      );
    default:
      return true;
  }
}

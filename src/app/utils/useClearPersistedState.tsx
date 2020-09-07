import React from 'react';
import get from 'lodash/get';
import find from 'lodash/find';
import { useHistory } from 'react-router-dom';

const tabs = [
  'project-info',
  'policy-priorities',
  'goals-and-outcomes',
  'challenges-and-future-plans',
  'preview',
];
const keys = [
  'report_title',
  'report_country',
  'report_location',
  'report_tarBenTotal',
  'report_tarBenTotal2',
  'report_beneficiaryCounts',
  'report_policyPriorities',
  'report_pillar',
  'report_sdgs',
  'report_budget',
  'report_insContribution',
  'report_keyOutcomes',
  'report_monRepOutcomes',
  'report_media',
  'report_mediaAdded',
  'report_openMediaModel',
  'report_keyImplChallenges',
  'report_otherProjOutObs',
  'report_futurePlans',
  'report_otherComms',
  'report_funder',
];

export function useClearPersistedState() {
  const history = useHistory();

  React.useEffect(() => {
    return history.listen((location: any) => {
      const splits = location.pathname.split('/');
      if (!find(tabs, (tab: string) => tab === get(splits, '[3]', ''))) {
        keys.forEach((key: string) => {
          localStorage.removeItem(key);
        });
      }
    });
  }, [history]);
}

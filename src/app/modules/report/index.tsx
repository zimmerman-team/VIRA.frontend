import React from 'react';
import get from 'lodash/get';
import find from 'lodash/find';
import filter from 'lodash/filter';
import { useTitle } from 'react-use';
import findIndex from 'lodash/findIndex';
import { withRouter } from 'react-router-dom';
import { tabs } from 'app/modules/report/mock';
import { CreateReportLayout } from 'app/modules/report/layout';
import { useStoreActions, useStoreState } from 'app/state/store/hooks';
import { isNavBtnEnabled } from './utils/isNavBtnEnabled';
import { validateIndVerFields } from './utils/validateIndVerFields';
import { getTabs } from './utils/getTabs';
import { validateOutcomeFields } from './utils/validateOutcomeFields';
import { validateChallengesPlans } from './utils/validateChallengesPlans';

const getTabIndex = (pathname: string, projectID: string): number =>
  findIndex(tabs, tab => `/report/${projectID}/${tab.path}` === pathname);

function CreateReportFunc(props: any) {
  useTitle('M&E - Create report');
  // state
  const [project, setProject] = React.useState(undefined);
  const [initialTabIndex, setInitialTabIndex] = React.useState(
    getTabIndex(props.location.pathname, props.match.params.projectID)
  );

  // Outcomes state
  const [title, setTitle] = React.useState('');
  const [country, setCountry] = React.useState({ label: '', value: '' });
  const [tarBenTotal, setTarBenTotal] = React.useState(0);
  const [beneficiaryCounts, setBeneficiaryCounts] = React.useState([
    {
      name: 'Children/Young people',
      value: 0,
    },
    {
      name: 'Elderly',
      value: 0,
    },
    {
      name: 'Women',
      value: 0,
    },
    {
      name: 'Refugees',
      value: 0,
    },
    {
      name: 'Low income individuals',
      value: 0,
    },
  ]);

  // Indicator and verification state
  const [keyOutcomes, setKeyOutcomes] = React.useState('');
  const [monRepOutcomes, setMonRepOutcomes] = React.useState('');
  const [media, setMedia] = React.useState(undefined);
  const [policyPriorities, setPolicyPriorities] = React.useState([
    {
      name: 'Refugees',
      value: false,
    },
    {
      name: 'Drug use',
      value: false,
    },
    {
      name: 'The Elderly',
      value: false,
    },
    {
      name: 'Prostitution',
      value: false,
    },
    {
      name: 'Poverty reduction with a focus on youth and children',
      value: false,
    },
    {
      name: 'Homelessness',
      value: false,
    },
    {
      name: 'Prisoner rehabilitation / reintegration',
      value: false,
    },
  ]);

  // Challenges and plans
  const [keyImplChallenges, setKetImplChallenges] = React.useState('');
  const [otherProjOutObs, setOtherProjOutObs] = React.useState('');
  const [futurePlans, setFuturePlans] = React.useState('');
  const [otherComms, setOtherComms] = React.useState('');

  // redux actions
  const allProjectsAction = useStoreActions(
    actions => actions.allProjects.fetch
  );
  const addReportAction = useStoreActions(actions => actions.addReport.fetch);
  // redux data
  const allProjectsData = useStoreState(state =>
    get(state.allProjects.data, 'data', [])
  );
  const addReportData = useStoreState(state => state.addReport.data);

  React.useEffect(() => {
    setInitialTabIndex(
      getTabIndex(props.location.pathname, props.match.params.projectID)
    );
  }, [props.location.pathname, props.match.params.projectID]);

  function setProjectData() {
    setProject(
      find(
        allProjectsData,
        (p: any) => p.project_number === props.match.params.projectID
      )
    );
  }

  React.useEffect(() => {
    if (allProjectsData.length === 0) {
      allProjectsAction({
        socketName: 'allProject',
        values: '',
      });
    }
    setProjectData();
  }, []);

  React.useEffect(() => {
    setProjectData();
  }, [props.match.params.projectID, allProjectsData]);

  React.useEffect(() => {
    if (get(addReportData, 'status', '') === 'success') {
      props.history.push('/submitted');
    }
  }, [addReportData]);

  const onTabChange = (tabIndex: number) => {
    props.history.push(tabs[tabIndex].path);
  };

  const onNextBtnClick = () => {
    const currTabIndex = getTabIndex(
      props.location.pathname,
      props.match.params.projectID
    );
    if (currTabIndex !== tabs.length - 1 && currTabIndex > -1) {
      onTabChange(currTabIndex + 1);
    }
  };

  const onBackBtnClick = () => {
    const currTabIndex = getTabIndex(
      props.location.pathname,
      props.match.params.projectID
    );
    if (currTabIndex !== tabs.length && currTabIndex > 0) {
      onTabChange(currTabIndex - 1);
    }
  };

  const step2Enabled = validateOutcomeFields(
    title,
    country.label,
    tarBenTotal,
    beneficiaryCounts
  );
  const step3Enabled =
    step2Enabled &&
    validateIndVerFields(keyOutcomes, monRepOutcomes, policyPriorities);

  const step4Enabled =
    step3Enabled &&
    validateChallengesPlans(
      keyImplChallenges,
      otherProjOutObs,
      futurePlans,
      otherComms
    );

  const onSubmit = () => {
    if (step2Enabled && step3Enabled && step4Enabled) {
      addReportAction({
        socketName: 'addReport',
        values: {
          data: {
            project: props.match.params.projectID,
            target_beneficiaries: beneficiaryCounts,
            policy_priorities: filter(policyPriorities, { value: true }).map(
              p => p.name
            ),
            location: {
              long: 0,
              lat: 0,
            },
            country: country.label,
            total_target_beneficiaries: tarBenTotal,
            key_outcomes: keyOutcomes,
            monitor_report_outcomes: monRepOutcomes,
            key_implementation_challenges: keyImplChallenges,
            other_project_outcomes: otherProjOutObs,
            plans: futurePlans,
            other_comments: otherComms,
          },
        },
      });
    }
  };

  return (
    <CreateReportLayout
      submit={onSubmit}
      tabs={getTabs(tabs, step2Enabled, step3Enabled, step4Enabled)}
      breadcrumbs={{
        currentLocation: 'Report',
        previousLocations: [
          { label: 'Projects', url: '/list/projects' },
          {
            label: get(project, 'project_name', 'Project'),
            url: `/projects/${props.match.params.projectID}/detail`,
          },
        ],
      }}
      changeRoute={onTabChange}
      onNextBtnClick={onNextBtnClick}
      onBackBtnClick={onBackBtnClick}
      initialTabIndex={initialTabIndex}
      outcomesProps={{
        title,
        setTitle,
        country,
        setCountry,
        tarBenTotal,
        setTarBenTotal,
        beneficiaryCounts,
        setBeneficiaryCounts,
      }}
      indicatorVerificationProps={{
        keyOutcomes,
        setKeyOutcomes,
        monRepOutcomes,
        setMonRepOutcomes,
        media,
        setMedia,
        policyPriorities,
        setPolicyPriorities,
      }}
      challengesPlansProps={{
        keyImplChallenges,
        setKetImplChallenges,
        otherProjOutObs,
        setOtherProjOutObs,
        futurePlans,
        setFuturePlans,
        otherComms,
        setOtherComms,
      }}
      nextBtnDisabled={
        !isNavBtnEnabled('next', initialTabIndex, {
          title,
          country,
          tarBenTotal,
          beneficiaryCounts,
          keyOutcomes,
          monRepOutcomes,
          policyPriorities,
          keyImplChallenges,
          otherProjOutObs,
          futurePlans,
          otherComms,
        })
      }
      backBtnDisabled={!isNavBtnEnabled('back', initialTabIndex, {})}
      step2Enabled={step2Enabled}
      step3Enabled={step3Enabled}
      step4Enabled={step4Enabled}
      showSubmitBtn={props.location.pathname.split('/')[3] === 'preview'}
    />
  );
}

export const CreateReport = withRouter(CreateReportFunc);

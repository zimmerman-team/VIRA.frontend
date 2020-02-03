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
import { uploadFiles } from './utils/uploadFiles';
import { LocationModel } from './model';

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
  const [country, setCountry] = React.useState({
    label: '',
    value: '',
  });
  const [location, setLocation]: [
    LocationModel | null,
    Function
  ] = React.useState(null);
  const [tarBenTotal, setTarBenTotal] = React.useState(0);
  const [tarBenTotal2, setTarBenTotal2] = React.useState(0);
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
  const [policyPriority, setPolicyPriority] = React.useState({
    label: '',
    value: '',
  });
  const [budget, setBudget] = React.useState(0);

  // Indicator and verification state
  const [keyOutcomes, setKeyOutcomes] = React.useState('');
  const [monRepOutcomes, setMonRepOutcomes] = React.useState('');
  const [media, setMedia] = React.useState({
    sound: [],
    video: [],
    picture: [],
  });
  const [mediaAdded, setMediaAdded] = React.useState([]);
  const [openMediaModal, setOpenMediaModal] = React.useState(false);

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
  const snackbarAction = useStoreActions(
    actions => actions.syncVariables.setSnackbar
  );
  const projectBudgetDataAction = useStoreActions(
    actions => actions.projectBudgetData.fetch
  );
  // redux data
  const allProjectsData = useStoreState(state =>
    get(state.allProjects.data, 'data', [])
  );
  const addReportData = useStoreState(state => state.addReport.data);
  const projectBudgetData = useStoreState(
    state => state.projectBudgetData.data
  );

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
    projectBudgetDataAction({
      socketName: 'getProjectBudgetData',
      values: { projectID: props.match.params.projectID },
    });
  }, []);

  React.useEffect(() => {
    setProjectData();
  }, [props.match.params.projectID, allProjectsData]);

  React.useEffect(() => {
    if (get(addReportData, 'status', '') === 'success') {
      props.history.push('/submitted');
    }
  }, [addReportData]);

  React.useEffect(() => {
    if (location && get(location, 'country.label', '') !== '') {
      setCountry(get(location, 'country') as { label: string; value: string });
    }
  }, [location]);

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

  const onAddMedia = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: 'picture' | 'video' | 'sound'
  ) => {
    if (media[type]) {
      const newFiles: any = media[type];
      for (let i = 0; i < get(e, 'target.files.length', 0); i++) {
        newFiles.push(get(e, 'target.files', [])[i]);
      }
      setMedia({ ...media, [type]: newFiles });
    }
  };

  const onSaveMediaCB = (data: any) => {
    setMediaAdded(data);
    setOpenMediaModal(false);
    snackbarAction('Files upload completed');
  };

  const onSaveMediaError = (err: any) => {
    snackbarAction('Something went wrong. Please try again');
  };

  const onSaveMedia = () => {
    const files = [...media.picture, ...media.video, ...media.sound];
    if (files.length > 0) {
      uploadFiles(files, onSaveMediaCB, onSaveMediaError);
    }
  };

  const step2Enabled = validateOutcomeFields(
    title,
    country.label,
    tarBenTotal,
    beneficiaryCounts,
    policyPriority.label,
    budget,
    get(projectBudgetData, 'data.remainBudget', 0)
  );
  const step3Enabled =
    step2Enabled && validateIndVerFields(keyOutcomes, monRepOutcomes);

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
            title,
            project: props.match.params.projectID,
            target_beneficiaries: beneficiaryCounts,
            policy_priority: policyPriority.label,
            location: location
              ? {
                  long: (location as LocationModel).longitude,
                  lat: (location as LocationModel).latitude,
                }
              : null,
            media: mediaAdded.map((m: any) => m.path),
            country: country.label,
            place_name: location ? (location as LocationModel).place : null,
            total_target_beneficiaries: tarBenTotal,
            total_target_beneficiaries_commited: tarBenTotal2,
            budget,
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
        location,
        setLocation,
        tarBenTotal,
        tarBenTotal2,
        setTarBenTotal,
        setTarBenTotal2,
        policyPriority,
        setPolicyPriority,
        beneficiaryCounts,
        setBeneficiaryCounts,
        budget,
        setBudget,
        remainBudget: get(projectBudgetData, 'data.remainBudget', 0),
      }}
      indicatorVerificationProps={{
        keyOutcomes,
        setKeyOutcomes,
        monRepOutcomes,
        setMonRepOutcomes,
        media,
        setMedia: onAddMedia,
        onSaveMedia,
        openMediaModal,
        setOpenMediaModal,
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
          keyImplChallenges,
          otherProjOutObs,
          futurePlans,
          otherComms,
          budget,
          policyPriority,
          remainBudget: get(projectBudgetData, 'data.remainBudget', 0),
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

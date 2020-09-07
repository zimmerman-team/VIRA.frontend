/* eslint-disable no-plusplus */
import React from 'react';
import 'styled-components/macro';
import { withRouter } from 'react-router-dom';
import CheckIcon from '@material-ui/icons/Check';

/* utils thirdparty */
import { useTitle } from 'react-use';
import findIndex from 'lodash/findIndex';
import get from 'lodash/get';
import find from 'lodash/find';
import filter from 'lodash/filter';

/* general */
import { tabs } from 'app/modules/report/mock';
import { CreateReportLayout } from 'app/modules/report/layout';

/* model */
import { LocationModel, LabelWeightModel } from './model';
import { DialogBtnType } from 'app/components/surfaces/Dialog/model';

/* utils: misc */
import { isNavBtnEnabled } from './utils/isNavBtnEnabled';
import { useWindowUnloadEffect } from 'app/utils/useWindowUnloadEffect';
import { getTabs } from './utils/getTabs';

/* utils related to validating field data */
import { validateOutcomeFields } from './utils/validateOutcomeFields';
import { validateChallengesPlans } from './utils/validateChallengesPlans';
import { validatePolicyPrioritiesFields } from './utils/validatePolicyPriorities';
import { validateIndVerFields } from './utils/validateIndVerFields';

/* utils related to data */
import { uploadFiles } from './utils/uploadFiles';
import { getFileTypeAccept } from './utils/getFileTypeAccept';

/* state/data */
import { useQuery } from 'app/utils/useQuery';
import { usePersistedState } from 'app/utils/usePersistedState';
import { useStoreActions, useStoreState } from 'app/state/store/hooks';

/* global variables */
import { AppConfig } from 'app/data';

const getTabIndex = (pathname: string, projectID: string): number =>
  findIndex(tabs, (tab) => `/report/${projectID}/${tab.path}` === pathname);

function CreateReportFunc(props: any) {
  useTitle(`${AppConfig.appTitleLong} Create report`);
  const query = useQuery();
  // state
  const [project, setProject] = React.useState(undefined);
  const [initialTabIndex, setInitialTabIndex] = React.useState(
    getTabIndex(props.location.pathname, props.match.params.projectID)
  );

  // Outcomes state
  const [title, setTitle] = usePersistedState('report_title', '');
  const [country, setCountry] = usePersistedState('report_country', {
    label: '',
    value: '',
  });
  // @ts-ignore
  const [location, setLocation]: [
    LocationModel | null,
    Function
  ] = usePersistedState('report_location', null);

  // Pillar
  const [pillar, setPillar] = usePersistedState(
    'report_pillar',
    'Pillar 1: Social Good'
  );

  // Policy Priorities
  const [tarBenTotal, setTarBenTotal] = usePersistedState(
    'report_tarBenTotal',
    0
  );
  const [tarBenTotal2, setTarBenTotal2] = usePersistedState(
    'report_tarBenTotal2',
    0
  );
  const [beneficiaryCounts, setBeneficiaryCounts] = usePersistedState(
    'report_beneficiaryCounts',
    [
      {
        name: 'Children & youth (up to +/- 30 years)',
        value: 0,
      },
      {
        name: 'The Elderly (65+)',
        value: 0,
      },
      {
        name: 'Women & Girls',
        value: 0,
      },
      {
        name: 'Refugees',
        value: 0,
      },
      {
        name: 'People with lower income',
        value: 0,
      },
      {
        name: 'Homeless people',
        value: 0,
      },
      {
        name: 'People with disabilities',
        value: 0,
      },
    ]
  );
  const [policyPriorities, setPolicyPriorities] = usePersistedState(
    'report_policyPriorities',
    []
  );
  const [sdgs, setSDGs] = usePersistedState('report_sdgs', []);

  const [budget, setBudget] = usePersistedState(
    'report_budget',
    useStoreState((state) =>
      get(state.projectBudgetData, 'data.remainBudget', 0)
    )
  );
  const [insContribution, setInsContribution] = usePersistedState(
    'report_insContribution',
    0
  );
  const [funders, setFunders] = usePersistedState('report_funder', []);

  // Indicator and verification state
  const [keyOutcomes, setKeyOutcomes] = usePersistedState(
    'report_keyOutcomes',
    ''
  );
  const [monRepOutcomes, setMonRepOutcomes] = usePersistedState(
    'report_monRepOutcomes',
    ''
  );
  const [inputsInvested, setInputsInvested] = usePersistedState(
    'report_inputsInvested',
    ''
  );
  const [activitiesUndertaken, setActivitiesUndertaken] = usePersistedState(
    'report_activitiesUndertaken',
    ''
  );
  const [
    projectgoalsSocialbenefits,
    setProjectgoalsSocialbenefits,
  ] = usePersistedState('report_projectgoalsSocialbenefits', '');
  const [importantFactors, setImportantFactors] = usePersistedState(
    'report_importantFactors',
    ''
  );
  const [orgsPartners, setOrgsPartners] = usePersistedState(
    'report_orgsPartners',
    ''
  );
  const [media, setMedia] = React.useState({
    document: [],
    video: [],
    picture: [],
  });
  const [mediaAdded, setMediaAdded] = usePersistedState(
    'report_mediaAdded',
    []
  );
  const [openMediaModal, setOpenMediaModal] = React.useState(false);

  // Challenges and plans
  const [keyImplChallenges, setKetImplChallenges] = usePersistedState(
    'report_keyImplChallenges',
    ''
  );
  const [otherProjOutObs, setOtherProjOutObs] = usePersistedState(
    'report_otherProjOutObs',
    ''
  );
  const [addressChallenges, setAddressChallenges] = usePersistedState(
    'report_addressChallenges',
    ''
  );
  const [
    howImportantInsingerSupport,
    setHowImportantInsingerSupport,
  ] = usePersistedState('report_howImportantInsingerSupport', '');
  const [applyForMoreFunding, setApplyForMoreFunding] = usePersistedState(
    'report_applyForMoreFunding',
    ''
  );
  const [otherComms, setOtherComms] = usePersistedState(
    'report_otherComms',
    ''
  );

  const [dialogProps, setDialogProps] = React.useState({
    title: 'Your report has been sent',
    open: false,
    content: (
      <div
        css={`
          display: flex;
          justify-content: center;
        `}
      >
        <CheckIcon
          htmlColor="#05C985"
          css={`
            font-size: 5rem;
          `}
        />
      </div>
    ),
    buttons: [] as DialogBtnType[],
    onClose: () =>
      setDialogProps((prevState) => ({ ...prevState, open: false })),
  });

  const deleteReport = () => {
    const rid = query.get('rid');
    deleteReportAction({
      socketName: 'delReport',
      values: {
        _id: rid,
      },
    });
  };

  const [delDialogProps, setDelDialogProps] = React.useState({
    title: 'Are you sure you want to delete the report?',
    open: false,
    buttons: [
      {
        text: 'Cancel',
        color: '#000000',
        background: '#ffffff',
        action: () => {},
        closeOnClick: true,
      },
      {
        text: 'Delete',
        color: '#ffffff',
        background: '#ed6060',
        action: deleteReport,
        closeOnClick: true,
      },
    ],
    onClose: () =>
      setDelDialogProps((prevState) => ({ ...prevState, open: false })),
  });

  const openDelDialog = () => {
    setDelDialogProps((d) => ({ ...d, open: true }));
  };

  // redux actions
  const allProjectsAction = useStoreActions(
    (actions) => actions.allProjects.fetch
  );
  const addReportAction = useStoreActions((actions) => actions.addReport.fetch);
  const deleteReportAction = useStoreActions(
    (actions) => actions.deleteReport.fetch
  );
  const addReportClearAction = useStoreActions(
    (actions) => actions.addReport.clear
  );
  const deleteReportClearAction = useStoreActions(
    (actions) => actions.deleteReport.clear
  );
  const snackbarAction = useStoreActions(
    (actions) => actions.syncVariables.setSnackbar
  );
  const projectBudgetDataAction = useStoreActions(
    (actions) => actions.projectBudgetData.fetch
  );
  const reportDetailAction = useStoreActions(
    (actions) => actions.reportDetail.fetch
  );
  const reportDetailClearAction = useStoreActions(
    (actions) => actions.reportDetail.clear
  );
  // redux data
  const allProjectsData = useStoreState((state) =>
    get(state.allProjects.data, 'data', [])
  );

  // console.log("allProjectsData", allProjectsData);

  const addReportData = useStoreState((state) => state.addReport.data);
  const addReportLoading = useStoreState((state) => state.addReport.loading);
  const deleteReportData = useStoreState((state) => state.deleteReport.data);
  const deleteReportLoading = useStoreState(
    (state) => state.deleteReport.loading
  );
  const projectBudgetData = useStoreState(
    (state) => state.projectBudgetData.data
  );
  const reportDetailData = useStoreState((state) => state.reportDetail.data);

  const signedInUserRole = useStoreState((state) =>
    get(state.userDetails.data, 'role', 'Grantee user')
  );
  const signedInUserEmail = useStoreState((state) =>
    get(state.userDetails.data, 'email', '')
  );

  // console.log("reportDetailData", reportDetailData);

  useWindowUnloadEffect(() => {
    addReportClearAction();
    deleteReportClearAction();
  }, true);

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
    if (query.get('rid')) {
      reportDetailAction({
        socketName: 'getReport',
        values: { id: query.get('rid') },
      });
    }
    if (allProjectsData.length === 0) {
      allProjectsAction({
        socketName: 'allProject',
        values: '',
      });
    }
    setProjectData();
    projectBudgetDataAction({
      socketName: 'getProjectBudgetData',
      values: {
        projectID: props.match.params.projectID,
        exludeReportID: query.get('rid'),
      },
    });
    return () => reportDetailClearAction();
  }, []);

  React.useEffect(() => {
    if (get(reportDetailData, 'report', null)) {
      setTitle(get(reportDetailData, 'report.title', ''));
      setCountry({
        label: get(reportDetailData, 'report.country', ''),
        value: get(reportDetailData, 'report.country', ''),
      });
      setLocation(
        get(reportDetailData, 'report.location', null)
          ? {
              longitude: get(reportDetailData, 'report.location.long', 0),
              latitude: get(reportDetailData, 'report.location.lat', 0),
            }
          : null
      );
      setTarBenTotal(
        get(reportDetailData, 'report.total_target_beneficiaries', 0)
      );
      setTarBenTotal2(
        get(reportDetailData, 'report.total_target_beneficiaries_commited', 0)
      );
      setBeneficiaryCounts(
        get(
          reportDetailData,
          'report.target_beneficiaries',
          []
        ).map((b: any) => ({ name: b.name, value: b.value }))
      );
      setPillar(get(reportDetailData, 'report.pillar.name', ''));
      setPolicyPriorities(
        get(reportDetailData, 'report.policy_priorities', []).map(
          (pp: any) => ({
            label: pp.policy_priority.name,
            weight: pp.weight,
          })
        )
      );
      setSDGs(
        get(reportDetailData, 'report.sdgs', []).map((sdg: any) => ({
          label: sdg.sdg.name,
          weight: sdg.weight,
          code: sdg.sdg.code,
        }))
      );
      if (get(reportDetailData, 'report.media', []).length > 0) {
        setMediaAdded(
          get(reportDetailData, 'report.media', []).map((m: any) => ({
            path: m,
          }))
        );
      }
      setBudget(get(reportDetailData, 'report.budget', 0));
      setInsContribution(get(reportDetailData, 'report.insContribution', 0));
      setFunders(
        get(reportDetailData, 'report.funders', []).map(
          (funder: any) => funder.name
        )
      );
      setKeyOutcomes(get(reportDetailData, 'report.key_outcomes', ''));
      setMonRepOutcomes(
        get(reportDetailData, 'report.monitor_report_outcomes', '')
      );
      setKetImplChallenges(
        get(reportDetailData, 'report.key_implementation_challenges', '')
      );
      setOtherProjOutObs(
        get(reportDetailData, 'report.other_project_outcomes', '')
      );
      setAddressChallenges(
        get(reportDetailData, 'report.how_address_challenges', '')
      );
      setOtherComms(get(reportDetailData, 'report.other_comments', ''));
      setInputsInvested(get(reportDetailData, 'report.inputs_invested', ''));
      setActivitiesUndertaken(
        get(reportDetailData, 'report.activities_undertaken', '')
      );
      setProjectgoalsSocialbenefits(
        get(reportDetailData, 'report.projectgoals_socialbenefits', '')
      );
      setImportantFactors(
        get(reportDetailData, 'report.important_factors', '')
      );
      setOrgsPartners(get(reportDetailData, 'report.orgs_partners', ''));
      setAddressChallenges(
        get(reportDetailData, 'report.how_address_challenges', '')
      );
      setHowImportantInsingerSupport(
        get(reportDetailData, 'report.how_important_insinger_support', '')
      );
      setApplyForMoreFunding(
        get(reportDetailData, 'report.apply_for_more_funding', '')
      );
    }
  }, [reportDetailData]);

  React.useEffect(() => {
    setProjectData();
  }, [props.match.params.projectID, allProjectsData]);

  React.useEffect(() => {
    // console.log(addReportData);
    if (get(addReportData, 'status', '') === 'success') {
      const isDraft = get(addReportData, 'data.isDraft', false);
      setDialogProps({
        ...dialogProps,
        open: true,
        title: isDraft
          ? 'Your report has been saved as a draft'
          : query.get('rid')
          ? 'Your report has been saved'
          : 'Your report has been sent',
        buttons: isDraft
          ? [
              {
                text: 'Continue',
                color: '#ffffff',
                background: '#30c2b0',
                action: () => {},
                closeOnClick: true,
              },
            ]
          : [
              {
                text: 'Go to Report',
                color: '#ffffff',
                background: '#30c2b0',
                action: () => {
                  props.history.push(
                    `/reports/${get(addReportData, 'data._id', '')}`
                  );
                },
                closeOnClick: true,
              },
            ],
      });
    }
  }, [addReportData]);

  React.useEffect(() => {
    if (get(deleteReportData, 'status', '') === 'success') {
      props.history.replace('/list/2');
    }
  }, [deleteReportData]);

  React.useEffect(() => {
    if (location && get(location, 'country.label', '') !== '') {
      setCountry(get(location, 'country') as { label: string; value: string });
    }
  }, [location]);

  React.useEffect(() => {
    if (
      get(projectBudgetData, 'data', null) &&
      get(projectBudgetData, 'data.person_email', '-') !== signedInUserEmail &&
      signedInUserRole === 'Grantee user'
    ) {
      props.history.replace('/');
    }
    setBudget(get(projectBudgetData, 'data.remainBudget', 0));
  }, [projectBudgetData]);

  const onStepChange = (tabIndex: number) => {
    const rid = query.get('rid');
    props.history.push(`${tabs[tabIndex].path}${rid ? `?rid=${rid}` : ''}`);
  };

  const onNextBtnClick = () => {
    const currTabIndex = getTabIndex(
      props.location.pathname,
      props.match.params.projectID
    );
    if (currTabIndex !== tabs.length - 1 && currTabIndex > -1) {
      onStepChange(currTabIndex + 1);
    }
  };

  const onBackBtnClick = () => {
    const currTabIndex = getTabIndex(
      props.location.pathname,
      props.match.params.projectID
    );
    if (currTabIndex !== tabs.length && currTabIndex > 0) {
      onStepChange(currTabIndex - 1);
    }
  };

  const onAddMedia = (
    e: React.ChangeEvent<HTMLInputElement> & { dataTransfer?: DataTransfer },
    type: 'picture' | 'video' | 'document'
  ) => {
    const accept = getFileTypeAccept(type);
    if (media[type]) {
      const newFiles: any = media[type];
      const filesPath = e.dataTransfer ? 'dataTransfer' : 'target';
      for (let i = 0; i < get(e, `${filesPath}.files.length`, 0); i++) {
        const file = get(e, `${filesPath}.files`, [])[i];
        if (accept.indexOf(get(file.type.split('/'), '[0]', '')) !== -1) {
          newFiles.push(file);
        }
      }
      setMedia({ ...media, [type]: newFiles });
    }
  };

  const removeMedia = (name: string) => {
    setMediaAdded((prevData: never[]) => {
      return filter(prevData, (d: any) => {
        return d.path !== name;
      }) as never[];
    });
  };

  const onSaveMediaCB = (data: any) => {
    setMediaAdded((prevData: never[]) => {
      return [...prevData, ...data] as never[];
    });
    setMedia({
      document: [],
      video: [],
      picture: [],
    });
    setOpenMediaModal(false);
    snackbarAction('Files upload completed');
  };

  const onSaveMediaError = (err: any) => {
    snackbarAction('Something went wrong. Please try again');
  };

  const onSaveMedia = () => {
    const files = [...media.picture, ...media.video, ...media.document];
    if (files.length > 0) {
      uploadFiles(files, onSaveMediaCB, onSaveMediaError);
    }
  };

  const onDialogCancel = () => {
    setOpenMediaModal(false);
    setMedia({
      document: [],
      video: [],
      picture: [],
    });
  };

  const draftSubmitEnabled = title.length > 0 || country.label.length > 0;

  const step2Enabled = validateOutcomeFields(title, country.label);

  const step3Enabled =
    step2Enabled &&
    validatePolicyPrioritiesFields(
      tarBenTotal,
      beneficiaryCounts,
      policyPriorities,
      sdgs,
      budget,
      get(projectBudgetData, 'data.remainBudget', 0),
      insContribution,
      funders
    );

  const step4Enabled =
    step3Enabled &&
    validateIndVerFields(
      keyOutcomes,
      monRepOutcomes,
      inputsInvested,
      activitiesUndertaken,
      projectgoalsSocialbenefits,
      importantFactors,
      orgsPartners
    );

  const step5Enabled =
    step4Enabled &&
    validateChallengesPlans(
      keyImplChallenges,
      otherProjOutObs,
      addressChallenges,
      howImportantInsingerSupport,
      applyForMoreFunding,
      otherComms
    );

  const onSubmit = () => {
    if (step2Enabled && step3Enabled && step4Enabled && step5Enabled) {
      const rid = query.get('rid');
      addReportAction({
        socketName: rid ? 'editReport' : 'addReport',
        values: {
          data: {
            rid,
            title,
            pillar,
            project: props.match.params.projectID,
            target_beneficiaries: beneficiaryCounts,
            policy_priorities: policyPriorities.map((pp: LabelWeightModel) => ({
              ...pp,
              name: pp.label,
            })),
            sdgs: sdgs.map((sdg: LabelWeightModel) => ({
              ...sdg,
              name: sdg.label,
            })),
            /* todo: stefanos, please look into refactoring this piece */
            location: location
              ? {
                  long: (location as LocationModel).longitude,
                  lat: (location as LocationModel).latitude,
                }
              : null,
            media: mediaAdded.map((m: any) => m.path),
            country: country.label,
            /* todo: stefanos, please look into refactoring this piece */
            place_name: location ? (location as LocationModel).place : null,
            total_target_beneficiaries: tarBenTotal,
            total_target_beneficiaries_commited: tarBenTotal2,
            budget,
            insContribution,
            key_outcomes: keyOutcomes,
            monitor_report_outcomes: monRepOutcomes,
            inputs_invested: inputsInvested,
            activities_undertaken: activitiesUndertaken,
            projectgoals_socialbenefits: projectgoalsSocialbenefits,
            important_factors: importantFactors,
            orgs_partners: orgsPartners,
            key_implementation_challenges: keyImplChallenges,
            other_project_outcomes: otherProjOutObs,
            how_address_challenges: addressChallenges,
            how_important_insinger_support: howImportantInsingerSupport,
            apply_for_more_funding: applyForMoreFunding,
            other_comments: otherComms,
            isDraft: false,
            funders,
          },
        },
      });
    }
  };

  const onDraftSubmit = () => {
    if (draftSubmitEnabled) {
      const rid = query.get('rid');
      addReportAction({
        socketName: rid ? 'editReport' : 'addReport',
        values: {
          data: {
            rid,
            pillar,
            title: title === '' ? ' ' : title,
            project: props.match.params.projectID,
            target_beneficiaries: beneficiaryCounts,
            policy_priorities: policyPriorities.map((pp: LabelWeightModel) => ({
              ...pp,
              name: pp.label,
            })),
            sdgs: sdgs.map((sdg: LabelWeightModel) => ({
              ...sdg,
              name: sdg.label,
            })),
            /* todo: stefanos, please look into refactoring this piece */
            location: location
              ? {
                  long: (location as LocationModel).longitude,
                  lat: (location as LocationModel).latitude,
                }
              : null,
            media: mediaAdded.map((m: any) => m.path),
            country: country.label === '' ? ' ' : country.label,
            /* todo: stefanos, please look into refactoring this piece */
            place_name: location ? (location as LocationModel).place : null,
            total_target_beneficiaries: tarBenTotal,
            total_target_beneficiaries_commited: tarBenTotal2,
            budget,
            insContribution,
            key_outcomes: keyOutcomes === '' ? ' ' : keyOutcomes,
            monitor_report_outcomes:
              monRepOutcomes === '' ? ' ' : monRepOutcomes,
            inputs_invested: inputsInvested === '' ? ' ' : inputsInvested,
            activities_undertaken:
              activitiesUndertaken === '' ? ' ' : activitiesUndertaken,
            projectgoals_socialbenefits:
              projectgoalsSocialbenefits === ''
                ? ' '
                : projectgoalsSocialbenefits,
            important_factors: importantFactors === '' ? ' ' : importantFactors,
            orgs_partners: orgsPartners === '' ? ' ' : orgsPartners,
            key_implementation_challenges:
              keyImplChallenges === '' ? ' ' : keyImplChallenges,
            other_project_outcomes:
              otherProjOutObs === '' ? ' ' : otherProjOutObs,
            how_address_challenges:
              addressChallenges === '' ? ' ' : addressChallenges,
            how_important_insinger_support:
              howImportantInsingerSupport === ''
                ? ' '
                : howImportantInsingerSupport,
            apply_for_more_funding:
              applyForMoreFunding === '' ? ' ' : applyForMoreFunding,
            other_comments: otherComms === '' ? ' ' : otherComms,
            isDraft: true,
            funders,
          },
        },
      });
    }
  };

  return (
    <CreateReportLayout
      loading={addReportLoading || deleteReportLoading}
      submit={onSubmit}
      saveDraft={onDraftSubmit}
      tabs={getTabs(
        tabs,
        step2Enabled,
        step3Enabled,
        step4Enabled,
        step5Enabled
      )}
      breadcrumbs={{
        currentLocation: 'Report',
        previousLocations: [
          { label: 'Projects', url: '/list/projects' },
          {
            label: get(project, 'project_name', 'Project'),
            url: `/projects/${props.match.params.projectID}`,
          },
        ],
      }}
      changeRoute={onStepChange}
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
      }}
      policyPrioritiesProps={{
        pillar,
        setPillar,
        tarBenTotal,
        tarBenTotal2,
        setTarBenTotal,
        setTarBenTotal2,
        policyPriorities,
        setPolicyPriorities,
        sdgs,
        setSDGs,
        beneficiaryCounts,
        setBeneficiaryCounts,
        budget,
        setBudget,
        remainBudget: get(projectBudgetData, 'data.remainBudget', 0),
        insContribution,
        setInsContribution,
        funders,
        setFunders,
      }}
      indicatorVerificationProps={{
        keyOutcomes,
        setKeyOutcomes,
        monRepOutcomes,
        setMonRepOutcomes,
        inputsInvested,
        setInputsInvested,
        activitiesUndertaken,
        setActivitiesUndertaken,
        projectgoalsSocialbenefits,
        setProjectgoalsSocialbenefits,
        importantFactors,
        setImportantFactors,
        orgsPartners,
        setOrgsPartners,
        media,
        setMedia: onAddMedia,
        mediaAdded,
        onSaveMedia,
        openMediaModal,
        setOpenMediaModal,
        removeMedia,
        onDialogCancel,
      }}
      challengesPlansProps={{
        keyImplChallenges,
        setKetImplChallenges,
        otherProjOutObs,
        setOtherProjOutObs,
        addressChallenges,
        setAddressChallenges,
        howImportantInsingerSupport,
        setHowImportantInsingerSupport,
        applyForMoreFunding,
        setApplyForMoreFunding,
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
          inputsInvested,
          activitiesUndertaken,
          projectgoalsSocialbenefits,
          importantFactors,
          orgsPartners,
          keyImplChallenges,
          otherProjOutObs,
          addressChallenges,
          otherComms,
          budget,
          policyPriorities,
          sdgs,
          remainBudget: get(projectBudgetData, 'data.remainBudget', 0),
          insContribution,
          funders,
        })
      }
      backBtnDisabled={!isNavBtnEnabled('back', initialTabIndex, {})}
      step2Enabled={step2Enabled}
      step3Enabled={step3Enabled}
      step4Enabled={step4Enabled}
      step5Enabled={step5Enabled}
      showDraftSubmitBtn={draftSubmitEnabled}
      showSubmitBtn={props.location.pathname.split('/')[3] === 'preview'}
      dialogProps={dialogProps}
      delDialogProps={delDialogProps}
      showDeleteBtn={query.get('rid') !== null}
      deleteReport={openDelDialog}
    />
  );
}

export const CreateReport = withRouter(CreateReportFunc);

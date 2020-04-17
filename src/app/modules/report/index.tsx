/* eslint-disable no-plusplus */
import React from 'react';
import get from 'lodash/get';
import find from 'lodash/find';
import 'styled-components/macro';
import filter from 'lodash/filter';
import { useTitle } from 'react-use';
import findIndex from 'lodash/findIndex';
import { withRouter } from 'react-router-dom';
import { tabs } from 'app/modules/report/mock';
import { CreateReportLayout } from 'app/modules/report/layout';
import { useStoreActions, useStoreState } from 'app/state/store/hooks';
import { AppConfig } from 'app/data';
import { useQuery } from 'app/utils/useQuery';
import { useWindowUnloadEffect } from 'app/utils/useWindowUnloadEffect';
import { getMediaTileData } from 'app/modules/detail-modules/report-detail/utils/getMediaTileData';
import { DialogBtnType } from 'app/components/surfaces/Dialog/model';
import CheckIcon from '@material-ui/icons/Check';
import { isNavBtnEnabled } from './utils/isNavBtnEnabled';
import { validateIndVerFields } from './utils/validateIndVerFields';
import { getTabs } from './utils/getTabs';
import { validateOutcomeFields } from './utils/validateOutcomeFields';
import { validateChallengesPlans } from './utils/validateChallengesPlans';
import { validatePolicyPrioritiesFields } from './utils/validatePolicyPriorities';
import { uploadFiles } from './utils/uploadFiles';
import { LocationModel } from './model';

const getTabIndex = (pathname: string, projectID: string): number =>
  findIndex(tabs, tab => `/report/${projectID}/${tab.path}` === pathname);

function CreateReportFunc(props: any) {
  useTitle(`${AppConfig.appTitleLong} Create report`);
  const query = useQuery();
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

  // Policy Priorities
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
  const [insContribution, setInsContribution] = React.useState(0);

  // Indicator and verification state
  const [keyOutcomes, setKeyOutcomes] = React.useState('');
  const [monRepOutcomes, setMonRepOutcomes] = React.useState('');
  const [media, setMedia] = React.useState({
    document: [],
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
          htmlColor="#30c2b0"
          css={`
            font-size: 6rem;
          `}
        />
      </div>
    ),
    buttons: [] as DialogBtnType[],
    onClose: () => setDialogProps(prevState => ({ ...prevState, open: false })),
  });

  // redux actions
  const allProjectsAction = useStoreActions(
    actions => actions.allProjects.fetch
  );
  const addReportAction = useStoreActions(actions => actions.addReport.fetch);
  const addReportClearAction = useStoreActions(
    actions => actions.addReport.clear
  );
  const snackbarAction = useStoreActions(
    actions => actions.syncVariables.setSnackbar
  );
  const projectBudgetDataAction = useStoreActions(
    actions => actions.projectBudgetData.fetch
  );
  const reportDetailAction = useStoreActions(
    actions => actions.reportDetail.fetch
  );
  const reportDetailClearAction = useStoreActions(
    actions => actions.reportDetail.clear
  );
  // redux data
  const allProjectsData = useStoreState(state =>
    get(state.allProjects.data, 'data', [])
  );
  const addReportData = useStoreState(state => state.addReport.data);
  const addReportLoading = useStoreState(state => state.addReport.loading);
  const projectBudgetData = useStoreState(
    state => state.projectBudgetData.data
  );
  const reportDetailData = useStoreState(state => state.reportDetail.data);

  useWindowUnloadEffect(addReportClearAction, true);

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
      values: { projectID: props.match.params.projectID },
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
      setPolicyPriority({
        label: get(reportDetailData, 'report.policy_priority.name', ''),
        value: get(reportDetailData, 'report.policy_priority.name', ''),
      });
      if (get(reportDetailData, 'report.media', []).length > 0) {
        const media = getMediaTileData(
          get(reportDetailData, 'report.media', [])
        );
        const initMedia = {
          document: [],
          video: [],
          picture: [],
        };
        media.forEach((m: any) => {
          get(initMedia, `[${m.type}]`, []).push({
            name: m.name,
            size: Math.random(),
          });
        });
        setMedia(initMedia);
        setMediaAdded(
          get(reportDetailData, 'report.media', []).map((m: any) => ({
            path: m,
          }))
        );
      }
      setBudget(get(reportDetailData, 'report.budget', 0));
      setInsContribution(get(reportDetailData, 'report.insContribution', 0));
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
      setFuturePlans(get(reportDetailData, 'report.plans', ''));
      setOtherComms(get(reportDetailData, 'report.other_comments', ''));
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
          : dialogProps.title,
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
    if (location && get(location, 'country.label', '') !== '') {
      setCountry(get(location, 'country') as { label: string; value: string });
    }
  }, [location]);

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
    e: React.ChangeEvent<HTMLInputElement>,
    type: 'picture' | 'video' | 'document'
  ) => {
    if (media[type]) {
      const newFiles: any = media[type];
      for (let i = 0; i < get(e, 'target.files.length', 0); i++) {
        newFiles.push(get(e, 'target.files', [])[i]);
      }
      setMedia({ ...media, [type]: newFiles });
    }
  };

  const removeMedia = (
    name: string,
    type: 'picture' | 'video' | 'document'
  ) => {
    setMedia({
      ...media,
      [type]: filter(media[type], (m: any) => m.name !== name),
    });
    setMediaAdded((prevData: never[]) => {
      return filter(prevData, (d: any) => {
        const splits = d.path.split('/');
        const itemname = splits[splits.length - 1].split('-')[1];
        return itemname !== name;
      }) as never[];
    });
  };

  const onSaveMediaCB = (data: any) => {
    setMediaAdded((prevData: never[]) => {
      return [...prevData, ...data] as never[];
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

  const draftSubmitEnabled = title.length > 0 || country.label.length > 0;

  const step2Enabled = validateOutcomeFields(title, country.label);

  const step3Enabled =
    step2Enabled &&
    validatePolicyPrioritiesFields(
      tarBenTotal,
      beneficiaryCounts,
      policyPriority.value,
      budget,
      get(projectBudgetData, 'data.remainBudget', 0),
      insContribution
    );

  const step4Enabled =
    step3Enabled && validateIndVerFields(keyOutcomes, monRepOutcomes);

  const step5Enabled =
    step4Enabled &&
    validateChallengesPlans(
      keyImplChallenges,
      otherProjOutObs,
      futurePlans,
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
            project: props.match.params.projectID,
            target_beneficiaries: beneficiaryCounts,
            policy_priority: policyPriority.value,
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
            insContribution,
            key_outcomes: keyOutcomes,
            monitor_report_outcomes: monRepOutcomes,
            key_implementation_challenges: keyImplChallenges,
            other_project_outcomes: otherProjOutObs,
            plans: futurePlans,
            other_comments: otherComms,
            isDraft: false,
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
            title: title === '' ? ' ' : title,
            project: props.match.params.projectID,
            target_beneficiaries: beneficiaryCounts,
            policy_priority: policyPriority.value,
            location: location
              ? {
                  long: (location as LocationModel).longitude,
                  lat: (location as LocationModel).latitude,
                }
              : null,
            media: mediaAdded.map((m: any) => m.path),
            country: country.label === '' ? ' ' : country.label,
            place_name: location ? (location as LocationModel).place : null,
            total_target_beneficiaries: tarBenTotal,
            total_target_beneficiaries_commited: tarBenTotal2,
            budget,
            insContribution,
            key_outcomes: keyOutcomes === '' ? ' ' : keyOutcomes,
            monitor_report_outcomes:
              monRepOutcomes === '' ? ' ' : monRepOutcomes,
            key_implementation_challenges:
              keyImplChallenges === '' ? ' ' : keyImplChallenges,
            other_project_outcomes:
              otherProjOutObs === '' ? ' ' : otherProjOutObs,
            plans: futurePlans === '' ? ' ' : futurePlans,
            other_comments: otherComms === '' ? ' ' : otherComms,
            isDraft: true,
          },
        },
      });
    }
  };

  return (
    <CreateReportLayout
      loading={addReportLoading}
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
            url: `/projects/${props.match.params.projectID}/detail`,
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
        insContribution,
        setInsContribution,
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
        removeMedia,
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
          insContribution,
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
    />
  );
}

export const CreateReport = withRouter(CreateReportFunc);

import { NavItemParams } from 'app/modules/common/consts';
import { BreadcrumbModel } from 'app/components/navigation/Breadcrumbs/model';
import { DialogProps } from 'app/components/surfaces/Dialog/model';

export type BeneficiaryCountsModel = {
  name: string;
  value: number | boolean;
};

export type MediaModel = {
  document: never[];
  video: never[];
  picture: never[];
};

export type LocationModel = {
  longitude: number;
  latitude: number;
  country?: {
    label: string;
    value: string;
  };
  place?: string | null;
};

export type LabelValueModel = {
  label: string;
  value: string;
};

export type LabelWeightModel = {
  label: string;
  weight: number;
  code?: number;
};

export type OutcomesPropsModel = {
  title: string;
  setTitle: Function;
  country: { label: string; value: string; iso3?: string };
  setCountry: Function;
  location: LocationModel | null;
  setLocation: Function;
  budget: number;
  setBudget: Function;
  remainBudget: number;
  insContribution: number;
  setInsContribution: Function;
};

export type PolicyPrioritiesPropsModel = {
  pillar: string;
  setPillar: Function;
  tarBenTotal: number;
  setTarBenTotal: Function;
  tarBenTotal2: number;
  setTarBenTotal2: Function;
  beneficiaryCounts: BeneficiaryCountsModel[];
  setBeneficiaryCounts: Function;
  policyPriorities: LabelWeightModel[];
  setPolicyPriorities: Function;
  sdgs: LabelWeightModel[];
  setSDGs: Function;
  funders: string[];
  setFunders: Function;
};

export type IndicatorVerificationPropsModel = {
  keyOutcomes: string;
  setKeyOutcomes: Function;
  inputsInvested: string;
  setInputsInvested: Function;
  activitiesUndertaken: string;
  setActivitiesUndertaken: Function;
  projectgoalsSocialbenefits: string;
  setProjectgoalsSocialbenefits: Function;
  importantFactors: string;
  setImportantFactors: Function;
  orgsPartners: string;
  setOrgsPartners: Function;
  partners: string;
  setPartners: Function;
  media: MediaModel;
  setMedia: Function;
  mediaAdded: any;
  onSaveMedia: Function;
  openMediaModal: boolean;
  setOpenMediaModal: Function;
  removeMedia: Function;
  onDialogCancel: Function;
};

export type ChallengesPlansPropsModel = {
  keyImplChallenges: string;
  setKetImplChallenges: Function;
  otherProjOutObs: string;
  setOtherProjOutObs: Function;
  addressChallenges: string;
  setAddressChallenges: Function;
  howImportantInsingerSupport: string;
  setHowImportantInsingerSupport: Function;
  applyForMoreFunding: string;
  setApplyForMoreFunding: Function;
  otherComms: string;
  setOtherComms: Function;
};

export type CreateReportLayoutModel = {
  tabs: NavItemParams[];
  changeRoute: Function;
  initialTabIndex: number;
  onNextBtnClick: Function;
  onBackBtnClick: Function;
  breadcrumbs: BreadcrumbModel;
  outcomesProps: OutcomesPropsModel;
  policyPrioritiesProps: PolicyPrioritiesPropsModel;
  indicatorVerificationProps: IndicatorVerificationPropsModel;
  challengesPlansProps: ChallengesPlansPropsModel;
  nextBtnDisabled: boolean;
  backBtnDisabled: boolean;
  step2Enabled: boolean;
  step3Enabled: boolean;
  step4Enabled: boolean;
  step5Enabled: boolean;
  showSubmitBtn: boolean;
  showDraftSubmitBtn: boolean;
  submit: Function;
  loading: boolean;
  saveDraft: Function;
  dialogProps: DialogProps;
  delDialogProps: DialogProps;
  showDeleteBtn: boolean;
  deleteReport: Function;
};

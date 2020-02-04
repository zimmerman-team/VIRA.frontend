import { NavItemParams } from 'app/modules/common/consts';
import { BreadcrumbModel } from 'app/components/navigation/Breadcrumbs/model';

export type BeneficiaryCountsModel = {
  name: string;
  value: number | boolean;
};

export type MediaModel = {
  sound: never[];
  video: never[];
  picture: never[];
};

export type LocationModel = {
  longitude: number;
  latitude: number;
  country: {
    label: string;
    value: string;
  };
  place: string | null;
};

export type OutcomesPropsModel = {
  title: string;
  setTitle: Function;
  country: { label: string; value: string };
  setCountry: Function;
  tarBenTotal: number;
  setTarBenTotal: Function;
  tarBenTotal2: number;
  setTarBenTotal2: Function;
  beneficiaryCounts: BeneficiaryCountsModel[];
  setBeneficiaryCounts: Function;
  location: LocationModel | null;
  setLocation: Function;
  policyPriority: { label: string; value: string };
  setPolicyPriority: Function;
  budget: number;
  setBudget: Function;
  remainBudget: number;
};

export type IndicatorVerificationPropsModel = {
  keyOutcomes: string;
  setKeyOutcomes: Function;
  monRepOutcomes: string;
  setMonRepOutcomes: Function;
  media: MediaModel;
  setMedia: Function;
  onSaveMedia: Function;
  openMediaModal: boolean;
  setOpenMediaModal: Function;
};

export type ChallengesPlansPropsModel = {
  keyImplChallenges: string;
  setKetImplChallenges: Function;
  otherProjOutObs: string;
  setOtherProjOutObs: Function;
  futurePlans: string;
  setFuturePlans: Function;
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
  indicatorVerificationProps: IndicatorVerificationPropsModel;
  challengesPlansProps: ChallengesPlansPropsModel;
  nextBtnDisabled: boolean;
  backBtnDisabled: boolean;
  step2Enabled: boolean;
  step3Enabled: boolean;
  step4Enabled: boolean;
  showSubmitBtn: boolean;
  submit: Function;
};

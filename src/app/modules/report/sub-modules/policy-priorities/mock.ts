import { ItemModel } from 'app/components/inputs/radiobuttons/RadioButtonGroup';

export interface PolicyPriorityProps {
  label: string;
  value: string;
  code?: number;
}
export const policyPriorities: PolicyPriorityProps[] = [
  { label: 'charts.items.refugees', value: 'Refugees' },
  { label: 'charts.items.drug_use', value: 'Drug use' },
  { label: 'charts.items.elderly', value: 'The Elderly' },
  { label: 'charts.items.prostitution', value: 'Prostitution' },
  {
    label: 'charts.items.poverty',
    value: 'Poverty reduction with a focus on youth and children',
  },
  { label: 'charts.items.homelessness', value: 'Homelessness' },
  {
    label: 'charts.items.prisoner',
    value: 'Prisoner rehabilitation / reintegration',
  },
];

export const pillars: ItemModel[] = [
  {
    value: 'Pillar 1: Social Good Projects',
    label: 'reports.form.textfield.radio_pillar_one',
  },
  {
    value: 'Pillar 2: Church & Organ restorations projects',
    label: 'reports.form.textfield.radio_pillar_two',
  },
];

export interface FunderProps {
  label: string;
  value: string;
}

export const funderList: FunderProps[] = [
  {
    label: 'Van den Ende',
    value: 'Van den Ende',
  },
  {
    label: 'Utopa',
    value: 'Utopa',
  },
  { label: 'Virtutis Opus', value: 'Virtutis Opus' },
  { label: 'Anton Jurgens Fonds', value: 'Anton Jurgens Fonds' },
  {
    label: 'Mr. August Fentener van Vlissingen Fonds',
    value: 'Mr. August Fentener van Vlissingen Fonds',
  },
  {
    label: 'John & Marine van Vlissingen Foundation',
    value: 'John & Marine van Vlissingen Foundation',
  },
  { label: 'Turing Foundation', value: 'Turing Foundation' },
  { label: 'K.F. Hein Fonds (kfHein)', value: 'K.F. Hein Fonds (kfHein)' },
  { label: 'De Van Baaren Stichting', value: 'De Van Baaren Stichting' },
  { label: 'Iona Stichting', value: 'Iona Stichting' },
  { label: 'Gieskes-Strijbis Fonds', value: 'Gieskes-Strijbis Fonds' },
  { label: 'Stiching Pieter Bastiaan', value: 'Stiching Pieter Bastiaan' },
  { label: 'Zabawas', value: 'Zabawas' },
  { label: 'Stichting Flowfund', value: 'Stichting Flowfund' },
  { label: 'Janivo Stichting', value: 'Janivo Stichting' },
  { label: 'Elise Mathilde Fonds', value: 'Elise Mathilde Fonds' },
  { label: 'De Haëlla Stichting', value: 'De Haëlla Stichting' },
  { label: 'Ribbink Van den Hoek', value: 'Ribbink Van den Hoek' },
  { label: 'Familie Stichting', value: 'Familie Stichting' },
  { label: 'Diorapthe', value: 'Diorapthe' },
  { label: 'LSBS', value: 'LSBS' },
  { label: 'FNO', value: 'FNO' },
  { label: 'Stichting Theodora Boasson', value: 'Stichting Theodora Boasson' },
  { label: 'Triodos Foundation', value: 'Triodos Foundation' },
  { label: 'Weeshuis der Doopsgezinden', value: 'Weeshuis der Doopsgezinden' },
  { label: 'ING Nederland fonds', value: 'ING Nederland fonds' },
  { label: 'Linda Speerstra Foundation', value: 'Linda Speerstra Foundation' },
  { label: 'Cura Child Foundation', value: 'Cura Child Foundation' },
  {
    label: 'Stichting Urgente Noden Nederland',
    value: 'Stichting Urgente Noden Nederland',
  },
  {
    label: 'Fundatie van de Vrijvrouwe van Renswoude',
    value: 'Fundatie van de Vrijvrouwe van Renswoude',
  },
  { label: 'Stichting Zonnige Jeugd', value: 'Stichting Zonnige Jeugd' },
  { label: 'Weeshuis der Doopsgezinden', value: 'Weeshuis der Doopsgezinden' },
  { label: 'Oranje Fonds', value: 'Oranje Fonds' },
  { label: 'Oranje Fonds', value: 'Oranje Fonds' },
  { label: 'Start Foundation', value: 'Start Foundation' },
  { label: 'Start Foundation', value: 'Start Foundation' },
  { label: 'Weeshuis der Doopsgezinden', value: 'Weeshuis der Doopsgezinden' },
  { label: 'Stichting Instituut Gak', value: 'Stichting Instituut Gak' },
  { label: 'Fonds 21', value: 'Fonds 21' },
  { label: 'Stichting A.M.V.J. Fonds', value: 'Stichting A.M.V.J. Fonds' },
  {
    label: 'Stichting Bevordering van Volkskracht',
    value: 'Stichting Bevordering van Volkskracht',
  },
  {
    label: 'Stichting YoungCapital Foundation',
    value: 'Stichting YoungCapital Foundation',
  },
  {
    label: 'Vereniging Trein 8.28 H.IJ.S.M.',
    value: '  Vereniging Trein 8.28 H.IJ.S.M.',
  },
  { label: '  VSBfonds', value: 'VSBfonds' },
  {
    label: 'Prince Bernhard Nature Fund (PBNF)',
    value: 'Prince Bernhard Nature Fund (PBNF)',
  },
  { label: 'Stichting De Versterking', value: 'Stichting De Versterking' },
  { label: 'Stichting Dinamo Fonds', value: 'Stichting Dinamo Fonds' },
  { label: 'Stichting ifund', value: 'Stichting ifund' },
  { label: 'Stichting Jacques de Leeuw', value: 'Stichting Jacques de Leeuw' },
  {
    label: 'Stichting Mundo Crastino Meliori',
    value: 'Stichting Mundo Crastino Meliori',
  },
];

export const sdgs: PolicyPriorityProps[] = [
  { label: 'sdgs.1', value: 'No poverty', code: 1 },
  { label: 'sdgs.2', value: 'Zero hunger', code: 2 },
  { label: 'sdgs.3', value: 'Good health and well-being', code: 3 },
  { label: 'sdgs.4', value: 'Quality education', code: 4 },
  { label: 'sdgs.5', value: 'Gender equality', code: 5 },
  { label: 'sdgs.6', value: 'Clean water and sanitation', code: 6 },
  { label: 'sdgs.7', value: 'Affordable and clean energy', code: 7 },
  { label: 'sdgs.8', value: 'Decent work and economic growth', code: 8 },
  {
    label: 'sdgs.9',
    value: 'Industry, innovation and infrastructure',
    code: 9,
  },
  { label: 'sdgs.10', value: 'Reduce inequalities', code: 10 },
  { label: 'sdgs.11', value: 'Sustainable cities and communities', code: 11 },
  { label: 'sdgs.12', value: 'Sustainable cities and communities', code: 12 },
  { label: 'sdgs.13', value: 'Climate action', code: 13 },
  { label: 'sdgs.14', value: 'Life below water', code: 14 },
  { label: 'sdgs.15', value: 'Life on land', code: 15 },
  {
    label: 'sdgs.16',
    value: 'Peace, justice and strong institutions',
    code: 16,
  },
  { label: 'sdgs.17', value: 'Partnerships for the goals', code: 17 },
];

export const pillar1PolicyPriorities: PolicyPriorityProps[] = [
  {
    label: 'charts.items.poverty',
    value: 'Poverty reduction',
  },
  {
    label: 'charts.items.children_youth_engagement',
    value: 'Children & Youth engagement',
  },
  {
    label: 'charts.items.vulnerable_groups',
    value: 'Vulnerable groups in society',
  },
  {
    label: 'charts.items.refugees',
    value: 'Helping refugees',
  },
  {
    label: 'charts.items.prostitution',
    value: 'Reducing forced prostitution',
  },
  {
    label: 'charts.items.drugs',
    value: 'Reducing drug abuse & helping drug addicts',
  },
  {
    label: 'charts.items.emancipation',
    value: 'Emancipation of women and girls',
  },
  {
    label: 'charts.items.prisoner',
    value: 'Prisoner rehabilitation',
  },
  {
    label: 'charts.items.sustainability',
    value: 'Sustainability',
  },
];

export const pillar2PolicyPriorities: PolicyPriorityProps[] = [
  { label: 'charts.items.heritage', value: 'Cultural Heritage' },
];

export interface projectMockProps {
  project_id: string;
  project: string;
  project_description: string;
  category: string;
  duration: string;
  start_date: Date | string;
  end_date: Date | string;
  total_amount: number;
  total_insinger_contribution: number;
  decision_date: Date | string;
  decision: string;
  allocated_amount: number;
  released_amount: number | null;
  paid_amount: number;
  organisation: string;
  organisation_link: string;
  org_type: string;
  street: string;
  house_number: string;
  additional_house_number: string;
  postcode: string;
  place: string;
  country: string;
  telephone: string;
  organisation_email: string;
  website: string;
  family_name: string;
  initial: string;
  insertion: string;
  title: string;
  email: string;
  login_email: string;
  sex: string;
  role: string;
}

export const projectMockData: projectMockProps = {
  project_id: '2017175',
  project: 'Pauluskerk Rotterdam projecten 2018',
  project_description:
    'De Pauluskerk Rotterdam streeft naar een gelijke kans op een menswaardig bestaan voor iedereen en zoekt naar wegen om dit mogelijk te maken. Ons doel is om mensen die, om wat voor reden dan ook, leven in de marge van de samenleving nieuw perspectief te bieden en hen te helpen een zinvolle plaats te vinden. \n\nWe (1) helpen daar waar geen helper is, (2) vangen mensen op en helpen hen hun levenskracht te versterken, en (3) vormen een open geloofsgemeenschap (geen onderdeel van deze aanvraag). Onze hulp is hard nodig. Ruim 18% van de Rotterdammers leeft onder de armoedegrens. Dat zijn bijna 120.000 mensen. EÃ©n op de vier Rotterdamse kinderen groeit op in armoede. Zoâ€™n 27.000 Rotterdammers hebben zeer ernstige, problematische schulden. Het aantal daklozen in Nederland groeit al jaren weer en was in 2016 tot 31.000 gestegen. Rotterdam is de stad met de snelst groeiende armoede. Een groeiende groep Rotterdammers redt het niet op eigen kracht. Voor hen is het economische herstel van de laatste jaren nog altijd niet zichtbaar en merkbaar geworden. Ook leeft in de Rotterdamse regio een groot aantal mensen uit Midden- en Oost-Europa. Een deel van hen komt in de problemen wanneer het werk stopt en komt naar de Pauluskerk voor opvang en hulp.\n\nWij vragen uw steun om in 2018 een aantal specifieke activiteiten te kunnen (blijven) uitvoeren, te weten:\n\n1. Helpen waar geen helper is\nDe Pauluskerk biedt (nood)hulp om te voorzien in menselijke basisbehoeften. Daarnaast zet de Pauluskerk zich in voor rechtvaardiger van wet- en regelgeving zodat mensen in de marge van de samenleving niet, buiten hun schuld om, in de marge blijven. Concreet gaat het in 2018 om:\n\n-\tHet Open Huis dat elke dag zoâ€™n 250 mensen verwelkomt en opvangt;\n-\tHet Eethuis dat voorziet in een grote behoefte en 5 keer per week zoâ€™n 50 tot 60 mensen voedt met een maaltijd;\n-\tDe Nachtopvang waar elke nacht tot 24 mensen verblijven;\n-\tCrisisopvang; om in noodgevallen mensen snel van onderdak te voorzien willen we in 2018 beschikken over een kleine crisisopvang, te huren bij een van de woningbouwcorporaties;\n-\tDe maatschappelijke, diaconale, medische en juridische spreekuren, waar honderden mensen per jaar een beroep op doen;\n-\tDe inzet van Pauluskerk voor een rechtvaardiger wet- en regelgeving om de leefomgeving van bezoekers en mensen in de stad structureel te verbeteren, onder andere via de nieuwe projecten Warm Rotterdam en Onvoorwaardelijke Zorgplicht, en via het organiseren van de Rotterdamse Daklozendagen;\n-\tHet organiseren van â€˜dagjes uitâ€™ en het geven van extra aandacht rondom de feestdagen.\n\n2. Versterken levenskracht\nDe Pauluskerk zet, naast alle hulpverlening, expliciet in op het vergroten van de levenskracht van bezoekers, het stimuleren van intermenselijk contact en het bijdragen aan menselijke waardigheid. Daarnaast is de ambitie om waardevolle ontmoetingen te faciliteren tussen â€˜kansarmâ€™ en â€˜kansrijkâ€™, zodat en nieuwe verbindingen ontstaan tussen deze twee vaak langs elkaar levende werelden. De Pauluskerk werkt via twee wegen aan het versterken van levenskracht:\n\n-\tPauluskerk kunst en cultuur:\no\tDit gebeurt onder andere via het nieuwe Culturele Spreekuur, het Open Podium en via culturele werkvormen waaronder schilderen, tekenen, gedichten en verhalen maken, toneel en muzieklessen;\n-\tPauluskerk Zinvolle Dagbesteding en Bouwen aan Waardigheid:\no\tWekelijkse taallessen Nederlands, Engels, en Spaans;\no\tDe computerwerkplaats, waar bezoekers E-learning skills ontwikkelen en een ECDL-certificaat (basiscertificaat computervaardigheden) kunnen behalen;\no\tDe Lunchroom Paulus, de fietsenwerkplaats en vanaf 2018 ook de houtwerkplaats- en winkel. Hier ontwikkelen mensen praktische vaardigheden en ontmoet â€˜kansarmâ€™ en â€˜kansrijkâ€™ elkaar;\no\tDe Kledingwinkel en het Kledingatelier, die (nood)kleding bieden aan iedereen die dit nodig heeft en waar kleding wordt gemaakt en versteld;\no\tActieve deelname aan sport, spel en ontspanning;\n\nEr is geen sprake van overhe',
  category: 'diversen',
  duration: '',
  start_date: '',
  end_date: '',
  // on the front-end it says:742441€
  total_amount: 752441,
  total_insinger_contribution: 5000,
  decision_date: '19-3-2018',
  decision: 'Toekenning',
  allocated_amount: 10000,
  released_amount: null,
  paid_amount: 10000,
  organisation: 'Stichting Diaconaal Centrum Pauluskerk',
  organisation_link: '/grantee/5e411b95e1886e08a3886cd1/detail',
  org_type: '',
  street: 'Postbus',
  house_number: '193',
  additional_house_number: '',
  postcode: '3780 BD',
  place: 'Voorthuizen',
  country: 'Nederland',
  telephone: '',
  organisation_email: 'penningmeester@ngkdeontmoeting.nl',
  website: 'https://www.ngkdeontmoeting.nl',
  family_name: 'Reijersen',
  initial: 'Albert',
  insertion: '',
  title: '',
  email: 'penningmeester@ngkdeontmoeting.nl',
  login_email: 'penningmeester@ngkdeontmoeting.nl',
  sex: 'male',
  role: 'voorzitter kerkenraad',
};

export const policyPrioritiesToLangKey = (key: string) => {
  switch (key) {
    case 'Poverty reduction':
      return 'charts.items.poverty';
    case 'Prisoner rehabilitation':
      return 'charts.items.prisoner';
    case 'Reducing forced prostitution':
      return 'charts.items.prostitution';
    case 'Helping refugees':
      return 'charts.items.refugees';
    case 'Children & Youth engagement':
      return 'charts.items.children_youth_engagement';
    case 'Vulnerable groups in society':
      return 'charts.items.vulnerable_groups';
    case 'Reducing drug abuse & helping drug addicts':
      return 'charts.items.drugs';
    case 'Sustainability':
      return 'charts.items.sustainability';
    case 'Emancipation of women and girls':
      return 'charts.items.emancipation';
    case 'Cultural heritage':
      return 'charts.items.heritage';
    default:
      return key;
  }
};

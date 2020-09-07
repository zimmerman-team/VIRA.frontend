/* eslint-disable no-dupe-keys */
// @ts-nocheck

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import landing_nl from 'app/languages/nl/landing.json';
import landing_en from 'app/languages/en/landing.json';
import home_nl from 'app/languages/nl/home.json';
import home_en from 'app/languages/en/home.json';
import grantees_nl from 'app/languages/nl/grantees.json';
import grantees_en from 'app/languages/en/grantees.json';
import sidebar_nl from 'app/languages/nl/sidebar.json';
import sidebar_en from 'app/languages/en/sidebar.json';
import projects_nl from 'app/languages/nl/projects.json';
import projects_en from 'app/languages/en/projects.json';
import reports_nl from 'app/languages/nl/reports.json';
import reports_en from 'app/languages/en/reports.json';
import charts_nl from 'app/languages/nl/charts.json';
import charts_en from 'app/languages/en/charts.json';
import faq_nl from 'app/languages/nl/faq.json';
import faq_en from 'app/languages/en/faq.json';
import sdgs_en from 'app/languages/en/sdgs.json';
import sdgs_nl from 'app/languages/nl/sdgs.json';
import user_management_en from 'app/languages/en/user_management.json';
import user_management_nl from 'app/languages/nl/user_management.json';
import search_en from 'app/languages/en/search.json';
import search_nl from 'app/languages/nl/search.json';
import breadcrumbs_en from 'app/languages/en/breadcrumbs.json';
import breadcrumbs_nl from 'app/languages/nl/breadcrumbs.json';
import sdg_descriptions_en from 'app/languages/en/sdg_descriptions.json';
import sdg_descriptions_nl from 'app/languages/nl/sdg_descriptions.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: 'nl',
    fallbackLng: 'en',
    debug: false,

    // have a common namespace used around the full app
    ns: ['translations'],
    defaultNS: 'translations',

    // keySeparator: '.', // we use content as keys

    interpolation: {
      escapeValue: false,
    },
    resources: {
      nl: {
        translations: {
          landing: landing_nl,
          home: home_nl,
          grantees: grantees_nl,
          projects: projects_nl,
          reports: reports_nl,
          sidebar: sidebar_nl,
          faq: faq_nl,
          charts: charts_nl,
          sdgs: sdgs_nl,
          user_management: user_management_nl,
          search: search_nl,
          breadcrumbs: breadcrumbs_nl,
          sdg_descriptions: sdg_descriptions_nl,
          'Manage teams & users': 'Beheer teams & gebruikers',
          'Manage your account': 'Beheer jouw account',
          'Sign out': 'Uitloggen',
          'Privacy Policy and Terms': 'Privacy Policy and Terms',
          Projects: 'Projecten',
          Grantees: 'Begunstigden',
          Grantee: 'Begunstigde',
          'Priority Area': 'Prioriteitsgebied',
          label: 'label',
          'Insinger Foundation policy priorities':
            'Insinger Foundation policy priorities',
          'Key outcomes': 'Belangrijkste resultaten',
          'Monitor and report on the outcomes':
            'Monitor and report on the outcomes',
          Media: 'Media',
          'Key implementation challenges': 'Key implementation challenges',
          'Other project outcomes and observations':
            'Other project outcomes and observations',
          'Future plans': 'Future plans',
          'Other comments': 'Other comments',
          'Cookie Policy': 'Cookie Policy',
          // intent text area
          'Please tell us how you intend to monitor and report on the outcomes listed above':
            'Please tell us how you intend to monitor and report on the outcomes listed above',
          'Please tell us how you intend to monitor and report on the outcomes listed above':
            'Please tell us how you intend to monitor and report on the outcomes listed above',
          'If you have baseline data (the data you track progress against) and a means of verification (how you intend to obtain the data and from which sources) please also provide that information.':
            'If you have baseline data (the data you track progress against) and a means of verification (how you intend to obtain the data and from which sources) please also provide that information.',
          // add media button
          'Add media (Optional)': 'Add media (Optional)',
          // add media layout
          name: 'naam',
          // add media title
          'Add Media': 'Add Media',
          // super admin module
          'First Name': 'Voornaam',
          'Last Name': 'Achternaam',
          Email: 'Email',
          Save: 'Opslaan',
          // manage users Teams
          Manage: 'Beheer',
          Add: 'Toevoegen',
          // submitted
          'Something went wrong': 'Iets is mis gegaan',
          'Go to report': 'Ga naar rapport',
          Search: 'Zoeken',
          Notifications: 'Notificaties',
          Profile: 'Profiel',
          'Search…': 'Zoeken…',
          // table
          'Project Title': 'Project Title',
          '*earliest and latest activity start dates':
            '*earliest and latest activity start dates',
          'Total project amount': 'Total project amount',
          'Project duration': 'Project duration',
          'project id:': 'project id:',
          // table 2
          Decision: 'Decision',
          'Project title': 'Project title',
          Organisation: 'Organisation',
          'Grantee Name': 'Grantee Name',
          'Grantee Type': 'Grantee Type',
          Place: 'Place',
          Country: 'Country',
          Email: 'Email',
          Website: 'Website',
          'Title of Reports': 'Titel van Rapporten',
          Date: 'Date',

          //  --------------------
          UK: 'NL',
          'Sign in': 'Log in',
          Email: 'E-mail',
          Password: 'wachtwoord',
          'Forgot Password': 'wachtwoord opvragen',
          Dashboard: 'Dashboard',
          Reports: 'Rapportage',
          FAQ: ' FAQ',
          //  --------------------
          'Total Reports': 'Totaal rapporten',
          //  --------------------
          'Drug use': 'drugsgebruik',
          Homelessness: 'Dakloos',
          'Poverty reduction with a focus on youth and children':
            'Armoedebestrijding met een focus op jeugd en kinderen',
          'Prisoner rehabilitation /reintegration':
            'Rehabilitatie / reïntegratie van gevangenen',
          Prostitution: 'Prostitutie',
          Refugees: 'Vluchtelingen',
          'The Elderly': 'Ouderen',
          //  --------------------
          Target: 'Doel',
          Budget: 'Budget',
          //  --------------------
          'Priority Area': 'Prioriteitsgebied',
          SDG: 'SDG',
          Map: 'Kaart',
          ID: 'identifier',
          'Decision date': 'Beslissingsdatum',
          allocated_amount: 'Toegewezen bedrag',
          'Project title': 'Titel project',
          Organisation: 'Organisatie',
          //  --------------------
          'Grantee Name': 'Naam begunstigde',
          'Grantee Name': 'Type begunstigde',
          Place: 'locatie',
          Country: 'land',

          Website: 'Website',
          //  --------------------
          'Rows per page': 'Rijen per pagina',
          'Title of Reports': 'Rapportage titel',
          Date: 'Datum',
          //  --------------------
          'Manage Team & Users': ' Gebruikersbeheer',
          'Manage your account': 'Uw account',
          'Sign out': 'Log uit',
          'Privacy Policy and Terms': 'Privacy en voorwaarden',
          //  --------------------
          Teams: 'Organisaties',
          'Add Team': 'Voeg organisatie toe',
          'Created by': 'Toegevoegd door',
          Created: 'Aanmaakdatum',
          'Add Title': 'Naam organisatie',
          'Add Team Member': 'voeg gebruiker toe',
          Save: 'Sla op',
          //  --------------------
          All: 'Alles',
          //  --------------------
          Manage: 'Beheer',
          Add: 'Voeg toe',
          //  --------------------
          'First Name': 'Voornaam',
          'Last Name': 'achternaam',
          Email: 'E-mail',
          Save: 'Sla op',
          //  --------------------
          Search: 'Zoek',
          'Sorry, no matching records found':
            'Helaas heb ik niets voor u kunnen vinden',
          //  --------------------
          'Key outcomes': 'Belangrijkste uitkomsten',
          'Indicator and verification': 'Indicator en verificatie',
          'project id': 'project nr.',
          //  --------------------
          Outcomes: 'Uitkoms.',
          'Indicator and verification': 'Indicator en verificatie',
          'Challenges and plans': 'Uitdagingen en plannen',
          Preview: 'Voorvertoning',
          Title: 'Title',
          Type: 'Uw titel',
          'Project location': 'Locatie',
          'Select exact location (optional)': 'Selecteer exacte locatie',
          'Insinger Foundation Policy Priorities': 'Themas Insinger Stichting',
          'For the selected policy priority, the relevant SDGs will automatically be mapped':
            'Uw selectie zal automatisch aan een passende SDG worden gekoppeld',
          Budget: 'Budget',
          'Remaning fot this project': 'Nog te souperen:',
          'Target beneficiaries': 'Doel begunstigden',
          'Total target number:': 'Totaal doelnummer:',
          'Total commited number:': ' Totaal toegewijd aantal:',
          'Of which the beneficiaries will likely include approximately':
            'Waarvan de begunstigden waarschijnlijk ongeveer zullen opnemen',
          'Children/Young people': 'Kinderen / jongeren',
          Refugees: 'Vluchtelingen',
          Elderly: 'Ouderen',
          'Low income individuals': 'Personen met een laag inkomen',
          Women: 'vrouwen',
          Back: 'Terug',
          Next: 'Volgende',
          'Please describe the key outcomes the project aims to achieve':
            'Beschrijf de belangrijkste resultaten die het project wil bereiken',
          'Please tell us how you intend to monitor and report on the outcomes listed above':
            'Vertel ons wat u van plan bent te volgen en te rapporteren over de hierboven vermelde resultaten',
          'If you have baseline data (the data you track progress against) and a means of verification (how you intend to obtain the data and from which sources) please also provide that information':
            'Als u basisgegevens hebt (de gegevens waartegen u de voortgang bijhoudt) en een verificatiemiddel (hoe u de gegevens wilt verkrijgen en uit welke bronnen), geeft u die informatie ook op',
          'Add Media': 'Voeg bestand(en) toe (optioneel)',
          'Add Media': 'Voeg bestand(en) toe',
          Sound: 'Geluid',
          Video: 'Video',
          Picture: 'Beeld',
          'Add Picture': 'Voeg beeld toe',
          Cancel: 'Annuleer',
          Save: 'Sla op',
          'Key implementation challenges':
            'Belangrijke implementatie-uitdagingen',
          'Please indicate the key implementation challenges experience and how these were addressed':
            'Geef de belangrijkste ervaringen met implementatie-uitdagingen aan en hoe deze zijn aangepakt',
          'Other project outcomes and observations':
            'Andere projectresultaten en observaties',
          'Did the project achieve any other unexpected (positive or negative) outcomes':
            'Heeft het project andere onverwachte (positieve of negatieve) resultaten bereikt',
          'Future plans': 'Plannen voor de toekomst',
          'Are you likely to apply for funding for future activities from the Insinger Foundation within the next 1-2 years?':
            'Verwacht u binnen de komende 1-2 jaar waarschijnlijk financiering voor toekomstige activiteiten van de Insinger Stichting?',
          'Other comments': 'Overig commentaar',
          'Please let us know if you want to share other observations or comments with the Insinger Foundation':
            'Laat het ons weten als u andere opmerkingen of opmerkingen wilt delen met de Insinger Foundation',
          Title: 'Titel',
          Country: 'Land',
          Submit: 'Verstuur',
        },
      },
      en: {
        translations: {
          landing: landing_en,
          home: home_en,
          grantees: grantees_en,
          projects: projects_en,
          reports: reports_en,
          sidebar: sidebar_en,
          faq: faq_en,
          charts: charts_en,
          sdgs: sdgs_en,
          user_management: user_management_en,
          search: search_en,
          breadcrumbs: breadcrumbs_en,
          sdg_descriptions: sdg_descriptions_en,
          'Manage teams & users': 'Manage teams & users',
          'Manage your account': 'Manage your account',
          'Sign out': 'Sign out',
          'Privacy Policy and Terms': 'Privacy Policy and Terms',
          Projects: 'Projects',
          Grantees: 'Grantees',
          Grantee: 'Grantee',
          Rerports: 'Reports',
          'Priority Area': 'Priority Area',
          label: 'label',
          'Insinger Foundation policy priorities':
            'Insinger Foundation policy priorities',
          'Key outcomes': 'Key outcomes',
          'Monitor and report on the outcomes':
            'Monitor and report on the outcomes',
          Media: 'Media',
          'Key implementation challenges': 'Key implementation challenges',
          'Other project outcomes and observations':
            'Other project outcomes and observations',
          'Future plans': 'Future plans',
          'Other comments': 'Other comments',
          'Cookie Policy': 'Cookie Policy',
          // ------------------------------------------
          // intent text area
          'Please tell us how you intend to monitor and report on the outcomes listed above':
            'Please tell us how you intend to monitor and report on the outcomes listed above',
          'Please tell us how you intend to monitor and report on the outcomes listed above':
            'Please tell us how you intend to monitor and report on the outcomes listed above',
          'If you have baseline data (the data you track progress against) and a means of verification (how you intend to obtain the data and from which sources) please also provide that information.':
            'If you have baseline data (the data you track progress against) and a means of verification (how you intend to obtain the data and from which sources) please also provide that information.',
          // add media buttons
          'Add media (Optional)': 'Add media (Optional)',
          // add media layout
          name: 'name',
          // add media title
          'Add Media': 'Add Media',
          // super admin module
          'First Name': 'First Name',
          'Last Name': 'Last Name',
          Email: 'Email',
          Save: 'Save',
          // manage users Teams
          Manage: 'Manage',
          Add: 'Add',
          // submitted
          'Something went wrong': 'Something went wrong',
          'Go to report': 'Go to report',
          Search: 'Search',
          Notifications: 'Notifications',
          Profile: 'Profile',
          'Search…': 'Search…',
          // table
          'Project Title': 'Project Title',
          '*earliest and latest activity start dates':
            '*earliest and latest activity start dates',
          'Total project amount': 'Total project amount',
          'Project duration': 'Project duration',
          'project id:': 'project id:',
          // table 2
          'Decision date': 'Decision date',
          'Allocated amount': 'Toegewezen bedrag',
          Decision: 'Decision',
          'Project title': 'Project title',
          Organisation: 'Organisation',
          'Grantee Name': 'Grantee Name',
          'Grantee Type': 'Grantee Type',
          Place: 'Place',
          Country: 'Country',
          Email: 'Email',
          Website: 'Website',
          'Title of Reports': 'Title of Reports',
          Date: 'Date',
          //  --------------------
          UK: 'NL',
          'Sign in': 'Log in',
          Email: 'E-mail',
          Password: 'wachtwoord',
          'Forgot Password': 'wachtwoord opvragen',
          Dashboard: 'Dashboard',
          Reports: 'Reports',
          FAQ: ' FAQ',
          //  --------------------
          'Total Reports': 'Totaal rapporten',
          //  --------------------
          'Drug use': 'drugsgebruik',
          Homelessness: 'Dakloos',
          'Poverty reduction with a focus on youth and children':
            'Armoedebestrijding met een focus op jeugd en kinderen',
          'Prisoner rehabilitation /reintegration':
            'Rehabilitatie / reïntegratie van gevangenen',
          Prostitution: 'Prostitutie',
          Refugees: 'Vluchtelingen',
          'The Elderly': 'Ouderen',
          //  --------------------
          Target: 'Target',
          Budget: 'Budget',
          //  --------------------
          'Priority Area': 'Prioriteitsgebied',
          SDG: 'SDG',
          Map: 'Kaart',
          ID: 'identifier',
          'Project title': 'Titel project',
          Organisation: 'Organisatie',
          //  --------------------
          'Grantee Name': 'Naam begunstigde',
          'Grantee Name': 'Type begunstigde',
          Place: 'locatie',
          Country: 'land',
          Email: 'e-mail',
          Website: 'Website',
          //  --------------------
          'Rows per page': 'Rijen per pagina',
          'Title of Reports': 'Rapportage titel',
          Date: 'Datum',
          //  --------------------
          'Manage Team & Users': ' Gebruikersbeheer',
          'Manage your account': 'Uw account',
          'Sign out': 'Log uit',
          'Privacy Policy and Terms': 'Privacy en voorwaarden',
          //  --------------------
          Teams: 'Organisaties',
          'Add Team': 'Voeg organisatie toe',
          'Created by': 'Created by',
          Created: 'Created',
          'Add Title': 'Naam organisatie',
          'Add Team Member': 'voeg gebruiker toe',
          Save: 'Sla op',
          //  --------------------
          All: 'Alles',
          //  --------------------
          Manage: 'Beheer',

          //  --------------------
          'First Name': 'Voornaam',
          'Last Name': 'achternaam',
          Email: 'E-mail',
          Save: 'Sla op',
          //  --------------------
          Search: 'Zoek',
          'Sorry, no matching records found':
            'Helaas heb ik niets voor u kunnen vinden',
          //  --------------------
          'Key outcomes': 'Belangrijkste uitkomsten',
          'Indicator and verification': 'Indicator en verificatie',
          'project id': 'project nr.',
          //  --------------------
          Outcomes: 'Uitkoms.',
          'Indicator and verification': 'Indicator en verificatie',
          'Challenges and plans': 'Uitdagingen en plannen',
          Preview: 'Voorvertoning',
          Title: 'Title',
          Type: 'Uw titel',
          'Project location': 'Locatie',
          'Select exact location (optional)': 'Selecteer exacte locatie',
          'Insinger Foundation Policy Priorities': 'Themas Insinger Stichting',
          'For the selected policy priority, the relevant SDGs will automatically be mapped':
            'Uw selectie zal automatisch aan een passende SDG worden gekoppeld',
          Budget: 'Budget',
          'Remaning fot this project': 'Nog te souperen:',
          'Target beneficiaries': 'Doel begunstigden',
          'Total target number:': 'Totaal doelnummer:',
          'Total commited number:': ' Totaal toegewijd aantal:',
          'Of which the beneficiaries will likely include approximately':
            'Waarvan de begunstigden waarschijnlijk ongeveer zullen opnemen',
          'Children/Young people': 'Kinderen / jongeren',
          Refugees: 'Vluchtelingen',
          Elderly: 'Ouderen',
          'Low income individuals': 'Personen met een laag inkomen',
          Women: 'vrouwen',
          Back: 'Terug',
          Next: 'Volgende',
          'Please describe the key outcomes the project aims to achieve':
            'Beschrijf de belangrijkste resultaten die het project wil bereiken',
          'Please tell us how you intend to monitor and report on the outcomes listed above':
            'Vertel ons wat u van plan bent te volgen en te rapporteren over de hierboven vermelde resultaten',
          'If you have baseline data (the data you track progress against) and a means of verification (how you intend to obtain the data and from which sources) please also provide that information':
            'Als u basisgegevens hebt (de gegevens waartegen u de voortgang bijhoudt) en een verificatiemiddel (hoe u de gegevens wilt verkrijgen en uit welke bronnen), geeft u die informatie ook op',
          'Add Media': ' Voeg bestand(en) toe (optioneel)',
          'Add Media': 'Voeg bestand(en) toe',
          Sound: 'Geluid',
          Video: 'Video',
          Picture: 'Beeld',
          'Add Picture': 'Voeg beeld toe',
          Cancel: 'Annuleer',
          Save: 'Sla op',
          'Key implementation challenges':
            'Belangrijke implementatie-uitdagingen',
          'Please indicate the key implementation challenges experience and how these were addressed':
            'Geef de belangrijkste ervaringen met implementatie-uitdagingen aan en hoe deze zijn aangepakt',
          'Other project outcomes and observations':
            'Andere projectresultaten en observaties',
          'Did the project achieve any other unexpected (positive or negative) outcomes':
            'Did the project achieve any other unexpected (positive or negative) outcomes',
          'Future plans': 'Future plans',
          'Are you likely to apply for funding for future activities from the Insinger Foundation within the next 1-2 years?':
            'Are you likely to apply for funding for future activities from the Insinger Foundation within the next 1-2 years?',
          'Other comments': 'Other comments',
          'Please let us know if you want to share other observations or comments with the Insinger Foundation':
            'Please let us know if you want to share other observations or comments with the Insinger Foundation',
          Title: 'Title',
          Country: 'Country',
          Submit: 'Submit',
        },
      },
    },
  });

export default i18n;

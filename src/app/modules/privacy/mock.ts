export const privacyDescriptionMock =
  'Insinger Stichting (“Insinger Stichting, “Wij”, “Ons”) is een Algemeen Nut beogende Instelling en bestaat op basis van vertrouwen, transparantie, en expertise. Wij gaan zorgvuldig om met uw persoonsgevens, en willen via deze verklaring (“Privacy Verklaring”) informatie verstrekken over de wijze waarop Wij omgaan met persoonsgegevens.';

interface PrivacyItemParams {
  title: string;
  description: string;
  listItems?: {
    description: string;
    items: string[];
  }[];
}

export const PrivacyModuleItemsMock: PrivacyItemParams[] = [
  {
    title: 'Wat zijn Persoonsgegevens?',
    description:
      'Persoonsgegevens zijn allerlei gegevens die een natuurlijk persoon kunnen identificeren (“Persoonsgegevens”). Als u giften bij ons aanvraagt, een woning van ons huurt of anderszins contact met ons heeft dan vragen Wij om allerlei informatie om die diensten te kunnen uitvoeren, zoals naam, adres, en allerlei gegeven inzake uw financiële huishouding. Ook zullen wij uw Persoonsgegevens moeten delen met door u geselecteerde derden om de diensten uit te kunnen voeren. Het verzamelen, opslaan, gebruiken en bewerken van deze Persoonsgegevens wordt door de wet als ‘verwerken’ gezien. Wij houden ons aan de toepasselijke wet- en regelgeving, waaronder de Algemene Verordening Gegevensbescherming (AVG) wanneer Wij uw Persoonsgegevens verwerken.',
  },
  {
    title: 'Hieronder leest u hoe en wat Wij kunnen verwerken.',
    description: '',
  },
  {
    title: 'Contactgegevens Verwerkingsverantwoordelijke /Verwerker',
    description:
      'Insinger Stichting is de verwerkingsverantwoordelijke voor Persoonsgegevens die wij zelfstandig verzamelen, en is de verwerker voor Persoonsgegevens die Wij in het kader van een overeenkomst met u, of de organisatie waarmee u werkt, verwerkt. Wij zijn gevestigd aan de Kon. Wilhelminalaan 23, 3818 HN Amersfoort. Telefonisch kunt u ons bereiken via +31(0) 33 467 1015 en per email via insinger@welstand.nl Als u uw Persoonsgegevens wil herzien, corrigeren, of verwijderen, informatie wil of een klacht wil indienen, dan kunt u met Ons contact opnemen via de voornoemde communicatiekanalen.',
  },
  {
    title: 'Toepassing Privacy Verklaring',
    description:
      'Deze Privacy Verklaring is van toepassing voor alle personen van wie Insinger Stichting Persoonsgegevens verwerkt met uitzondering van het personeel, partners, onderaannemers, inleenkrachten, en sollicitanten van Insinger Stichting. In sommige gevallen kunnen onze communicaties of websites doorverwijzen naar applicaties of websites van derden. Wij selecteren deze derden zorgvuldig en op relevantie, maar Wij zijn wij niet verantwoordelijk voor de inhoud van die communicatie, websites of applicaties van deze derden, en hebben we ook geen invloed of verantwoordelijkheid voor het verwerken van Persoonsgegevens door deze derden. Deze Privacy Verklaring is niet van toepassing op deze communicaties, websites of applicaties van derden.',
  },
  {
    title: 'Waarvoor worden uw Persoonsgegevens gebruikt?',
    description:
      'Voor het uitvoeren van een overeenkomst op grond waarvan u Ons opdracht hebt verstrekt tot het leveren van adminstratie- en/of beheerdiensten door verwerkers. Uw contactgevens, en afhankelijk van uw vraag, andere zakelijke en financiële gegevens zijn afhankelijk van het geval. Voorts worden de gegevens gebruikt voor facturatie van de verleende diensten of uitbetalen van giften. Verder zijn Wij verplicht voor de nakoming van een aantal van wettelijke verplichtingen (uit Wft onder andere) om uw kopieën van uw identiteitsbewijzenn en andere persoonlijke gegevens op te vragen, te verifiëren en op te slaan. Daarnaast verwerken wij de Persoonsgegevens (zoals bijvoorbeeld naam, e- mailadres, telefoon, sociale mediagegevens) voor het onderhouden van Onze relatie met u, zoals voor het beantwoorden van vragen en klachten en voor het delen van mogelijk relevante informatie. Uw contactgegevens worden bijgehouden in ons CRM systeem en kunnen bijvoorbeeld worden gebruikt voor het toezenden van informatie die u aan ons hebt gevraagd. Wij verwerken uw Persoonsgegevens ook in het kader van onderzoek naar voorkoming van fraude, monitoring, en onderzoek naar fraude en in het kader van mogelijke beveiligingsincidenten. Wij maken op onze website Insingerstichting.nl géén gebruik van cookies, noch verkopen wij enige klantdata aan derden.',
  },
  {
    title: 'Verwerkers',
    description:
      'Wij kunnen voor het verwerken van uw Persoonsgegevens dienstverleners (verwerkers) inschakelen die uitsluitend in Onze opdracht Persoonsgegevens verwerken. Wij sluiten met deze verwerkers een verwerkersovereenkomst die voldoet aan de wettelijke verplichtingen uit de AVG. Wij werken bijvoorbeeld met dienstverleners voor beheer van ons vastgoed, beheer van ons vermogen en voor de (financiële) administratie van onze giften. Verder zijn er ICT- dienstverleners die ons ondersteuning bieden bij het veilig en stabiel houden van onze website.',
  },
  {
    title: 'Delen van Persoonsgegevens',
    description: '',
    listItems: [
      {
        description:
          'We kunnen uw Persoonsgegeven verstrekken aan de hieronder genoemde personen, bedrijven en instanties. We doen dat alleen als:',
        items: [
          'dat noodzakelijk is voor de uitvoering van de overeenkomst;',
          'we daarvoor een ‘gerechtvaardigd belang’ hebben en de verstrekking van uw gegevens daarvoor noodzakelijk is;',
          'het wettelijk verplicht is om uw gegevens te verstrekken;',
          'u toestemming heeft gegeven.',
        ],
      },
      {
        description:
          'Alléén als minimaal één van bovengenoemde redenen van toepassing is, verstrekken we uw gegevens aan één of meerdere onderstaande partijen:',
        items: [
          'Onze medewerkers, voor zover zij deze gegevens nodig hebben voor hun werkzaamheden; • Onze verwerkers, voorzover zij deze gegevens nodig hebben voor hun werkzaamheden;',
          'publieke diensten zoals toezichthouders, politie en justitie en aan de belastingdienst, als we daartoe wettelijk verplicht zijn.',
          'Deurwaarders, incassobureaus en/of notarissen.',
        ],
      },
    ],
  },
  {
    title: 'Waar verwerken we uw gegevens',
    description: 'Uw gegevens worden verwerkt binnen de Europese Unie (EU).',
  },
  {
    title: 'Technische en organisatorische maatregelen',
    description:
      'Wij nemen technische en organisatorische maatregelen om uw Persoonsgegevens te beschermen. Ook Onze verwerkers vragen wij passende technische en organisatorische',
  },
  {
    title: 'Veranderingen',
    description:
      'Onze dienstverlening wordt regelmatig ontwikkeld, en daardoor kunnen er veranderingen plaatsvinden waardoor we anders omgaan met Persoonsgegevens. Ook kan weten regelgeving wijzigen. In dat geval zullen we deze Privacy Verklaring aanpassen. We nodigen u daarom uit het Privacy Verklaring regelmatig te checken, zodat u geïnformeerd blijft. Bij ingrijpende wijzigingen zullen wij u hierop ook via onze website attent maken.',
  },
];

export const cookieDescriptionMock =
  'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat m\n' +
  '\n' +
  'assa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aen\n' +
  '\n' +
  'ean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget ';

export const CookieItemsMock: PrivacyItemParams = {
  title: 'Contact',
  description:
    'Contact\n' +
    '\n' +
    'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulp\n' +
    '\n' +
    'Lorem ipsum dolor sit amet,\n' +
    'Lorem ipsum dolor sit amet,\n' +
    'Lorem ipsum dolor sit amet,\n' +
    '6FL \n' +
    '\n' +
    'Email: privacy@lren.com \n' +
    'Or Data Protection Officer: james.james@lren.org \n',
};

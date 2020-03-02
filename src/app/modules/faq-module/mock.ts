import { FaqsModel } from 'app/modules/faq-module/model';

export const mockData: FaqsModel = {
  title: 'FAQ',
  faqItems: [
    {
      title: '1: Wat doet deze tool?',
      expl:
        'Deze tool stelt u in staat om op eenvoudige wijze rapportages te maken op basis van projecten die u mede met een bijdrage van de Insinger Stichting heeft kunnen realiseren. Middels inloggegevens krijgt u toegang tot uw projectinformatie en kunt u ons de voortgang rapporteren. De rapportages stelt ons in staat om de effectiviteit van onze bijdrage op onze doelen beter te monitoren en te evalueren.',
    },
    {
      title: '2: Wie gebruikt deze tool?',
      expl:
        'De tool wordt gebruikt door organisaties welke door de Insinger Stichting worden ondersteund. Hiermee hoopt de Insinger Stichting dat het voor deze organisaties eenvoudiger zal zijn om de voortgang van de projecten terug te rapporteren. De Insinger Stichting zal de rapportages gebruiken om de voortgang te monitoren en te evalueren.',
    },
    {
      title: '3. Bij wie kan ik terecht voor vragen?',
      expl:
        'Indien u vragen heeft over het gebruik van deze tool, dan verzoeken wij u contact op te nemen met De Insinger Stichting op e-mail adres: help@help.nl ',
    },
    {
      title: '4. Ondersteunt deze tool ook de optie tot een nieuwe aanvraag?',
      expl:
        'Deze tool ondersteunt momenteel slechts de rapportage functie. U kunt vooralsnog geen project aanvraag via deze tool doen.',
    },
  ],
};

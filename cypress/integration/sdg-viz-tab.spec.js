import { getRandomInt } from '../support/utils';
/// <reference types="Cypress" />

const sdgItemList = [
  'list-item-sdgs.1',
  'list-item-sdgs.2',
  'list-item-sdgs.3',
  'list-item-sdgs.4',
  'list-item-sdgs.5',
  'list-item-sdgs.8',
  'list-item-sdgs.10',
  'list-item-sdgs.11',
  // 'list-item-sdgs.6',
  // 'list-item-sdgs.7',
  // 'list-item-sdgs.9',
  // 'list-item-sdgs.12',
  // 'list-item-sdgs.13',
  // 'list-item-sdgs.14',
  // 'list-item-sdgs.15',
  // 'list-item-sdgs.16',
];

const sdgBubbleChartItem = [
  'sdgs-1',
  'sdgs-2',
  'sdgs-3',
  'sdgs-4',
  'sdgs-5',
  'sdgs-8',
  'sdgs-10',
  'sdgs-11',
  // 'sdgs-6',
  // 'sdgs-7',
  // 'sdgs-9',
  // 'sdgs-12',
  // 'sdgs-13',
  // 'sdgs-14',
  // 'sdgs-15',
  // 'sdgs-16',
  // 'sdgs-17',
];

describe('test sdg', () => {
  it('click on sdb tab', () => {
    // authenticate
    cy.auth().then(() => {
      cy.findByTestId('sdg-tab').click();
    });
  });

  it('check sdg list items', () => {
    sdgItemList.map((item) => cy.findByTestId(item));
  });

  it('check sdg bubblechart items', () => {
    sdgBubbleChartItem.map((item) => cy.findByTestId(item));
  });

  // it('check list items and corresponding bubbles', () => {
  //   sdgItemList.map((item, index) => {
  //     cy.findByTestId(item).click({ force: true });
  //     cy.findByTestId(sdgBubbleChartItem[index]).should(
  //       'have.css',
  //       'border',
  //       '3px solid rgb(37, 186, 164)'
  //     );
  //   });
  // });

  /*it('make a screenshot', () => {
    cy.get('body').happoScreenshot({
      component: 'Project detail',
      variant: 'base',
    });
  });*/
});

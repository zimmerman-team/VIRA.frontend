// @ts-nocheck
// global
import React from 'react';
import JSPDF from 'jspdf';
import get from 'lodash/get';
import html2canvas from 'html2canvas';
import { useTranslation } from 'react-i18next';
import { Grid, Hidden } from '@material-ui/core';
import { useStoreState } from 'app/state/store/hooks';

// absolute
import { BreadCrumbs } from 'app/components/navigation/Breadcrumbs';
import { OutcomeCard } from 'app/modules/common/components/OutcomeCard';
import { TitleFragment } from 'app/modules/common/components/TitleParams';
import { bubbleMockData } from 'app/components/charts/Bubble/mock';

// direct
import 'styled-components/macro';
import { PageLoader } from 'app/modules/common/page-loader';
import { ContainedButton } from 'app/components/inputs/buttons/ContainedButton';
import { Viztabs } from 'app/modules/common/components/Viztabs';
import { PDFreport } from './common/pdfreport';

export const ReportDetailLayout = (props: any) => {
  const { t } = useTranslation();
  const showEditBtn = useStoreState(
    (state) =>
      get(state.userDetails.data, 'role', '') === 'Super admin' ||
      get(state.userDetails.data, 'role', '') === 'Administrator' ||
      get(state.userDetails.data, 'role', '') === 'Manager' ||
      get(state.userDetails.data, 'email', '_') ===
        props.report.project.person.email
  );

  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  const cardData = [
    {
      testID: 'outcomes-card',
      title: 'reports.detail.cards.key_outcomes',
      description: props.report.key_outcomes,
    },
    {
      testID: 'monitor-card',
      title: 'reports.detail.cards.monitor',
      description: props.report.monitor_report_outcomes,
    },
    {
      testID: 'media-card',
      title: 'reports.detail.cards.media',
      media: props.report.media,
    },
    {
      testID: 'inputs-invested-card',
      title: 'reports.form.cards.inputs_invested',
      description: props.report.inputs_invested,
    },
    {
      testID: 'activities-undertaken-card',
      title: 'reports.form.cards.activities_undertaken',
      description: props.report.activities_undertaken,
    },
    {
      testID: 'projectgoals-socialbenefits-card',
      title: 'reports.form.cards.projectgoals_socialbenefits',
      description: props.report.projectgoals_socialbenefits,
    },
    {
      testID: 'important-factors-card',
      title: 'reports.form.cards.important_factors',
      description: props.report.important_factors,
    },
    {
      testID: 'orgs-partners-card',
      title: 'reports.form.cards.orgs_partners',
      description: props.report.orgs_partners,
    },
    {
      testID: 'challenges-card',
      title: 'reports.detail.cards.key_implementation_challenges',
      description: props.report.key_implementation_challenges,
    },
    {
      testID: 'address-challenges-card',
      title: 'reports.form.cards.how_address_challenges',
      description: props.report.how_address_challenges,
    },
    {
      testID: 'observations-card',
      title: 'reports.form.cards.other_project',
      description: props.report.other_project_outcomes,
    },
    {
      testID: 'how-important-insinger-support-card',
      title: 'reports.form.cards.how_important_insinger_support',
      description: props.report.how_important_insinger_support,
    },
    {
      testID: 'apply-for-more-funding-card',
      title: 'reports.form.cards.apply_for_more_funding',
      description: props.report.apply_for_more_funding,
    },
    {
      testID: 'other-comments-card',
      title: 'reports.form.cards.other_comments',
      description: props.report.other_comments,
    },
  ];

  function onDownloadClick() {
    const pdfloader = document.getElementById('pdf-loader');
    const node = document.getElementById('report-container');
    const pdfnode = document.getElementById('pdf-report-container');
    const pages = [
      document.getElementById('page1'),
      document.getElementById('page2'),
      document.getElementById('page3'),
      document.getElementById('page4'),
      document.getElementById('page5'),
    ];

    node.style.visibility = 'hidden';
    pdfnode.style.visibility = 'visible';
    pdfloader.style.display = 'block';

    const pdf = new JSPDF();
    html2canvas(pages[0], { allowTaint: true, useCORS: true }).then(
      (canvas) => {
        let imgData = canvas.toDataURL('image/png');
        let imgProps = pdf.getImageProperties(imgData);
        let pdfWidth = pdf.internal.pageSize.getWidth();
        let pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
        html2canvas(pages[1], {
          allowTaint: true,
          useCORS: true,
          removeContainer: false,
        }).then((canvas1) => {
          pdf.addPage();
          imgData = canvas1.toDataURL('image/png');
          imgProps = pdf.getImageProperties(imgData);
          pdfWidth = pdf.internal.pageSize.getWidth();
          pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
          pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
          html2canvas(pages[2], {
            allowTaint: true,
            useCORS: true,
            removeContainer: false,
          }).then((canvas2) => {
            pdf.addPage();
            imgData = canvas2.toDataURL('image/png');
            imgProps = pdf.getImageProperties(imgData);
            pdfWidth = pdf.internal.pageSize.getWidth();
            pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
            pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
            html2canvas(pages[3], {
              allowTaint: true,
              useCORS: true,
              removeContainer: false,
            }).then((canvas3) => {
              pdf.addPage();
              imgData = canvas3.toDataURL('image/png');
              imgProps = pdf.getImageProperties(imgData);
              pdfWidth = pdf.internal.pageSize.getWidth();
              pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
              pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
              html2canvas(pages[4], { allowTaint: true, useCORS: true }).then(
                (canvas4) => {
                  pdf.addPage();
                  imgData = canvas4.toDataURL('image/png');
                  imgProps = pdf.getImageProperties(imgData);
                  pdfWidth = pdf.internal.pageSize.getWidth();
                  pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
                  pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);

                  pdf.save(`${props.report.title}.pdf`);

                  node.style.visibility = 'visible';
                  pdfnode.style.visibility = 'hidden';
                  pdfloader.style.display = 'none';
                }
              );
            });
          });
        });
      }
    );
  }

  // console.log('render report detail');

  return (
    <div
      css={`
        width: 100%;
        position: relative;
      `}
    >
      <div
        id="pdf-loader"
        css={`
          display: none;
          > div {
            background: rgba(36, 46, 66, 0.9);
          }
        `}
      >
        <PageLoader message="Generating PDF document" />
      </div>
      <div
        css={`
          z-index: 1;
          width: 100%;
        `}
        id="report-container"
      >
        {/* ---------------------------------------------------------------------*/}
        {/* breadcrumbs */}
        <Grid item xs={12} lg={12}>
          <BreadCrumbs
            currentLocation={props.report.title}
            previousLocations={[{ label: 'Reports', url: '/list/2' }]}
          />
        </Grid>

        {/* ---------------------------------------------------------------------*/}
        {/* button: generate report */}
        <Grid item lg={12} container justify="flex-end">
          <Hidden xsDown>
            <Grid
              item
              container
              xs={false}
              sm={3}
              md={3}
              lg={2}
              justify="flex-end"
            >
              {showEditBtn && (
                <ContainedButton
                  text={t('reports.detail.editReportBtn')}
                  onClick={props.editReport}
                />
              )}
            </Grid>
          </Hidden>
          <Grid item container xs={12} sm={3} md={3} lg={2} justify="flex-end">
            <ContainedButton text="Download" onClick={onDownloadClick} />
          </Grid>
        </Grid>

        {/* ---------------------------------------------------------------------*/}
        {/* title fragment */}
        <Grid item xs={12} lg={12}>
          <TitleFragment
            showMoreThanTitle
            note={props.report.date}
            title={props.report.title}
            id={`Report ID: ${props.report.reportID}`}
            url={`/projects/${props.report.project.id}`}
            url_note={`${props.report.project.name}`}
            editReport={props.editReport}
            showEditBtn={showEditBtn}
            testattr="report-title"
            stats={[
              {
                label: t('reports.detail.stats.targetBeneficiaries'),
                value: props.report.total_target_beneficiaries,
              },
              {
                label: t('reports.detail.stats.budget'),
                value: parseInt(props.report.budget || '', 10)
                  .toLocaleString(undefined, {
                    currency: 'EUR',
                    currencyDisplay: 'symbol',
                    style: 'currency',
                  })
                  .replace('.00', ''),
              },
            ]}
          />
        </Grid>
        <Hidden smDown>
          <div
            css={`
              width: 100%;
              height: 32px;
            `}
          />
        </Hidden>

        {/* ---------------------------------------------------------------------*/}
        {/* charts */}
        <Viztabs
          value={value}
          onTabClick={handleChange}
          barChartData={props.report.barChartData}
          barChartLegends={props.barChartLegends}
          onBarChartLegendClick={props.onBarChartLegendClick}
          bubbleChartData={{
            ...bubbleMockData,
            children: props.report.bubbleChartData,
          }}
          selectedBubble={props.selectedSDG}
          onBubbleSelect={props.onBubbleSelect}
          geoMapData={props.report.mapData}
        />

        <div css="width: 100%;height: 50px;" />
        {/* ---------------------------------------------------------------------*/}
        {/* cards */}

        {cardData.map((card) =>
          card.media ? (
            card.media.length > 0 && (
              <Grid key={card.title} data-cy={card.testID} item xs={12} lg={12}>
                <OutcomeCard
                  title={t(card.title)}
                  media={{ tileData: props.report.media }}
                />
              </Grid>
            )
          ) : (
            <Grid key={card.title} data-cy={card.testID} item xs={12} lg={12}>
              <OutcomeCard
                title={t(card.title)}
                description={card.description}
              />
            </Grid>
          )
        )}
      </div>
      <PDFreport {...props} cardData={cardData} />
    </div>
  );
};

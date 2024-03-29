/* eslint-disable @typescript-eslint/no-unused-vars */
/* core */
import React from 'react';

/* project-comps */
import { TableLayout } from 'app/components/datadisplay/Table/layout';
import { TableModuleModel } from 'app/components/datadisplay/Table/model';
import {
  addConfig,
  calculateTotalRow,
} from 'app/components/datadisplay/Table/helpers';

const TableModule = (props: TableModuleModel) => {
  const [totalData, setTotalData] = React.useState({});

  React.useEffect(() => {
    if (props.totalCell) {
      setTotalData(
        calculateTotalRow(
          { data: props.data.map(d => ({ data: [...d] })) },
          props.totalRowColsDef
        )
      );
    }
  }, [props.data, props.totalCell, props.totalRowColsDef]);

  const [localTableState, setLocalTableState] = React.useState({
    page: 1,
    prevAction: '',
    rowsPerPage: 10,
  });

  const options = addConfig(
    props,
    localTableState,
    setLocalTableState,
    setTotalData
  );

  return <TableLayout {...props} options={options} />;
};

export default TableModule;

/* eslint-disable */
import React from 'react';
import find from 'lodash/find';
import filter from 'lodash/filter';
import { Edit } from '@material-ui/icons';
import { Checkbox } from 'app/components/inputs/checkboxes/Checkbox';
import { Link } from 'react-router-dom';

/* todo: move individual column object to external files */

export function getTableColumns(selected: string[], setSelected: Function) {
  const columns = [
    {
      name: '',
      options: {
        filter: false,
        customBodyRender: (value: string) => {
          return (
            <Checkbox
              checked={Boolean(find(selected, sel => sel === value))}
              onChange={(e: any) => {
                if (e.target.checked) {
                  setSelected([...selected, value]);
                } else {
                  setSelected(filter(selected, (sel: string) => sel !== value));
                }
              }}
            />
          );
        },
      },
    },
    {
      name: '',
      options: {
        filter: false,
      },
    },
    {
      name: '',
      options: {
        filter: true,
      },
    },
    {
      name: '',
      options: {
        filter: false,
        customBodyRender: (value: string) => {
          return (
            <Link to={`/super-admin/manage-users/edit/${value}`}>
              <Edit color="secondary" />
            </Link>
          );
        },
      },
    },
  ];

  return columns;
}

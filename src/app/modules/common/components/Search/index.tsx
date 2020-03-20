import LinearProgress from '@material-ui/core/LinearProgress';
import { SearchField } from 'app/modules/common/components/Search/common/SearchField';
import { SearchResult } from 'app/modules/common/components/Search/common/SearchResult';
import { formatResults } from 'app/modules/common/components/Search/utils/formatResults';
import { useStoreActions, useStoreState } from 'app/state/store/hooks';
import { ProjectPalette } from 'app/theme';
import get from 'lodash/get';
import React from 'react';
import { useDebounce } from 'react-use';
import 'styled-components/macro';
import { setDefaultResultType } from './utils/setDefaultResultType';

type SearchProps = {
  handleResultClick: any;
};

export const Search = (props: SearchProps) => {
  const [results, setResults] = React.useState({
    projects: [],
    grantees: [],
    reports: [],
    all: [],
  });
  const [loading, setLoading] = React.useState(false);
  const [resultType, setResultType] = React.useState('projects');
  const [value, setValue] = React.useState('');

  const generalSearchAction = useStoreActions(
    actions => actions.generalSearch.fetch
  );
  const generalSearchClear = useStoreActions(
    actions => actions.generalSearch.clear
  );
  const generalSearchData = useStoreState(state => state.generalSearch.data);

  useDebounce(
    () => {
      if (value.length > 0) {
        generalSearchAction({
          socketName: 'search',
          values: {
            q: value,
          },
        });
        setLoading(false);
      }
    },
    1000,
    [value]
  );

  React.useEffect(() => {
    if (value.length > 0) {
      setLoading(true);
    }
  }, [value]);

  React.useEffect(() => {
    setResults(
      formatResults(
        get(generalSearchData, 'data', {
          projects: [],
          organisations: [],
          reports: [],
        })
      )
    );
    setDefaultResultType(
      get(generalSearchData, 'data', {
        projects: [],
        organisations: [],
        reports: [],
      }),
      setResultType
    );
  }, [generalSearchData]);

  React.useEffect(() => {
    return () => {
      generalSearchClear();
      setResults({
        projects: [],
        grantees: [],
        reports: [],
        all: [],
      });
    };
  }, []);

  const targetRef = React.useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = React.useState({ width: 0, height: 0 });

  React.useLayoutEffect(() => {
    if (targetRef.current) {
      setDimensions({
        width: get(targetRef, 'current.offsetWidth', 0),
        height: get(targetRef, 'current.offsetHeight', 0),
      });
    }
  }, []);

  const isLoading =
    useStoreState(state => state.generalSearch.loading) || loading;

  return (
    <div
      ref={targetRef}
      css={`
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
      `}
    >
      <SearchField value={value} setValue={setValue} />
      <div
        css={`
          z-index: 10;
          width: ${dimensions.width}px;
          visibility: ${isLoading ? 'visible' : 'hidden'};
          > div {
            background-color: ${ProjectPalette.primary.light};
          }
        `}
      >
        <LinearProgress color="secondary" />
      </div>
      {value.length > 0 && (
        <SearchResult
          handleResultClick={props.handleResultClick}
          results={results}
          resultType={resultType}
          width={dimensions.width}
          changeResultType={setResultType}
        />
      )}
    </div>
  );
};

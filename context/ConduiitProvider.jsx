//global state manager

import React, { createContext, useContext, useReducer, useEffect } from 'react';

const actions = {
  FETCH_PROJECT: 'FETCH_PROJECT',
  FETCHING_PROJECT: 'FETCHING_PROJECT',
  ERROR_FETCHING_PROJECT: 'ERROR_FETCHING_PROJECT',
  SELECT_PROJECT: 'SELECT_PROJECT',
};

const {
    FETCH_PROJECT,
    FETCHING_PROJECT,
    ERROR_FETCHING_PROJECT,
    SELECT_PROJECT,
  } = actions

const initialState = {
  projects: [],
  selectedProject: '60b17632c5cb4852771a9bed',
  fetchingProjects: false,
  errorFetchingProjects: false,
};

export const ConduiitContext = createContext();

export const ConduiitReducer = (state, { type, data }) => {
  switch (type) {
    case FETCH_PROJECT: {
      return {
        ...state,
        projects: data,
        fetchingProjects: false,
        errorFetchingProjects: false,
      };
    }
    case SELECT_PROJECT: {
      return {
        ...state,
        selectedProject: data,
      };
    }
    case FETCHING_PROJECT: {
      return {
        ...state,
        fetchingProjects: true,
      };
    }
    case ERROR_FETCHING_PROJECT: {
      return {
        ...state,
        fetchingProjects: false,
        errorFetchingProjects: true,
      };
    }
    default:
      return state;
  }
};

export const useConduiit = () => {
  const context = useContext(ConduiitContext);
  if (!context) {
    console.error(' Please call within a ConduiitProvider');
    throw new Error('useConduiit must be used within a ConduiitProvider');
  }
  return context;
};

export const ConduiitProvider = props => {
  const [state, dispatch] = useReducer(ConduiitReducer, initialState);

  return (
    <ConduiitContext.Provider
      value={{
        state,
        dispatch,
      }}
      {...props}
    />
  );
};

// export { ConduiitProvider, useConduiit, ConduiitContext };

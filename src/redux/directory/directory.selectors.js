import { createSelector } from 'reselect';

// state.directory is pointing to the property 'directory' inside the RootReducer:
const selectDirectory = state => state.directory;

export const selectDirectorySections = createSelector(
  [selectDirectory],
  // Below is the path from the RootReducer to the DirectoryReducer, where there is a 'sections' property inside the initial state:
  directory => directory.sections
);




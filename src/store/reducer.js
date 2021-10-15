const reducer = (state, action) => {
  switch (action.type) {
    case 'FORM_SUBMITED': return {
      ...state,
      repository: action.repository,
      command: action.command,
      branch: action.branch,
      time: action.time,
    };
    case 'DOWNLOAD_DATA': return {
      ...state,
      settings: action.settings,
    };
    default: return state;
  }
};
export default reducer;

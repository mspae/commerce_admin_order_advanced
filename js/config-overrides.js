module.exports = function override(config, env) {
  return {
    ...config,
    externals: {
      ...config.externals,
      react: "React",
      "react-redux": "ReactRedux",
      redux: "Redux",
      reselect: "Reselect",
      "redux-thunk": "ReduxThunk",
      "react-dom": "ReactDOM",
      "lodash.get": "LodashGet",
      "semantic-ui-react": "SemanticUiReact",
      icu: "ICU"
    },
    devServer: {
      ...config.devServer,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS"
      }
    }
  };
};

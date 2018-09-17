import { PureComponent } from "react";
import { connect } from "react-redux";

import { selectResources } from "../selectors";

class DataSet extends PureComponent {
  static defaultProps = {
    loading: false
  };

  render() {
    const { children, loading, resources, error } = this.props;
    return children({
      loading,
      resources,
      error
    });
  }
}

const DataSetContainer = connect((state, props) => ({
  resources: selectResources(state, props)
}))(DataSet);

export { DataSetContainer as DataSet, DataSet as DataSetPresentational };

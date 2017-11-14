import React, {Component} from 'react'

const withFeatureFlag = (WrappedComponent) => {
  return class withFeatureFlag extends Component {
    render() {
      const { featured, ...restProps } = this.props;
      return featured ? <WrappedComponent {...restProps} /> : <span>Feature disabled!</span>;
    }
  }
};

export default withFeatureFlag;

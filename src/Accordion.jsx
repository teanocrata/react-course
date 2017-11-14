import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Accordion extends Component {

  constructor(props) {
    super(props);

    this.state = {
      opened: false,
    }
  }

  toggle = () => {
    this.setState((prevState) => ({
      opened: !prevState.opened
    }));
  };

  render() {
    return (
      <div className="accordion">
        <div className="accordion__header" onClick={this.toggle}>{this.props.title}</div>
        {
          this.state.opened &&
          <div className="accordion__content">{this.props.children}</div>
        }
      </div>
    );
  }
}

Accordion.PropTypes = {
  title: PropTypes.string.isRequired,
};

Accordion.defaultProps = {};

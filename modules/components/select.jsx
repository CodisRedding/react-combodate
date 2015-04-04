'use strict';

import assign from 'react/lib/Object.assign';
import Option from './option';
import React, {PropTypes} from 'react';


/*
 * Select
 */
class Select extends React.Component {
  constructor(props) {
    super(props);
  };

  getOptions() {
    let options = [];
    this.props.options.forEach((option) => {
      options.push(<Option {...option}/>);
    });
    return options;
  };

  handleChange(event) {
    if (this.props.onChange) {
      this.props.onChange(event);
    }
  };

  render() {
    var props = assign({}, this.props, {
      onClick: this.handleChange.bind(this),
      value: this.props.selected
    });

    if (props.activeStyle) {
      props.style = props.activeStyle;
    }

    return (
      <select {...props}>
        {this.getOptions()}
      </select>
    );
  };
}

Select.propTypes = {
  activeClassName: PropTypes.string.isRequired,
  activeStyle: PropTypes.object,
  onChange: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.shape({
    display: PropTypes.oneOf([
      PropTypes.string,
      PropTypes.number
    ]).isRequired,
    value: PropTypes.oneOf([
      PropTypes.string,
      PropTypes.number
    ]).isRequired
  })).isRequired,
  selected: PropTypes.oneOf([
    PropTypes.string,
    PropTypes.number
  ])
};

Select.defaultProps = {
  activeClassName: 'active',
  className: '',
  selected: ''
};


export default Select;

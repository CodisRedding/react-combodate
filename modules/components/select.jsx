import assign from 'object-assign';
import Option from './option.jsx';
import React, {PropTypes} from 'react';


/*
 * Select
 */
class Select extends React.Component {

  constructor(props) {
    super(props);
  }

  getOptions() {
    let options = [];
    this.props.options.forEach((option) => {
      options.push(<Option {...option}/>);
    });
    return options;
  }

  handleChange(event) {
    if (this.props.onChange) {
      this.props.onChange(event);
    }
  }

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
  }
}

Select.propTypes = {
  activeClassName: PropTypes.string.isRequired,
  activeStyle: PropTypes.object,
  onChange: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.shape({
    display: PropTypes.string,
    value: PropTypes.string
  })).isRequired,
  selected: PropTypes.string
};

Select.defaultProps = {
  activeClassName: 'active',
  className: '',
  selected: ''
};


export default Select;

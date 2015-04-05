import React, {PropTypes} from 'react';


// let _date = null;
let _rendering;

class Combodate extends React.Component {

  selects() {

  }

  spacing() {
    _rendering = this.props.template.replace(/ /g, '&nbsp;');
  }

  render() {
    return (
      <div></div>
    );
  }
}

Combodate.propTypes = {
  customClass: PropTypes.string,
  errorClass: PropTypes.string,
  firstItem: PropTypes.string,
  format: PropTypes.string,
  maxYear: PropTypes.number,
  minuteStep: PropTypes.number,
  minYear: PropTypes.number,
  roundTime: PropTypes.bool,
  secondStep: PropTypes.number,
  smartDays: PropTypes.bool,
  template: PropTypes.string,
  value: PropTypes.object,
  yearDescending: PropTypes.bool
};

Combodate.defaultProps = {
  customClass: null,
  errorClass: null,
  firstItem: 'empty',
  format: 'DD-MM-YYYY HH:mm',
  maxYear: 2015,
  minuteStep: 5,
  minYear: 1970,
  roundTime: true,
  secondStep: 1,
  smartDays: false,
  template: 'D / MMM / YYYY H : mm',
  value: null,
  yearDescending: true
};


export default Combodate;


// var assert = require('assert');
import Combodate from '../combodate.jsx';
import expect from 'expect';
// import React from 'react/addons';


describe('A Combodate', () => {

  it('knows default prop types', () => {

    expect(Combodate.defaultProps.customClass).toEqual(null);
    expect(Combodate.defaultProps.errorClass).toEqual(null);
    expect(Combodate.defaultProps.firstItem).toEqual('empty');
    expect(Combodate.defaultProps.format).toEqual('DD-MM-YYYY HH:mm');
    expect(Combodate.defaultProps.maxYear).toEqual(2015);
    expect(Combodate.defaultProps.minuteStep).toEqual(5);
    expect(Combodate.defaultProps.minYear).toEqual(1970);
    expect(Combodate.defaultProps.roundTime).toEqual(true);
    expect(Combodate.defaultProps.secondStep).toEqual(1);
    expect(Combodate.defaultProps.smartDays).toEqual(false);
    expect(Combodate.defaultProps.template).toEqual('D / MMM / YYYY H : mm');
    expect(Combodate.defaultProps.value).toEqual(null);
    expect(Combodate.defaultProps.yearDescending).toEqual(true);
  });

});

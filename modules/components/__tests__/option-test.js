// var assert = require('assert');
import expect from 'expect';
import React from 'react/addons';
import Option from '../option.jsx';

describe('An Option', () => {

  describe('with a string display and value', () => {

    it('knows how to make an option with values', () => {
      let OptionHandler = React.createClass({
        render: () => {
          return (
            <Option value="motor" display="boat"/>
          );
        }
      });

      let div = document.createElement('div');

      React.render(<OptionHandler/>, div, () => {
        let option = div.querySelector('option');

        expect(option.getAttribute('value')).toEqual('motor');
        expect(option.innerHTML).toEqual('boat');
      });
    });

    it('knows how to make an option without values', () => {
      let OptionHandler = React.createClass({
        render: () => {
          return (
            <Option value="" display=""/>
          );
        }
      });

      let div = document.createElement('div');

      React.render(<OptionHandler/>, div, () => {
        let option = div.querySelector('option');

        expect(option.getAttribute('value')).toEqual('');
        expect(option.innerHTML).toEqual('');
      });
    });

    it('knows how to make an option with only a value', () => {
      let OptionHandler = React.createClass({
        render: () => {
          return (
            <Option value="mywar" display=""/>
          );
        }
      });

      let div = document.createElement('div');

      React.render(<OptionHandler/>, div, () => {
        let option = div.querySelector('option');

        expect(option.getAttribute('value')).toEqual('mywar');
        expect(option.innerHTML).toEqual('');
      });
    });

    it('knows how to make an option with only a display', () => {
      let OptionHandler = React.createClass({
        render: () => {
          return (
            <Option value="" display="yourwar"/>
          );
        }
      });

      let div = document.createElement('div');

      React.render(<OptionHandler/>, div, () => {
        let option = div.querySelector('option');

        expect(option.getAttribute('value')).toEqual('');
        expect(option.innerHTML).toEqual('yourwar');
      });
    });

  });


  describe('without a display and value', () => {

    it('know how to make an option without a value', () => {
      let OptionHandler = React.createClass({
        render: () => {
          return (
            <Option display="boat"/>
          );
        }
      });

      let div = document.createElement('div');

      React.render(<OptionHandler/>, div, () => {
        let option = div.querySelector('option');

        expect(option.getAttribute('value')).toEqual('');
        expect(option.innerHTML).toEqual('boat');
      });
    });

    it('know how to make an option without a display', () => {
      let OptionHandler = React.createClass({
        render: () => {
          return (
            <Option value="motor"/>
          );
        }
      });

      let div = document.createElement('div');

      React.render(<OptionHandler/>, div, () => {
        let option = div.querySelector('option');

        expect(option.getAttribute('value')).toEqual('motor');
        expect(option.innerHTML).toEqual('');
      });
    });

  });

});

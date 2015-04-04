// var assert = require('assert');
import expect from 'expect';
import React from 'react/addons';
import Option from '../option.jsx';

describe('A Select', () => {

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

  });

});

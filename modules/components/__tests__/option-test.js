'use strict';

var assert = require('assert');
var expect = require('expect');
var React = require('react/addons');
var Option = require('../Option');

describe('An Option', function () {
  describe('with display and value', function () {
    it('knows how to make an option', function () {
      var OptionHandler = React.createClass({
        render: function () {
          return <Option value="motor" display="boat">
        }
      });

      var div = document.createElement('div');

      React.render(<OptionHandler/>, div, function () {
        var option = div.querySelector('option');
        expect(option.getAttribute('value')).toEqual('motor');
        expect(option.innerHTML()).toEqual('boat');
      });
    });
  });

});

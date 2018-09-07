'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var InvalidDay = function InvalidDay(props) {
    var styles = {
        backgroundColor: 'gray'
    };

    return _react2.default.createElement(
        'h4',
        { style: styles },
        '-'
    );
};

exports.default = InvalidDay;
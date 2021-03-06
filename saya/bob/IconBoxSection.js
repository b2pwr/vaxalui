"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/core/styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const styles = {
  root: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    borderTop: '1px solid #e8e8e8',
    borderBottom: '1px solid #e8e8e8',
    marginBottom: -1
  }
};

class IconBoxSection extends _react.default.PureComponent {
  render() {
    const {
      classes,
      children
    } = this.props;
    return _react.default.createElement("div", {
      className: classes.root
    }, children);
  }

}

var _default = (0, _styles.withStyles)(styles)(IconBoxSection);

exports.default = _default;
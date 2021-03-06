"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/core/styles");

var _ImageContainer = _interopRequireDefault(require("../ImageContainer"));

var _Text = _interopRequireDefault(require("./Text"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const useStyles = (0, _styles.makeStyles)(theme => ({
  root: {
    color: '#ffffff'
  },
  section: {
    width: 320,
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap'
  },
  firstTitle: {
    width: 'fit-content',
    fontSize: 15,
    fontWeight: 'bold',
    fontFamily: 'FilsonSoft-Bold',
    lineHeight: 1.33
  },
  firstTitleBack: {
    fontFamily: 'FilsonSoft-Light'
  },
  firstLine: {
    height: 1,
    width: '100%',
    backgroundColor: '#ffffff',
    marginTop: 1
  },
  title: {
    width: '100%',
    fontSize: 45,
    whiteSpace: 'pre-line',
    lineHeight: 'normal',
    fontStretch: 'normal'
  },
  subtitle: {
    fontSize: 20,
    lineHeight: 1.6
  }
}));

var _default = props => {
  const {
    backgroundImage,
    firstTitle,
    firstTitleBack,
    title,
    subtitle,
    height,
    children,
    color,
    lineColor,
    titleFontFamily,
    subtitleFontFamily,
    paddingTop,
    titlePaddingTop,
    subtitlePaddingTop,
    titleFontSize,
    buttonPosition
  } = props;
  const classes = useStyles();
  return _react.default.createElement(_ImageContainer.default, {
    className: classes.root,
    image: backgroundImage,
    style: {
      height,
      color,
      paddingTop
    }
  }, _react.default.createElement("div", {
    className: classes.section
  }, _react.default.createElement("div", {
    className: classes.firstTitle
  }, firstTitle, _react.default.createElement("span", {
    className: classes.firstTitleBack
  }, firstTitleBack), _react.default.createElement("div", {
    className: classes.firstLine,
    style: {
      backgroundColor: lineColor
    }
  })), _react.default.createElement(_Text.default, {
    family: titleFontFamily,
    className: classes.title,
    style: {
      paddingTop: titlePaddingTop,
      fontSize: titleFontSize
    }
  }, title), _react.default.createElement(_Text.default, {
    family: subtitleFontFamily,
    className: classes.subtitle,
    style: {
      paddingTop: subtitlePaddingTop
    }
  }, subtitle), _react.default.createElement("div", null, children)));
};

exports.default = _default;
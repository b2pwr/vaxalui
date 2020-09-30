import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageContainer from '../ImageContainer';
import Text from './Text';

const useStyles = makeStyles(theme => ({
  root: {
    color: '#ffffff',
  },
  section: {
    width: 320,
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    paddingTop: 122,
  },
  firstTitle: {
    width: 'fit-content',
    fontSize: 15,
    fontWeight: 'bold',
    fontFamily: 'FilsonSoft-Bold',
    lineHeight: 1.33,
  },
  firstTitleBack: {
    fontFamily: 'FilsonSoft-Light',
  },
  firstLine: {
    height: 1,
    width: '100%',
    backgroundColor: '#ffffff',
    marginTop: 1,
  },
  title: {
    fontSize: 45,
    paddingTop: 42,
    whiteSpace: 'pre-line',
    // lineHeight: 1,
    // fontFamily: 'FilsonSoft-Bold',
  },
  subtitle: {
    fontSize: 20,
    paddingTop: 16,
    lineHeight: 1.6,
    // fontFamily: 'FilsonSoft-Light',
  },
}));


export default (props) => {
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
    buttonPosition,
  } = props;

  const classes = useStyles();

  return (
    <ImageContainer
      className={classes.root}
      image={backgroundImage}
      style={{ height, color }}
    >
      <div className={classes.section}>
        <div className={classes.firstTitle}>
          {firstTitle}
          <span className={classes.firstTitleBack}>{firstTitleBack}</span>
          <div className={classes.firstLine} style={{ backgroundColor: lineColor }} />
        </div>
        <Text family={titleFontFamily} className={classes.title}>{title}</Text>
        <Text family={subtitleFontFamily} className={classes.subtitle}>{subtitle}</Text>
        <div>{children}</div>
      </div>
    </ImageContainer>
  );
};

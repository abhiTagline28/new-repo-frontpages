import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { colors, Toolbar, Button } from '@material-ui/core';
import customLogo from '../../../../components/atoms/Image/Logos/conduiit(twoeyes).svg';
import customDarkLogo from '../../../../components/atoms/Image/Logos/conduiit(infrev).svg';
import { Image } from 'components/atoms';
import { isLightMode } from 'utils';

const useStyles = makeStyles(theme => ({
  root: {
    boxShadow: 'none',
    background: theme.palette.white,
    borderBottom: `1px solid ${colors.grey[200]}`,
  },
  toolbar: {
    maxWidth: theme.layout.contentWidth,
    width: '100%',
    margin: '0 auto',
    padding: theme.spacing(0, 2),
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  logoContainer: {
    width: 400,
    height: 96,
    [theme.breakpoints.up('md')]: {
      width: 180,
      height: 128,
    },
  },
  logoImage: {
    width: '100%',
    height: '100%',
  },
}));

const Topbar = props => {
  const { onSidebarOpen, className, ...rest } = props;

  const [isLightModeTheme, setLightModeTheme] = useState(false);

  useEffect(() => {
    setLightModeTheme(isLightMode());
  }, []);

  const classes = useStyles();

  return (
    <Toolbar className={clsx(classes.toolbar, className)} {...rest}>
      <div className={classes.logoContainer}>
        <Link to="/NewHome" title="Conduiit">
          <Image
            className={classes.logoImage}
            src={isLightModeTheme ? customLogo : customDarkLogo}
            alt="Conduiit"
            lazy={false}
          />
          
        </Link>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
      <Button color="primary"
      variant="outlined" 
      type="button" 
      style={{marginTop:'8px', fontWeight:'900'}}
      size="small"
      a href="/managerdashboard"
      
      >
      Go to Manager Dashboard
      </Button>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
      <Button color="primary"
      variant="outlined" 
      type="button" 
      style={{marginTop:'8px', fontWeight:'900'}}
      size="small"
      a href="/admindashboard"
      
      >
      Go Admin Dashboard
      </Button>
      </div>
    </Toolbar>
  );
};

Topbar.propTypes = {
  className: PropTypes.string,
};

export default Topbar;

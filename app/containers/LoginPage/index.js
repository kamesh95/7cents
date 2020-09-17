/**
 * LoginPage
 *
 * This is the page where we show the login form
 */

import React, { useEffect, memo } from 'react';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import Divider from '@material-ui/core/Divider';
import FacebookIcon from '@material-ui/icons/Facebook';
import { useInjectSaga } from 'utils/injectSaga';
import { createStructuredSelector } from 'reselect';
import { useInjectReducer } from 'utils/injectReducer';
import { makeSelectLoading, makeSelectError } from 'containers/App/selectors';

import Box from './Box';
import Logo from './Logo';
import Grid from './Grid';
import Form from './Form';
import Link from './Link';
import Input from './Input';
import Button from './Button';
import GridItem from './GridItem';
import messages from './messages';
import Container from './Container';
import { login } from '../App/actions';
import { changeUsername, changePassword } from './actions';
import {
  makeSelectUsername,
  makeSelectPassword,
  makeSelectLoginDisabled,
} from './selectors';
import LogoSrc from '../../images/logo.png';
import reducer from './reducer';
import saga from './saga';

const key = 'login';

export function LoginPage({
  username,
  password,
  loginDisabled,
  onSubmitForm,
  onChangeUsername,
  onChangePassword,
}) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  useEffect(() => {
    // When initial state login info is present
    if (!loginDisabled) onSubmitForm();
  }, []);

  return (
    <Container maxWidth="sm">
      <Box component="div" border={1} borderColor="grey.300">
        <Grid container spacing={1} alignItems="center" justify="center">
          <GridItem item xs={6}>
            <Logo src={LogoSrc} alt="Logo" />
          </GridItem>
          <GridItem item xs={9}>
            <Form noValidate autoComplete="off" onSubmit={onSubmitForm}>
              <Input
                label="Username"
                id="username"
                fullWidth
                margin="dense"
                variant="outlined"
                value={username}
                onChange={onChangeUsername}
              />

              <Input
                label="Password"
                id="password"
                type="password"
                fullWidth
                margin="dense"
                variant="outlined"
                value={password}
                onChange={onChangePassword}
              />
            </Form>
          </GridItem>
          <GridItem item xs={9}>
            <Button
              primary="true"
              onClick={onSubmitForm}
              fullWidth
              disabled={loginDisabled}
              variant="contained"
            >
              <FormattedMessage {...messages.loginButton} />
            </Button>
          </GridItem>
          <Grid
            container
            alignItems="center"
            applymargin="15px 0"
            justify="center"
          >
            <GridItem applyminwidth="30%" item>
              <Divider />
            </GridItem>
            <GridItem applyminwidth="10%" item xs={1}>
              <FormattedMessage {...messages.orLabel} />
            </GridItem>
            <GridItem applyminwidth="30%" item>
              <Divider />
            </GridItem>
          </Grid>
          <GridItem item xs={9}>
            <Button
              fullWidth
              onClick={onSubmitForm}
              startIcon={<FacebookIcon />}
              variant="outlined"
            >
              <FormattedMessage {...messages.loginWithFb} />
            </Button>
          </GridItem>
          <GridItem item xs={9}>
            <Link href="https://google.com/123">
              <FormattedMessage {...messages.forgotPwd} />
            </Link>
          </GridItem>
        </Grid>
      </Box>
    </Container>
  );
}

LoginPage.propTypes = {
  loading: PropTypes.bool,
  loginDisabled: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  onSubmitForm: PropTypes.func,
  username: PropTypes.string,
  password: PropTypes.string,
  onChangeUsername: PropTypes.func,
  onChangePassword: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  username: makeSelectUsername(),
  password: makeSelectPassword(),
  loginDisabled: makeSelectLoginDisabled(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onChangeUsername: evt => dispatch(changeUsername(evt.target.value)),
    onChangePassword: evt => dispatch(changePassword(evt.target.value)),
    onSubmitForm: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(login());
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(LoginPage);

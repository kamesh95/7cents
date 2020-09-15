/*
 * LoginPage Messages
 *
 * This contains all the text for the LoginPage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.containers.LoginPage';

export default defineMessages({
  loginButton: {
    id: `${scope}.start_project.loginButton`,
    defaultMessage: 'Log In',
  },
  loginWithFb: {
    id: `${scope}.start_project.loginWithFb`,
    defaultMessage: 'Log in with Facebook',
  },
  orLabel: {
    id: `${scope}.start_project.orLabel`,
    defaultMessage: 'OR',
  },
  forgotPwd: {
    id: `${scope}.start_project.forgotPwd`,
    defaultMessage: 'Forgot password?',
  },
});

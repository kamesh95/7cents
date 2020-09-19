/*
 * Expense Overview Page
 *
 * Shows an overview of all expenses
 */
import React from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import Hidden from '@material-ui/core/Hidden';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MenuIcon from '@material-ui/icons/Menu';
import List from '@material-ui/core/List';
import MailIcon from '@material-ui/icons/Mail';
import { FormattedMessage } from 'react-intl';
import { useTheme } from '@material-ui/core/styles';

import Logo from './Logo';
import Title from './Title';
import Drawer from './Drawer';
import Toolbar from './Toolbar';
import Divider from './Divider';
import ListHead from './ListHead';
import ListItem from './ListItem';
import IconButton from './IconButton';
import ListItemIcon from './ListItemIcon';
import ListItemText from './ListItemText';
import messages from './messages';
import LogoSrc from '../../images/logo.png';

export default function SideDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const muiTheme = useTheme();

  const drawer = (
    <div style={{ justifyContent: 'center' }}>
      <Toolbar>
        <Logo src={LogoSrc} alt="Logo" />
        <Title>
          <FormattedMessage {...messages.appName} />
        </Title>
      </Toolbar>
      <Divider />
      <ListHead>
        CATEGORIES
        <List>
          {['Home', 'Transactions', 'Bills & Invoices'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </ListHead>
      <Divider />
      <ListHead>
        SUPPORT
        <List>
          {['Feedback', 'Contact'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </ListHead>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div>
      <CssBaseline />
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        theme={muiTheme}
        onClick={handleDrawerToggle}
      >
        <MenuIcon />
      </IconButton>
      <Hidden smUp implementation="css">
        <Drawer
          fixedwidth="true"
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
        >
          {drawer}
        </Drawer>
      </Hidden>
      <Hidden xsDown implementation="css">
        <Drawer variant="permanent" open>
          {drawer}
        </Drawer>
      </Hidden>
    </div>
  );
}

SideDrawer.propTypes = {
  window: PropTypes.func,
};

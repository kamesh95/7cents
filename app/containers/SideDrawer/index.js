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
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import { FormattedMessage } from 'react-intl';

import Logo from './Logo';
import Title from './Title';
import Drawer from './Drawer';
import Divider from './Divider';
import ListHead from './ListHead';
import Toolbar from './Toolbar';
import ListItem from './ListItem';
import ListItemIcon from './ListItemIcon';
import messages from './messages';
import LogoSrc from '../../images/logo.png';

export default function SideDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

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
          {['Home', 'Bills', 'Groceries', 'Others'].map((text, index) => (
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
          {['FAQ'].map((text, index) => (
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
      <Hidden smUp implementation="css">
        <Drawer
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

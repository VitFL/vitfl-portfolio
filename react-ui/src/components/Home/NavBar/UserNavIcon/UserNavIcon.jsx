import React, { useState, useCallback } from 'react';
import { useMappedState } from 'redux-react-hook';
import { NavItem, NavLink } from 'reactstrap';
import Robohash from 'react-robohash';
import Icon from '@mdi/react';
import { mdiLogin } from '@mdi/js';
import * as routes from '../../../../constants/routes';

const UserNavIcon = () => {
  const mapState = useCallback(
    state => ({
      authUser: state.sessionState.authUser,
    }),
    [],
  );
  const { authUser } = useMappedState(mapState);
  return (
    <NavLink href={routes.LOGIN} className="d-inline">
      {authUser ? (
        <Robohash name="foxy" type="cat" size="25x25" />
      ) : (
        <Icon path={mdiLogin} size={1} className="login-icon" />
      )}
    </NavLink>
  );
};

export default UserNavIcon;

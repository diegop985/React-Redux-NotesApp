/* eslint-disable react/prop-types */
import { LogoutOutlined, MenuOutlined } from '@mui/icons-material';
import { AppBar, Grid, IconButton, Toolbar, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { startLogOutFirebase } from '../../store/auth/thunks';
import { setOpen } from '../../store/sidebar/sideBarSlice';

export const NavBar = ( { drawerWith = 240 } ) => {
  const dispatch = useDispatch();

  const onLogOut = () => {
    dispatch( startLogOutFirebase() );
  };

  const openSideBar = () => {
    dispatch( setOpen() );
  };

  return (
    <AppBar
        position="fixed"
        sx={ { width: { sm: `calc( 100% - ${drawerWith}px)`, ml: { sm: `${drawerWith}px` } } } }
    >

      <Toolbar>
        <IconButton
            color="inherit"
            edge="start"
            sx={ { mr: 2, display: { sm: 'none' } } }
            onClick={ openSideBar }
          >
          <MenuOutlined/>
        </IconButton>

        <Grid container direction="row" justifyContent="space-between" alignItems="center">

          <Typography variant="h6" noWrap component="div">Notes</Typography>

          <IconButton color='error' onClick={ onLogOut }>
            <LogoutOutlined/>
          </IconButton>

        </Grid>

      </Toolbar>

    </AppBar>
  );
};

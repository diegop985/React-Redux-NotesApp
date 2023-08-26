/* eslint-disable no-extra-boolean-cast */
import { Google } from '@mui/icons-material';
import { Alert, Button, Grid, Link, TextField, Typography } from '@mui/material';
import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { cleanErrorMessage } from '../../store/auth/authSlice';
import { startGoogleSignIn, startLoginWithEmail } from '../../store/auth/thunks';
import { AuthLayout } from '../layout/AuthLayout';

const formData = {
  email: '',
  password: '',
};

export const LoginPage = () => {
  const { status, errorMessage } = useSelector( state => state.auth );

  const isAuthenticating = useMemo( () => status === 'checking', [ status ] );

  const dispatch = useDispatch();

  const { email, password, onInputChange } = useForm( formData );

  const onSubmit = ( event ) => {
    event.preventDefault();

    dispatch( startLoginWithEmail( { email, password } ) );
  };

  const onGoogleSignIn = () => {
    dispatch( startGoogleSignIn() );
  };

  const cleanError = () => {
    dispatch( cleanErrorMessage() );
  };

  return (
    <AuthLayout title='Login'>

      <form onSubmit={ onSubmit } className="animate__animated animate__fadeIn animate__faster">
          <Grid container>

          <Grid item xs={ 12 } md={ 5.8 } sx={ { mt: 2, mr: { md: 1.5 } } } >
            <TextField
            label="Email"
            type="email"
            placeholder='correo@gmail.com'
            fullWidth
            name="email"
            value={ email }
            onChange= { onInputChange }
            />
          </Grid>

          <Grid item xs={ 12 } md={ 5.8 } sx={ { mt: 2 } } >
            <TextField
            label="Contraseña"
            type="password"
            placeholder='Contraseña'
            fullWidth
            name="password"
            value={ password }
            onChange= { onInputChange }
            />
          </Grid>

          <Grid container>
            <Grid item xs={ 12 } display={ errorMessage ? '' : 'none' } sx={ { mt: 1 } }>
              <Alert severity='error'>{ errorMessage }</Alert>
            </Grid>
          </Grid>

          <Grid container spacing={ 2 } sx={ { mb: 2, mt: 1 } }>

            <Grid item xs={ 12 } sm={ 6 }>
              <Button disabled={ isAuthenticating } type='submit' variant="contained" fullWidth>
                Login
              </Button>
            </Grid>
            <Grid item xs={ 12 } sm={ 6 }>
              <Button disabled={ isAuthenticating } onClick={ onGoogleSignIn } variant="contained" fullWidth>
                <Google/>
                <Typography sx={ { ml: 1 } }>Google</Typography>
              </Button>
            </Grid>

          </Grid>

            <Grid container direction="row" justifyContent="end">

              <Link onClick={ cleanError } component={ RouterLink } to="/auth/register/">

                Crear una cuenta

              </Link>
            </Grid>

          </Grid>

        </form>

    </AuthLayout>
  );
};

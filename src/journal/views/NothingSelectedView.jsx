// import { StarOutline } from '@mui/icons-material';
// import { EditNote } from '@mui/icons-material';
import { Grid, Typography } from '@mui/material';
import EditNoteIcon from '@mui/icons-material/EditNote';

export const NothingSelectedView = () => {
  return (
    <Grid
      className="animate__animated animate__fadeIn animate__faster"
      container
      spacing={ 0 }
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={ { minHeight: 'calc(100vh - 110px)', backgroundColor: 'primary.main', borderRadius: 3 } }
    >
      <Grid item xs={ 12 }>
        <EditNoteIcon sx={ { fontSize: 100, color: 'white' } }/>
      </Grid>

      <Grid>
        <Typography color="white" variant='h5'>Choose a note or create a new one.</Typography>
      </Grid>
    </Grid>
  );
};

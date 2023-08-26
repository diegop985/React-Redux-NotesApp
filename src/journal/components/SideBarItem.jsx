/* eslint-disable react/prop-types */
import {
  Grid,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { setActiveNote } from '../../store/journal/journalSlice';
import { setClosed } from '../../store/sidebar/sideBarSlice';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';

export const SideBarItem = ( { title, body, id, date, imageURLs = [] } ) => {
  const dispatch = useDispatch();

  const newTitle = useMemo( () => {
    return title.length > 17 ? title.substring( 0, 17 ) + '...' : title;
  }, [ title ] );

  const NoteActive = {
    title,
    body,
    date,
    imageURLs,
    id,
  };

  const setActiveNoteOnClick = () => {
    dispatch( setActiveNote( NoteActive ) );
    dispatch( setClosed() );
  };

  return (
  <ListItem disablePadding onClick={ setActiveNoteOnClick }>
    <ListItemButton>
      <ListItemIcon>
        <DescriptionOutlinedIcon sx={ { minWidth: 20 } }/>
      </ListItemIcon>
      <Grid container direction="column">
        <ListItemText sx={ { fontSize: 10 } } primary={ newTitle }/>
      </Grid>
    </ListItemButton>
  </ListItem>
  );
};

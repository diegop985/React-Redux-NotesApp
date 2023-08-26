import {
  VITE_PUBLIC_CLOUDINARY_PRESET_ID,
  VITE_PUBLIC_CLOUDINARY_URL,
} from '../config';

export const fileUpload = async ( file ) => {
  if ( !file ) throw new Error( 'Missing file to upload' );
  const cloudURL = VITE_PUBLIC_CLOUDINARY_URL;

  const formData = new FormData();
  formData.append( 'upload_preset', VITE_PUBLIC_CLOUDINARY_PRESET_ID );
  formData.append( 'file', file );

  try {
    const resp = await fetch( cloudURL, {
      method: 'POST',
      body: formData,
    } );

    if ( !resp.ok ) throw new Error( 'Can\'t upload image' );

    const cloudResp = await resp.json();

    return cloudResp.secure_url;
  } catch ( error ) {
    throw new Error( error.message );
  }
};

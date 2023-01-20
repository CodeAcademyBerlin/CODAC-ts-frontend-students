import { gql, useMutation } from '@apollo/client';
import styled from '@emotion/styled';
import { Box, Button, Typography } from '@mui/material';
import { ChangeEvent, useState } from 'react';

//Upload file graphql mutation
const MUTATION = gql`
  mutation SingleUpload($file: Upload!) {
    singleUpload(file: $file) {
      id
      path
      filename
      mimetype
    }
  }
`;

//Upload Image Style
const ImgStyled = styled('img')(() => ({
  width: 120,
  height: 120,
  marginRight: 6.25,
  borderRadius: 10,
}));

const UploadFile = () => {
  const [image, setImage] = useState<string>('');

  const [mutate] = useMutation(MUTATION);

  function onChange(target: ChangeEvent) {
    target: {
      validity;
      file: [];
    }
  }
  {
    if (validity.valid) mutate({ variables: { file } });
  }

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <ImgStyled src={image} alt="news post cover image" />
      <Box>
        <Button sx={{ mt: 3, ml: 1 }} type="submit" variant="contained">
          Upload image
          <input
            hidden
            type="file"
            onChange={onChange}
            accept="image/png, image/jpeg"
            id="account-settings-upload-image"
          />
        </Button>
        <Button
          color="secondary"
          variant="outlined"
          onClick={() => setImage('')}
        >
          Reset
        </Button>
        <Typography variant="body2" sx={{ marginTop: 5 }}>
          Allowed PNG or JPEG. Max size of 800K.
        </Typography>
      </Box>
    </Box>
  );
};
export default UploadFile;

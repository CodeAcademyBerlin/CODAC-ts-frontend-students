import { styled, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Button, { ButtonProps } from '@mui/material/Button';
import React, { ElementType, useState } from 'react';
import { getToken } from 'src/lib/apolloClient';

//Upload Image Style
const ImgStyled = styled('img')(({ theme }) => ({
  width: 120,
  height: 120,
  marginRight: theme.spacing(6.25),
  borderRadius: theme.shape.borderRadius,
}));

const ButtonStyled = styled(Button)<
  ButtonProps & { component?: ElementType; htmlFor?: string }
>(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    textAlign: 'center',
  },
}));

const ResetButtonStyled = styled(Button)<ButtonProps>(({ theme }) => ({
  marginLeft: theme.spacing(4.5),
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    marginLeft: 0,
    textAlign: 'center',
    marginTop: theme.spacing(4),
  },
}));

interface UploadFileProps {
  setFileId: (fileId: string) => void;
}

const UploadFile = ({ setFileId }: UploadFileProps) => {
  const [uploadedFile, setUploadedFile] = useState<string>('');

  async function onChange(e: any) {
    const token = getToken();
    var myHeaders = new Headers();
    myHeaders.append('Authorization', `Bearer ${token}`);
    const file = await e.target.files[0];
    const form = new FormData();
    form.append('files', file);
    // console.log('file', file);
    if (file) {
      const response = await fetch(
        'https://codac-364707.ey.r.appspot.com/api/upload',
        {
          method: 'post',
          body: form,
          headers: myHeaders,
        },
      );
      // console.log('response', response);
      const result = await response.json();
      setFileId(result[0].id);
      // console.log('result', result);
      setUploadedFile(result[0].url);
    }
  }

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <ImgStyled src={uploadedFile} alt="news post cover image" />
      <Box>
        <ButtonStyled
          component="label"
          variant="contained"
          htmlFor="account-settings-upload-image"
        >
          Upload image
          <input
            hidden
            type="file"
            onChange={onChange}
            accept="image/png, image/jpeg"
            id="account-settings-upload-image"
          />
        </ButtonStyled>
        <ResetButtonStyled
          color="error"
          variant="outlined"
          onClick={() => setUploadedFile('')}
        >
          Reset
        </ResetButtonStyled>
        <Typography variant="body2" sx={{ marginTop: 5 }}>
          Allowed PNG or JPEG. Max size of 800K.
        </Typography>
      </Box>
    </Box>
  );
};
export default UploadFile;

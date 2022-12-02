import { Button, css, Typography } from '@mui/material';
import { styled, keyframes } from '@mui/material/styles'

const neon = keyframes`
       0% {
    text-shadow: 1px 1px 1px #919191, 1px 2px 1px #919191, 1px 3px 1px #919191, 1px 4px 1px #919191,
  1px 5px 1px #919191, 1px 6px 1px #919191, 1px 7px 1px #919191, 1px 8px 1px #919191,
    1px 9px 1px #919191, 1px 10px 1px #919191, 1px 18px 6px rgba(16, 16, 16, 0.4),
      1px 22px 10px rgba(16, 16, 16, 0.2), 1px 25px 35px rgba(16, 16, 16, 0.2),
        1px 30px 300px #38bcc1;
          }
       90% { 
           text-shadow: 1px 1px 1px #919191, 1px 2px 1px #919191, 1px 3px 1px #919191, 1px 4px 1px #919191,
  1px 5px 1px #919191, 1px 6px 1px #919191, 1px 7px 1px #919191, 1px 8px 1px #919191,
    1px 9px 1px #919191, 1px 10px 1px #919191, 1px 18px 6px rgba(16, 16, 16, 0.4),
      1px 22px 10px rgba(16, 16, 16, 0.2), 1px 25px 35px rgba(16, 16, 16, 0.2),
        1px 30px 400px #38bcc1;
        }
    95% {
text-shadow: 1px 1px 1px #919191, 1px 2px 1px #919191, 1px 3px 1px #919191, 1px 4px 1px #919191,
        1px 5px 1px #919191, 1px 6px 1px #919191, 1px 7px 1px #919191, 1px 8px 1px #919191,
        1px 9px 1px #919191, 1px 10px 1px #919191, 1px 18px 6px rgba(16, 16, 16, 0.4),
        1px 22px 10px rgba(16, 16, 16, 0.2), 1px 25px 35px rgba(16, 16, 16, 0.2);
        }
  100%{
    text-shadow: 1px 1px 1px #919191, 1px 2px 1px #919191, 1px 3px 1px #919191, 1px 4px 1px #919191,
    1px 5px 1px #919191, 1px 6px 1px #919191, 1px 7px 1px #919191, 1px 8px 1px #919191,
    1px 9px 1px #919191, 1px 10px 1px #919191, 1px 18px 6px rgba(16, 16, 16, 0.4),
    1px 22px 10px rgba(16, 16, 16, 0.2), 1px 25px 35px rgba(16, 16, 16, 0.2),
    1px 30px 500px #38bcc1;
      }
 `;

export const BrandText = styled(Typography)`
    font-size: 10rem;
    text-align: center;
    font-family: CODAC;
    color: ${({ theme }) => theme.palette.primary.main};
    animation: ${neon} 2s linear infinite alternate-reverse;
    text-shadow: 1px 1px 1px #919191, 1px 2px 1px #919191, 1px 3px 1px #919191, 1px 4px 1px #919191,
    1px 5px 1px #919191, 1px 6px 1px #919191, 1px 7px 1px #919191, 1px 8px 1px #919191,
    1px 9px 1px #919191, 1px 10px 1px #919191, 1px 18px 6px rgba(16, 16, 16, 0.4),
    1px 22px 10px rgba(16, 16, 16, 0.2), 1px 25px 35px rgba(16, 16, 16, 0.2), 1px 30px 100px #38bcc1;
`
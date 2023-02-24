import { Grid, Typography } from '@mui/material';
import Image from 'next/image';
import React, { useEffect } from 'react';

import { BrandText } from '../components/common/BrandStyle';
import ParticlesComp from '../components/common/Particles/Particles';
import { useSettings } from '../hooks/useSettings';

function Congrats() {
  const { setFestive } = useSettings();
  useEffect(() => {
    setFestive(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
      <Grid item xs={12} sx={{ paddingBottom: 4 }}>
        <BrandText variant="h2">Congratulation Mint-Green Octopuses!</BrandText>
      </Grid>
      <Grid item xs={12} sx={{ paddingBottom: 4 }}>
        <Image
          src="/assets/octopuses.png"
          width={500}
          height={500}
          alt="Narwhals"
        />
      </Grid>
      <Grid item xs={12} sx={{ paddingBottom: 4 }}>
        <BrandText variant="h3">Happy Coding!</BrandText>
      </Grid>
      <ParticlesComp type="confetti" />
    </Grid>
  );
}

export default Congrats;

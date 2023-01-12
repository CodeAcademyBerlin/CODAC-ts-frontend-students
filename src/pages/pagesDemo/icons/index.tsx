// ** MUI Imports
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
/**
 ** Icons Imports:
 * ! You need to import all the icons which come from the API or from your server and then add these icons in 'icons' variable.
 * ! If you need all the icons from the library, use "import * as Icon from 'mdi-material-ui'"
 * */
import Abacus from 'mdi-material-ui/Abacus';
import AbjadArabic from 'mdi-material-ui/AbjadArabic';
import AbjadHebrew from 'mdi-material-ui/AbjadHebrew';
import AbTesting from 'mdi-material-ui/AbTesting';
import AbugidaDevanagari from 'mdi-material-ui/AbugidaDevanagari';
import AbugidaThai from 'mdi-material-ui/AbugidaThai';
import AccessPoint from 'mdi-material-ui/AccessPoint';
import AccessPointCheck from 'mdi-material-ui/AccessPointCheck';
import AccessPointMinus from 'mdi-material-ui/AccessPointMinus';
import AccessPointNetwork from 'mdi-material-ui/AccessPointNetwork';
import AccessPointNetworkOff from 'mdi-material-ui/AccessPointNetworkOff';
import AccessPointOff from 'mdi-material-ui/AccessPointOff';
import AccessPointPlus from 'mdi-material-ui/AccessPointPlus';
import AccessPointRemove from 'mdi-material-ui/AccessPointRemove';
import Account from 'mdi-material-ui/Account';
import AccountAlert from 'mdi-material-ui/AccountAlert';
import AccountAlertOutline from 'mdi-material-ui/AccountAlertOutline';
import AccountArrowLeft from 'mdi-material-ui/AccountArrowLeft';
import AccountArrowLeftOutline from 'mdi-material-ui/AccountArrowLeftOutline';
import AccountArrowRight from 'mdi-material-ui/AccountArrowRight';
import AccountArrowRightOutline from 'mdi-material-ui/AccountArrowRightOutline';
import AccountBox from 'mdi-material-ui/AccountBox';
import AccountBoxMultiple from 'mdi-material-ui/AccountBoxMultiple';
import AccountBoxMultipleOutline from 'mdi-material-ui/AccountBoxMultipleOutline';
import AccountBoxOutline from 'mdi-material-ui/AccountBoxOutline';
import AccountCancel from 'mdi-material-ui/AccountCancel';
import AccountCancelOutline from 'mdi-material-ui/AccountCancelOutline';
import AccountCash from 'mdi-material-ui/AccountCash';
import AccountCashOutline from 'mdi-material-ui/AccountCashOutline';
import AccountCheck from 'mdi-material-ui/AccountCheck';
import AccountCheckOutline from 'mdi-material-ui/AccountCheckOutline';
import AccountChild from 'mdi-material-ui/AccountChild';
import AccountChildCircle from 'mdi-material-ui/AccountChildCircle';
import AccountChildOutline from 'mdi-material-ui/AccountChildOutline';
import AccountCircle from 'mdi-material-ui/AccountCircle';
import AccountCircleOutline from 'mdi-material-ui/AccountCircleOutline';
import AccountClock from 'mdi-material-ui/AccountClock';
import AccountClockOutline from 'mdi-material-ui/AccountClockOutline';
import AccountCog from 'mdi-material-ui/AccountCog';
import AccountCogOutline from 'mdi-material-ui/AccountCogOutline';
import AccountConvert from 'mdi-material-ui/AccountConvert';
import AccountConvertOutline from 'mdi-material-ui/AccountConvertOutline';
import AccountCowboyHat from 'mdi-material-ui/AccountCowboyHat';
import AccountDetails from 'mdi-material-ui/AccountDetails';
import AccountDetailsOutline from 'mdi-material-ui/AccountDetailsOutline';
import AccountEdit from 'mdi-material-ui/AccountEdit';
import AccountEditOutline from 'mdi-material-ui/AccountEditOutline';
import AccountGroup from 'mdi-material-ui/AccountGroup';

const icons = {
  Abacus,
  Account,
  AbTesting,
  AccountBox,
  AccountCog,
  AbjadArabic,
  AbjadHebrew,
  AbugidaThai,
  AccessPoint,
  AccountCash,
  AccountEdit,
  AccountAlert,
  AccountCheck,
  AccountChild,
  AccountClock,
  AccountGroup,
  AccountCancel,
  AccountCircle,
  AccessPointOff,
  AccountConvert,
  AccountDetails,
  AccessPointPlus,
  AccessPointCheck,
  AccessPointMinus,
  AccountArrowLeft,
  AccountCowboyHat,
  AbugidaDevanagari,
  AccessPointRemove,
  AccountArrowRight,
  AccountBoxOutline,
  AccountCogOutline,
  AccessPointNetwork,
  AccountBoxMultiple,
  AccountCashOutline,
  AccountChildCircle,
  AccountEditOutline,
  AccountAlertOutline,
  AccountCheckOutline,
  AccountChildOutline,
  AccountClockOutline,
  AccountCancelOutline,
  AccountCircleOutline,
  AccessPointNetworkOff,
  AccountConvertOutline,
  AccountDetailsOutline,
  AccountArrowLeftOutline,
  AccountArrowRightOutline,
  AccountBoxMultipleOutline,
};

const Icons = () => {
  const renderIconGrids = () => {
    return Object.keys(icons).map((key) => {
      const IconTag = icons[key as keyof typeof icons];

      return (
        <Grid item key={key}>
          <Tooltip arrow title={key} placement="top">
            <Card>
              <CardContent sx={{ display: 'flex' }}>
                <IconTag />
              </CardContent>
            </Card>
          </Tooltip>
        </Grid>
      );
    });
  };

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Typography variant="h5">
          <Link href="https://materialdesignicons.com/" target="_blank">
            Material Design Icons
          </Link>
        </Typography>
        <Typography variant="body2">
          Material Design Icons from the Community
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={6}>
          {renderIconGrids()}
        </Grid>
      </Grid>
      <Grid item xs={12} sx={{ textAlign: 'center' }}>
        <Button
          target="_blank"
          rel="noreferrer"
          component={Link}
          variant="contained"
          href="https://materialdesignicons.com/"
        >
          View All Material Design Icons
        </Button>
      </Grid>
    </Grid>
  );
};

export default Icons;

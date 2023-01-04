// ** React Imports
import {
  ChangeEvent,
  MouseEvent,
  ReactNode,
  useContext,
  useState,
} from "react";

// ** Next Imports
import Link from "next/link";
import { useRouter } from "next/router";

// ** MUI Components
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import CardContent from "@mui/material/CardContent";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import { styled, useTheme } from "@mui/material/styles";
import MuiCard, { CardProps } from "@mui/material/Card";
import InputAdornment from "@mui/material/InputAdornment";
import MuiFormControlLabel, {
  FormControlLabelProps,
} from "@mui/material/FormControlLabel";

// ** Icons Imports
import Google from "mdi-material-ui/Google";
import Github from "mdi-material-ui/Github";
import Twitter from "mdi-material-ui/Twitter";
import Facebook from "mdi-material-ui/Facebook";
import EyeOutline from "mdi-material-ui/EyeOutline";
import EyeOffOutline from "mdi-material-ui/EyeOffOutline";
import FooterIllustrationsV1 from "../componentsDemo/pages/auth/FooterIllustration";
import { useLoginMutation } from "../../cabServer/mutations/__generated__/user";
import { BrandText } from "../components/common/BrandStyle";
import CircularProgress from "@mui/material/CircularProgress";
import { AuthContext } from "../contexts/authContext";
import BlankLayout from "../layouts/BlankLayout";
import MainLayout from "../layouts/MainLayout/MainLayout";

interface State {
  password: string;
  email: string;
  error: string;
  showPassword: boolean;
  rememberMe: boolean;
}

// ** Styled Components
const Card = styled(MuiCard)<CardProps>(({ theme }) => ({
  [theme.breakpoints.up("sm")]: { width: "28rem" },
}));

const LinkStyled = styled(Link)(({ theme }) => ({
  fontSize: "0.875rem",
  textDecoration: "none",
  color: theme.palette.primary.main,
}));

const FormControlLabel = styled(MuiFormControlLabel)<FormControlLabelProps>(
  ({ theme }) => ({
    "& .MuiFormControlLabel-label": {
      fontSize: "0.875rem",
      color: theme.palette.text.secondary,
    },
  })
);

const LoginPage = () => {
  // ** State
  const [values, setValues] = useState<State>({
    password: "",
    email: "",
    error: "",
    showPassword: false,
    rememberMe: false,
  });
  const [loginMutation, { data, loading, error }] = useLoginMutation({
    variables: {
      email: values.email,
      password: values.password,
    },
  });

  const { onLoginSucces } = useContext(AuthContext);
  // ** Hook
  const router = useRouter();

  const handleChange =
    (prop: keyof State) => (event: ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };
  const handleSubmit = async (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    try {
      const { data } = await loginMutation();
      if (data) {
        const { login } = data;
        console.log("login", login);
        onLoginSucces(login, values.rememberMe);
        router.push("/dashboard");
      }
    } catch (e) {
      setValues({ ...values, error: "e.message" });
    }
  };

  return (
    <Box className="content-center">
      <Card sx={{ zIndex: 1 }}>
        <CardContent
          sx={{ padding: (theme) => `${theme.spacing(12, 9, 7)} !important` }}
        >
          <Box sx={{ mb: 6 }}>
            <Typography
              variant="h5"
              sx={{ fontWeight: 600, marginBottom: 1.5 }}
            >
            </Typography>
            <Typography variant="body2">
              Please sign-in to your account and start the adventure
            </Typography>
          </Box>
          <form noValidate autoComplete="off">
            <TextField
              autoFocus
              fullWidth
              id="email"
              value={values.email}
              onChange={handleChange("email")}
              label="Email"
              sx={{ marginBottom: 4 }}
            />
            <FormControl fullWidth>
              <InputLabel htmlFor="auth-login-password">Password</InputLabel>
              <OutlinedInput
                label="Password"
                value={values.password}
                id="auth-login-password"
                onChange={handleChange("password")}
                type={values.showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      edge="end"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      aria-label="toggle password visibility"
                    >
                      {values.showPassword ? <EyeOutline /> : <EyeOffOutline />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
            <Box
              sx={{
                mb: 4,
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
                justifyContent: "space-between",
              }}
            >
              <FormControlLabel onChange={(e, checked) => setValues({ ...values, rememberMe: checked })} control={<Checkbox />} label="Remember Me" />
              <LinkStyled passHref href="/" onClick={(e) => e.preventDefault()}>
                Forgot Password?
              </LinkStyled>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              {error && (
                <Typography color="red" variant="body2" sx={{ marginRight: 2 }}>
                  {error.message}
                </Typography>
              )}
            </Box>
            {loading ? (
              <CircularProgress />
            ) : (
              <Button
                fullWidth
                size="large"
                variant="contained"
                sx={{ marginBottom: 7 }}
                onClick={handleSubmit}
              >
                Login
              </Button>
            )}

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              {/* <Typography variant="body2" sx={{ marginRight: 2 }}>
                New on our platform?
              </Typography>
              <Typography variant="body2">
                <LinkStyled passHref href="/pages/register">
                  Create an account
                </LinkStyled>
              </Typography> */}
            </Box>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
};

// LoginPage.getLayout = (page: ReactNode) => <MainLayout>{page}</MainLayout>;

export default LoginPage;

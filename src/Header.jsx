import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import smallLogoURL from "./img/ssl-logo-small.png";
import Button from "@mui/material/Button";

export const Header = (props) => {
  const signin = () => {
    window.location.href = "/signin";
  };
  const analysis = () => {
    window.location.href = "/analysis";
  };
  const logout = () =>{
    sessionStorage.setItem('user', "");
    window.location.href = "/";
  }
  return (
    <AppBar position="static">
      <Toolbar>
        <a href="/">
          <img alt="small-logo" style={{ height: "40px" }} src={smallLogoURL} />
        </a>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1 }}
        ></Typography>
        {props?.user === "" || undefined ? (
          <Button color="inherit" onClick={signin}>
            Sign In
            <AccountCircleIcon />
          </Button>
        ) : (
          <div>
            <Button color="inherit" onClick={analysis}>
              {props.user}
              <AccountCircleIcon />
            </Button>
            <Button color="inherit" onClick={logout}>
              Log Out
            </Button>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
};

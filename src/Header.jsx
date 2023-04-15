import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import smallLogoURL from "./img/ssl-logo-small.png";
import Button from "@mui/material/Button";

export const Header = () => {
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
        <Button color="inherit">
          Login
          <AccountCircleIcon />
        </Button>
      </Toolbar>
    </AppBar>
  );
};

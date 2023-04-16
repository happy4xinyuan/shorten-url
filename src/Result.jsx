import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import {
  Container,
  Card,
  TextField,
  CardMedia,
  CardContent,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  DialogContentText,
} from "@mui/material";

import imgURL from "./img/ssl-logo.png";
import "./Main.css";
import { Header } from "./Header";

export default function Result() {
  // 例如：使用 URLSearchParams API 解析查询字符串
  const searchParams = new URLSearchParams(window.location.search);
  const formData = Object.fromEntries(searchParams.entries());
  const inputRef = React.useRef(null);
  const [open, setOpen] = React.useState(false);


  const handleCopyClick = () => {
    navigator.clipboard.writeText(inputRef.current.value)
    .then(() => {
      console.log(inputRef);
      console.log('Text copied to clipboard');
    })
    .catch((error) => {
      console.error('Failed to copy text: ', error);
    });
    setOpen(true);
  }
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Header/>

      <Container maxWidth="md" className="main-container">
        <Card variant="outlined">
          <Container
            maxWidth="50%"
            style={{
              marginTop: "10px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <CardMedia
              className="main-logo"
              component="img"
              image={imgURL}
              alt="big-logo"
            />
          </Container>
          <CardContent>
            <section id="urlbox">
                <h1>Your shortened URL</h1>
                <p>
                Copy the shortened link and share it in messages, texts, posts, websites and other locations.
                </p>
              <form>
                <TextField
                  size="small"
                  style={{ width: "60%" }}
                  variant="outlined"
                  inputRef={inputRef}
                  value={formData?.url || ""}
                />
                <Button variant="contained" style={{ height: "40px" ,marginLeft: '5px'}} onClick={handleCopyClick}>
                  Copy URL
                </Button>
                <Button variant="outlined" href="/" style={{ height: "40px" ,marginLeft: '5px'}} >Back Home</Button>
              </form>
            </section>

          </CardContent>
        </Card>

        <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Congratulation!"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            You have successfully copied your short URL!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            Have a good time!
          </Button>
        </DialogActions>
      </Dialog>
      </Container>
    </Box>
  );
}

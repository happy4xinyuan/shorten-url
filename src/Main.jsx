import * as React from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import {
  Container,
  Card,
  TextField,
  CardMedia,
  CardContent,
} from "@mui/material";
import { Header } from "./Header";
import imgURL from "./img/ssl-logo.png";
import "./Main.css";

export default function Main() {
  const [formData, setformData] = React.useState({ url: "", uid: 777});
  const inputRef = React.useRef(null);

  const handleFormDataChange = (event) => {
    const { value } = event.target;
    setformData({ url: value });
  };

  const signup = () =>{
    window.location.href = "/signup"; 
  }
  const user = sessionStorage.getItem('user');

  const handleShortenUrl = (event) => {
    event.preventDefault();
    inputRef.current.value = "";
    if(formData.url.length === 0) {
      alert("empty Url! please input your long Url");
    } else {
      fetch('https://sslt1.herokuapp.com/shortenUrl', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then(response => response.json())
      .then(data => {
        console.log(data.shortUrl);
        const queryString = new URLSearchParams({"url": data.shortUrl}).toString();
        console.log("/result?" + queryString);
        window.location.href = "/result?" + queryString;
      })
      .catch(error => console.error(error));
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Header user={user}/>
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
              <h1>Paste the URL to be shortened</h1>
              <form>
                <TextField
                  size="small"
                  style={{ width: "60%" }}
                  variant="outlined"
                  placeholder="Enter the link here"
                  value={formData.longUrl}
                  inputRef={inputRef}
                  onChange={handleFormDataChange}
                />
                <Button
                  variant="contained"
                  style={{ height: "40px" }}
                  onClick={handleShortenUrl}
                >
                  Shorten URL
                </Button>
              </form>
              <p>
                ShortURL is a free service to shorten URLs and create short
                links
              </p>
              <p>
                Create a premium account to shorten unlimited URLs with more
                features for your projects
              </p>
            </section>
          </CardContent>
        </Card>

        <Card variant="outlined" style={{ marginTop: "30px" }}>
          <CardContent>
            <h2>Want More? Try Premium Features!</h2>
            <p>
              Custom short links, powerful dashboard, detailed analytics,
              browser extension and more. Only $8.99/month
            </p>
            <Button variant="contained" onClick={signup}>Create Account</Button>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}

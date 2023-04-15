import { Button, Card, CardContent, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { Header } from "./Header";
import imgURL from "./img/ssl-logo.png";
import "./Notfound.css";

export const NotFound = () => {
  return (
    <div>
      <Header />
      <Container maxWidth="md">
        <Card variant="outlined" style={{ marginTop: "30px" }}>
          <CardContent>
            <Grid container spacing={2}>
              <Grid xs={6}>
                <Typography variant="h1">404</Typography>
                <Typography variant="h6">
                  The page you're looking for doesn't exist.
                </Typography>
                <Button variant="contained" href="/">
                  Back Home
                </Button>
              </Grid>
              <Grid xs={6} style={{ display: "flex", alignItems: "center" }}>
                <img src={imgURL} alt="" width="60%" />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
};

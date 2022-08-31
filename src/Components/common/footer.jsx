import React from "react";
import Facebook from "@mui/icons-material/Facebook";
import Twitter from "@mui/icons-material/Twitter";
import Google from "@mui/icons-material/Google";
import Instagram from "@mui/icons-material/Instagram";
import LinkedIn from "@mui/icons-material/LinkedIn";
import GitHub from "@mui/icons-material/GitHub";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import List from "@mui/material/List";
import Grid from "@mui/material/Grid";
import ListItem from "@mui/material/ListItem";
import { footerStyles } from "../../styles";
import { useTranslation } from "react-i18next";

let Footer = () => {
  let theme = useTheme();
  let { t } = useTranslation();
  return (
    <footer>
      <Box sx={footerStyles(theme)}>
        <Grid container p={4} bgcolor="inherit">
          <Grid item xs={12}>
            <Grid container justifyContent="center" p={2}>
              <IconButton color="inherit">
                <Facebook />
              </IconButton>

              <IconButton color="inherit">
                <Twitter />
              </IconButton>

              <IconButton color="inherit">
                <Google />
              </IconButton>

              <IconButton color="inherit">
                <Instagram />
              </IconButton>

              <IconButton color="inherit">
                <LinkedIn />
              </IconButton>

              <IconButton color="inherit">
                <GitHub />
              </IconButton>
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <form>
              <Grid
                container
                spacing={3}
                mb={2}
                p={2}
                justifyContent="center"
                alignItems="center"
              >
                <Grid item>
                  <p>
                    <strong>{t("footer.signUp")}</strong>
                  </p>
                </Grid>

                <Grid item md={5}>
                  <TextField
                    type="email"
                    label={t("footer.placeholder")}
                    fullWidth
                  />
                </Grid>
                <Grid item>
                  <Button variant="contained" color="success">
                    {t("footer.sub")}
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Grid>

          <Grid item xs={12} justifyContent="center" mb={4}>
            <section>
              <p>{t("footer.loremIpsum")}</p>
            </section>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={3} justifyContent="center">
              <Grid item md={3} sm={6} xs={12}>
                <List className="list-unstyled mb-0">
                  <ListItem>
                    <Link color="inherit" href="/">
                      {t("footer.links.1")}
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link color="inherit" href="/store">
                      {t("footer.links.2")}
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link color="inherit" href="/carts">
                      {t("footer.links.3")}
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link color="inherit" href="/editAccount">
                      {t("footer.links.4")}
                    </Link>
                  </ListItem>
                </List>
              </Grid>

              <Grid item md={3} sm={6} xs={12}>
                <List className="list-unstyled mb-0">
                  <ListItem>
                    <Link color="inherit" href="/signIn">
                      {t("footer.links.5")}
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link color="inherit" href="/signUp">
                      {t("footer.links.6")}
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link color="inherit" href="/adminDashboard">
                      {t("footer.links.7")}
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link color="inherit" href="/">
                      {t("footer.links.8")}
                    </Link>
                  </ListItem>
                </List>
              </Grid>

              <Grid item md={3} sm={6} xs={12}>
                <List className="list-unstyled mb-0">
                  <ListItem>
                    <Link color="inherit" href="#!">
                      {t("footer.links.9")}
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link color="inherit" href="#!">
                      {t("footer.links.10")}
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link color="inherit" href="#!">
                      {t("footer.links.11")}
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link color="inherit" href="#!">
                      {t("footer.links.12")}
                    </Link>
                  </ListItem>
                </List>
              </Grid>
              <Grid item md={3} sm={6} xs={12}>
                <List className="list-unstyled mb-0">
                  <ListItem>
                    <Link color="inherit" href="#!">
                      {t("footer.links.13")}
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link color="inherit" href="#!">
                      {t("footer.links.14")}
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link color="inherit" href="#!">
                      {t("footer.links.15")}
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link color="inherit" href="#!">
                      {t("footer.links.16")}
                    </Link>
                  </ListItem>
                </List>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid
          container
          p={3}
          justifyContent="center"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          <Grid item>{t("footer.copyright")}</Grid>
        </Grid>
      </Box>
    </footer>
  );
};

export default Footer;

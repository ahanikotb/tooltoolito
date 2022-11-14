import React from "react";
import { Box, Container, Grid } from "@mui/material";
import Link from "next/link";

function Footer() {
  return (
    <footer>
      <Box
        px={{ xs: 3, sm: 10 }}
        py={{ xs: 5, sm: 10 }}
        bgcolor="black"
        color="white"
      >
        <Container maxWidth="lg">
          <Grid container justifyContent="space-evenly">
            <Grid item>
              <Link
                style={{ textDecoration: "none", color: "white" }}
                href="/tools"
              >
                All Tools
              </Link>
            </Grid>

            <Grid item>
              <Link
                style={{ textDecoration: "none", color: "white" }}
                href="/contact"
              >
                Contact
              </Link>
            </Grid>

            <Grid item>
              <Link
                style={{ textDecoration: "none", color: "white" }}
                href="/privacy-policy"
              >
                Privacy Policy
              </Link>
            </Grid>
          </Grid>
          <Box
            fontFamily="Violethe"
            textAlign="center"
            pt={{ xs: 5, sm: 10 }}
            pb={{ xs: 5, sm: 0 }}
          >
            {"TOOLTOOLITO"} &reg; {new Date().getFullYear()}
          </Box>
        </Container>
      </Box>
    </footer>
  );
}

export default Footer;

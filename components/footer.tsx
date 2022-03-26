import { Box, Container, Grid, Link, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      sx={{
        background: "black",
        alignItems: "flex-end",
        marginTop: "auto",
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          paddingTop: "1rem",
          paddingBottom: "3rem",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Typography variant="body1" color="white">
              云南大学开源镜像站由 YNUOSA 运行维护.
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="subtitle2" color="white">
              关于我们
            </Typography>
            <Typography variant="body1" color="white">
                <Link href="https://github.com/YNUOSA">GitHub</Link>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

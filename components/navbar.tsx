import { Container } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { color } from "@mui/system";

export default function Navbar() {
  return (
    <Box sx={{ background: "black" }}>
      <Container
        maxWidth="xl"
        sx={{
          paddingTop: "3rem",
          paddingBottom: "2rem",
        }}
      >
        <Typography variant="h3" color="white" component="div">
          YNU Mirror
        </Typography>
        <Typography variant="h4" color="white" component="div">
          云南大学开源镜像站
        </Typography>
      </Container>
    </Box>
  );
}

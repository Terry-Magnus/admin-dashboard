import { Container, Typography, Box, Button } from "@mui/material";
import notfound from "../assets/images/not-found.png";
import { useNavigate } from "react-router-dom";
import { TurnLeft } from "@mui/icons-material";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <Container
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box textAlign="center">
        <img src={notfound} width="250" />
        <Typography variant="h3" my={4}>
          Page not found
        </Typography>
        <Button
          startIcon={<TurnLeft />}
          variant="contained"
          onClick={() => navigate(-1)}
        >
          Return Back
        </Button>
      </Box>
    </Container>
  );
};

export default NotFound;

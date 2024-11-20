import { Stack, Container } from "@mui/material";
import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar";
import Navbar from "./navbar";

export default function AppLayout() {
  return (
    <>
      <Sidebar />
      <Stack marginLeft="15vw" height="100%">
        <Navbar />
        <Container
          sx={{ bgcolor: "#F8F9FB", height: "100%", p: "50px 38px 61px 16px" }}
        >
          <Outlet />
        </Container>
      </Stack>
    </>
  );
}

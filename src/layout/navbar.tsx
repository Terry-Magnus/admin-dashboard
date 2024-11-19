import {
  Badge,
  Box,
  InputAdornment,
  InputBase,
  Typography,
  Divider,
} from "@mui/material";
import SearchIcon from "../assets/icons/search";
import { MailOutlined, NotificationsOutlined } from "@mui/icons-material";
import avatar from "../assets/images/avatar.png";
import Person from "../components/Person";

const Navbar = () => {
  return (
    <Box
      id="navbar"
      component="nav"
      sx={{
        bgcolor: "#fff",
        padding: "19px 45px",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Box>
        <Typography variant="h4" fontWeight={700}>
          Hi Taylor!
        </Typography>
        <Typography variant="subtitle2">
          Let’s check your store today
        </Typography>
      </Box>
      <Box display="flex" alignItems="center" gap="20px">
        <InputBase
          type="search"
          placeholder="Search..."
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          }
          sx={{
            backgroundColor: "#FAFAFA",
            border: "1px solid #D9D9D9",
            borderRadius: "12px",
            height: "48px",
            padding: "13px 18px",
          }}
        />

        <Badge color="error" variant="dot">
          <MailOutlined />
        </Badge>

        <Badge color="error" variant="dot">
          <NotificationsOutlined />
        </Badge>

        <Divider orientation="vertical" sx={{ height: "40px" }} />

        <Person image={avatar} name="Tynisha Obey" />
      </Box>
    </Box>
  );
};

export default Navbar;

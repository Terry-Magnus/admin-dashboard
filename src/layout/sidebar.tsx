import { Drawer, Stack, Box, Button } from "@mui/material";
import logo from "../assets/images/logo.svg";
import { useLocation } from "react-router-dom";
import ActivityIcon from "../assets/icons/activity";
import BagIcon from "../assets/icons/bag";
import BarChartIcon from "../assets/icons/bar-chart";
import UsersIcon from "../assets/icons/users";
import DocumentIcon from "../assets/icons/document";

interface LinkProps {
  name: string;
  path: string;
  icon: (props: { customcolor: string }) => React.ReactNode;
}

const links: LinkProps[] = [
  {
    name: "dashboard",
    path: "/dashboard",
    icon: ({ customcolor }) => <ActivityIcon customcolor={customcolor} />,
  },
  {
    name: "orders",
    path: "/orders",
    icon: ({ customcolor }) => <BagIcon customcolor={customcolor} />,
  },
  {
    name: "analytics",
    path: "/analytics",
    icon: ({ customcolor }) => <BarChartIcon customcolor={customcolor} />,
  },
  {
    name: "customer",
    path: "/customer",
    icon: ({ customcolor }) => <UsersIcon customcolor={customcolor} />,
  },
  {
    name: "menu",
    path: "/menu",
    icon: ({ customcolor }) => <DocumentIcon customcolor={customcolor} />,
  },
];

const Sidebar = () => {
  const { pathname } = useLocation();

  return (
    <Drawer
      sx={{
        width: "15vw",
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: "15vw",
          boxSizing: "border-box",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Stack>
        <Box p={4}>
          <img src={logo} width="100%" alt="logo" />
        </Box>
        <Stack p={2}>
          {links.map((link: LinkProps) => {
            const isActive = link.path === pathname;
            return (
              <Button
                LinkComponent="a"
                href={link.path}
                sx={{
                  bgcolor: isActive ? "primary.main" : "none",
                  color: isActive ? "#fff" : "secondary.light",
                  justifyContent: "left",
                  padding: "10px 20px",
                  borderRadius: "12px",
                  fontSize: { md: "12px", lg: "14px" },
                }}
                variant={isActive ? "contained" : "text"}
                key={link.path}
                startIcon={link.icon({
                  customcolor: isActive ? "#fff" : "secondary.light",
                })}
              >
                {link.name}
              </Button>
            );
          })}
        </Stack>
      </Stack>
    </Drawer>
  );
};

export default Sidebar;

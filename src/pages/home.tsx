import {
  Stack,
  Box,
  Card,
  Divider,
  IconButton,
  ListItemText,
  ListItemButton,
  CardContent,
  Menu,
  ListItem,
  Typography,
  Tabs,
  Tab,
} from "@mui/material";
import DocumentIcon from "../assets/icons/document";
import ActivityIcon from "../assets/icons/activity";
import UsersIcon from "../assets/icons/users";
import BagIcon from "../assets/icons/bag";
import { StatsProps } from "../components/home/types";
import StatsCard from "../components/home/StatsCard";
import { useState } from "react";
import { MoreHoriz } from "@mui/icons-material";
import TrashIcon from "../assets/icons/trash";
import ExportIcon from "../assets/icons/export";
import EyeIcon from "../assets/icons/eye";
import chart from "../assets/images/bar-chart.png";
import donut_main from "../assets/images/graph-total.png";
import donut_purple from "../assets/images/donut-purple.png";
import donut_green from "../assets/images/donut-green.png";
import map from "../assets/images/map.png";
import { menuStyle, customer_list, foods } from "../components/home/extras";
import Person from "../components/home/Person";

const cards: StatsProps[] = [
  {
    icon: <DocumentIcon alternate />,
    name: "Total Menu",
    value: 345,
  },
  {
    icon: <ActivityIcon alternate />,
    name: "Total Revenue",
    value: "$37,193.00",
  },
  {
    icon: <UsersIcon alternate />,
    name: "Total Customers",
    value: 1349,
  },
  {
    icon: <BagIcon alternate />,
    name: "Total Orders",
    value: 3500,
  },
];

const Home = () => {
  const [anchorEl, setAnchorEl] = useState<any>(null);
  const [value, setValue] = useState("all");

  const handleChange = (e: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <>
      <Box display="flex" gap="33px" mb="30px">
        {cards.map((card, i) => (
          <StatsCard
            key={i}
            icon={card.icon}
            name={card.name}
            value={card.value}
          />
        ))}
      </Box>

      <Box display="flex" justifyContent="space-between" gap="20px" mb="30px">
        <Box width="50%">
          <Card sx={{ boxShadow: "0px 8px 16px 0px #8F95B226" }}>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              height="50px"
              padding="10px 24px"
            >
              <Typography fontSize={18} fontWeight={700}>
                Revenue
              </Typography>
              <IconButton
                aria-label="more"
                aria-controls="long-menu"
                aria-haspopup="true"
                onClick={(e) => setAnchorEl(e.currentTarget)}
              >
                <MoreHoriz />
              </IconButton>
              <Menu
                id="long-menu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={() => setAnchorEl(null)}
                sx={menuStyle}
              >
                <ListItem>
                  <ListItemButton>
                    <EyeIcon customcolor="secondary.light" />
                    <ListItemText
                      primary="View"
                      sx={{
                        color: "secondary.light",
                        ml: 1,
                        fontSize: "14px",
                      }}
                    />
                  </ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton>
                    <ExportIcon customcolor="secondary.light" />
                    <ListItemText
                      primary="Export"
                      sx={{
                        color: "secondary.light",
                        ml: 1,
                        fontSize: "14px",
                      }}
                    />
                  </ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton>
                    <TrashIcon fontSize="small" />
                    <ListItemText
                      sx={{ color: "error.main", ml: 1, fontSize: "14px" }}
                      primary="Delete"
                    />
                  </ListItemButton>
                </ListItem>
              </Menu>
            </Box>
            <Divider />
            <CardContent sx={{ p: "24px 24px 35px 24px" }}>
              <Stack>
                <Typography fontSize={32} fontWeight={700}>
                  $112,340
                </Typography>
                <Box>
                  <img src={chart} />
                </Box>
              </Stack>
              <Box></Box>
            </CardContent>
          </Card>
        </Box>
        <Box width="50%">
          <Card sx={{ boxShadow: "0px 8px 16px 0px #8F95B226" }}>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              height="50px"
              padding="10px 24px"
            >
              <Stack>
                <Typography fontSize="18px" fontWeight={700}>
                  Customers
                </Typography>
                <Typography fontSize="12px" color="secondary.light">
                  Customers that buy our products
                </Typography>
              </Stack>
              <IconButton>
                <MoreHoriz />
              </IconButton>
            </Box>
            <Divider />
            <CardContent
              sx={{
                p: "24px",
                display: "flex",
                alignItems: "center",
                gap: "30px",
              }}
            >
              <Box width="200px">
                <img src={donut_main} width="100%" />
              </Box>

              <Stack spacing={5}>
                <Box display="flex" alignItems="center">
                  <img src={donut_purple} />
                  <Box ml={3}>
                    <Typography fontWeight={700} fontSize={14}>
                      +18%
                    </Typography>
                    <Typography variant="subtitle2" fontSize={12}>
                      Daily customers
                    </Typography>
                  </Box>
                </Box>
                <Box display="flex" alignItems="center">
                  <img src={donut_green} />
                  <Box ml={3}>
                    <Typography fontWeight={700} fontSize={14}>
                      +14%
                    </Typography>
                    <Typography variant="subtitle2" fontSize={12}>
                      Weekly new customers
                    </Typography>
                  </Box>
                </Box>
              </Stack>
            </CardContent>
          </Card>
        </Box>
      </Box>

      <Box display="flex" justifyContent="space-between" gap="20px" mb="30px">
        <Box
          component={Card}
          sx={{ boxShadow: "0px 8px 16px 0px #8F95B226", width: "80%" }}
        >
          <Box
            sx={{
              height: "50px",
              padding: "10px 24px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Typography fontSize={18} fontWeight={700}>
              Customer Map
            </Typography>
          </Box>
          <Divider />
          <Box sx={{ p: "24px" }}>
            <Box>
              <img src={map} width="100%" />
            </Box>
          </Box>
        </Box>
        <Box
          component={Card}
          sx={{
            boxShadow: "0px 8px 16px 0px #8F95B226",
            padding: "10px 24px",
            width: "30%",
          }}
        >
          <Stack>
            <Typography fontSize="18px" fontWeight={700}>
              Customers List
            </Typography>
          </Stack>
          <Box py={3}>
            {customer_list.map((customer, i) => (
              <Person
                key={i}
                name={customer.name}
                sub={customer.email}
                image={customer.image}
              />
            ))}
          </Box>
        </Box>
      </Box>

      <Box component={Card} sx={{ boxShadow: "0px 8px 16px 0px #8F95B226" }}>
        <Box
          sx={{
            height: "50px",
            padding: "10px 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography fontSize={18} fontWeight={700}>
            Menu
          </Typography>
          <Tabs
            onChange={handleChange}
            value={value}
            textColor="primary"
            indicatorColor="primary"
          >
            <Tab value="all" label="All Category" />
            <Tab value="breakfast" label="Breakfast" />
            <Tab value="lunch" label="Lunch" />
            <Tab value="dinner" label="Dinner" />
          </Tabs>
        </Box>
        <Divider />
        <Stack>
          <Box p="24px" display="flex" gap="20px">
            {foods.slice(0, 2).map((food, i) => (
              <Box
                key={i}
                sx={{
                  width: `${food.width}`,
                  display: "flex",
                  justifyContent: "center",
                  padding: "16px",
                  height: "300px",
                  borderRadius: "8px",
                  background: `url(${food.image}) no-repeat`,
                  backgroundSize: "cover",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "90%",
                    height: "50px",
                    mt: "auto",
                    padding: "16px",
                    borderRadius: "6px",
                    background: "#FFFFFFA6",
                    backdropFilter: "blur(27.2px)",
                    boxShadow:
                      "0px 4px 6px -2px #1E293B1A, 0px 12px 16px -4px #1E293B0A",
                  }}
                >
                  <div>
                    <Typography variant="body1" fontSize={14}>
                      {food.name}
                    </Typography>
                    <Typography variant="subtitle2" fontSize={12}>
                      {food.served}
                    </Typography>
                  </div>
                  <Typography variant="body1" fontSize={14}>
                    {food.price}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
          <Box p="24px" display="flex" gap="20px">
            {foods.slice(2, 6).map((food, i) => (
              <Box
                key={i}
                sx={{
                  width: `${food.width}`,
                  display: "flex",
                  justifyContent: "center",
                  padding: "16px",
                  height: "250px",
                  borderRadius: "8px",
                  background: `url(${food.image}) no-repeat`,
                  backgroundSize: "cover",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "90%",
                    height: "50px",
                    mt: "auto",
                    padding: "16px",
                    borderRadius: "6px",
                    background: "#FFFFFFA6",
                    backdropFilter: "blur(27.2px)",
                    boxShadow:
                      "0px 4px 6px -2px #1E293B1A, 0px 12px 16px -4px #1E293B0A",
                  }}
                >
                  <div>
                    <Typography variant="body1" fontSize={14}>
                      {food.name}
                    </Typography>
                    <Typography variant="subtitle2" fontSize={12}>
                      {food.served}
                    </Typography>
                  </div>
                  <Typography variant="body1" fontSize={14}>
                    {food.price}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Stack>
      </Box>
    </>
  );
};

export default Home;

import * as React from "react";
import { styled, useTheme, alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import {
  Avatar,
  Button,
  Grid,
  ListItemAvatar,
  ListItemButton,
  ListSubheader,
} from "@mui/material";
import {
  AccountBalance,
  Autorenew,
  Badge,
  BarChart,
  Group,
  Home,
  LocalActivity,
  LocalPhone,
  Logout,
  MoreHoriz,
  Notifications,
  Refresh,
  Settings,
} from "@mui/icons-material";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/Home";
import Exchanges from "./pages/Exchanges";
import PageTwo from "./pages/pageTwo";

const drawerWidth = 310;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));
const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <BrowserRouter>
        {" "}
        <CssBaseline />
        <AppBar position='fixed' open={open} color='inherit'>
          <Toolbar>
            <IconButton
              color='inherit'
              aria-label='open drawer'
              onClick={handleDrawerOpen}
              edge='start'
              sx={{ mr: 2, ...(open && { display: "none" }) }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant='h6'
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              Hi Barly Vallendito, welcome back!
            </Typography>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder='Search all assets'
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
            <Divider oriantation='vertical' flexItem />
            <Button sx={{ marginLeft: "18px" }}>
              <IconButton>
                <Notifications />
              </IconButton>
            </Button>
            <Button sx={{ marginLeft: "18px" }}>
              {" "}
              <IconButton>
                <Logout />
              </IconButton>
            </Button>
          </Toolbar>
        </AppBar>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
          variant='persistent'
          anchor='left'
          open={open}
        >
          <DrawerHeader>
            <Typography sx={{ marginRight: "auto" }}>STOCKUP</Typography>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "ltr" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <div style={{ margin: "20px" }}>
            {" "}
            <Button
              variant='contained'
              style={{ width: "100%", height: 50, fontWeight: 600 }}
            >
              Quick Invest
            </Button>
          </div>

          <List
            component='nav'
            aria-aria-labelledby='nested-list-subheader'
            subheader={
              <ListSubheader component='div' id='nested-list-subheader'>
                Main
              </ListSubheader>
            }
          >
            <ListItemButton component='a' href='/'>
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary='Home' />
            </ListItemButton>
            <ListItemButton component='a' href='/exchanges'>
              <ListItemIcon>
                <Autorenew />
              </ListItemIcon>
              <ListItemText primary='Exchange' />
            </ListItemButton>
            <ListItemButton component='a' href='/page-two'>
              <ListItemIcon>
                <Autorenew />
              </ListItemIcon>
              <ListItemText primary='Page-Two' />
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <Badge />
              </ListItemIcon>
              <ListItemText primary='Portfolios' />
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <AccountBalance />
              </ListItemIcon>
              <ListItemText primary='Wallets' />
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <BarChart />
              </ListItemIcon>
              <ListItemText primary='Market & Prices' />
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <LocalActivity />
              </ListItemIcon>
              <ListItemText primary='Activities' />
            </ListItemButton>
          </List>
          <Divider />
          <List
            component='nav'
            aria-aria-labelledby='nested-list-subheader'
            subheader={
              <ListSubheader component='div' id='nested-list-subheader'>
                Support
              </ListSubheader>
            }
          >
            {" "}
            <ListItemButton>
              <ListItemIcon>
                <Group />
              </ListItemIcon>
              <ListItemText primary='Community' />
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <LocalPhone />
              </ListItemIcon>
              <ListItemText primary='Help & Support' />
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <Settings />
              </ListItemIcon>
              <ListItemText primary='Settings' />
            </ListItemButton>
          </List>

          <List
            sx={{
              width: "100%",
              bgcolor: "background.paper",
              marginTop: "auto",
            }}
          >
            {" "}
            <Divider />{" "}
            <ListItem
              button
              secondaryAction={
                <IconButton>
                  <MoreHoriz />
                </IconButton>
              }
            >
              {" "}
              <ListItemAvatar>
                <Avatar
                  alt='barly Vallendito'
                  src='https://cdn.dribbble.com/users/1753227/avatars/normal/751d2e7705396663746dbe526354d458.png?1635222117'
                />
              </ListItemAvatar>{" "}
              <ListItemText
                primary='Barly Vallendito'
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component='span'
                      variant='body2'
                      color='text.primary'
                    >
                      barlyVallendito2gmail.com
                    </Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
          </List>
        </Drawer>
        <Main open={open}>
          <DrawerHeader />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/exchanges' element={<Exchanges />} />
            <Route path='/page-two' element={<PageTwo />} />
          </Routes>
        </Main>
      </BrowserRouter>
    </Box>
  );
}

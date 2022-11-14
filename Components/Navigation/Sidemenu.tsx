import React from "react";
import {
  Divider,
  Drawer,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import CalculateIcon from "@mui/icons-material/Calculate";
import SchoolIcon from "@mui/icons-material/School";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useRouter } from "next/router";
function Sidemenu(props: any) {
  const router = useRouter();
  const themecolor = props.themecolor;
  const changeThemeColor = props.changeThemeColor;
  function closeMenu() {
    props.setOpenMenu(false);
  }

  const icons = {
    home: HomeIcon,
    about: InfoIcon,
    contact: ContactMailIcon,
    tools: CalculateIcon,
    tutorials: SchoolIcon,
  };

  const Icongetter = ({ name }: any) => {
    //@ts-ignore
    const Icon = icons[name];
    return Icon ? <Icon /> : null;
  };
  const Icongetterwhite = ({ name }: any) => {
    //@ts-ignore
    const Icon = icons[name];
    return Icon ? <Icon fill="white" /> : null;
  };

  function makeListItem(text: any, iconName: any, route: any) {
    if (route === router.asPath) {
      return (
        <ListItem selected button>
          <ListItemIcon>
            <Icongetter name={iconName}></Icongetter>
          </ListItemIcon>
          <ListItemText primary={text}></ListItemText>
        </ListItem>
      );
    }

    return (
      <ListItem
        button
        onClick={() => {
          router.push(route);
        }}
      >
        <ListItemIcon>
          <Icongetter name={iconName}></Icongetter>
        </ListItemIcon>
        <ListItemText primary={text}></ListItemText>
      </ListItem>
    );
  }

  return (
    <Drawer anchor="left" open={props.openmenu} onClose={closeMenu}>
      <Box
        sx={{ width: 250 }}
        color={"inherit"}
        role="presentation"
        onClick={closeMenu}
      >
        <List>
          {makeListItem("Home", "home", "/")}
          {makeListItem("About", "about", "/about")}
          {makeListItem("Contact Us", "contact", "/contact")}
          <Divider />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <div style={{ width: "100%" }}>
              {makeListItem("Tools & Calculators", "tools", "/tools")}
              {makeListItem("Tutorials", "tutorials", "/tutorials")}
            </div>
            {/*


                        <IconButton sx={{ ml: 1 }} onClick={changeThemeColor} color="inherit">
                            {themecolor === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                        </IconButton>
*/}
          </div>
        </List>
      </Box>
    </Drawer>
  );
}

export default Sidemenu;

import React, { useState } from "react";
import {
  AppBar,
  Menu,
  MenuItem,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import MenuIcon from "@mui/icons-material/Menu";
import SideMenu from "./Sidemenu";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import { userouter.push, useLocation } from "react-router-dom";
// import siteInfo from "../../general-info.json";

export default function Nav(props: any) {
  const themecolor = props.themecolor;
  const changeThemeColor = props.changeThemeColor;
  const router = useRouter();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const location = router.asPath;
  const [openmenu, setOpenMenu] = useState(false);

  function makeMenuItem(link: any, title: any) {
    if (location === link) {
      return (
        <MenuItem
          selected
          onClick={() => {
            router.push(link);
            handleClose();
          }}
        >
          {title}{" "}
        </MenuItem>
      );
    } else {
      return (
        <MenuItem
          onClick={() => {
            router.push(link);
            handleClose();
          }}
        >
          {title}{" "}
        </MenuItem>
      );
    }
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        elevation={location === "/" ? 0 : 1}
        sx={{ bgcolor: themecolor === "dark" ? "orange" : "white" }}
        position="static"
      >
        <Toolbar>
          <IconButton
            style={{ cursor: "pointer" }}
            onClick={() => setOpenMenu(true)}
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            onClick={() => {
              if (location !== "/") {
                router.push("/");
              }
            }}
            fontFamily="Violethe"
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            {"TOOLTOOLITO"}
          </Typography>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <a
              href="https://www.buymeacoffee.com/tooltoolito"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                width={200 * 0.7}
                height={60 * 0.7}
                src="/buymeacoffee.png"
                alt="Buy Me A Coffee"
              />
            </a>
          </div>
          {/* 
          <Button
            endIcon={<ExpandMoreIcon />}
            color="inherit"
            aria-controls="basic-menu"
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            ERC20 TOKEN TOOLS
          </Button> */}

          {/* <Menu anchorEl={anchorEl} open={open}>
            {makeMenuItem(
              "/tools/Cryptocurrency/token-price-calculator",
              "TOKEN PRICE CALCULATOR"
            )}
            {makeMenuItem(
              "/tools/Cryptocurrency/eth-unit-converter",
              "ETH UNIT CONVERTER"
            )}
          </Menu> */}
        </Toolbar>
      </AppBar>

      <SideMenu
        themecolor={themecolor}
        changeThemeColor={changeThemeColor}
        openmenu={openmenu}
        setOpenMenu={setOpenMenu}
      ></SideMenu>
    </Box>
  );
}

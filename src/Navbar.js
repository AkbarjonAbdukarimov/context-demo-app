import React, { useContext } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import Switch from "@material-ui/core/Switch";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles/NavBarStyles";
import { ThemeContext } from "./context/ThemeContext";
import { LanguageContext } from "./context/LanguageContext";
const content = {
  english: {
    search: "Search",
    flag: "🇬🇧",
  },
  french: {
    search: "Chercher",
    flag: "🇫🇷",
  },
  spanish: {
    search: "Buscar",
    flag: "🇪🇸",
  },
};
const Navbar = (props) => {
  const { classes } = props;
  const { darkMode, toggle } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);
  const { search, flag } = content[language];
  return (
    <div className={classes.root}>
      <AppBar position="static" color={darkMode ? "default" : "primary"}>
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit">
            <span role="img">{flag}</span>
          </IconButton>
          <Typography className={classes.title} variant="h6" color="inherit">
            App Title
          </Typography>
          <Switch onChange={toggle} />
          <div className={classes.grow} />
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder={`${search}...`}
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default withStyles(styles)(Navbar);

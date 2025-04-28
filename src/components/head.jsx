import { AppBar, Toolbar, InputBase, IconButton, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasket from '@mui/icons-material/ShoppingBasket';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import './styles/header.css';

const theme = createTheme({
  palette: {
    primary: {
      main: "#010d1f"
    }
  }
});

function Head() {
  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static" className="header">
        <Toolbar className="toolbar">
          <a href="/home">
            <img src="Logo.png" alt="NotAmazon Logo" className="logo" />
          </a>

          <div className="search">
            <InputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
            <IconButton type="submit" className="search-icon" aria-label="search">
              <SearchIcon />
            </IconButton>
          </div>

          <div className="nav-links">
            <Button color="inherit">Login</Button>
            <Button color="inherit">Returns & Orders</Button>
            <Button color="inherit">Amazon NotPrime</Button>
            <IconButton color="inherit" hover={{ color: '#f0c14b' }} className="basket-icon" aria-label="shopping basket">
             <ShoppingBasket />
              <span className="basket-count">{}</span>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}

export default Head;

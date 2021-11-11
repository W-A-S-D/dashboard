import { createTheme } from "@material-ui/core";

// A custom theme for this app
const theme = createTheme({
  typography: {
    fontFamily: [
      'Noto Sans',
    ],
    button: {
      fontSize: 18,
      fontWeight: 700
    }
  },
  palette: {
    primary: {
      main: '#A29BFE',
      contrastText: '#FFF',
    },
    secondary: {
      main: '#7661B8',
    },
    third: {
      main: '#fff',
    },
  },
});

export default theme;
import "./App.css";
import Analytics from "./pages/Analytics";
import { createTheme, ThemeProvider } from '@material-ui/core'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { purple } from '@material-ui/core/colors'
import Layout from './components/Layout'

const theme = createTheme({
  palette: {
    primary: {
      main: '#5d8fcc'
    },
    secondary: purple
  },
  typography: {
    fontFamily: 'Quicksand',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
      <Layout>
        <Switch>
          <Route exact path="/">
            <Analytics />
          </Route>
        </Switch>
        </Layout>
      </Router>
    </ThemeProvider>
  )
}

export default App;

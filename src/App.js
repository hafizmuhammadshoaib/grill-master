import { AppBar, makeStyles, Toolbar, Typography } from "@material-ui/core";
import { Provider } from "react-redux";
import GrillMaster from "./container/GrillMaster";
import store from './store/index'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));
function App() {
  const classes = useStyles();
  return (
    <Provider store={store} >
      <div>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              Grill Master
          </Typography>
          </Toolbar>
        </AppBar>
        <GrillMaster />
      </div>
    </Provider>
  );
}

export default App;

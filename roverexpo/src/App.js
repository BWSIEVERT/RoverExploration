import './App.css';
import moment from 'moment'
import Perseverance from './Components/Rovers/Perseverance/Perseverance'
import Curiosity from './Components/Rovers/Curiosity/Curiosity'
import Home from './Components/Home/Home'

// Router Imports
import { 
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {

  const date = moment().format('YYYY-MM-DD')
  console.log(date)

  const formatPerseverancePath = `/${date}/roverdata/perseverance`
  const formatCuriosityPath = `/${date}/roverdata/curiosity`

  return (
    <Router>
      <Switch>
        <Route exact path='/en' component={Home} />
        <Route exact path={formatPerseverancePath} component={Perseverance} />
        <Route exact path={formatCuriosityPath} component={Curiosity} />
      </Switch>
    </Router>
  );
}

export default App;

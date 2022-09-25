import {BrowserRouter as Router} from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import Navbars from './components/Navbars/Navbars';
import AllRoutes from './AllRoutes';
import { fetchAllQuestions} from './actions/questions'
import { fetchAllUsers} from './actions/users'
function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAllQuestions())
    dispatch(fetchAllUsers())
  }, [dispatch])
  return (
    <div className="App">
      <Router>
      <Navbars/>
       <AllRoutes/>
       
      </Router>
    </div>
  );
}

export default App;

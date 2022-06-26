import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import Navbar from './Components/Navbar';
import  Container  from './Components/Container';
import Actions from './Components/Actions'
import Aanalytics from './Components/Aanalytics'
import { observer, inject } from 'mobx-react'


const App = inject("clients")(observer((props) => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Container/>} />
          <Route path="/Actions" element={<Actions/>} />
          <Route path="/Aanalytics" element={<Aanalytics/>} />
  
        </Routes>
      </div>
    </Router>
  );
}))

export default App;

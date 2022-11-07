import './App.css';
import ExploreMain from './components/Explore/ExploreMain';
import ViewMain from './components/HomestayView/ViewMain';
import Home from './components/landing-page/Home';
import SearchViewMain from './components/SearchView/SearchViewMain'
import States from './Contexts/States/States';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <States>
        <div className="mainContainer">
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/explore/:state' element={<ExploreMain />} />
            <Route exact path='/view/:id' element={<ViewMain />} />
            <Route exact path='/search' element={<SearchViewMain/>}/>
          </Routes>
        </div>
      </States>
    </BrowserRouter>
  );
}

export default App;

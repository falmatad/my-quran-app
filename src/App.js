import React, {useState, useEffect} from 'react';
import MenuList from "./Components/MenuList";
import './App.css';
import Home from "./Components/Home";
import AyatList from './Components/AyatList';
import { Route } from "react-router-dom";
import axios from "axios";
import { trackPromise } from 'react-promise-tracker';

const App = () => {
  const [surah, setSurah] = useState([]);

  
    useEffect(() => {
      trackPromise(
      axios.get(`https://api.quran.com/api/v4/chapters`)
              .then(response => {
                  setSurah(response.data.chapters);
        })
        .catch(error => {
          console.log(error);
        }));

      }, []);

  return (
    <div className="App">
      <Route exact path="/" component={Home} />
      <Route exact path="/surah-list">
            <MenuList 
              surah={surah} 
            />
      </Route>

      <Route path="/surah-list/:surahID">
              <AyatList 
                surah={surah}
              />
      </Route>
    </div>
  );
}

export default App;

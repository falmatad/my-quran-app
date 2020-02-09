import React, {useState, useEffect} from 'react';
import MenuList from "./Components/MenuList";
import './App.css';
import Home from "./Components/Home";
import DisplayAyat from './Components/DisplayAyat';
import { Route } from "react-router-dom";
import axios from "axios";

const App = () => {
  const [surah, setSurah] = useState([]);

	useEffect(() => {
		axios.get(`https://cors-escape.herokuapp.com/http://staging.quran.com:3000/api/v3/chapters`)
            .then(response => {
                setSurah(response.data.chapters);
			})
			.catch(error => {
				console.log(error);
			});

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
              <DisplayAyat 
                surah={surah}
              />
      </Route>
    </div>
  );
}

export default App;

import React, {useState, useEffect} from 'react';
import MenuList from "../src/Components/Menu/MenuList";
import './App.css';
import Home from "./Components/Home/Home";
import { Route } from "react-router-dom";
import axios from "axios";
import DisplayAyat from "./Components/DisplayAyat";

const App = () => {
  const [surah, setSurah] = useState([]);

	useEffect(() => {
		axios.get(`http://staging.quran.com:3000/api/v3/chapters`)
            .then(response => {
                setSurah(response.data.chapters);
			})
			.catch(error => {
				console.log(error);
			});

    }, [surah]);
  return (
    <div className="App">
      <Route exact path="/" component={Home} />
      <Route
        exact
        path="/surah-list"
        render={props => (
          <MenuList
            surah={surah}
            {...props}

          />
        )}
      />
      <Route
        exact
        path="/display-ayat/:surahID"
        render={props => <DisplayAyat surah={surah} {...props}/>}
      />
    </div>
  );
}

export default App;

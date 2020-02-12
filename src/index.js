import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router } from "react-router-dom";
import { usePromiseTracker } from "react-promise-tracker";
import Loader from 'react-loader-spinner';
import styled from "styled-components";

const Container = styled.div`
display: flex;
flex-flow: column nowrap;
justify-content: center;
align-items: center;
width: 100%,
height: 100px,

`;
 const LoadingIndicator = props => {
    const { promiseInProgress } = usePromiseTracker();

  return (
      
    promiseInProgress &&
    <Container>
      <Loader type="ThreeDots" color="#00CED1" height={150} width={200} timeout={4000}/>
    </Container>
  );  
 }

ReactDOM.render(
    <Router>
        <App />
        <LoadingIndicator />
    </Router>, 
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

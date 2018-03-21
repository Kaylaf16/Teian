import React from 'react';
import {render} from 'react-dom';
class Home extends React.Component {

  render () {
    var divStyle ={
      marginLeft:"auto",
      marginRight:"auto"
    }
    var InputStyle ={

    }
    var FormButton ={
      
    }
    return (<div style = {divStyle}>
      <form method= "POST" action = "/AnimeSearch" encType="application/x-www-form-urlencoded">
      <input style = {InputStyle} type="text"autoComplete="off" placeholder="Search for Anime" name="animesearch" id="animesearch"/>
      <button id = "search" style = {FormButton}>Search</button>
      </form>
    </div>)
  }
}
export default Home;

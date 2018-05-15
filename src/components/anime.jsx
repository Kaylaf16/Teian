import React from 'react';
import {render} from 'react-dom';
import {Container, Row, Col, Button} from 'reactstrap';
import Header from './header.jsx'
import AnimeDescription from './animedescr.jsx'
//import AnimeCard from './animecard.jsx'

class Anime extends React.Component {
  render(){
    return(
    <div>
      <AnimeDescription />
    </div>
    )
  }
}
export default Anime

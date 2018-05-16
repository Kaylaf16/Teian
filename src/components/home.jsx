import React from 'react';
import {render} from 'react-dom';
import Header from './header.jsx'
import {Container, Row, Col, Button, Input} from 'reactstrap';

class Home extends React.Component {
  constructor(props) {
    super();
    this.autoCheck = this.autoCheck.bind(this);
    this.showResult = this.showResult.bind(this);
    this.hideResult = this.hideResult.bind(this);

  }


  showResult(){
    $('#results').show();
  }
  hideResult(){
    $('#results').hide();
  }
  autoCheck() {
    let input = '/api/v1/search?q=' + document.getElementById('animesearch').value;
    this.showResult();
    $("#results").empty();
    setTimeout(function(){
      let suggestions = [];
      fetch(input).then(result => {
        return result.json()
      }).then(data => {
        data.forEach(row=>{
          if(suggestions.length < 5)
          {
              suggestions.push(row.title)
              $('#results').append(`<li><a href=/${row.title} id=resultlist>${row.title}</a></li>`);

          }
        })
      }).catch(e => {
        console.log(e);
      })
    },600)

  }

  render() {
    var divStyle = {
      marginLeft: "auto",
      marginRight: "auto"
    }
    var centered = {
      backgroundImage: "linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('background.jpeg')",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      minHeight: '90%',
      height: '100%'
    }
    // var InputStyle ={
    //   fontFamily: 'Helvetica',
    //   position: 'absolute',
    //   top: '50%',
    //   left: '50%',
    //   right: '50%',
    //   bottom: '50%',
    // }

    var InputStyle = {
      width: '100%',
      backgroundColor: 'white',
      border: 'none',
      borderBottom: '2px solid white',
      color: 'black'
    }

    var FormButton = {
      marginLeft: "auto",
      marginRight: "auto"
    }

    var InputCol = {
      paddingLeft: '0'
    }

    var ButtonCol = {
      paddingRight: '0'
    }
    var hr = {
      height: '2px',
      width: '60%',
      marginTop: '0px',
      color: 'white',
      backgroundColor: 'white',
      border: 'none'
    }
    var formStyle = {
      marginTop: '80px',
      marginLeft: "auto",
      marginRight: "auto"
    }
    var colStyle = {
      display: "block",
      marginLeft: "auto",
      marginRight: "auto",
      textAlign: "center"
    }
    var buttonStyle = {
      borderRadius: "20px",
      width: '200px',
      zIndex:'1'
    }
    var headerStyle = {
      color: 'white',
      fontFamily: 'Raleway',
      marginTop: '50px'
    }

    var lastLetter = {
      color: "#EBF2F0"
    }
    var pStyle = {
      fontWeight: 'lighter',
      fontSize: '20px',
      color: 'white'
    }
    var cStyle = {
      paddingTop: '50px'
    }
    var InfoStyle = {
      fontSize: '28px',
      fontWeight: 'light',
      marginTop: '30px'
    }
    var results={
      listStyleType:'none',
      display: 'none',
      margin:'0px',
      padding:'0px',
      zIndex:"2",
      color:"white"

    }
    var RadioStyle={
      paddingLeft:'10px',
      paddingRight:'10px',
      color:'white'
    }

    return (<div style={divStyle}>
      <div class="centered" style={centered}>
        <Header/>
        <Container style={cStyle}>
          <Row>
            <Col style={colStyle}>
              <h1 style={headerStyle}>
                ANIME SEARCH ENGINE</h1>
              <p style={pStyle}>A New Way to Discover</p>
            </Col>
          </Row>
        </Container>

        <form method="POST" action="/Title" encType="application/x-www-form-urlencoded" style={formStyle}>
          <Container>
            <Row>
              <Col md={{size: 5}} style={colStyle}>
                  <label style={RadioStyle}><input type="radio" id="genre" name="selector"  value = "genre"/>    Genre</label>

                  <label style={RadioStyle}><input type="radio" id="studio" name="selector" value= "studio"/>    Studio</label>
                <Input name="animesearch" style={InputStyle} onBlur={this.hideResult} type="text" autoComplete="off" onChange={this.autoCheck} id="animesearch"/>
                <br/>

                  <ul style={results} id ="results">
                    <li>test</li>
                    <li>test</li>
                  </ul>


                <center>
                  <Button color="info" type="submit"id="search" style={buttonStyle}>Search</Button>
                </center>
              </Col>
            </Row>
          </Container>
        </form>
      </div>

    </div>)
  }
}
export default Home;

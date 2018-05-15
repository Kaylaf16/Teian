import React from 'react';
import {render} from 'react-dom';
import {
  Nav,
  NavItem,
  NavLink,
  Button,
} from 'reactstrap';

export default class Header extends React.Component {
  render() {
    let style = {
      background: {
        backgroundColor: '#52B3D9',
        display: 'flex',
        height:'10%',

      },

      links: {
        color:'#EBF2F0',
        fontSize:22,
        fontWeight:'light',
        letterSpacing:'2px',
        paddingLeft:'40px'
      },
      HeadingStyle:{
        fontWeight:'100',
        fontWeight:'lighter',
        fontSize:'25px'
      },
      getstarted:{

        display:"inline",
        color:'white',
        marginLeft:"auto",
        fontWeight:'lighter',
        marginRight:"40px",
        padding:"6px"
      },
      button:{
        marginLeft:'13px',

        backgroundColor:"#F27935",
        borderRadius:'0px',
        color:'white',
        fontSize:'15px',
        fontWeight:'lighter'
      },
      list:{
        width:'100%',
        overflow: 'hidden'
      }
    }

    return (
      <div style={style.background}>
        <Nav style = {style.list}>
          <NavItem style = {{float:'left',padding:"6px",paddingTop:'8px',paddingRight:'0px'}}>
            <NavLink style={style.links} href='/'> <p style = {style.HeadingStyle}>Teian</p> </NavLink>

          </NavItem>
          <NavItem style = {style.getstarted} >
            <NavLink>Ready to Go?<Button color="info" id="search" style={style.button}>Get Started</Button></NavLink>
          </NavItem>
        </Nav>
      </div>
    );
  }
}

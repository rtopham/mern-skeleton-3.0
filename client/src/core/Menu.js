import React, {Component} from 'react'
import {Navbar, Nav, Container} from "react-bootstrap"
import {Link, withRouter} from 'react-router-dom'
import auth from './../auth/auth-helper'

class Menu extends Component{
  constructor(props) {
    super(props)
 
    this.state={
    key:"1"
    }
  
}

setActiveKey=(selectedKey)=>{
this.setState({key:selectedKey})
}

componentDidUpdate=()=>{
  if(this.props.history.location.pathname==='/'&&this.state.key!=="1")this.setState({key:"1"})
  if(this.props.history.location.pathname==='/signin'&&this.state.key!=="4")this.setState({key:"4"})
}


render(){
const loggedIn=auth.isAuthenticated()

return(
<Navbar expand="sm" bg="light" fixed="top" onSelect={this.setActiveKey}>

<Container fluid="true" className="menuContainer">

<Nav variant="pills">

<Nav.Item><Nav.Link as={Link} eventKey="1" active={this.state.key==="1"} to="/">Home</Nav.Link></Nav.Item>
{loggedIn&&<Nav.Item><Nav.Link as={Link} eventKey="2" active={this.state.key==="2"} to="/users">Users</Nav.Link></Nav.Item>}

</Nav>

<Nav variant="pills" pullright="true">

  {!loggedIn&&<Nav.Item><Nav.Link as={Link} eventKey="3" active={this.state.key==="3"}  to="/signup">Sign Up</Nav.Link></Nav.Item>}
  {!loggedIn&&<Nav.Item><Nav.Link as={Link} eventKey="4" active={this.state.key==="4"}  to="/signin">Sign In</Nav.Link></Nav.Item>}
  {loggedIn&&<Nav.Item><Nav.Link  as={Link} eventKey="5" active={this.state.key==="5"}  to={"/user/" + auth.isAuthenticated().user._id}>My Profile</Nav.Link></Nav.Item>}
  {loggedIn&&<Nav.Item><Nav.Link            eventKey="6" active={this.state.key==="6"} onClick={() => auth.signout(() =>this.props.history.push('/signin'))}>Sign out</Nav.Link></Nav.Item>}

</Nav>

</Container>
</Navbar>
)
}
 
}

export default withRouter(Menu)

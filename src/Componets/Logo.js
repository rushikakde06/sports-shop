import React, { Component } from 'react'
import '../Componets/Sportapp.css'
import constdata from '../Shared/consdata'
import { Link, Outlet } from 'react-router-dom'
import { withRouter } from '../utils/router'

class Logo extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  logout = (event) => {
    if (window.confirm("Are you sure you want to logout?")) {
    
      sessionStorage.removeItem("isLogin");
      this.router.navigate("");
    }
  }

  render() {
    const isLogin = !!sessionStorage.getItem("isLogin");
    return (
      <div className='position-sticky'>
        <header className='' >
          <nav className="navbar navbar-expand-lg  bg-color "
          >
            <div className="container-fluid  position-sticky" >
              <a className="navbar-brand mx-3" href="/"><img src={constdata.logo} alt="logo" height={85} width={90} style={{ borderRadius: "50%" }} /></a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    {/* <a className="nav-link active mx-2 nav-menu" aria-current="page" href="/">Home</a> */}
                    <Link to="" className="nav-link active mx-2 nav-menu" >Home</Link>
                  </li>
                  <li className="nav-item">
                    {/* <a className="nav-link mx-2  nav-menu" href="/">About</a> */}
                    <Link to='/about' className="nav-link mx-2  nav-menu" >About</Link>
                  </li>
                  <li className="nav-item ">
                    {/* <a className="nav-link mx-2 nav-menu" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Gallary
          </a> */}
                    <Link className="nav-link mx-2 nav-menu" to='/gallery'>Gallery</Link>
                    {/* <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/">Action</a></li>
            <li><a className="dropdown-item" href="/">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="/">Something else here</a></li>
          </ul> */}
                  </li>
                  <li className="nav-item">
                    {/* <a className="nav-link mx-2 nav-menu" href='/'>Service</a>
           */}
                    <Link className="nav-link mx-2 nav-menu" to="/ser"> Service</Link>
                  </li>
                  <li className="nav-item">
                    {/* <a className="nav-link mx-2 nav-menu" href='/'>Contact Us</a> */}
                    <Link className="nav-link mx-2 nav-menu" to="/feedback"> Contact us</Link>
                  </li>
                  <li className="nav-item">
                    {/* <a className="nav-link mx-2 nav-menu" href='/'>Feedback</a> */}
                    <Link className="nav-link mx-2 nav-menu" to="/feedback2"> Feedback</Link>

                  </li>
                  <li className="nav-item">
                    {/* <a className="nav-link mx-2 nav-menu" href='/'> Product detail  </a> */}
                    <Link className="nav-link mx-2 nav-menu" to="/product"> Sell Old Product</Link>
                  </li>
                </ul>

                <div className="d-flex mx-2" role="search">
                  {/* <input className="form-control me-1" type="search" placeholder="Search Product" aria-label="Search"/> */}

                  {
                    isLogin ?
                      (<Link className="btn btn-success mx-2" onClick={this.logout} >logout </Link>) :
                      (<><Link className="btn btn-primary mx-2" to="/sign" >Sign up</Link>
                        <Link className="btn btn-success" to="/login" >login </Link></>)
                  }



                </div>


              </div>
            </div>
          </nav>


        </header>
        <Outlet />


      </div>
    )
  }
}

export default withRouter(Logo)

import React from 'react'
import './Dashboard.css';
import './one.css';
import './two.css';
import logo1 from './img/carousel-1.jpg'
function Dashboard() {
  return (
    <div>
      <body className="g-sidenav-show   bg-gray-100" />
         <div className="min-height-300 bg-primary position-absolute w-100"></div>
         <aside className="sidenav bg-white navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-4 " id="sidenav-main">
           <div className="sidenav-header">
          <i className="fas fa-times p-3 cursor-pointer text-secondary opacity-5 position-absolute end-0 top-0 d-none d-xl-none" aria-hidden="true" id="iconSidenav"></i>
          <a className="navbar-brand m-0" href=" https://demos.creative-tim.com/argon-dashboard/pages/dashboard.html " target="_blank">
        <img src="../assets/img/logo-ct-dark.png" className="navbar-brand-img h-100" alt="main_logo" />
        <span className="ms-1 font-weight-bold">Argon Dashboard 2</span>
      </a>
    </div>
    <hr className="horizontal dark mt-0"/>
    <div className="collapse navbar-collapse  w-auto " id="sidenav-collapse-main">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" href="../pages/dashboard.html">
            <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
              <i className="ni ni-tv-2 text-primary text-sm opacity-10"></i>
            </div>
            <span className="nav-link-text ms-1">Dashboard</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link " href="">
            <div className="icon icon-shape icon-sm borer-radius-md text-center me-2 d-flex align-items-center justify-content-center">
              <i className="ni ni-calendar-grid-58 text-warning text-sm opacity-10"></i>
            </div>
            <span className="nav-link-text ms-1">Tables</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link " href="../pages/billing.html">
            <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
              <i className="ni ni-credit-card text-success text-sm opacity-10"></i>
            </div>
            <span className="nav-link-text ms-1">Billing</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link " href="../pages/virtual-reality.html">
            <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
              <i className="ni ni-app text-info text-sm opacity-10"></i>
            </div>
            <span className="nav-link-text ms-1">Virtual Reality</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link " href="../pages/rtl.html">
            <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
              <i className="ni ni-world-2 text-danger text-sm opacity-10"></i>
            </div>
            <span className="nav-link-text ms-1">RTL</span>
          </a>
        </li>
        <li className="nav-item mt-3">
          <h6 className="ps-4 ms-2 text-uppercase text-xs font-weight-bolder opacity-6">Account pages</h6>
        </li>
        <li className="nav-item">
          <a className="nav-link " href="">
            <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
              <i className="ni ni-single-02 text-dark text-sm opacity-10"></i>
            </div>
            <span className="nav-link-text ms-1">Profile</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link " href="">
            <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
              <i className="ni ni-single-copy-04 text-warning text-sm opacity-10"></i>
            </div>
            <span className="nav-link-text ms-1">Sign In</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link " href="">
            <div className="icon icon-shape icon-sm border-radiu s-md text-center me-2 d-flex align-items-center justify-content-center">
              <i className="ni ni-collection text-info text-sm opacity-10"></i>
            </div>
            <span className="nav-link-text ms-1">Sign Up</span>
          </a>
        </li>
      </ul>
    </div>
    <div className="sidenav-footer mx-3 ">
      <div className="card card-plain shadow-none" id="sidenavCard">
        <img className="w-50 mx-auto" src="../assets/img/illustrations/icon-documentation.svg" alt="sidebar_illustration"/>
        
      </div>
      
    </div>
  </aside>
  <main className="main-content position-relative border-radius-lg ">
    {/* <!-- Navbar --> */}
    <nav className="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl " id="navbarBlur" data-scroll="false">
      <div className="container-fluid py-1 px-3">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-6 me-5">
            <li className="breadcrumb-item text-sm"><a className="opacity-5 text-white" href="javascript:;">Pages</a></li>
            <li className="breadcrumb-item text-sm text-white active" aria-current="page">Dashboard</li>
          </ol>
          <h6 className="font-weight-bolder text-white mb-0">Dashboard</h6>
        </nav>
        <div className="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4" id="navbar">
          <div className="ms-md-auto pe-md-3 d-flex align-items-center">
            <div className="input-group">
              <span className="input-group-text text-body"><i className="fas fa-search" aria-hidden="true"></i></span>
              <input type="text" className="form-control" placeholder="Type here..."/>
            </div>
          </div>
          <ul className="navbar-nav  justify-content-end">
            <li className="nav-item d-flex align-items-center">
              <a href="javascript:;" className="nav-link text-white font-weight-bold px-0">
                <i className="fa fa-user me-sm-1"></i>
                <span className="d-sm-inline d-none">Sign In</span>
              </a>
            </li>
         
            <li className="nav-item px-3 d-flex align-items-center">
              <a href="javascript:;" className="nav-link text-white p-0">
                <i className="fa fa-cog fixed-plugin-button-nav cursor-pointer"></i>
              </a>
            </li>
            <li className="nav-item dropdown pe-2 d-flex align-items-center">
              <a href="javascript:;" className="nav-link text-white p-0" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                <i className="fa fa-bell cursor-pointer"></i>
              </a>
              <ul className="dropdown-menu  dropdown-menu-end  px-2 py-3 me-sm-n4" aria-labelledby="dropdownMenuButton">
                <li className="mb-2">
                  <a className="dropdown-item border-radius-md" href="javascript:;">
                    <div className="d-flex py-1">
                      <div className="my-auto">
                        <img src="../assets/img/team-2.jpg" className="avatar avatar-sm  me-3 "/>
                      </div>
                     
                    </div>
                  </a>
                </li>
                <li className="mb-2">
                  <a className="dropdown-item border-radius-md" href="javascript:;">
                    <div className="d-flex py-1">
                      <div className="my-auto">
                        <img src="../assets/img/small-logos/logo-spotify.svg" className="avatar avatar-sm bg-gradient-dark  me-3 "/>
                      </div>
                     
                    </div>
                  </a>
                </li>
                
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    {/* <!-- End Navbar --> */}
    <div className="container-fluid py-4">
      <div className="row">
        <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
          <div className="card">
            <div className="card-body p-3">
              <div className="row">
                <div className="col-8">
                  <div className="numbers">
                    <p className="text-sm mb-0 text-uppercase font-weight-bold">Today's Money</p>
                    <h5 className="font-weight-bolder">
                      $53,000
                    </h5>
                    <p className="mb-0">
                      <span className="text-success text-sm font-weight-bolder">+55%</span>
                      since yesterday
                    </p>
                  </div>
                </div>
                <div className="col-4 text-end">
                  <div className="icon icon-shape bg-gradient-primary shadow-primary text-center rounded-circle">
                    <i className="ni ni-money-coins text-lg opacity-10" aria-hidden="true"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
          <div className="card">
            <div className="card-body p-3">
              <div className="row">
                <div className="col-8">
                  <div className="numbers">
                    <p className="text-sm mb-0 text-uppercase font-weight-bold">Today's Users</p>
                    <h5 className="font-weight-bolder">
                      2,300
                    </h5>
                    <p className="mb-0">
                      <span className="text-success text-sm font-weight-bolder">+3%</span>
                      since last week
                    </p>
                  </div>
                </div>
                <div className="col-4 text-end">
                  <div className="icon icon-shape bg-gradient-danger shadow-danger text-center rounded-circle">
                    <i className="ni ni-world text-lg opacity-10" aria-hidden="true"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
          <div className="card">
            <div className="card-body p-3">
              <div className="row">
                <div className="col-8">
                  <div className="numbers">
                    <p className="text-sm mb-0 text-uppercase font-weight-bold">New Clients</p>
                    <h5 className="font-weight-bolder">
                      +3,462
                    </h5>
                    <p className="mb-0">
                      <span className="text-danger text-sm font-weight-bolder">-2%</span>
                      since last quarter
                    </p>
                  </div>
                </div>
                <div className="col-4 text-end">
                  <div className="icon icon-shape bg-gradient-success shadow-success text-center rounded-circle">
                    <i className="ni ni-paper-diploma text-lg opacity-10" aria-hidden="true"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6">
          <div className="card">
            <div className="card-body p-3">
              <div className="row">
                <div className="col-8">
                  <div className="numbers">
                    <p className="text-sm mb-0 text-uppercase font-weight-bold">Sales</p>
                    <h5 className="font-weight-bolder">
                      $103,430
                    </h5>
                    <p className="mb-0">
                      <span className="text-success text-sm font-weight-bolder">+5%</span> than last month
                    </p>
                  </div>
                </div>s
                <div className="col-4 text-end">
                  <div className="icon icon-shape bg-gradient-warning shadow-warning text-center rounded-circle">
                    <i className="ni ni-cart text-lg opacity-10" aria-hidden="true"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-lg-7 mb-lg-0 mb-4">
          <div className="card z-index-2 h-100">
            <div className="card-header pb-0 pt-3 bg-transparent">
              <h6 className="text-capitalize">Sales overview</h6>
              <p className="text-sm mb-0">
                <i className="fa fa-arrow-up text-success"></i>
                <span className="font-weight-bold">4% more</span> in 2021
              </p>
            </div>
            <div className="card-body p-3">
              <div className="chart">
                <canvas id="chart-line" className="chart-canvas" height="300"></canvas>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-5">
          <div className="card card-carousel overflow-hidden h-100 p-0">
            <div id="carouselExampleCaptions" className="carousel slide h-100" data-bs-ride="carousel">
              <div className="carousel-inner border-radius-lg h-100">
                <div className="carousel-item h-100 active a1" >
                  
         <div className="carousel-caption d-none d-md-block bottom-0 text-start start-0 ms-5">
         <div className="icon icon-shape icon-sm bg-white text-center border-radius-md mb-3">
          <i className="ni ni-bulb-61 text-dark opacity-10"></i>
          </div>
         <h5 className="text-white mb-1">Faster way to create web pages</h5>
         <p>That’s my skill. I’m not really specifically talented at anything except for the ability to learn.</p>
         </div>
                </div>
                <div className="carousel-item h-100 a2" >
               
                </div>
             
              </div>
              <button className="carousel-control-prev w-5 me-3" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next w-5 me-3" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
     
     
    </div>
    </main>
     <div className="fixed-plugin">
    <a className="fixed-plugin-button text-dark position-fixed px-3 py-2">
      <i className="fa fa-cog py-2"> </i>
    </a>
  
    </div>
  </div>
 
 
 
 
 

   
  )
}

export default Dashboard

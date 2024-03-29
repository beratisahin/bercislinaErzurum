import React, { useEffect } from "react";
import "./AdminManager.css";
import Blog from "../admin/blog/Blog";
import Galeri from "../admin/galeri/Galeri";


function AdminManager(props) {
    const { handleLogout } = props;
  
    useEffect(() => {
      galeri()
      
}, []);
  
const blog = () => {
  document.getElementById("admin_blog").style.display = "block";
  document.getElementById("admin_galeri").style.display = "none";

};

const galeri = () => {
  document.getElementById("admin_blog").style.display = "none";
  document.getElementById("admin_galeri").style.display = "block"
};

    return (
      <div className="row">
        <div className="container-fluid">
          <div className="row d-lg-none d-xl-none d-md-block d-sm-block d-xs-block ">
            <div className="col-12 text-center">
              <h3>Admin Panel</h3>
            </div>
          </div>
  
          <div className="row">
            <div className="col-lg-2 col-xs-12 px-1  vh-lg-100 overflow-scroll" style={{backgroundColor:"#AF5AAC"}}>
              <div className="col-12 mt-lg-5">
                <button
                  className="btn btn-outline text-white m-3"
                  onClick={galeri}
                  style={{
                    backgroundColor: "transparent",
                    color: "black",
                    fontSize: "16px",
                    display: "block",
                    width: "100%",
                  }}
                >
                  Galeri İşlemleri
                </button>
  
                <button
                  className="btn btn-outline text-white m-3"
                  onClick={blog}
                  style={{
                    backgroundColor: "transparent",
                    color: "black",
                    fontSize: "16px",
                    display: "block",
                    width: "100%",
                  }}
                >
                  Blog İşlemleri
                </button>
  
                  <br/>
                  <br/>
  
                <button onClick={handleLogout} className="btn text-white m-3" style={{backgroundColor:"#49238B",display: "block",
                    width: "100%"}}>
                  Çıkış
                </button>
  
              </div>
            </div>
  
            <div style={{minHeight:"100vh",}} className="col-lg-10 col-xs-12  mvh-100 bg-dark">
              <div className="row d-none d-lg-block d-md-none d-xl-block">
                <div className="col-12 text-center text-white mt-3">
                  <h3>Admin Panel</h3>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <Blog></Blog>
                  <Galeri></Galeri>
   
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default AdminManager;

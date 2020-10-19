import React from "react";

import logo1 from './Img/logo1.jpg'


const Footer = () => {

  return (
    <div style={{backgroundColor:"#262021"   , width:"100% "}}  >
    <div  className="footerContent">
        <div classsName="footer" style={{ color: "white", display:"inline-block", padding:"20px" , width:"40%", padding:"10px 20px 60px" }}>
      <dl>
          <dt> Phone:</dt>
          <dd> +(20)000-115-8888</dd>
          <dt> Email:</dt>
           <dd> Toka.fawy@gmail.com</dd>
           <dt> Email:</dt>
           <dd> Toka.fawy@gmail.com</dd>

          </dl>

        </div>
        <div classsName="footer" style={{ color: "white", display:"inline-block", padding:"10px 20px 60px" ,  marginbottom: "30px" , width:"30%" }}>
          <img src={logo1} />
          
        </div>
        <div classsName="footer" style={{ color: "white", display:"inline-block", display:"inline-block", width:"30%" }}>
      <dl>
          <dt> Phone:</dt>
          <dd> +(20)000-115-8888</dd>
          <dt> Email:</dt>
           <dd> Toka.fawy@gmail.com</dd>
           <dt> Email:</dt>
           <dd> Toka.fawy@gmail.com</dd>

          </dl>

        </div>
      </div>
      <div class="footerLink"
        style={{
          position:"static",
        left: "0",
        bottom: "-20",
        width: "100%",
        backgroundcolor:"#666",
        color: "white",
          textalign: "center",
          margin: "0",
        padding:"20px"
      }}>
  <p style={{textalign: "center"}} >
Copyright © 2020 BUE , All rights reserved</p>
</div>
      </div>

     
  );
}

export default Footer;
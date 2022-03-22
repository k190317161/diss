import React, { useState, useEffect, Fragment } from 'react';
// import Sk from '/node_modules/skulpt/dist/skulpt.min.js'
// import ScriptTag from 'react-script-tag';
import {Helmet} from "react-helmet";



const SkulptModule = () => {
  
  


const runit = () => {
  window.runit();
}

  return (
    
    <div>

    
            
      <h3>Try This</h3> 
      <form> 
      <textarea id="yourcode" cols="40" rows="10">

      

      print "Hello World" 
      </textarea><br /> 
      <button type="button" onClick={runit}>Run</button> 
      </form> 
      <pre id="output" ></pre> 

      <div id="mycanvas"></div>
      
      
      


      
      </div>
  );
};

export default SkulptModule;
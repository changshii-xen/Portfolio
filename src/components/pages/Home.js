import React from 'react';
import back from './images/K3.jpeg'

import '../../App.css'


 
const Home = () => {
    
    return (
        <div className="container3">
        <div className="row" >
            <div className="element">
                <img src={back} alt="Siyamthanda Mgoqi" />
            </div>
            
            <div className="okay"> 
                <p style= {{ color : '#f9e6f0'}}>
                    <h1><i>Welcome</i></h1> <br/>
                    <br/>  
                    <h4>
                        I am Siyamthanda Mgoqi <br/> Please feel free to look through <br />
                        My Portfolio
                    </h4>
                    <h6>
                        I am a hard working, passionate and enthusiastic individual <br/>who would like to be 
                        working on the next big piece of software.<br/> I put my all into my work and aspire
                        to be a Junior Developer <br/><br/>
                        <h5>
                        Check out my Portifolio below
                        </h5> 
                    </h6>
                </p>
            </div>    
            
        </div>
        </div>    
    );
}

export default Home;

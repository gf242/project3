import React, { useState } from "react";

const Home = () => {




    const [content, setContent] = useState();

    function getQuoteApi(event) {

        event.preventDefault();

        let url = "https://api.quotable.io/random";

        fetch(url)
            .then(function(response) {
                return response.json();
            })
            .then(function(json) {

                console.log(json);
                console.log(json.content);

                setContent(json.content);


            });
    }





    return (
        <>

    <div class="page">

      <h1>Welcome!</h1>
      <p className="header">Get a Random Quote to Help You With Your Day</p>

      
    
      <p className="quote">"{content}"</p>

      <button className="button" onClick={getQuoteApi}>
        Press Here for New Quote
        </button>
        
        <p className="footer">
        <a  href="https://github.com/gf242/project3" >Project 3 Github</a>
        </p>
        
        
        

    </div>



    
  
  
  
  
  
  </>
    )
};

export default Home;

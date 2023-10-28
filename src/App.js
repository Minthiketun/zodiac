

import { useState, useEffect,useRef } from "react";
import ReactDOM from "react-dom/client";
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom'; 


import './App.css';




function DateInput({rawDate,shoot}) {

  const values = useRef({});

    

    useEffect(() => {

    },[values.current.value])

    function getHoroscope(rawInfo) {
      const day = Number(rawInfo.split("-")[2]);
      const month = Number(rawInfo.split("-")[1]);
      console.log(rawInfo.split("-"));
  
      if ((month === 3 && day >= 21) || (month === 4 && day <= 19))
          return "Aries";
      else if ((month === 4 && day >= 20) || (month === 5 && day <= 20))
          return "Taurus";
      else if ((month === 5 && day >= 21) || (month === 6 && day <= 20))
          return "Gemini";
      else if ((month === 6 && day >= 21) || (month === 7 && day <= 22))
          return "Cancer";
      else if ((month === 7 && day >= 23) || (month === 8 && day <= 22))
          return "Leo";
      else if ((month === 8 && day >= 23) || (month === 9 && day <= 22))
          return "Virgo";
      else if ((month === 9 && day >= 23) || (month === 10 && day <= 22))
          return "Libra";
      else if ((month === 10 && day >= 23) || (month === 11 && day <= 21))
          return "Scorpio";
      else if ((month === 11 && day >= 22) || (month === 12 && day <= 21))
          return "Sagittarius";
      else if ((month === 12 && day >= 22) || (month === 1 && day <= 19))
          return "Capricorn";
      else if ((month === 1 && day >= 20) || (month === 2 && day <= 18))
          return "Aquarius";
      else if ((month === 2 && day >= 19) || (month === 3 && day <= 20))
          return "Pisces";
      else
          throw new Error("Invalid birth date.");
  }

  function getChineseZodiacSign(birthYear) {
    const year = Number(birthYear.split("-")[0]);
    const zodiacAnimals = ['Monkey🐒', 'Rooster🐓', 'Dog🐕', 'Pig🐖', 'Rat🐀', 'Ox🐂', 'Tiger🐅', 'Rabbit🐇', 'Dragon🐉', 'Snake🐍', 'Horse🐎', 'Sheep🐑'];
  
    // Calculate the Chinese zodiac year.
    const zodiacYear = year % 12;
  
    // Return the Chinese zodiac animal for the calculated year.
    return zodiacAnimals[zodiacYear];
  }

  

  

  

  function hick() {

    
    rawDate(values.current.value);
    let mainData = shoot.filter(a => a.Name === getHoroscope(values.current.value));
    //console.log(getChineseZodiacSign(values.current.value));
    const dataBlock=Object.entries(mainData[0]); 
    console.log(dataBlock);
      localStorage.setItem('data',JSON.stringify(mainData[0]));
      localStorage.setItem('chinese',JSON.stringify(getChineseZodiacSign(values.current.value)));
  }
  
  
  



  return (
      <>
      <input ref={values} data-role="datepicker"  class="inputer" data-distance="2"/>
      <Link to="/App"><button className="button"  onClick={hick}>Explore</button></Link>
      </>
      
  );
};



function App() {
  const [data,setData] = useState(null);
  const [rawInfo,setRawInfo] = useState(null);

  const receivdRawInfo = (data) => {
    setRawInfo(data);
  };

  useEffect(() => {

    fetch('https://raw.githubusercontent.com/sannlynnhtun-coding/Zodiac/main/Zodiac.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    // Process the JSON data here
    setData(data.ZodiacSignsDetail);
    console.log(data.ZodiacSignsDetail[0]);
  })
  .catch(error => {
    console.error('Error:', error);
  });

    
  },[]);

  

  return (
    <>
      <div className="wallpaper">
        <div className="blank"></div>
        <div className="bottom"></div>
      </div>
      <div className=" d-flex justify-content-around align-items-start mt-2  px-2 centerIt">
      <div className="wrapper d-flex align-items-center justify-content-between">
        <DateInput rawDate={receivdRawInfo} shoot={data} />
      </div>
      
    </div>  
    <p className="here">Choose your birth date and click <span>Explore</span> for a cosmic journey within</p>
    </>
    
  );
}


{/* <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </Router> */}


export default App;


import Chart from "chart.js/auto";
import React, { Component } from 'react';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';
import { useState, useEffect,useRef } from "react";
import { Link } from 'react-router-dom';
import imageOne from './image/03cf77520c9219aa189141521737e625-removebg-preview.png';
import imageTwo from './image/09ad148528dd498d529d0f34ec27c44c-removebg-preview.png';


ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);



const imgPrefix = "https://github.com/sannlynnhtun-coding/Zodiac/blob/main/"; 
const imgSuffix = '?raw=true';

function Element() {
  return(
    <div className="d-flex flex-column justify-content-center align-items-center   element">
      <div className="d-flex flex-column justify-content-between align-items-center classy">
      <h5>Element</h5>
      <img src={imgPrefix+ JSON.parse(localStorage.getItem('data')).ElementImageUrl + imgSuffix}></img>
      </div>
    </div>
      
  )
}



 function Information() {
  return(
    <div className="informationPart d-flex justify-content-center flex-column align-items-center d-sm-none">
          <h4>Myanmar-Month<span>:</span>{JSON.parse(localStorage.getItem('data')).MyanmarMonth}</h4>
          <h4>Chinese<span>:</span>{JSON.parse(localStorage.getItem('chinese'))}</h4>
    </div>
  )
}



function Diagram() {

  const [, setState] = React.useState(false);


  const data = {
    labels: [JSON.parse(localStorage.getItem('data')).Traits[0].name, JSON.parse(localStorage.getItem('data')).Traits[1].name, JSON.parse(localStorage.getItem('data')).Traits[2].name, JSON.parse(localStorage.getItem('data')).Traits[3].name, JSON.parse(localStorage.getItem('data')).Traits[4].name],
    datasets: [
      {
        label: 'Traits',
        data: [JSON.parse(localStorage.getItem('data')).Traits[0].percentage, JSON.parse(localStorage.getItem('data')).Traits[1].percentage, JSON.parse(localStorage.getItem('data')).Traits[2].percentage, JSON.parse(localStorage.getItem('data')).Traits[3].percentage, JSON.parse(localStorage.getItem('data')).Traits[4].percentage],
        backgroundColor: 'rgba(255, 223, 0, 0.2)',
        borderColor: '#ffdf00',
        borderWidth: 1,
      },
    ],
  };

 
  return(
    <Radar data={data}/>
  )
}

function TextBlock({topic,content}) {
  return(
    <div className="d-flex justify-content-center align-items-center flex-column text">
      <h4>{topic}</h4>
      <img src={imageTwo} />
      <p>{content}</p>
    </div>
  );

}

function Text() {
  return(
    <div class="control">
      <TextBlock topic="Life Purpose" content={JSON.parse(localStorage.getItem('data')).LifePurpose} />
      <TextBlock topic="Loyal" content={JSON.parse(localStorage.getItem('data')).Loyal} />
      <TextBlock topic="Representative Flower" content={JSON.parse(localStorage.getItem('data')).RepresentativeFlower} />
      <TextBlock topic="Angry" content={JSON.parse(localStorage.getItem('data')).Angry} />
      <TextBlock topic="Character" content={JSON.parse(localStorage.getItem('data')).Character} />
      <TextBlock topic="Pretty Features" content={JSON.parse(localStorage.getItem('data')).PrettyFeatures} />
      <center><Link to="/"><button className="btn btn-outline-warning my-10" >Back</button></Link></center>
      

    </div>
  )
}

function Home() {
 




    
    
    return(
      <div className="crucial">
      <div className="Topic d-flex align-items-center justify-content-center flex-column">

        <img src={imgPrefix+ JSON.parse(localStorage.getItem('data')).ZodiacSignImageUrl + imgSuffix}></img>
        <div className="line"></div>
        <h1>{JSON.parse(localStorage.getItem('data')).Name}</h1>
        <p>{JSON.parse(localStorage.getItem('data')).Dates}</p>
      </div>
      <section className="hero d-flex justify-content-lg-between align-items-center flex-column-reverse flex-lg-row flex-md-row">
        <Information />
        <div className="imagePart d-flex flex-column align-items-center">
          <img src={imageOne} className="gold" />
          <img src={(JSON.parse(localStorage.getItem('data')).Name == "Sagittarius") ? ("https://github.com/sannlynnhtun-coding/Zodiac/blob/main/images/zodiac-signs-2/saggittarius.jpg?raw=true"):(imgPrefix+ JSON.parse(localStorage.getItem('data')).ZodiacSign2ImageUrl + imgSuffix)} className="attention" />
          <img src={imageOne} className="gold2" />
        </div>
        
      </section>
      <section className="static d-flex  justify-content-between align-items-center m-auto flex-sm-column flex-lg-row flex-md-column flex-xl-row ">
         <Element />
        <div className="good d-flex justify-content-center align-items-center">
        <Diagram />
        </div>
        
       
      </section>
      <section className="des">
        <Text />
        
      </section>
      
        
        
      </div>
      
    )
  }

  export default Home;
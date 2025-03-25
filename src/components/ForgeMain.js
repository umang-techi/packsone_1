import React, { useState } from "react";
import Slider from "@mui/material/Slider";
import Box from "@mui/material/Box";
import Typography from '@mui/material/Typography';



const ForgeMain = () => {
  const [priceRange, setPriceRange] = useState([10, 100]);

  // Handle slider change
  const handleChange = (event, newValue) => {
    setPriceRange(newValue);
  };
  const [value] = useState(50);

  return (


    

<div className="container mt-5 main_forge">
  
    <div className="row m-0">
        <div className="col-md-4 border2">
        <div className="input-icon-wrap">
      <h4>price</h4>
  <span className="input-icon">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path d="M12 21.5a9.5 9.5 0 1 0 0-19a9.5 9.5 0 0 0 0 19"/><path d="M9 14.433a2.82 2.82 0 0 0 3 2.57c2.42 0 3-1.39 3-2.57s-1-2.43-3-2.43s-3-.79-3-2.4a2.75 2.75 0 0 1 3-2.6a2.89 2.89 0 0 1 3 2.6M12 18.5v-1.3m0-11.7v1.499"/></g></svg>
    </span>
  <input type="text" className="input-with-icon" id="form-name"></input>
</div>  
    <Box sx={{ width: 300, margin: "0 auto", padding: "20px" }}>
      <Slider
        value={priceRange}
        onChange={handleChange}
        valueLabelDisplay="auto"
        min={0}
        max={500}
        step={10}
      />
      <p>
        Selected Range: ${priceRange[0]} - ${priceRange[1]}
      </p>
      <Typography>Selected Value: ${value}</Typography>
    </Box>   
    </div>

<div className="col-md-4">

</div>

<div className="col-md-4  svg_desig">
<svg viewBox="0 0 45 45" focusable="false" className="chakra-icon css-1eybg3y" data-sentry-element="Brand" data-sentry-source-file="SelectedProduct.tsx"><path d="M3.21192 7.42225C1.15968 8.23994 0.158879 10.5665 0.976565 12.6187L12.821 42.346C13.6387 44.3982 15.9652 45.399 18.0174 44.5813L34.739 37.9188C36.7913 37.1012 37.7921 34.7746 36.9744 32.7224L25.13 2.99512C24.3123 0.942884 21.9857 -0.0579184 19.9335 0.759768L3.21192 7.42225Z" fill="#fff"></path><path d="M35.8047 22.5693L35.7383 6.50156C35.7292 4.29244 33.931 2.50898 31.7219 2.5181L27.822 2.5342L35.8047 22.5693Z" fill="#fff"></path><path d="M38.0241 27.9748L44.3787 13.2168C45.2524 11.1878 44.3158 8.83469 42.2868 7.96101L38.7048 6.41865L38.0241 27.9748Z" fill="#fff"></path></svg>
<p>Select a product below to get started</p>
<ul>
  <li className="lefty">$0.00</li>
  <li className="righty">$0.00</li>
</ul>

</div>
    </div>


<div className="row mt-5">
  <div className="col-md-3 mb-3">
  <div className="search-container">
        <input type="text" className="search-input" placeholder="Search"></input>
        <button className="search-button">Search</button>
    </div>
  </div>
  <div className="col-md-6">
    </div>
  <div className="col-md-3">
  <div className="search-container">
        <input type="Number" className="search-input" placeholder="Max price"></input>
        <button className="search-button">Max price</button>
    </div>
  </div>
  </div>
  <div className="row mb-5">
  <div className="textshowss">
    <p>Showing 1 - 48 of 5818</p>
    <div className="lastpre">
    <button className="prev">Prev</button>
    <button className="next">Next</button>
    </div> 
  </div>

<div className="col-md-2 col-6">
  <div className="mforgebg">
<img className="user_img"src="forge6.png" alt="forge" />
    <h6>Richard Mille 030 Rose Gold Factory Set</h6>
    <p>$555.555</p>    
    </div>
    <div className="modlblack">
    <button type="button" className="btn btn-primary btnvew" data-bs-toggle="modal" data-bs-target="#exampleModal">
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#fff" d="M12 9a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3m0-4.5c5 0 9.27 3.11 11 7.5c-1.73 4.39-6 7.5-11 7.5S2.73 16.39 1 12c1.73-4.39 6-7.5 11-7.5M3.18 12a9.821 9.821 0 0 0 17.64 0a9.821 9.821 0 0 0-17.64 0"/></svg>
</button>
<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h4 className="modal-title" id="exampleModalLabel">Product Details</h4>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <img className="user_img"src="forge6.png" alt="forge" />
      <h5>2013 Lamborghini Aventador LP 700-4</h5>
      <h6>$350,000 USD</h6>
      <p> 2013 Lamborghini Aventador LP 700-4, powered by a 6.5-liter V12 engine with 700 horsepower,
         is capable of reaching 217 mph and accelerating from 0 to 60 mph in just 2.9 seconds. Its signature 
         scissor doors, aggressive design, and cutting-edge technology perfectly embody Lamborghini’s supercar legacy. 
         This model was notably featured in *The Dark Knight Rises* as Bruce Wayne's personal car, 
         symbolizing the character’s wealth and affinity for powerful, sleek vehicles. The Aventador's
          striking look and advanced performance align with the Batman universe, making it a real-world 
          equivalent to the Batmobile.</p>
      </div>

    </div>
  </div>
</div>
</div>
</div>
<div className="col-md-2 col-6">
  <div className="mforgebg">
<img className="user_img"src="forge7.png" alt="forge" />
    <h6>Richard Mille 030 Rose Gold Factory Set</h6>
    <p>$555.555</p>
    </div>
</div>
<div className="col-md-2 col-6">
  <div className="mforgebg">
<img className="user_img"src="forge8.png" alt="forge" />
    <h6>Richard Mille 030 Rose Gold Factory Set</h6>
    <p>$555.555</p>
    </div>
</div>
<div className="col-md-2 col-6">
  <div className="mforgebg">
<img className="user_img"src="forge9.png" alt="forge" />
    <h6>Richard Mille 030 Rose Gold Factory Set</h6>
    <p>$555.555</p>
    </div>
</div>
<div className="col-md-2 col-6">
  <div className="mforgebg">
<img className="user_img"src="forge10.png" alt="forge" />
    <h6>Richard Mille 030 Rose Gold Factory Set</h6>
    <p>$555.555</p>
    </div>
</div>
<div className="col-md-2 col-6">
  <div className="mforgebg">
<img className="user_img"src="forge6.png" alt="forge" />
    <h6>Richard Mille 030 Rose Gold Factory Set</h6>
    <p>$555.555</p>
    </div>
</div>
<div className="col-md-2 col-6">
  <div className="mforgebg">
<img className="user_img"src="forge10.png" alt="forge" />
    <h6>Richard Mille 030 Rose Gold Factory Set</h6>
    <p>$555.555</p>
    </div>
</div>
<div className="col-md-2 col-6">
  <div className="mforgebg">
<img className="user_img"src="forge10.png" alt="forge" />
    <h6>Richard Mille 030 Rose Gold Factory Set</h6>
    <p>$555.555</p>
    </div>
</div>
<div className="col-md-2 col-6">
  <div className="mforgebg">
<img className="user_img"src="forge2.png" alt="forge" />
    <h6>Richard Mille 030 Rose Gold Factory Set</h6>
    <p>$555.555</p>
    </div>
</div>
<div className="col-md-2 col-6">
  <div className="mforgebg">
<img className="user_img"src="forge3.png" alt="forge" />
    <h6>Richard Mille 030 Rose Gold Factory Set</h6>
    <p>$555.555</p>
    </div>
</div>

<div className="col-md-2 col-6">
  <div className="mforgebg">
<img className="user_img"src="forge4.png" alt="forge" />
    <h6>Richard Mille 030 Rose Gold Factory Set</h6>
    <p>$555.555</p>
    </div>
</div>
<div className="col-md-2 col-6">
  <div className="mforgebg">
<img className="user_img"src="forge6.png" alt="forge" />
    <h6>Richard Mille 030 Rose Gold Factory Set</h6>
    <p>$555.555</p>
    </div>
</div>

  </div>
 
</div>

  );
};

export default ForgeMain;
      
  
      




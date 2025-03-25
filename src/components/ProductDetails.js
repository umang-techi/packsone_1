import React from 'react'

export default function ProductDetails(props){
    return(
    

<div className="col-md-3 col-6 ">
  <div className="mforgebg detalprodu">
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

    )
}
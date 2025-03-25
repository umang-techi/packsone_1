import React from 'react'
import ProductDetails from './ProductDetails'
import DropChance from './DropChance'

export default function CreatePack(props){
    return(

        
<div className="container mt-3 crete_packy ">
    <div className="row ">
        <div className="col-md-9 ">
            <div className="bggrrr">
        <div className="row p-0">
<div className="col-md-12">
    <div className="numbgs">
    <p>1</p>
    <h5> Choose Items</h5>
    <h6>(50 items max)</h6>
    </div>
</div>
<div className="col-md-4">
<div class="search-container"><input class="search-input" placeholder="Search" type="text" />
<button class="search-button">Search</button></div>
</div>
<div className="col-md-4">
    </div>
<div className="col-md-4">
<div class="search-container">
    <input class="search-input" placeholder="Max price" type="Number" />
    <button class="search-button">Max price</button></div>
</div>
        </div>
      
<div className="row">
        <div class="textshowss"><p>Showing 1 - 48 of 5818</p><div class="lastpre"><button class="prev">Prev</button><button class="next">Next</button></div></div>
        
 
        <ProductDetails />
        <ProductDetails />     
        <ProductDetails />
        <ProductDetails />  
        <ProductDetails />
        <ProductDetails /> 
        <ProductDetails />
        <ProductDetails />

   
        </div>
        </div>
      


        </div>
        <div className="col-md-3">
            <DropChance />
        </div>
     
        </div>

        <div className="col-md-12 p-0 mb-4">
<div className="row mt-4">
    <div className="col-md-6 ">
        <div className="smllfont">
        <div className="thirdp_sec">
        <p>3</p>
        <h6>Name Your Pack</h6>
        </div>
        <div className="thirdp_sec2">
            <h5>Pack Name</h5>
            <h6>(max 20 characters)</h6>
        </div>
        <div class="input-group mb-3">
  <input type="text" class="form-control" placeholder="Username" aria-label="Username"></input> </div>
   <h4>Your pack name must not include any special characters, profanities, or slurs.</h4>
   </div>
</div>
<div className="col-md-6 ">
<div className="smllfont">
        <div className="thirdp_sec">
        <p>4</p>
        <h6>Set Pack Commission</h6>
        </div>
        <div className="thirdp_sec2">
            <h5>Commission</h5>
            <h6>(0.5% to 3.0%)</h6>
        </div>
        <div class="input-group mb-3">
        <select class="form-select" id="inputGroupSelect04" aria-label="Example select with button addon">
    <option selected>0.5%</option>
    <option value="1">1%</option>
    <option value="2">2%</option>
    <option value="3">3%</option>
    <option value="4">4%</option>
    <option value="5">5%</option>
  </select>
   </div>
   <h4>You will receive $0.00 for each pack open.</h4>
   </div>
</div>
</div>
</div>

        </div>

    )
}
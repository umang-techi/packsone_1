import React from 'react'


export default function Packs(props){
    return(


<div className="container mt-3">
    <div className="row">
        <div className="col-md-10 mt-3 mb-5 ">
        <div className="row mobleft_right">
        <div className="col-md-4 mb-3">
        <form id="searchthis" action="/search" method="get">
<input id="namanyay-search-box"class="w-100"  name="q" size="40" type="text" placeholder="Search"/>
<input id="namanyay-search-btn" value="Go" type="submit"/>
</form>
            </div>




            <div className="col-md-3 col-6 mb-3 dropdo_wn">
            <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
  Price High to Low
  </button>
  <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
    <li><a class="dropdown-item active" href="/"> Official Packs</a></li>
    <li><a class="dropdown-item" href="/">Community Packs</a></li>

  </ul>
</div>
</div>
<div className="col-md-3 col-6 mb-3 dropdo_wn">
            <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
  Create Pack
  </button>
  <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
    <li><a class="dropdown-item " href="/"> Most Popular</a></li>
    <li><a class="dropdown-item" href="/">Price Low to High</a></li>
    <li><a class="dropdown-item " href="/"> Price High to Low</a></li>
    <li><a class="dropdown-item" href="/">All</a></li>
    <li><a class="dropdown-item " href="/"> Greater than $500</a></li>
    <li><a class="dropdown-item" href="/">Greater than $1000</a></li>

  </ul>
</div>
</div>
            <div className="col-md-2 mb-3 col-12 text-end ">
<a href="/createpack">
            <button type="button"  class="btn btn-info mr-3 w-100">Create Pack</button> </a>
            </div>

            <div className="col-md-2 col-6 luckyimg">
            <img src="lucky1.png" alt="Watch" /> 
            <h5>$10020.09</h5>
                </div>
                <div className="col-md-2 col-6 luckyimg">
            <img src="lucky2.png" alt="Watch" /> 
            <h5>$13020.09</h5>
                </div>
                <div className="col-md-2 col-6 luckyimg">
            <img src="lucky3.png" alt="Watch" /> 
            <h5>$10720.09</h5>
                </div>
                <div className="col-md-2 col-6 luckyimg">
            <img src="lucky4.png" alt="Watch" /> 
            <h5>$11020.09</h5>
                </div>
                <div className="col-md-2 col-6 luckyimg">
            <img src="lucky5.png" alt="Watch" /> 
            <h5>$12020.09</h5>
                </div>

                
            <div className="col-md-2 col-6 luckyimg">
            <img src="lucky5.png" alt="Watch" /> 
            <h5>$13020.09</h5>
                </div>
                <div className="col-md-2 col-6 luckyimg">
            <img src="lucky4.png" alt="Watch" /> 
            <h5>$10520.09</h5>
                </div>
                <div className="col-md-2 col-6 luckyimg">
            <img src="lucky3.png" alt="Watch" /> 
            <h5>$10026.09</h5>
                </div>
                <div className="col-md-2 col-6 luckyimg">
            <img src="lucky2.png" alt="Watch" /> 
            <h5>$10025.09</h5>
                </div>
                <div className="col-md-2 col-6 luckyimg">
            <img src="lucky1.png" alt="Watch" /> 
            <h5>$14020.09</h5>
                </div>

            </div>
        </div>

        <div className="col-md-2 mainlive_cls  mt-3 ">
            <h5> <span>.</span> Live Opens <span><svg viewBox="0 0 14 16" focusable="false" class="chakra-icon size-3 m-auto 
            text-white css-17qpap6"><path d="M4.61478 0.000244141H1.12703C0.504352 0.000244141 0 0.504597 0 1.12728V14.8729C0
             15.4956 0.504352 16 1.12703 16H4.61478C5.23675 16 5.74143 15.4956 5.74143 14.8729L5.74162 1.12681C5.74162 0.504128
              5.23708 0.000244141 4.61478 0.000244141Z" fill="currentColor"></path><path d="M12.5557 0.000244141H9.06761C8.44512
               0.000244141 7.94058 0.504597 7.94058 1.12728V14.8729C7.94058 15.4956 8.44512 16 9.06761 16H12.5557C13.1779 16 
               13.6822 15.4956 13.6822 14.8729L13.6821 1.12681C13.6821 0.504128 13.1779 0.000244141 12.5557 0.000244141Z"
                fill="currentColor"></path></svg></span></h5>
       <div className="bg_sidebattle">
        <div class="image_sec">
         <img src="swords.png" alt="Watch" /> 
           <img class="first" src="watch.png" alt="Watch" />

        <h6>Bill </h6>
        <p>$0.1</p>
        </div>
        </div>
     
</div>

    </div>
</div>


    )
}
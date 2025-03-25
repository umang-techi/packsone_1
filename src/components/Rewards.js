import React from 'react'


export default function Race(props){
    return(

        <section className="Rewards-page">
        <div className="container">
        <div className="row">
<div className="col-md-10 mt-5 mb-5">
    <div className="row m-0">
        <div className="col-md-4 ">
            <div className="medi_top">
        <img className="medal_img"src="medal1.png" alt="rewards" />
        <h5>Daily Rewards</h5>
        <p>Claim your bonus for your play in the last day!</p>
        <button type="button" class="btn btn-info">  Login To Claim</button>
        </div>
        </div>
        <div className="col-md-4 ">
        <div className="medi_top">
        <img className="medal_img"src="medal2.png" alt="rewards" />
        <h5>Weekly Rewards</h5>
        <p>Claim your bonus for your play in the last 7 days!</p>
        <button type="button" class="btn btn-info">  Login To Claim</button>
        </div>
        </div>
        <div className="col-md-4 ">
        <div className="medi_top">
        <img className="medal_img"src="medal3.png" alt="rewards" />
        <h5>Monthly Rewards</h5>
        <p>Claim your bonus for your play in the last 30 days!</p>
        <button type="button" class="btn btn-info">  Login To Claim</button>
        </div>
        </div>
    </div>
    </div>
</div>
</div>
</section>

    )
}
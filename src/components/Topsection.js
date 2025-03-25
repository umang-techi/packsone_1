import React from 'react'


export default function Topsection(props){
    return(
    <div className="row m-0 crete_batty">
        <div className="col-md-10">
        <div className="row p-0">
        <div className="col-md-6 p-0">
        <div className="dropdown show">
  <a className="btn btn-secondary btn-dark dropdown-toggle" href="/" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Dropdown link
  </a>

  <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <a className="dropdown-item" href="/">Action</a>
    <a className="dropdown-item" href="/">Another action</a>
    <a className="dropdown-item" href="/">Something else here</a>
  </div>
</div>
            </div>

            <div className="col-md-6 text-end p-0">
            

            <button type="button" className="btn btn-info mr-3" data-bs-toggle="modal" data-bs-target="#exampleModal">Create Battle</button>
          
            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Choose No of Players </h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <div className="row">
      <div className="col-md-12 leftytexty">
      <h4 className="moydbat mb-3">Choose number of players</h4>
      <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
  <li className="nav-item" role="presentation">
    <button className="nav-link " id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">
<div className="two_player">
  <div className="twoplyimg"><p>1</p>
  <img className="userfig2_img"src="war.png" alt="userfight" />
  <p>1</p>
  </div>
</div>
    </button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="nav-link" id="pills-twoplayer-tab" data-bs-toggle="pill" data-bs-target="#pills-twoplayer" type="button" role="tab" aria-controls="pills-twoplayer" aria-selected="false">
    <div className="two_player">
  <div className="twoplyimg">
  <p>1</p>
  <img className="userfig2_img"src="war.png" alt="userfight" />
  <p>1</p>
  <img className="userfig2_img"src="war.png" alt="userfight" />
  <p>1</p>
  </div>
</div>
    </button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="nav-link" id="pills-threeplayer-tab" data-bs-toggle="pill" data-bs-target="#pills-threeplayer" type="button" role="tab" aria-controls="pills-threeplayer" aria-selected="false">
    <div className="two_player">
  <div className="twoplyimg">
  <p>1</p>
  <img className="userfig2_img"src="war.png" alt="userfight" />
  <p>1</p>
  <img className="userfig2_img"src="war.png" alt="userfight" />
  <p>1</p>
  <img className="userfig2_img"src="war.png" alt="userfight" />
  <p>1</p>
  </div>
</div>
    </button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="nav-link" id="pills-fourplayer-tab" data-bs-toggle="pill" data-bs-target="#pills-fourplayer" type="button" role="tab" aria-controls="pills-fourplayer" aria-selected="false">
    <div className="two_player">
  <div className="twoplyimg">
  <p>1</p>
  <img className="userfig2_img"src="war.png" alt="userfight" />
  <p>1</p>
  <img className="userfig2_img"src="war.png" alt="userfight" />
  <p>1</p>
  <img className="userfig2_img"src="war.png" alt="userfight" />
  <p>1</p>
  <img className="userfig2_img"src="war.png" alt="userfight" />
  </div>
</div>
    </button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="nav-link " id="pills-doubleplayer-tab" data-bs-toggle="pill" data-bs-target="#pills-doubleplayer" type="button" role="tab" aria-controls="pills-doubleplayer" aria-selected="true">
<div className="two_player">
  <div className="twoplyimg"><p>2</p>
  <img className="userfig2_img"src="war.png" alt="userfight" />
  <p>2</p>
  </div>
</div>
    </button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="nav-link " id="pills-tripleplayer-tab" data-bs-toggle="pill" data-bs-target="#pills-tripleplayer" type="button" role="tab" aria-controls="pills-tripleplayer" aria-selected="true">
<div className="two_player">
  <div className="twoplyimg"><p>3</p>
  <img className="userfig2_img"src="war.png" alt="userfight" />
  <p>3</p>
  </div>
</div>
    </button>
  </li>
</ul>
</div>
</div>



<div className="row">
    <div className="col-md-12 leftytexty">
      <h4 className="moydbat">Choose Battle Mode</h4>
    </div>
    <div className="col-md-8 mainjack">
    <ul class="nav nav-pills w-100" id="pills-tab" role="tablist">
  <li class="nav-item" role="presentation">
    <button class="nav-link active" id="pills-normal-tab" data-bs-toggle="pill" data-bs-target="#pills-normal" type="button" role="tab" aria-controls="pills-normal" aria-selected="true">Normal Mode</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="pills-share-tab" data-bs-toggle="pill" data-bs-target="#pills-share" type="button" role="tab" aria-controls="pills-share" aria-selected="false">Share Mode</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="pills-point-tab" data-bs-toggle="pill" data-bs-target="#pills-point" type="button" role="tab" aria-controls="pills-point" aria-selected="false">Point Rush</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="pills-jackpot-tab" data-bs-toggle="pill" data-bs-target="#pills-jackpot" type="button" role="tab" aria-controls="pills-jackpot" aria-selected="false">Jackpot</button>
  </li>
</ul>
      </div>
      </div>
      <div className="row">
    <div className="col-md-12 mt-3">
    <div class="form-check form-switch">
    <label class="form-check-label" for="flexSwitchCheckDefault"> <h4 className="moydbat">Upside Down</h4>
    <p className="valuclss">Winners lose and losers win!</p></label>
      <input class="form-check-input" id="flexSwitchCheckDefault" type="checkbox" /></div>
    </div>
    <div className="col-md-12 leftytexty">
    <div class="form-check form-switch">
    <label class="form-check-label" for="flexSwitchCheckDefault"> <h4 className="moydbat">Fast Mode</h4>
    <p className="valuclss">Play the battle faster!</p></label>
      <input class="form-check-input" id="flexSwitchCheckDefault" type="checkbox" /></div>
    </div>
    <div className="col-md-12 leftytexty">
    <div class="form-check form-switch">
    <label class="form-check-label" for="flexSwitchCheckDefault"> <h4 className="moydbat">Last Chance</h4>
    <p className="valuclss">Last round determines the winner!</p></label>
      <input class="form-check-input" id="flexSwitchCheckDefault" type="checkbox" /></div>
    </div>
    </div>



      </div>

    </div>
  </div>
</div>

            </div>
        </div>
    </div>
</div>


    )
}
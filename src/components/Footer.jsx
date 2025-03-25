import React from 'react'


export default function Footer(props){
    return(

<footer class="section bg-footer">
  <div class="container">
    <div class="row">
      <div class="col-lg-5">
        <div class="">
          <h4 class=" text-uppercase text-white">packsone</h4>
          <p>Open packs and battle to win rare and valuable products.</p>
        </div>
      </div>

      <div class="col-lg-2">
        <div class="">
          <h6 class="footer-heading text-uppercase text-white">GAMES</h6>
          <ul class="list-unstyled footer-link mt-2">
            <li><a href="/">Packs </a></li>
            <li><a href="/">Battles</a></li>
            <li><a href="/">Forge</a></li>
            <li><a href="/">Race</a></li>
            <li><a href="/">Rewards</a></li>
          </ul>
        </div>
      </div>

      <div class="col-lg-2">
        <div class="">
          <h6 class="footer-heading text-uppercase text-white">LEGAL</h6>
          <ul class="list-unstyled footer-link mt-2">
            <li><a href="/">Fairness </a></li>
            <li><a href="/">Privacy Policy</a></li>
            <li><a href="/">Terms of Services</a></li>         
          </ul>
          <h5>support</h5>
         <a href="/">support@packdraw.com</a>
        </div>
      </div>

      <div class="col-lg-3">
        <div class="">
          <h5 class="footer-heading text-uppercase text-white">COMMUNITY</h5>
          <p class="contact-info mt-2">Contact us if need help withanything</p>
          <p class="contact-info">+01 123-456-7890</p>

        </div>
      </div>

    </div>
  </div>

  <div class="text-center mt-5">
    <p class="footer-alt mb-0 f-14">2025 © packone, All Rights Reserved</p>
  </div>
</footer>

)
}
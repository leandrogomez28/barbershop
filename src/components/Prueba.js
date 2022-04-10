import React from 'react'
import "./Prueba.css";
function Prueba () {
  return (
    <>
    <div>
    <h1>The Heroes</h1>
  </div>

  <div class="cards-container">
    <div class="container" id="alex">
      <div class="inner">
        <div class="text-wrapper">
          <h1>
            Alex
          </h1>
          <span> - our artist</span>
          <p>
            this card is an example for an information card and the animation, we can use it as a template for websites or web application.
          </p>
        </div>
      </div>
    </div>
    <div class="container" id="lara">
      <div class="inner">
        <div class="text-wrapper">
          <h1>
            Lara
          </h1>
          <span> - our brain</span>
          <p>
            this card is an example for an information card and the animation, we can use it as a template for websites or web application.
          </p>
        </div>
      </div>
    </div>
    <div class="container" id="jack">
      <div class="inner">
        <div class="text-wrapper">
          <h1>
            Jack
          </h1>
          <span> - our superman</span>
          <p>
            this card is an example for an information card and the animation, we can use it as a template for websites or web application.
          </p>
        </div>
      </div>
    </div>
  </div>
    </>
  )
}

export default Prueba
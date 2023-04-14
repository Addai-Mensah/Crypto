import React from 'react'
import {Helmet} from "react-helmet"

function Coinmarketcap() {
  return (
    <div>
         <>
      <Helmet>
        <script src="https://files.coinmarketcap.com/static/widget/coinMarquee.js" type="text/javascript" />
      </Helmet>
    
      
    </>
    <p id="coinmarketcap-widget-marquee" coins="1,1027,825" currency="USD" theme="light" transparent="false" show-symbol-logo="true"></p>
    </div>
  )
}

export default Coinmarketcap


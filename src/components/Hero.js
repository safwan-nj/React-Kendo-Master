import React from 'react';
import Herotop from './Herotop.js';
import Herocontent from './Herocontent.js';
function Hero (){
        return(
                <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                    <Herotop/>
                    <h2>Section title</h2>
                    <Herocontent/>
                </main>
        )
}
export default Hero;
import React from "react";
import Sidebar from "./Sidebar";
import Hero from "./Hero";
function Content(){
        return  (
                    <div className="container-fluid">
                        <div className="row">
                            <Sidebar/>
                            <Hero/>
                        </div>
                    </div>
                );
}
export default Content;
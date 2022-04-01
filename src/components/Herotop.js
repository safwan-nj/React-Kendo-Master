import React from "react";

function Herotop (){
        return(
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h1 className="h2">Dashboard</h1>
                    <div className="btn-toolbar mb-2 mb-md-0">
                        <div className="btn-group me-2">
                            <button type="button" className="btn btn-sm btn-outline-secondary">
                                <i className="bi bi-share"></i>&nbsp;
                                Share
                            </button>
                            <button type="button" className="btn btn-sm btn-outline-secondary">
                                <i className="bi bi-save"></i>&nbsp;
                                Export
                            </button>
                        </div>
                        <button type="button" className="btn btn-sm btn-outline-secondary dropdown-toggle">
                            <i className="bi bi-calendar"></i>&nbsp;
                            This week
                        </button>
                    </div>
                </div>
        )
}
export default Herotop;
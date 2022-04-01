import React from 'react';

function Sidebar  () {
        return (
                <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
                    <div className="position-sticky pt-3">
                    <ul className="nav flex-column">
                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">
                            <span data-feather="home"></span>
                            <i className="bi bi-house-door"></i>&nbsp;
                            Dashboard
                        </a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">
                            <span data-feather="file"></span>
                            <i className="bi bi-file-earmark"></i>&nbsp;
                            Orders
                        </a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">
                            <span data-feather="shopping-cart"></span>
                            <i className="bi bi-cart2"></i>&nbsp;
                            Products
                        </a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">
                            <span data-feather="users"></span>
                            <i className="bi bi-people"></i>&nbsp;
                            Customers
                        </a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">
                            <span data-feather="bar-chart-2"></span>
                            <i className="bi bi-bar-chart-line"></i>&nbsp;
                            Reports
                        </a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">
                            <span data-feather="layers"></span>
                            <i className="bi bi-layers"></i>&nbsp;
                            Integrations
                        </a>
                        </li>
                    </ul>
            
                    <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                        <span>Saved reports</span>
                        <a className="link-secondary" href="#" aria-label="Add a new report">
                        <i className="bi bi-node-plus"></i>
                        </a>
                    </h6>
                    <ul className="nav flex-column mb-2">
                        <li className="nav-item">
                        <a className="nav-link" href="#">
                            <span data-feather="file-text"></span>
                            <i className="bi bi-file-earmark-text"></i>&nbsp;
                            Current month
                        </a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">
                            <span data-feather="file-text"></span>
                            <i className="bi bi-file-earmark-text"></i>&nbsp;
                            Last quarter
                        </a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">
                            <span data-feather="file-text"></span>
                            <i className="bi bi-file-earmark-text"></i>&nbsp;
                            Social engagement
                        </a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">
                            <span data-feather="file-text"></span>
                            <i className="bi bi-file-earmark-text"></i>&nbsp;
                            Year-end sale
                        </a>
                        </li>
                    </ul>
                    </div>
                </nav>
        );
}
export default Sidebar;
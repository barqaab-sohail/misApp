import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Dropdown from '@/Components/Dropdown';


export default function Header(props) {
	const user= {...props}
	const url = 'https://hrms.barqaab.pk/storage/';
	const picture = url + user.picture;
	console.log(picture);
	const size="2%";
	return (
	<>
		<nav className="navbar  navbar-dark bg-primary  fixed-top">
		  <div className="container-fluid">
		    <div className="row">
			    <div class="col">
			    <button className="navbar-toggler " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
			      <span className="navbar-toggler-icon"></span>
			    </button>
			    </div>
			    <div class="col">
			    <a className="navbar-brand" href="#">Managment Information System</a>
			    </div>
			    <div class="col">
			    <Dropdown>
	                <Dropdown.Trigger>
	                    <span className="inline-flex rounded-md">
	                      <img className="profile-pic" src={picture} width={size}/>
	                        <button
	                            type="button"
	                            className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
	                        >
	                            {user.employee.first_name} {user.employee.last_name}

	                            <svg
	                                className="ml-2 -mr-0.5 h-4 w-4"
	                                xmlns="http://www.w3.org/2000/svg"
	                                viewBox="0 0 20 20"
	                                fill="currentColor"
	                            >
	                                <path
	                                    fillRule="evenodd"
	                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
	                                    clipRule="evenodd"
	                                />
	                            </svg>
	                        </button>
	                    </span>
	                </Dropdown.Trigger>

	                <Dropdown.Content>
	                    <Dropdown.Link href={route('logout')} method="post" as="button">
	                        Log Out
	                    </Dropdown.Link>
	                </Dropdown.Content>
	            </Dropdown>
	            </div>
            </div>
		    <div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
		      <div className="offcanvas-header">
		        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
		        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
		      </div>
		      <div className="offcanvas-body">
		        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
		          <li className="nav-item">
		            <a className="nav-link active" aria-current="page" href="#">Home</a>
		          </li>
		          <li className="nav-item">
		            <a className="nav-link" href="#">Link</a>
		          </li>
		          <li className="nav-item dropdown">
		            <a className="nav-link dropdown-toggle" href="#" id="offcanvasNavbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
		              Dropdown
		            </a>
		            <ul className="dropdown-menu" aria-labelledby="offcanvasNavbarDropdown">
		              <li><a className="dropdown-item" href="#">Action</a></li>
		              <li><a className="dropdown-item" href="#">Another action</a></li>
		              <li>
		                <hr className="dropdown-divider"/>
		              </li>
		              <li><a className="dropdown-item" href="#">Something else here</a></li>
		            </ul>
		          </li>
		        </ul>
		        <form className="d-flex" role="search">
		          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
		          <button className="btn btn-outline-success" type="submit">Search</button>
		        </form>
		      </div>
		    </div>
		  </div>
		</nav>
	</>
	);
}
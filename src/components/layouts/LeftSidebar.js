import React, {Component} from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
} from "react-router-dom";
import ProductIndex from './../../pages/products/Index';
import ProductForm from './../../pages/products/Form';
import NotFound from './../../pages/errors/NotFound';
import SidebarMenu from "./SidebarMenu";

class LeftSidebar extends Component{
    constructor(props) {
        super(props);
        this.toggleDropdown = this.toggleDropdown.bind(this);

        this.state = {
            dropdownOpen: false
        };
    }

    /*:: toggleDropdown: () => void */
    toggleDropdown()  {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }
    render() {
        return (
            <React.Fragment>
                <div className="left-side-menu">
                    <div className="media user-profile mt-2 mb-2">
                        <img src="assets/images/users/avatar-7.jpg" className="avatar-sm rounded-circle mr-2"
                            alt="Shreyu"/>
                        <img src="assets/images/users/avatar-7.jpg" className="avatar-xs rounded-circle mr-2"
                            alt="Shreyu"/>

                        <div className="media-body">
                            <h6 className="pro-user-name mt-0 mb-0">Shreyu N</h6>
                            <span className="pro-user-desc">Administrator</span>
                        </div>
                        <div className="dropdown align-self-center profile-dropdown-menu">
                            <a className="dropdown-toggle mr-0" data-toggle="dropdown" href="#" role="button"
                                aria-haspopup="false"
                                aria-expanded="false">
                                <span data-feather="chevron-down"></span>
                            </a>
                            <div className="dropdown-menu profile-dropdown">
                                <Link to="pages-profile.html" className="dropdown-item notify-item">
                                    <i data-feather="user" className="icon-dual icon-xs mr-2"></i>
                                    <span>My Account</span>
                                </Link>

                                <Link to="#" className="dropdown-item notify-item">
                                    <i data-feather="settings" className="icon-dual icon-xs mr-2"></i>
                                    <span>Settings</span>
                                </Link>

                                <Link to="#" className="dropdown-item notify-item">
                                    <i data-feather="help-circle" className="icon-dual icon-xs mr-2"></i>
                                    <span>Support</span>
                                </Link>

                                <Link to="#" className="dropdown-item notify-item">
                                    <i data-feather="lock" className="icon-dual icon-xs mr-2"></i>
                                    <span>Lock Screen</span>
                                </Link>

                                <div className="dropdown-divider"/>

                                <Link to="#" className="dropdown-item notify-item">
                                    <i data-feather="log-out" className="icon-dual icon-xs mr-2"></i>
                                    <span>Logout</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="sidebar-content">
                        <div id="sidebar-menu" className="slimscroll-menu">
                                <SidebarMenu/>
                        </div>
                        <div className="clearfix"/>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default LeftSidebar;
import React, {Component} from "react";
import {Link} from "react-router-dom";
import 'react-perfect-scrollbar/dist/css/styles.css';

class TopBar extends Component {

    constructor(props) {
        super(props);
        this.toggleDropdown = this.toggleDropdown.bind(this);

        this.state = {
            dropdownOpen: false
        };
    }

    /*:: toggleDropdown: () => void */
    toggleDropdown() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    getRedirectUrl = (item) => {
        return `/notification/${item.id}`;
    };

    render() {
        let notifications = [{
            id: 1,
            text: 'New user registered',
            subText: '1 min ago',
            icon: 'uil uil-user-plus',
            bgColor: 'primary'
        },
            {
                id: 2,
                text: 'Karen Robinson',
                subText: 'Wow ! this admin looks good and awesome design',
                icon: 'uil uil-comment-message',
                bgColor: 'success'
            },
            {
                id: 3,
                text: 'Cristina Pride',
                subText: 'Hi, How are you? What about our next meeting',
                icon: 'uil uil-comment-message',
                bgColor: 'danger'
            }, {
                id: 4,
                text: 'New user registered',
                subText: '1 day ago',
                icon: 'uil uil-user-plus',
                bgColor: 'info'
            },];
        const tag = this.props.tag || "div";
        const notificationContainerStyle = {
            'maxHeight': '230px'
        };

        return (
            <React.Fragment>
                <div className="navbar navbar-expand flex-column flex-md-row navbar-custom">
                    <div className="container-fluid">
                        <a href="/" className="navbar-brand mr-0 mr-md-2 logo">
                        <span className="logo-lg">
                            <img src="assets/images/logo.png" alt="" height="24"/>
                            <span className="d-inline h5 ml-1">Shreyu</span>
                        </span>
                            <span className="logo-sm">
                            <img src="assets/images/logo.png" alt="" height="24"/>
                        </span>
                        </a>

                        <ul className="navbar-nav bd-navbar-nav flex-row list-unstyled menu-left mb-0">
                            <li className="">
                                <button className="button-menu-mobile open-left disable-btn">
                                    <i data-feather="menu" className="menu-icon"></i>
                                    <i data-feather="x" className="close-icon"></i>
                                </button>
                            </li>
                        </ul>

                        <ul className="navbar-nav flex-row ml-auto d-flex list-unstyled topnav-menu float-right mb-0">
                            <li className="d-none d-sm-block">
                                <div className="app-search">
                                    <form>
                                        <div className="input-group">
                                            <input type="text" className="form-control" placeholder="Search..."/>
                                            <span data-feather="search"/>
                                        </div>
                                    </form>
                                </div>
                            </li>

                            <li className="dropdown d-none d-lg-block" data-toggle="tooltip" data-placement="left"
                                title="Change language">
                                <a className="nav-link dropdown-toggle mr-0" data-toggle="dropdown" href="#"
                                    role="button"
                                    aria-haspopup="false" aria-expanded="false">
                                    <i data-feather="globe"></i>
                                </a>
                                <div className="dropdown-menu dropdown-menu-right">
                                    <a href="#" className="dropdown-item notify-item">
                                        <img src="assets/images/flags/germany.jpg" alt="user-image" className="mr-2"
                                            height="12"/> <span
                                        className="align-middle">German</span>
                                    </a>

                                    <a href="#" className="dropdown-item notify-item">
                                        <img src="assets/images/flags/italy.jpg" alt="user-image" className="mr-2"
                                            height="12"/> <span
                                        className="align-middle">Italian</span>
                                    </a>

                                    <a href="#" className="dropdown-item notify-item">
                                        <img src="assets/images/flags/spain.jpg" alt="user-image" className="mr-2"
                                            height="12"/> <span
                                        className="align-middle">Spanish</span>
                                    </a>

                                    <a href="#" className="dropdown-item notify-item">
                                        <img src="assets/images/flags/russia.jpg" alt="user-image" className="mr-2"
                                            height="12"/> <span
                                        className="align-middle">Russian</span>
                                    </a>
                                </div>
                            </li>


                            <li className="dropdown notification-list" data-toggle="tooltip" data-placement="left"
                                title="8 new unread notifications">
                                <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button"
                                    aria-haspopup="false"
                                    aria-expanded="false">
                                    <i data-feather="bell"/>
                                    <span className="noti-icon-badge"/>
                                </a>
                                <div className="dropdown-menu dropdown-menu-right dropdown-lg">
                                    <div className="dropdown-item noti-title border-bottom">
                                        <h5 className="m-0 font-size-16">
                                        <span className="float-right">
                                            <a href="" className="text-dark">
                                                <small>Clear All</small>
                                            </a>
                                        </span>Notification
                                        </h5>
                                    </div>

                                    <div className="slimscroll noti-scroll">

                                        <a href="#"
                                            className="dropdown-item notify-item border-bottom">
                                            <div className="notify-icon bg-primary">
                                                <i className="uil uil-user-plus"/>
                                            </div>
                                            <p className="notify-details">New user registered.<small
                                                className="text-muted">5 hours ago</small>
                                            </p>
                                        </a>

                                        <a href="#"
                                            className="dropdown-item notify-item border-bottom">
                                            <div className="notify-icon">
                                                <img src="assets/images/users/avatar-1.jpg"
                                                    className="img-fluid rounded-circle" alt=""/>
                                            </div>
                                            <p className="notify-details">Karen Robinson</p>
                                            <p className="text-muted mb-0 user-msg">
                                                <small>Wow ! this admin looks good and awesome design</small>
                                            </p>
                                        </a>

                                        <a href="#"
                                            className="dropdown-item notify-item border-bottom">
                                            <div className="notify-icon">
                                                <img src="assets/images/users/avatar-2.jpg"
                                                    className="img-fluid rounded-circle" alt=""/>
                                            </div>
                                            <p className="notify-details">Cristina Pride</p>
                                            <p className="text-muted mb-0 user-msg">
                                                <small>Hi, How are you? What about our next meeting</small>
                                            </p>
                                        </a>

                                        <a href="#"
                                            className="dropdown-item notify-item border-bottom active">
                                            <div className="notify-icon bg-success">
                                                <i className="uil uil-comment-message"/>
                                            </div>
                                            <p className="notify-details">Jaclyn Brunswick commented on Dashboard<small
                                                className="text-muted">1
                                                min
                                                ago</small></p>
                                        </a>

                                        <a href="#"
                                            className="dropdown-item notify-item border-bottom">
                                            <div className="notify-icon bg-danger"><i
                                                className="uil uil-comment-message"></i></div>
                                            <p className="notify-details">Caleb Flakelar commented on Admin<small
                                                className="text-muted">4 days
                                                ago</small></p>
                                        </a>

                                        <a href="#" className="dropdown-item notify-item">
                                            <div className="notify-icon bg-primary">
                                                <i className="uil uil-heart"></i>
                                            </div>
                                            <p className="notify-details">Carlos Crouch liked
                                                <b>Admin</b>
                                                <small className="text-muted">13 days ago</small>
                                            </p>
                                        </a>
                                    </div>
                                    <Link to="#"
                                        className="dropdown-item text-center text-primary notify-item notify-all border-top">
                                        View all
                                        <i className="fi-arrow-right"></i>
                                    </Link>

                                </div>
                            </li>

                            <li className="dropdown notification-list" data-toggle="tooltip" data-placement="left"
                                title="Settings">
                                <Link to="#" className="nav-link right-bar-toggle">
                                    <i data-feather="settings"></i>
                                </Link>
                            </li>

                            <li className="dropdown notification-list align-self-center profile-dropdown">
                                <a className="nav-link dropdown-toggle nav-user mr-0" data-toggle="dropdown" href="#"
                                    role="button"
                                    aria-haspopup="false" aria-expanded="false">
                                    <div className="media user-profile ">
                                        <img src="assets/images/users/avatar-7.jpg" alt="user-image"
                                            className="rounded-circle align-self-center"/>
                                        <div className="media-body text-left">
                                            <h6 className="pro-user-name ml-2 my-0">
                                                <span>Shreyu N</span>
                                                <span
                                                    className="pro-user-desc text-muted d-block mt-1">Administrator </span>
                                            </h6>
                                        </div>
                                        <span data-feather="chevron-down" className="ml-2 align-self-center"/>
                                    </div>
                                </a>
                                <div className="dropdown-menu profile-dropdown-items dropdown-menu-right">
                                    <a to="pages-profile.html" className="dropdown-item notify-item">
                                        <i data-feather="user" className="icon-dual icon-xs mr-2"/>
                                        <span>My Account</span>
                                    </a>

                                    <Link to="#" className="dropdown-item notify-item">
                                        <i data-feather="settings" className="icon-dual icon-xs mr-2"/>
                                        <span>Settings</span>
                                    </Link>

                                    <Link to="#" className="dropdown-item notify-item">
                                        <i data-feather="help-circle" className="icon-dual icon-xs mr-2"/>
                                        <span>Support</span>
                                    </Link>

                                    <Link to="pages-lock-screen.html" className="dropdown-item notify-item">
                                        <i data-feather="lock" className="icon-dual icon-xs mr-2"/>
                                        <span>Lock Screen</span>
                                    </Link>

                                    <div className="dropdown-divider"/>

                                    <Link to="#" className="dropdown-item notify-item">
                                        <i data-feather="log-out" className="icon-dual icon-xs mr-2"/>
                                        <span>Logout</span>
                                    </Link>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default TopBar;
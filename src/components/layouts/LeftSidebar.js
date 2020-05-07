import React,{Component} from "react";
import { ChevronDown } from 'react-feather';

class LeftSidebar extends Component{
    render() {
        return (
          <div>
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
                          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                          <a className="dropdown-toggle mr-0" data-toggle="dropdown" href="#" role="button"
                              aria-haspopup="false"
                              aria-expanded="false">
                              <ChevronDown />
                              <span data-feather="chevron-down"/>
                          </a>
                          <div className="dropdown-menu profile-dropdown">
                              <a href="pages-profile.html" className="dropdown-item notify-item">
                                  <i data-feather="user" className="icon-dual icon-xs mr-2"/>
                                  <span>My Account</span>
                              </a>
                              {/* eslint-disable-next-line no-script-url,jsx-a11y/anchor-is-valid */}
                              <a href="#" onClick={e => e.preventDefault()} className="dropdown-item notify-item">
                                  <i data-feather="settings" className="icon-dual icon-xs mr-2"/>
                                  <span>Settings</span>
                              </a>

                              <a href="#" onClick={e => e.preventDefault()} className="dropdown-item notify-item">
                                  <i data-feather="help-circle" className="icon-dual icon-xs mr-2"></i>
                                  <span>Support</span>
                              </a>

                              <a href="pages-lock-screen.html" className="dropdown-item notify-item">
                                  <i data-feather="lock" className="icon-dual icon-xs mr-2"></i>
                                  <span>Lock Screen</span>
                              </a>

                              <div className="dropdown-divider"></div>

                              <a href="#" onClick={e => e.preventDefault()} className="dropdown-item notify-item">
                                  <i data-feather="log-out" className="icon-dual icon-xs mr-2"></i>
                                  <span>Logout</span>
                              </a>
                          </div>
                      </div>
                  </div>

              </div>
          </div>
        );
    }
}
export default LeftSidebar;
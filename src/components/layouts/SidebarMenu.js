import React, { Component} from "react";
import {Link, Route} from "react-router-dom";

const MenuLink = ({ label , to, activeOnlyWhenExact }) => {
    return (
        <Route path={to} exact={activeOnlyWhenExact} children={({match}) => {
            let active = match ? 'active abc' : '';
            console.log(active);
            return (
                <li className={active}>
                    <Link to={to} >
                        {label}
                    </Link>
                </li>
            );
        }}/>
    );
};

class SidebarMenu extends Component {
    render() {
        return(
            <React.Fragment>
                <ul className="metismenu" id="menu-bar">
                    <li className="menu-title">Navigation</li>

                    <li>
                        <Link to='dashboard.html' >
                            <i data-feather="home"></i>
                            <span className="badge badge-success float-right">1</span>
                            <span> Dashboard </span>
                        </Link>
                    </li>

                    <li>
                        <Link to='javascript: void(0)'>
                            <i data-feather="box"/>
                            <span> Quản lý sản phẩm </span>
                            <span className="menu-arrow"/>
                        </Link>
                        <ul className="nav-second-level" aria-expanded="false">
                            <MenuLink label="Danh sach sản phẩm" to='/product/list' activeOnlyWhenExact={true}/>
                            <MenuLink label="Thêm mới sản phẩm" to='/product/form' activeOnlyWhenExact={false}/>
                        </ul>
                    </li>
                </ul>
            </React.Fragment>
        )
    }
}
export default SidebarMenu;
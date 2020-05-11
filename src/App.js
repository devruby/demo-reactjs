import React from 'react';
import './App.css';

import LeftSidebar from './components/layouts/LeftSidebar';
import TopBar from "./components/layouts/TopBar";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import ProductIndex from "./pages/products/Index";
import ProductForm from "./pages/products/Form";
import NotFound from "./pages/errors/NotFound";


function App() {
    return (
        <React.Fragment>
            <Router>
                <TopBar/>
                <LeftSidebar/>
                <div className="content-page">
                    <div className="content">
                        <div className="container-fluid">
                            <Switch>
                                <Route path="/product/list" exact component={ProductIndex}/>
                                <Route path="/product/form/:id" component={ProductForm}/>
                                <Route path="/product/form" component={ProductForm}/>
                                <Route component={NotFound}/>
                            </Switch>
                        </div>
                    </div>
                </div>
            </Router>
        </React.Fragment>

    );
}

export default App;

import React from 'react';
import Navbar from './navigation/Navbar';
import Content from './Content';
import Breadcrumbs from './navigation/Breadcrumbs';
import Detail from './Detail';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useRouteMatch
} from "react-router-dom";

const RouterContent = () => {

    let match = useRouteMatch();

    return (
        <Router>
            <Switch>
                <Route exact path={`${match.url}`}>
                    <Navbar />
                    <Breadcrumbs categorySearch={false} />
                    <Content />
                </Route>
                <Route path={`${match.url}/:id`}>
                    <Navbar />
                    <Breadcrumbs categorySearch={true} />
                    <Detail />
                </Route>
            </Switch>
        </Router>
    );
}

export default RouterContent;
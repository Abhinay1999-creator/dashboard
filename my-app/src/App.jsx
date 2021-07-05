import React from 'react'
import Navbar from './Navbar'
import { Route, Switch } from 'react-router-dom';
import LessonPage from './LessonPage';

const App = () => {
    return (
        <>
            <Navbar />
            <Switch>
                <Route exact path="/student"  />
                <Route exact path="/lesson" component={LessonPage} />
                <Route exact path="/setttings" />
            </Switch>
        </>
    )
}

export default App;

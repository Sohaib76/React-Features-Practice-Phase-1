import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import MoviesInsert from './MoviesInsert'
import MoviesUpdate from './MoviesUpdate'
import MoviesList from './MoviesList'

import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './Navbar'

function MernStackMovies() {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route path="/movies/list" exact component={MoviesList} />
                <Route path="/movies/create" exact component={MoviesInsert} />
                <Route
                    path="/movies/update/:id"
                    exact
                    component={MoviesUpdate}
                />
            </Switch>
        </Router>
    )
}

export default MernStackMovies
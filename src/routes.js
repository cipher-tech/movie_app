const React = require('react')
const {
  Router,
  Route,
  IndexRoute,
  browserHistory,
  hashHistory
} = require('react-router')
const App = require('components/app/app')
const Movies = require('components/movies/movies.js')
const Movie = require('components/movie/movie.js')

module.exports = (
  <Router history={browserHistory}>
    {/* <Route path="/movie_app" component={App}> */}
      <Route path="/" component={App}>
        <IndexRoute component={Movies} />
        <Route path="movies" component={Movies}>
          <Route path=":id" component={Movie} />
          <Route exact path="movies/:id" component={Movie} />
        </Route>
      </Route>
    {/* </Route> */}
  </Router>
)

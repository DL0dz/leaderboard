import React from 'react'
import { Router, Route, browserHistory } from 'react-router'
import Leaderboard from '../components/Leaderboard/Leaderboard'

export default (
  <Router history={browserHistory}>
    <Route path='/' component={Leaderboard} />
  </Router>
)

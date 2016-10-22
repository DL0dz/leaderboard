import React from 'react'
import leaderboard from './Leaderboard.css'
import User from './User'
import TableHeader from './TableHeader'
import fccHelper from '../../utils/fccHelper'

const Leaderboard = React.createClass({
  getInitialState () {
    return {
      isLoading: true,
      users: [],
      top100: 'recent'
    }
  },
  componentDidMount () {
    fccHelper.getUsers(this.state.top100)
      .then(users => {
        this.setState({
          isLoading: false,
          users
        })
      })
  },
  handleGetUsers (e) {
    e.preventDefault()
    const top100 = e.target.dataset.top100

    if (top100 !== 'recent' && top100 !== 'alltime') return
    fccHelper.getUsers(top100)
      .then(users => {
        this.setState({
          isLoading: false,
          users,
          top100
        })
      })
  },
  render () {
    return (
      <table className={leaderboard} >
        <TableHeader onGetUsers={this.handleGetUsers} top100={this.state.top100} />
        <tbody>
          {
            this.state.users.map((user, idx) => {
              return (
                <User
                  {...user}
                  rank={idx + 1}
                  key={idx + 1} />
              )
            })
          }
        </tbody>
      </table>
    )
  }
})

export default Leaderboard

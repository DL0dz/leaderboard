import React from 'react'
import { avatar } from './Leaderboard.css'

export default props =>
  <tr>
    <td>{props.rank}</td>
    <td>
      <img className={avatar} src={props.img} alt={`${props.username} avatar`} />
      <a href={`https://www.freecodecamp.com/${props.username}`} target='_blank' >{props.username}</a>
    </td>
    <td>{props.recent}</td>
    <td>{props.alltime}</td>
  </tr>

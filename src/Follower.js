import React from 'react'

const Follower = ({data}) => {
  const {id, login: name, avatar_url: avatar, html_url: url} = data;
  return (
    <article id={id} className="card">
      <img src={avatar} alt={name} />
      <h4>{name}</h4>
      <a href={url} target="__blank" className="btn">View Profile</a>
    </article>
  )
}

export default Follower
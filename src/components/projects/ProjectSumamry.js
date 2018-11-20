import React from 'react'

export default function ProjectSumamry({project}) {
  return (
    <div className="card z-depth-1 project-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{project.title}</span>
        <p>{project.content}</p>
        <p className="grey-text">19th November, 2 am</p>
      </div>
    </div>
  )
}

import React from 'react'
import ProjectSummary from './ProjectSummary'
import { Link } from 'react-router-dom'

export default function ProjectList({projects}) {
  return (
    <div>
      <div className="project-list section">
        { projects && projects.map(project => {
          return (
            <Link to={'/projects/' + project.id}>
              <ProjectSummary  key={project.id} project={project}/>          
            </Link>
          )
        })}
      </div>
    </div>
  )
}

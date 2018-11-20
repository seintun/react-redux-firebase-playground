import React from 'react'
import ProjectSummary from './ProjectSummary'

export default function ProjectList({projects}) {
  return (
    <div>
      <div className="project-list section">
        { projects && projects.map(project =>
            <ProjectSummary  key={project.id} project={project}/>
        )}
      </div>
    </div>
  )
}

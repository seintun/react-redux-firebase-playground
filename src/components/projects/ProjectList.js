import React from 'react'
import ProjectSummary from './ProjectSumamry'

export default function ProjectList() {
  return (
    <div>
      <div className="project-list section">
        <ProjectSummary />
        <ProjectSummary />
        <ProjectSummary />
      </div>
    </div>
  )
}

import React from 'react'
import ProjectCard from './ProjectCard'
import { projects } from './data'
import '../css/projectpage.css'
function Projects() {
  return (
    <div className="projectpage">
      <h2>Projects (Prototype Version)</h2>
      <div className="projectlist">
        {
          projects.map((data) => {
            return (
              <>

                <ProjectCard
                  primage={data.image}
                  prname={data.name}
                  prlink={data.link}
                  prdetail={data.detail}
                />

              </>
            )
          })
        }
      </div>
    </div>
  )
}

export default Projects

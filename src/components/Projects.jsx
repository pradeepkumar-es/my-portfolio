import React from 'react'
import ProjectCard from './ProjectCard'
import { projects } from './data'
import '../css/projectpage.css'
function Projects() {
  return (
    <div className="projectpage">
      <h1>My Projects (Prototype Version)</h1>
      <p>*UI/UX and Features of all mini projects of this section will be added & updated time to time.</p>
      <div className="projectlist">
        {
          projects.map((data) => {
            return (
              <>

                <ProjectCard
                  primage={data.image}
                  prtech ={data.tech}
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

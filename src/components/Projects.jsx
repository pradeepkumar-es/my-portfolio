import React from 'react'
import ProjectCard from './ProjectCard'
import { projects } from './data'
import '../css/projectpage.css'
function Projects() {
  //storing the input value in the state
  const [searchTerm, setSearchTerm] = React.useState('');
  function handleSearch(event) {
    setSearchTerm(event.target.value)
  }
  return (
    <div className="projectpage">
      <h1>My Projects (Prototype Version)</h1>
      <p>*UI/UX and Features of all mini projects of this section will be added & updated time to time.</p>
      <input
        type="text"
        placeholder='Search Project.....'
        name='search'
        // value={searchTerm}
        onChange={handleSearch}
      />
      <div className="projectlist">
        {
          // Filter
          projects.filter((item) => {
            if (searchTerm == '') {
              return item;
            } else if (item.name.toLowerCase().includes(searchTerm.toLowerCase())) {
              return item;
            }
          }
          ) /*mapping to filtered array */
          .map((data) => {
            return (
              <>
                <ProjectCard
                  primage={data.image}
                  prtech={data.tech}
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

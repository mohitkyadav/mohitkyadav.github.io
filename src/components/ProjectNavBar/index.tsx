import React, { useState } from 'react'
import Project from '../../shared/entities/Project'


function getProjectList() {
  const DummyProject1 = new Project("test1", "test", "test", "test", "test");
  const DummyProject2 = new Project("test2", "test", "test", "test", "test");
  const DummyProject3 = new Project("test3", "test", "test", "test", "test");
  const ProjectList = [DummyProject1, DummyProject2, DummyProject3]

  return ProjectList;
}

const ProjectNavBar: React.FC = () => {
  const [projectsToBeDisplayed, setProjectsToBeDisplayed] = useState<Project[]| null>(getProjectList())
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm">
          {projectsToBeDisplayed?.map((project) => {
            return(
              <div>
                {project.projectID}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  )
}

export default ProjectNavBar

import React from 'react'
import LeftPanel from '../../components/LeftPanel'
import ProjectDescriptionSection from '../../components/ProjectDescription'
import ProjectNavBar from '../../components/ProjectNavBar/index.tsx'


const ResumePage = () => (
  <div className="resume-page">
    <LeftPanel />
    <ProjectDescriptionSection />
    <ProjectNavBar />
  </div>
)

export default ResumePage

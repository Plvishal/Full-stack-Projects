import { projectData } from '@/utils/projectData';
import React from 'react';

function ProjectById({ params }) {
  const data = projectData.find((d) => d.id === params.projectid);
  console.log(data);
  return <div>{data.title}</div>;
}

export default ProjectById;

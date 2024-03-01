import React from 'react';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';
import { BlogCard, Img, TitleContent, HeaderThree, Hr } from './ProjectsStyles';

const Projects = () => (
  <Section id="projects">
    <SectionDivider />
    <SectionTitle main align="center">A look back:</SectionTitle>
    <div>
      {projects.map((project, index) => (
        <BlogCard key={index}>
          <Img src={project.image} alt={project.title} />
          <TitleContent>
            <HeaderThree>{project.title}</HeaderThree>
            <Hr />
          </TitleContent>
        </BlogCard>
      ))}
    </div>
  </Section>
);

export default Projects;

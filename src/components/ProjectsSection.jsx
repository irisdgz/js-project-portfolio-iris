import React from 'react';
import styled from 'styled-components';
import { Github, Globe } from 'lucide-react'; 

const Section = styled.section`
  padding: 80px 20px;
  background: #fdfdfd;
`;
const Title = styled.h2`
  text-align: center;
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 60px;
`;
const ProjectContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 80px;
`;
const Article = styled.article`
  display: flex;
  gap: 40px;
  align-items: center;

  &:nth-child(even) {
    flex-direction: row-reverse;
  }

  @media (max-width: 768px) {
    flex-direction: column !important;
  }
`;
const Image = styled.img`
  width: 100%;
  max-width: 400px;
  box-shadow: 15px 15px 0px 0px #eee;
`;
const Content = styled.div`
  flex: 1;
`;
const Tag = styled.span`
  background: #eee;
  padding: 4px 8px;
  font-size: 0.8rem;
  margin-right: 5px;
  font-weight: bold;
  text-transform: uppercase;
`;
const Button = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: #f2f2f2;
  color: #000;
  padding: 10px 20px;
  border-radius: 30px;
  font-weight: 600;
  margin-top: 20px;
  margin-right: 10px;

  &:hover {
    background: #000;
    color: #fff;
  }
`;

export default function ProjectsSection({ list }) {
  return (
    <Section>
      <Title>Featured Projects</Title>
      <ProjectContainer>
        {list.map(project => (
          <Article key={project.id}>
            
            {/* ACCESSIBLE ALT TEXT */}
            <Image 
              src={project.image} 
              alt={`Screenshot of ${project.title}`} // accessibility
            />

            <Content>
              <h3 style={{ fontSize: '2rem', marginBottom: '10px' }}>
                {project.title}
              </h3>

              <p style={{ marginBottom: '10px' }}>
                {project.description}
              </p>

              <div style={{ marginBottom: '20px' }}>
                {project.tags.map(tag => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>

              {/* ARIA LABELS FOR ICON BUTTONS */}
              <Button 
                href={project.github} 
                aria-label={`View the source code for ${project.title} on GitHub`}
              >
                <Github size={16} /> Code
              </Button>

              <Button 
                href={project.netlify}
                aria-label={`Open thelive demo for ${project.title}`}
              >
                <Globe size={16} /> Live
              </Button>

            </Content>
          </Article>
        ))}
      </ProjectContainer>
    </Section>
  );
}

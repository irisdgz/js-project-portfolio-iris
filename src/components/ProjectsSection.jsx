import React from 'react';            // React is needed to define components//
import styled from 'styled-components';
import { GithubIcon, Globe } from 'lucide-react';

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
  /* Flip every second item */
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
  &:hover { background: #000; color: #fff; }
`;

export default function ProjectsSection({ list }) {   // The Input "list" is the array of projects from portfolioData.js//
  return (
    <Section>
      <Title>Featured Projects</Title>
      <ProjectContainer>
        {list.map(project => (          //Assemblying each project, the loop goes through the "list" array//
          <Article key={project.id}>    {/* The Component: <Article> is the styled container (the white box) that holds the project. key={project.id}: This is mandatory in React lists. 
                                            React needs a unique ID for every item so it can track them if the list changes*/}
            <Image src={project.image} alt={project.title} /> {/* // The Curly Braces { }: This is how we switch from HTML to JavaScript.*/}
            <Content>
              <h3 style={{fontSize: '2rem', marginBottom: '10px'}}>{project.title}</h3>
              <p style={{marginBottom: '10px'}}>{project.description}</p>
              <div style={{marginBottom: '20px'}}>
                 {project.tags.map(tag => <Tag key={tag}>{tag}</Tag>)} {/* Each project has its own list of tags (e.g., ["HTML", "CSS"], run a mini-loop here to turn those strings into small grey <Tag> buttons*/}
              </div>
              <Button href={project.github}><Github size={16}/> Code</Button> {/* The Buttons: Live and Code buttons with icons from lucide-react*/}
              <Button href={project.netlify}><Globe size={16}/> Live</Button>
            </Content>
          </Article>
        ))}
      </ProjectContainer>
    </Section>
  );
}


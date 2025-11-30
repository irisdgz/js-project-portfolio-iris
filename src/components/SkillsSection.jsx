import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  background: #fff;
  color: #000;
  padding: 80px 20px;
  text-align: center;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  max-width: 800px;
  margin: 0 auto;
  gap: 40px;
`;

const SkillCol = styled.div`
  text-align: center;
`;

const SkillTitle = styled.h3`
  color: #aaa;
  text-transform: uppercase;
  font-size: 1rem;
  margin-bottom: 20px;
`;

const SectionTitle = styled.h2`
  font-size: 3rem;
  margin-bottom: 60px;
`;

const SkillText = styled.p`
  line-height: 1.8;
`;

export default function SkillsSection({ categories }) {
  return (
    <Section>
      <SectionTitle>Skills</SectionTitle>

      <Grid>
        {categories.map((cat, index) => (
          <SkillCol key={index}>
            <SkillTitle>{cat.title}</SkillTitle>

            {cat.skills.map(skill => (
              <SkillText key={skill}>{skill}</SkillText>
            ))}
          </SkillCol>
        ))}
      </Grid>
    </Section>
  );
}

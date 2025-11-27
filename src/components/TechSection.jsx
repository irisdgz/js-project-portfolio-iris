import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  background-color: #000;
  color: #fff;
  padding: 80px 20px; /* Increased padding to match other sections */
  text-align: center; /* Centers everything */
`;

const Title = styled.h2`
  font-size: 3rem; /* Increased size to match "Featured Projects" */
  font-weight: 800; /* Extra Bold */
  margin-bottom: 40px; /* More space below the title */
  color: #fff;
`;

const TechText = styled.p`
  font-size: 1.2rem;
  color: #fff;
  line-height: 1.8;
  max-width: 800px;
  margin: 0 auto; /* Centers the text block */
`;

export default function TechSection({ tech }) {
  return (
    <Section>
      <Title>Tech</Title>
      <TechText>
        {tech.join(" • ")}
      </TechText>
    </Section>
  );
}
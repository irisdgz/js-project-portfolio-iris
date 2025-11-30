import React from 'react';
import styled from 'styled-components';

const Section = styled.header`
  padding: 100px 20px;
  text-align: center;
  background: white;
`;

const SmallHeading = styled.p`
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 3rem;
  font-weight: 700;
  color: #555;
  margin-bottom: 15px;
`;

const Name = styled.h1`
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 30px;
  color: #000;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const ProfileImg = styled.img`
  width: 280px;
  height: 280px;
  border-radius: 50%;
  object-fit: cover;
  margin: 0 auto 30px;
`;

// This styles the "intro" (Bold text)
const MainIntro = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  max-width: 600px;
  margin: 0 auto 20px;
  line-height: 1.4;
`;

// This styles the "subIntro" (Lighter text)
const SubText = styled.p`
  font-size: 1.1rem;
  color: #666;
  max-width: 500px;
  margin: 0 auto;
  line-height: 1.6;
`;

export default function HeroSection({ user }) {
  return (
    <Section>
      <SmallHeading>Nihao, I'm</SmallHeading>
      
      <Name>{user.name}</Name>
      
      <ProfileImg src={user.profileImage} alt={user.name} />
      
      {/* 1. The Bold Intro */}
      <MainIntro>{user.intro}</MainIntro>
      
      {/* 2. The Lighter Sub-Intro */}
      <SubText>{user.subIntro}</SubText>
    </Section>
  );
}
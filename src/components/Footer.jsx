import React from 'react';
import styled from 'styled-components';
import { Linkedin, Github } from "lucide-react";

const FooterWrap = styled.footer`
  background: #000;
  color: #fff;
  padding: 80px 20px;
  text-align: center;
`;

const FooterTitle = styled.h2`
  font-size: 3rem;
  margin-bottom: 40px;
`;

const ProfilePic = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-bottom: 20px;
`;

const Socials = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  margin-top: 30px;
`;

const SocialLink = styled.a`
  color: #fff;
  transition: opacity 0.2s ease;

  }
`;

export default function Footer({ user }) {
  return (
    <FooterWrap>
      
      <FooterTitle>Let's Talk</FooterTitle>

      <ProfilePic 
        src={user.profileImage} 
        alt={`${user.name}'s profile photo`}
      /> 

      <h3>{user.name}</h3>
      <p>{user.phone}</p>
      <p>{user.email}</p>

      <Socials>
        <SocialLink href={user.socials.linkedin} aria-label="LinkedIn profile">
          <Linkedin />
        </SocialLink>

        <SocialLink href={user.socials.github} aria-label="GitHub profile">
          <Github />
        </SocialLink>
      </Socials>

    </FooterWrap>
  );
}

import React from 'react';
import styled from 'styled-components';
import { Linkedin, Github } from "lucide-react";

const FooterWrap = styled.footer`
  background: #000;
  color: #fff;
  padding: 80px 20px;
  text-align: center;
`;

const ProfilePic = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-bottom: 20px;
`;

export default function Footer({ user }) {
  return (
    <FooterWrap>
      <h2 style={{fontSize: '3rem', marginBottom: '40px'}}>Let's Talk</h2>
      <ProfilePic src={user.profileImage} 
                  alt={`${user.name}'s profile photo`}/> 
      <h3>{user.name}</h3>
      <p>{user.phone}</p>
      <p>{user.email}</p>

      <div style={{display: 'flex', gap: '20px', justifyContent: 'center', marginTop: '30px'}}>
        <a href={user.socials.linkedin} style={{color: 'white'}}>
          <Linkedin />
        </a>
        <a href={user.socials.github} style={{color: 'white'}}>
          <Github />
        </a>
      </div>
    </FooterWrap>
  );
}

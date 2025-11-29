import React from 'react';
import styled from 'styled-components';
import { SquareArrowOutUpRight } from 'lucide-react'; 

const Section = styled.section`
  padding: 100px 20px;
  background-color: #000;
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 60px;
  color: #fff;
`;

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 60px;
`;

const ArticleCard = styled.article`
  display: flex;
  gap: 30px;
  align-items: flex-start;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ImageContainer = styled.div`
  flex: 0 0 300px;
  
  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    box-shadow: 10px 10px 0px 0px #eee; 
  }

  @media (max-width: 768px) {
    flex: 1;
    width: 100%;
    img { height: 250px; }
  }
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const DateText = styled.span`
  color: #fff;
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 10px;
  display: block;
`;

const Title = styled.h3`
  color: #fff;
  font-size: 1.5rem;
  font-weight: 800;
  margin-bottom: 10px;
  line-height: 1.3;
`;

const Description = styled.p`
  font-size: 1.1rem;
  color: #fff;
  margin-bottom: 20px;
  line-height: 1.6;
`;

const ReadButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background-color: #fff;
  color: #000;
  padding: 10px 24px;
  border-radius: 30px;
  font-weight: 600;
  font-size: 0.9rem;
  width: fit-content;
  
  &:hover {
    background-color: #333;
    transform: translateY(-2px);
    transition: 0.2s;
  }
`;

export default function ArticlesSection({ articles }) {
  if (!articles || articles.length === 0) return null;

  return (
    <Section>
      <SectionTitle>My Words</SectionTitle>
      <Container>
        {articles.map((article) => (
          <ArticleCard key={article.id}>
            <ImageContainer>
              <img src={article.image} alt={article.title} />
            </ImageContainer>
            <Content>
              <DateText>{article.date}</DateText>
              <Title>{article.title}</Title>
              <Description>{article.description}</Description>
              <ReadButton href={article.link} target="_blank" rel="noopener noreferrer">
                Read Article <SquareArrowOutUpRight size={16} />
              </ReadButton>
            </Content>
          </ArticleCard>
        ))}
      </Container>
    </Section>
  );
}
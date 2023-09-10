import { styled } from 'styled-components';

export const DateStyled = styled.div`
  font-size: ${({ theme: { fontSize } }) => fontSize.title}px;
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.semiBold};
`;

export const MonthStyled = styled.div`
  font-size: ${({ theme: { fontSize } }) => fontSize.subTitle}px;
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.medium};
`;

export const YearStyled = styled.div`
  font-size: ${({ theme: { fontSize } }) => fontSize.text}px;
`;

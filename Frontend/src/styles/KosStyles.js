import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
`;

export const Heading = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

export const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const KosItem = styled.div`
  width: 300px;
  border: 1px solid #ddd;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 10px;
  background-color: white;
`;

export const KosImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

export const KosDetails = styled.div`
  padding: 15px;
`;

export const KosName = styled.h3`
  font-size: 20px;
  margin: 0 0 10px;
`;

export const KosLocation = styled.p`
  font-size: 16px;
  color: #555;
  margin: 0 0 10px;
`;

export const KosPrice = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin: 0 0 10px;
`;

export const KosFacilities = styled.p`
  font-size: 14px;
  color: #777;
  margin: 0 0 10px;
`;

export const KosType = styled.span`
  display: inline-block;
  padding: 5px 10px;
  border-radius: 20px;
  background-color: #007bff;
  color: #fff;
  font-size: 14px;
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const PageNumber = styled.button`
  margin: 0 5px;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  background-color: ${props => (props.active ? '#ff6600' : '#ddd')};
  color: ${props => (props.active ? '#fff' : '#333')};
  cursor: pointer;

  &:hover {
    background-color: ${props => (props.active ? '#ff4500' : '#ccc')};
  }
`;

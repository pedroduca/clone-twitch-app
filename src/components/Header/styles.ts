import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding-top: 14px;
  padding-right: 14px;
`;

export const Avatar = styled.TouchableOpacity`
  background: ${colors.gray};

  width: 32px;
  height: 32px;
  border-radius: 16px;
`;

export const Online = styled.View`
  width: 10px;
  height: 10px;
  border: 2px solid ${colors.primary};
  border-radius: 5px;
  background: ${colors.green};

  position: absolute;
  bottom: 0;
  right: 0;
`; 

export const RightSide = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Button = styled.TouchableOpacity`
  margin-left: 20px ;
`;

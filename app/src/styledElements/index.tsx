import { Image, View } from 'react-native';
import { Text } from 'react-native-elements';
import styled from 'styled-components';

export const StyledView = styled(View)`
  padding: 8px;
`;

export const StyledImage = styled(Image)`
  align-self: center;
  height: 45%;
  width: 100%;
`;

export const StyledSource = styled(Text)`
  font-weight: bold;
  padding-top: 8px;
  padding-bottom: 8px;
`;

export const StyledTitle = styled(Text)`
  padding-bottom: 8px;
  text-align: justify;
`;

export const StyledNewsItemSubheader = styled(Text)`
  text-align: justify;
  padding-bottom: 8px;
  margin-right: 8px;
  margin-left: 8px;
`;

// export const NewsItemView = styled(View)`
//   flex: 1px;
//   flex-direction: row;
//   border-top-color: grey;
//   border-top-width: 1px;
//   margin-right: 8px;
// `;

export const NewsItemImage = styled(Image)`
  height: 80px;
  width: 80px;
  margin: 8px;
  align-self: center;
`;

export const NewsSubheaderView = styled(View)`
  width: 0;
  flex-grow: 1;
  flex: 1;
`;

export const Subheader = styled(Text)`
  text-align: justify;
  margin-top: 8px;
  font-size: 16px;
`;

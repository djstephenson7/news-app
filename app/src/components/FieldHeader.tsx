import React, { FunctionComponent } from 'react';
import { Text } from 'react-native-elements';

export interface FieldHeaderProps {
  text: string;
  required: boolean;
}

const FieldHeader: FunctionComponent<FieldHeaderProps> = ({
  text,
  required,
}) => {
  return (
    <Text>
      {text}
      {required && <Text style={{ color: 'red' }}> *</Text>}
    </Text>
  );
};

export default FieldHeader;

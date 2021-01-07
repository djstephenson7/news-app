import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

const CustomInput = (props) => {
  const {
    field: { name, onBlur, onChange, value },
    form: { errors, touched, setFieldTouched },
    validationConfirmation,
    ...inputProps
  } = props;

  const hasError = errors[name] && touched[name];
  const validated = !errors[name] && touched[name];
  const validationMessage = (
    <Text style={styles.validationText}>
      {validated && validationConfirmation}
    </Text>
  );
  const errorMessage = (
    <Text style={styles.errorText}>{hasError && errors[name]}</Text>
  );

  const renderMessage = () => {
    return validated ? validationMessage : errorMessage;
  };

  return (
    <View style={{ margin: 8 }}>
      <TextInput
        style={[
          styles.textInput,
          hasError && styles.errorInput,
          validated && styles.validatedInput,
        ]}
        value={value}
        onChangeText={(text) => onChange(name)(text)}
        onBlur={() => {
          setFieldTouched(name);
          onBlur(name);
        }}
        {...inputProps}
      />
      {renderMessage()}
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    height: 40,
    padding: 8,
    marginBottom: 8,
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 8,
  },
  errorText: {
    marginBottom: 8,
    color: 'red',
  },
  validationText: {
    marginTop: 8,
    marginLeft: 8,
    color: 'green',
  },
  errorInput: {
    borderColor: 'red',
    borderWidth: 1,
  },
  validatedInput: {
    borderColor: 'green',
    borderWidth: 1,
    marginBottom: 8,
  },
});

export default CustomInput;

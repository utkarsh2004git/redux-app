import React, { useContext } from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import FormContext from './Context/FormContext';
import { router } from 'expo-router';

const Form = () => {
  const { formData, setFormData } = useContext(FormContext);

  const handleInputChange = (field: string, value: string) => {
    if (setFormData) {
      setFormData((prevData) => ({
        ...prevData,
        [field]: value,
      }));
    }
  };

  // Function to check if all fields have values
  const isFormValid = formData?.name && formData?.age && formData?.city;

  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <Text style={styles.label}>Name:</Text>
        <TextInput
          style={styles.input}
          value={formData?.name || ''}
          onChangeText={(text) => handleInputChange('name', text)}
          placeholder="Enter your name"
        />

        <Text style={styles.label}>Age:</Text>
        <TextInput
          style={styles.input}
          value={formData?.age || ''}
          onChangeText={(text) => handleInputChange('age', text)}
          placeholder="Enter your age"
        />

        <Text style={styles.label}>City:</Text>
        <TextInput
          style={styles.input}
          value={formData?.city || ''}
          onChangeText={(text) => handleInputChange('city', text)}
          placeholder="Enter your city"
        />

        <Button
          title="Submit"
          onPress={() => router.push('/formout')}
          disabled={!isFormValid}
        />
      </View>
    </View>
  );
};

export default Form;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    padding: 20,
    flex: 1,
    width: '55%',
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
});

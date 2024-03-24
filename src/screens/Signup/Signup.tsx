import {
  ActivityIndicator,
  Button,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './styles';
import { useSignup } from './Hooks';

const Signup = () => {
  const {
    name,
    email,
    password,
    confirmPassword,
    errors,
    isLoading,
    handleNameChange,
    handleConfirmPasswordChange,
    handleEmailChange,
    handlePasswordChange,
    handleSubmit,
  } = useSignup();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.loadingContainer}>
          <ActivityIndicator animating={isLoading} size="large" />
        </View>
        <Text style={styles.heading}>Sign Up</Text>
        <TextInput
          placeholder="Enter name"
          value={name}
          onChangeText={handleNameChange}
          style={styles.inputField}
        />
        {errors.name ? <Text style={styles.error}>{errors.name}</Text> : null}
        <TextInput
          placeholder="Enter email"
          value={email}
          onChangeText={handleEmailChange}
          style={styles.inputField}
        />
        {errors.email ? <Text style={styles.error}>{errors.email}</Text> : null}
        <TextInput
          value={password}
          onChangeText={handlePasswordChange}
          placeholder="Enter password"
          style={styles.inputField}
        />
        {errors.password ? (
          <Text style={styles.error}>{errors.password}</Text>
        ) : null}
        <TextInput
          value={confirmPassword}
          onChangeText={handleConfirmPasswordChange}
          placeholder="Confirm Password"
          style={styles.inputField}
        />
        {errors.confirmPassword ? (
          <Text style={styles.error}>{errors.confirmPassword}</Text>
        ) : null}
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.btnText}>Signup</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Signup;

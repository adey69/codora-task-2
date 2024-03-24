import { useState } from 'react';
import Snackbar from 'react-native-snackbar';
import { registerUser } from '../../../api';

const INITIAL_ERRORS = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
};

export default () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState(INITIAL_ERRORS);
  const [isLoading, setIsLoading] = useState(false);

  const handleNameChange = (text: string) => {
    setName(text);
    setErrors(prev => ({ ...prev, name: '' }));
  };
  const handleEmailChange = (text: string) => {
    setEmail(text);
    setErrors(prev => ({ ...prev, email: '' }));
  };
  const handlePasswordChange = (text: string) => {
    setPassword(text);
    setErrors(prev => ({ ...prev, password: '' }));
  };
  const handleConfirmPasswordChange = (text: string) => {
    setConfirmPassword(text);
    setErrors(prev => ({ ...prev, confirmPassword: '' }));
  };

  const validateForm = () => {
    let isValid = true;
    if (!name) {
      isValid = false;
      setErrors(prev => ({ ...prev, name: 'Name is required.' }));
    }

    if (!email) {
      isValid = false;
      setErrors(prev => ({ ...prev, email: 'Email is required.' }));
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      isValid = false;
      setErrors(prev => ({ ...prev, email: 'Email is invalid.' }));
    }

    if (!password) {
      isValid = false;
      setErrors(prev => ({ ...prev, password: 'Password is invalid.' }));
    } else if (password.length < 6) {
      isValid = false;
      setErrors(prev => ({
        ...prev,
        password: 'Password must be at least 6 characters.',
      }));
    }

    if (!confirmPassword) {
      isValid = false;
      setErrors(prev => ({
        ...prev,
        confirmPassword: 'Password confirmation is invalid.',
      }));
    } else if (confirmPassword !== password) {
      isValid = false;
      setErrors(prev => ({
        ...prev,
        confirmPassword: 'Password do not match.',
      }));
    }

    return isValid;
  };

  const handleSubmit = async () => {
    const isValid = validateForm();
    if (isValid) {
      setIsLoading(true);
      const resMessage = await registerUser({
        name,
        email,
        password,
        confirmPassword,
      });
      setIsLoading(false);
      if (resMessage) {
        Snackbar.show({
          text: resMessage,
          duration: Snackbar.LENGTH_LONG,
        });
      }
    }
  };

  return {
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
  };
};

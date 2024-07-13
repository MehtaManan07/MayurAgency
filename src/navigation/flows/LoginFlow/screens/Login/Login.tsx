import { BaseButton, ScreenFrame, StyledText, TextInput } from '@components';
import { useLoginUser } from '@hooks';

import { useCallback, useState } from 'react';
import { View } from 'react-native';

import styles from './styles';
import type { Props } from './types';

const Login = ({ navigation }: Props) => {
  const { mutateAsync, isPending } = useLoginUser({
    onSuccess: () => navigation.navigate('FUE'),
  });
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const changeFormData = (key: string, value: string) => {
    setFormData({ ...formData, [key]: value });
  };
  const onContinue = useCallback(async () => {
    await mutateAsync(formData);
  }, [formData, mutateAsync]);
  return (
    <ScreenFrame>
      <View style={styles.wrapper}>
        <View style={styles.input}>
          <StyledText>Username</StyledText>
          <TextInput
            onChangeText={(text) => changeFormData('username', text)}
          />
        </View>
        <View style={styles.input}>
          <StyledText>Password</StyledText>
          <TextInput
            onChangeText={(text) => changeFormData('password', text)}
          />
        </View>
      </View>
      <View style={styles.footer}>
        <BaseButton
          isLoading={isPending}
          label="Login"
          isDisabled={
            isPending || formData.password === '' || formData.username === ''
          }
          onPress={onContinue}
        />
      </View>
    </ScreenFrame>
  );
};

export default Login;

import { BaseButton, ScreenFrame } from '@components';
import { Dimensions, View } from 'react-native';
import styles from './styles';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { dimensions } from '@foundation';
import FastImage from 'react-native-fast-image';
import type { Props } from './types';

const screenWidth = Dimensions.get('screen').width;
const FUEScreen = ({ navigation }: Props) => {
  const { top } = useSafeAreaInsets();
  const wrapperStyles = {
    paddingTop: Math.max(top, dimensions[20]),
  };

  const onContinue = () => {
    navigation.navigate('Login');
  };

  return (
    <ScreenFrame>
      <View style={[styles.wrapper, wrapperStyles]}>
        <FastImage
          resizeMode="contain"
          source={require('@assets/common/logo-color.png')}
          style={{
            width: screenWidth - 2 * 60,
            aspectRatio: 1,
          }}
        />
      </View>
      <View style={styles.footer}>
        <BaseButton label="Get Started" onPress={onContinue} />
      </View>
    </ScreenFrame>
  );
};

export default FUEScreen;

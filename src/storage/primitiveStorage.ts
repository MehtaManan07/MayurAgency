import { MMKV } from 'react-native-mmkv';
import config from '../config';

const primitiveStorage = new MMKV({
  id: 'crafto-storage',
  encryptionKey: config.storageEncryptionKey,
});

export default primitiveStorage;

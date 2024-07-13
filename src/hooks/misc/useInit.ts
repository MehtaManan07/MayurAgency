import { useQueryClient } from '@providers';
import { QueryKeyGenerator } from '@utils';
import { StorageKeys, primitiveStorage } from '@storage';

import { useCallback, useEffect, useReducer } from 'react';

import { AuthData } from '../auth/useAuth';

const useInit = () => {
  const [isCriticalInitCompleted, completeCriticalInit] = useReducer(
    () => true,
    false
  );
  const client = useQueryClient();

  const setAuthToken = useCallback(async () => {
    const token = primitiveStorage.getString(StorageKeys.AuthToken);
    if (token) {
      client.setQueryData<AuthData>(
        QueryKeyGenerator.Auth(),
        (prev?: AuthData) => {
          return { ...prev, token };
        }
      );
    }
  }, [client]);

  useEffect(() => {
    setAuthToken().then(() => completeCriticalInit());
  }, [setAuthToken]);

  return isCriticalInitCompleted;
};

export default useInit;

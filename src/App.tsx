import { toastConfig } from '@components';
import { Navigator, Routes } from '@navigation';
import { QueryProvider } from '@providers';
import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';

const App = (): React.JSX.Element => {
  return (
    <QueryProvider>
      <SafeAreaProvider>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <Navigator>
            <Routes />
          </Navigator>
          <Toast config={toastConfig} />
        </GestureHandlerRootView>
      </SafeAreaProvider>
    </QueryProvider>
  );
};

export default App;

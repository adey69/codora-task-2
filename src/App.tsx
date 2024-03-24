import React from 'react';
import { SafeAreaView } from 'react-native';

import { Signup } from './screens';

function App(): React.JSX.Element {
  const backgroundStyle = {
    flex: 1,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <Signup />
    </SafeAreaView>
  );
}

export default App;

import * as React from 'react';

import { Button, StyleSheet, View } from 'react-native';
import { UnicornView, Commands } from 'react-native-unicorn';

function getRandomColor() {
  return [Math.random(), Math.random(), Math.random()]
    .map((val) =>
      Math.round(val * 255)
        .toString(16)
        .padStart(2, '0')
    )
    .join('')
    .padStart(7, '#');
}

export default function App() {
  const ref = React.useRef(UnicornView);
  return (
    <View style={styles.container}>
      <UnicornView ref={ref} color="#339022" style={styles.box} />
      <Button
        title="Change color"
        onPress={() =>
          Commands.changeBackgroundColor(ref.current, getRandomColor())
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    marginTop: 100,
    width: 200,
    height: 200,
    marginVertical: 20,
  },
});

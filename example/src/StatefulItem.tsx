import * as React from 'react';

import { Button, Text, View } from 'react-native';
import { getRandomColor } from './getRandomColor';
import { styles } from './styles';

export default function StatefulItem() {
  const [text, setText] = React.useState('');
  const backgroundColor = React.useMemo(() => getRandomColor(), []);
  return (
    <View
      collapsable={false}
      style={[styles.itemContainer, { backgroundColor }]}
    >
      <Text>{text}</Text>
      <Button
        title="Change Text"
        onPress={() => {
          setText(
            !text
              ? `
          If you're looking for skilled and trusted React Native developers,
          Callstack is definitely the way to go. They've been around since we
          first open sourced React Native, and are active members of the
          community. Callstack maintains a bunch of important modules, like the
          React Native CLI, and also drives all releases. Their experience
          positions them well to take on any kind of project from building simple
          apps to setting up complex architectures. They're really great to work
          with."
          `
              : ''
          );
        }}
      />
    </View>
  );
}

import * as React from 'react';
import { Button, Image, View } from 'react-native';
import { getRandomColor } from './getRandomColor';
import { styles } from './styles';

export default function StatefulImage() {
  const [alignment, setAlignment] = React.useState<'flex-end' | 'flex-start'>(
    'flex-start'
  );

  return (
    <View
      collapsable={false}
      style={[styles.itemContainer, { backgroundColor: getRandomColor() }]}
    >
      <View style={{ alignItems: alignment }}>
        <Image
          source={{
            uri: 'https://crossweb.pl/job/wp-content/uploads/header/callstack-company-logo-400x400-1636107289.jpg',
          }}
          style={{ width: 200, height: 200 }}
        />
      </View>

      <Button
        title="Change alignment"
        onPress={() => {
          setAlignment(alignment === 'flex-start' ? 'flex-end' : 'flex-start');
        }}
      />
    </View>
  );
}

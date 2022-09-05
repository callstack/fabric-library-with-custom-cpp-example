import * as React from 'react';
import { Image, View, ViewProps } from 'react-native';
import { getRandomColor } from './getRandomColor';
import { styles } from './styles';

const images = [
  {
    uri: 'https://crossweb.pl/job/wp-content/uploads/header/callstack-company-logo-400x400-1636107289.jpg',
    style: { width: 100, height: 100 },
  },
  {
    uri: 'https://pbs.twimg.com/profile_images/1219949632610062336/S9rq-fOp_400x400.jpg',
    style: { width: 200, height: 200 },
  },
];
interface Props extends ViewProps {
  index: 0 | 1;
}
export default function ImageItem({ index }: Props) {
  const { uri, style } = images[index] || { uri: '', style: {} };
  return (
    <View
      collapsable={false}
      style={[styles.itemContainer, { backgroundColor: getRandomColor() }]}
    >
      <Image
        source={{
          uri,
        }}
        style={style}
      />
    </View>
  );
}

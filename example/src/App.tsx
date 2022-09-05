import * as React from 'react';
import {
  Button,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { UnicornView } from 'react-native-unicorn';
import { getRandomColor } from './getRandomColor';
import ImageItem from './ImageItem';
import LongText from './LongText';
import StatefulImage from './StatefulImage';
import StatefulItem from './StatefulItem';

function broofa() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0,
      v = c == 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

export default function App() {
  const [dynamicPages, setDynamicPages] = React.useState([
    { id: 'aklsmdlka' },
    { id: 'aklsmdlkaaaaa' },
    { id: 'aklsmdlka0000' },
  ]);
  return (
    <View style={styles.container}>
      <Button
        title="Remove last view"
        onPress={() => {
          setDynamicPages(dynamicPages.slice(0, 2));
        }}
      />
      <UnicornView style={styles.recycler}>
        <Button onPress={() => {}} title="Example button in list" />
        <StatefulItem />
        <StatefulImage />
        {dynamicPages.map((item, index) => (
          <View
            key={item.id}
            collapsable={false}
            style={{
              width: '100%',
              backgroundColor: getRandomColor(),
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Text>Dynamic Item number {index}</Text>
          </View>
        ))}
        {React.useMemo(
          () =>
            Array(10)
              .fill(1)
              .map((_, index) => {
                const item = Math.floor(Math.random() * 4);
                const key = broofa();
                switch (item) {
                  case 0:
                    return <LongText key={key} />;
                  case 1:
                    return <ImageItem key={key} index={0} />;
                  case 2:
                    return <ImageItem key={key} index={1} />;
                  case 3:
                    return (
                      <View
                        collapsable={false}
                        key={key}
                        style={{
                          width: '100%',
                          backgroundColor: getRandomColor(),
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}
                      >
                        <Text>Item number {index}</Text>
                      </View>
                    );
                  default:
                    return (
                      <View
                        collapsable={false}
                        key={index}
                        style={{
                          width: '100%',
                          backgroundColor: getRandomColor(),
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}
                      >
                        <Text>Item number {index}</Text>
                      </View>
                    );
                }
              }),
          []
        )}
      </UnicornView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? 50 : 0,
  },
  recycler: {
    flex: 1,
  },
  longText: {
    width: '100%',
    padding: 16,
  },
});

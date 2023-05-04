import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Agenda } from 'react-native-calendars';
const MyAgenda = () => {
  const items = {
    '2023-05-01': [{text: 'item 1 - any js object'}],
    '2023-05-02': [{text: 'item 2 - any js object'}],
    '2023-05-03': [],
    '2023-05-04': [{text: 'item 3 - any js object'}, {text: 'item 4 - any js object'}]
  };
  const renderItem = (item) => (
    <View>
      <Text>{item.text}</Text>
    </View>
  );
  return (
    <View style={styles.container}>
      <Agenda
        items={items}
        renderItem={renderItem}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'pink',
    borderColor: 'pink',
    borderWidth: 6,
    height: '100%',
    flex: 1,
  },
});
export default MyAgenda;

import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button
        title="Calculator"
        onPress={() => navigation.navigate('Calculator')}
      />
      <Button
        title="Calendar"
        onPress={() => navigation.navigate('Calendar')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Home;
import {View, StyleSheet, Text} from 'react-native';

const MyPageScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Page</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 16,
  },
});
export default MyPageScreen;

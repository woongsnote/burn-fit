import {View, StyleSheet, Text} from 'react-native';
import Calendar from '../components/Calendar';

const CalendarScreen = () => {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>Calendar</Text> */}
      <Calendar />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 16,
  },
});
export default CalendarScreen;

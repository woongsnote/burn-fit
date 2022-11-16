import {useEffect, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {generateMatrix} from './utils';
import {months} from './consts';

const Calendar = ({date}) => {
  const [activeDate, setActiveDate] = useState(date);
  useEffect(() => {
    if (activeDate != date) {
      setActiveDate(date);
    }
  }, [date]);

  const onPressHandler = item => {
    if (item !== 'string' && item != -1) {
      const newDate = new Date(activeDate.setDate(item));
      setActiveDate(newDate);
    }
  };

  const matrix = generateMatrix(activeDate);

  let rows = [];

  rows = matrix.map((row, rowIndex) => {
    let rowItems = row.map((item, colIndex) => {
      return (
        <TouchableOpacity
          key={colIndex}
          onPress={() => onPressHandler(item)}
          style={[
            styles.date,
            item == activeDate.getDate()
              ? styles.activeDate
              : styles.inActiveDate,
          ]}>
          <Text
            style={{
              color:
                rowIndex == 0 && colIndex == 0
                  ? 'red'
                  : rowIndex == 0 && colIndex == 6
                  ? 'skyblue'
                  : rowIndex == 0 && colIndex != 6
                  ? 'gray'
                  : 'black',
              textAlign: 'center',
              fontWeight: item == activeDate.getDate() ? 'bold' : 'normal',
            }}>
            {item != -1 ? item : ''}
          </Text>
        </TouchableOpacity>
      );
    });
    return (
      <View key={rowIndex} style={styles.rowContainer}>
        {rowItems}
      </View>
    );
  });

  const changeMonth = n => {
    const newDate = new Date(activeDate.setMonth(activeDate.getMonth() + n));
    setActiveDate(newDate);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => changeMonth(-1)}>
          <MaterialCommunityIcons
            name="chevron-left"
            size={32}
            color={'skyblue'}
          />
        </TouchableOpacity>
        <Text style={styles.currentMonth}>
          {`${months[activeDate.getMonth()]} ${activeDate.getFullYear()}`}
        </Text>
        <TouchableOpacity onPress={() => changeMonth(+1)}>
          <MaterialCommunityIcons
            name="chevron-right"
            size={32}
            color={'skyblue'}
          />
        </TouchableOpacity>
      </View>
      <View>{rows}</View>
    </View>
  );
};

export default Calendar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  currentMonth: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
  },
  rowContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  date: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeDate: {
    borderColor: 'blue',
    borderRadius: 100,
    borderWidth: 1,
    fontWeight: 'bold',
  },
  inActiveDate: {
    backgroundColor: 'fff',
  },

  dateText: {
    textAlign: 'center',
    fontSize: 14,
  },
});

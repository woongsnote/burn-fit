import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/FontAwesome5';
import HomeScreen from '../screens/HomeScreen';
import CalendarScreen from '../screens/CalendarScreen';
import LibraryScreen from '../screens/LibraryScreen';
import MyPageScreen from '../screens/MyPageScreen';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: 'black',
        headerShown: false,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'HOME',
          tabBarIcon: ({focused}) => (
            <MaterialCommunityIcon
              name={focused ? 'home' : 'home-outline'}
              color={focused ? 'black' : 'gray'}
              size={28}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Calendar"
        component={CalendarScreen}
        options={{
          tabBarLabel: 'CALENDAR',
          tabBarIcon: ({focused}) => (
            <MaterialCommunityIcon
              name={focused ? 'calendar-month' : 'calendar-month-outline'}
              color={focused ? 'black' : 'gray'}
              size={28}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Library"
        component={LibraryScreen}
        options={{
          tabBarLabel: 'LIBRARY',
          tabBarIcon: ({focused}) => (
            <Icon
              name="dumbbell"
              color={focused ? 'black' : 'gray'}
              size={24}
            />
          ),
        }}
      />
      <Tab.Screen
        name="MyPage"
        component={MyPageScreen}
        options={{
          tabBarLabel: 'MY PAGE',
          tabBarIcon: ({focused}) => (
            <MaterialCommunityIcon
              name={focused ? 'account' : 'account-outline'}
              color={focused ? 'black' : 'gray'}
              size={28}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;

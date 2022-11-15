import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Home from '../screens/Home';
import Calendar from '../screens/Calendar';
import Library from '../screens/Library';
import MyPage from '../screens/MyPage';

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
        component={Home}
        options={{
          tabBarLabel: 'HOME',
          tabBarIcon: ({focused}) => (
            <MaterialCommunityIcon
              name="home"
              color={focused ? 'black' : 'gray'}
              size={24}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Calendar"
        component={Calendar}
        options={{
          tabBarLabel: 'CALENDAR',
          tabBarIcon: ({focused}) => (
            <MaterialCommunityIcon
              name="calendar-month-outline"
              color={focused ? 'black' : 'gray'}
              size={24}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Library"
        component={Library}
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
        component={MyPage}
        options={{
          tabBarLabel: 'MY PAGE',
          tabBarIcon: ({focused}) => (
            <MaterialCommunityIcon
              name="account-outline"
              color={focused ? 'black' : 'gray'}
              size={24}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;

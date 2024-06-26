import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/core";
import { Ionicons } from "@expo/vector-icons";
import { auth } from "./back/firebase";

import AppScreen from "./front/AppScreen";
import LoginScreen from "./front/LoginScreen";
import HomeScreen from "./front/HomeScreen";
import RegisterScreen from "./front/RegisterScreen";
import ProfileScreen from "./front/ProfileScreen";
import EditProfileScreen from "./front/EditProfileScreen";
import MyGroupScreen from "./front/MyGroupScreen";
import FindNewGroupsScreen from "./front/FindNewGroupsScreen";
import NotificationsScreen from "./front/NotificationsScreen";
import UpcomingMeetingScreen from "./front/UpcomingMeetingScreen";
import AddNewMeetingScreen from "./front/AddNewMeetingScreen";
import AddNewGroupScreen from "./front/AddNewGroupScreen";
import ResultGroupsScreen from "./front/ResultGroupsScreen";
import EditGroupScreen from "./front/EditGroupScreen";
import EditMeetingScreen from "./front/EditMeetingScreen";
import MembersListScreen from "./front/MembersList";
import AboutUsScreen from "./front/AboutUsScreen";
import CostumerSupportScreen from "./front/CostumerSupportScreen";
import GroupMeetingsScreen from "./front/GroupMeetingsScreen";
import UserService from "./back/UserService";
import Chat from "./front/ChatScreen";
import ChatScreen from "./front/ChatScreen";

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

const GroupsStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MyGroups" component={MyGroupScreen} />
      <Stack.Screen name="AddNewGroup" component={AddNewGroupScreen} />
      <Stack.Screen name="AddNewMeeting" component={AddNewMeetingScreen} />
      <Stack.Screen name="EditGroup" component={EditGroupScreen} />
      <Stack.Screen name="GroupMeetings" component={GroupMeetingsScreen} />
      <Stack.Screen name="EditMeeting" component={EditMeetingScreen} />
      <Stack.Screen name="MembersList" component={MembersListScreen} />
    </Stack.Navigator>
  );
};

const MeetingStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Meeting" component={UpcomingMeetingScreen} />
      <Stack.Screen name="EditMeeting" component={EditMeetingScreen} />
      <Stack.Screen name="MembersList" component={MembersListScreen} />
      <Stack.Screen name="Chat" component={ChatScreen} />
    </Stack.Navigator>
  );
};
const ProfileStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="Profile page"
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="EditProfile"
        component={EditProfileScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const FindNewGroupsStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="FindNewGroups" component={FindNewGroupsScreen} />
      <Stack.Screen name="ResultGroups" component={ResultGroupsScreen} />
    </Stack.Navigator>
  );
};

const HomeStack = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home Page") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "My Groups") {
            iconName = focused ? "people" : "people-outline";
          } else if (route.name === "Explore Group") {
            iconName = focused ? "compass" : "compass-outline";
          } else if (route.name === "Meetings") {
            iconName = focused ? "calendar" : "calendar-outline";
          } else if (route.name === "Profile") {
            iconName = focused ? "person" : "person-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#366A68", // Active tab text color
        tabBarInactiveTintColor: "gray", // Inactive tab text color
        tabBarStyle: {
          // Style for the tab bar
          display: "flex",
        },
      })}
    >
      <Tab.Screen
        name="Home Page"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="My Groups"
        component={GroupsStack}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Explore Group"
        component={FindNewGroupsStack}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Meetings"
        component={MeetingStack}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStack}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};

export default function App() {
  // const navigation = useNavigation();
  // useEffect(() => {
  //   const checkLoginStatus = async () => {
  //     const stayLoggedIn = await AsyncStorage.getItem('stayLoggedIn');
  //     auth.onAuthStateChanged((user) => {
  //       if (user && stayLoggedIn) {
  //         console.log("User is logged in, navigating to Home");
  //         navigation.navigate("Home");
  //       } else {
  //         console.log("No user logged in or user opted out of stay logged in, staying on Login screen");
  //       }
  //     });
  //   };

  //   checkLoginStatus();
  // }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Entry"
          component={AppScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MyGroups"
          component={MyGroupScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={HomeStack}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Notifications"
          component={NotificationsScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AboutUs"
          component={AboutUsScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Support"
          component={CostumerSupportScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

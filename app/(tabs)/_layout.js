import { Tabs } from "expo-router";
import { FontAwesome,FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

export default function Layout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="home"
        options={{
          tabBarLabel: "Home",
          tabBarLabelStyle: { color: "#7CB9E8" },
          headerShown:false,
          tabBarIcon:({focused}) => 
          focused? (
            <FontAwesome5 name="tasks" size={24} color="#7CB9E8" />
          ) : (
            <FontAwesome name="tasks" size={24} color="black" />
          )
        }}
      />
       <Tabs.Screen
        name="calendar"
        options={{
          tabBarLabel: "Calendar",
          tabBarLabelStyle: { color: "#7CB9E8" },
          headerShown:false,
          tabBarIcon:({focused}) => 
          focused? (
            <AntDesign name="calendar" size={24} color="#7CB9E8" />
          ) : (
            <AntDesign name="calendar" size={24} color="black" />
          )
        }}
      />
       <Tabs.Screen
        name="profile"
        options={{
          tabBarLabel: "Profile",
          tabBarLabelStyle: { color: "#7CB9E8" },
          headerShown:false,
          tabBarIcon:({focused}) => 
          focused? (
            <FontAwesome5 name="user" size={24} color="#7CB9E8" />
          ) : (
            <FontAwesome5 name="user" size={24} color="black" />
          )
        }}
      />
    </Tabs>
  );
}
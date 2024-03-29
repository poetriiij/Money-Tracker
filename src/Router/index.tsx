import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Splash, SignIn, SignUp, Home, CashOnHand } from "../Pages";
import CashOnBank from "../Pages/CashOnBank";

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{headerShown: false}}
        />
         <Stack.Screen
       name="SignUp"
       component={SignUp}
       options={{headerShown: false}}
     />
      <Stack.Screen
       name="Home"
       component={Home}
       options={{headerShown: false}}
      />
       <Stack.Screen
       name="CashOnHand"
       component={CashOnHand}
       options={{headerShown: false}}
     />
      <Stack.Screen
       name="CashOnBank"
       component={CashOnBank}
       options={{headerShown: false}}
     />
      </Stack.Navigator>
  );
};

export default Router;
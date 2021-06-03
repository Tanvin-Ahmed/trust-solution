import { StatusBar } from "expo-status-bar";
import React, { createContext, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "./components/Home/Home";
import Details from "./components/Details/Details";
import { LoginScreen } from "./components/Login/LoginScreen";

export const loginContext = createContext();

const Drawer = createDrawerNavigator();

export default function App() {
    const [loginInfo, setLoginInfo] = useState();
    console.log(loginInfo);
    return (
        <loginContext.Provider value={{ setLoginInfo }}>
            <NavigationContainer>
                <Drawer.Navigator>
                    <Drawer.Screen name={loginInfo ? "logOut" : "LogIn"} component={LoginScreen} />
                    {loginInfo && (
                        <>
                            <Drawer.Screen name="Home" component={Home} />
                            <Drawer.Screen name="Details" component={Details} />
                        </>
                    )}
                </Drawer.Navigator>
            </NavigationContainer>
        </loginContext.Provider>
    );
}

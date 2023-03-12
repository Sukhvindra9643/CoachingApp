import React, {useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux'
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home"
import TodoHome from "./screens/TodoHome";
import Login from "./screens/Login";
import Footer from './components/Footer'
import Register from "./screens/Register";
import ForgotPassword from "./screens/ForgotPassword";
import Camera from "./screens/Camera";
import Verify from "./screens/Verify";
import Profile from "./screens/Profile";
import ChangePassword from "./screens/ChangePassword";
import ResetPassword from "./screens/ResetPassword";
import Downloads from "./screens/Downloads";
import MyCourse from "./screens/MyCourse";
import Loader from "./components/Loader";
const Stack = createNativeStackNavigator();
import { loadUser } from './redux/action'

const Main = () => {
  const dispatch = useDispatch()



  useEffect(() => {
      dispatch(loadUser())

  }, [dispatch])


  const { isAuthenticated, loading } = useSelector(state => state.auth)

  return loading ? (
    <Loader />
  ) : (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={isAuthenticated ? "home" : "login"}>
        <Stack.Screen name="home" component={Home} options={{ headerShown: false }}/>
        <Stack.Screen name="todohome" component={TodoHome} options={{ headerShown: false }}/>
        <Stack.Screen name="login" component={Login} options={{ headerShown: false }}/>
        <Stack.Screen name='register' component={Register} options={{ headerShown: false }} />
        <Stack.Screen name='forgetpassword' component={ForgotPassword} options={{ headerShown: false }} />
        <Stack.Screen name='camera' component={Camera} options={{ headerShown: false }} />
        <Stack.Screen name='verify' component={Verify} options={{ headerShown: false }} />
        <Stack.Screen name='profile' component={Profile} options={{ headerShown: false }} />
        <Stack.Screen name='changepassword' component={ChangePassword} options={{ headerShown: false }} />
        <Stack.Screen name='resetpassword' component={ResetPassword} options={{ headerShown: false }} />
        <Stack.Screen name='downloads' component={Downloads} options={{ headerShown: false }} />
        <Stack.Screen name='mycourse' component={MyCourse} options={{ headerShown: false }} />
      </Stack.Navigator>
      {isAuthenticated && <Footer />}
    </NavigationContainer>
  );
};

export default Main;
// {{headerShown:false}} 
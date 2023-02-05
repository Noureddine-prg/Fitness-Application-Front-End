import * as React from 'react';
import Navbar from './components/Navbar/Navbar';
import Login from './screens/Login/login';
import { NavigationContainer } from '@react-navigation/native';


export default function App() {
  return (
        <NavigationContainer>

          <Navbar/>
        </NavigationContainer>
  );
}


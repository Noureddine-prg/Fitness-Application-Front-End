import * as React from 'react';
import Navbar from './components/Navbar/navbar';
import { NavigationContainer } from '@react-navigation/native';


export default function App() {
  return (
        <NavigationContainer>
          <Navbar/>
        </NavigationContainer>

  );
}


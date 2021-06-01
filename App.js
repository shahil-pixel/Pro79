import * as React from 'react';
import {createSwitchNavigator, createAppContainer} from 'react-navigation';

import Welcome from './screens/welcome';
import Home from './screens/homeScreen';
import {DrawerNavigator} from './components/appDrawerNavigator'

export default class App extends React.Component{
  render(){
    return(
      <AppContainer/>
    )
  }
}

const switchNavigator = createSwitchNavigator({
  Welcome: {screen: Welcome},
  DN: {screen: DrawerNavigator}
})

const AppContainer = createAppContainer(switchNavigator);
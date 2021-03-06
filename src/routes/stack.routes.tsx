import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Home } from '../screens/Home'
import { Scheduling } from '../screens/Scheduling'
import { SchedulingDetails } from '../screens/SchedulingDetails'
import { SchedulingComplete } from '../screens/SchedulingComplete'
import { CarDetails } from '../screens/CarDetails'
import { ScheduleList } from '../screens/ScheduleList'

const { Navigator, Screen} = createNativeStackNavigator()

export function StackRoutes() {
  return (
    <Navigator
      screenOptions={{headerShown: false}}
    >
      <Screen name="Home" component={Home}/>
      <Screen name="CarDetails" component={CarDetails} />
      <Screen name="Scheduling" component={Scheduling}/>
      <Screen name="SchedulingDetails" component={SchedulingDetails}/>
      <Screen name="SchedulingComplete" component={SchedulingComplete}/>
      <Screen name="ScheduleList" component={ScheduleList}/>
    </Navigator>
  )
}
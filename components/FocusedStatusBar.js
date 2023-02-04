import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { useIsFocused } from '@react-navigation/core'

const FocusedStatusBar = (props) => {
    const isFocused = useIsFocused()
    return !isFocused ?
     <StatusBar animated={true} {...props} /> 
     : null

}

export default FocusedStatusBar

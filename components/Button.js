import { TouchableOpacity, View, Text, Image } from 'react-native'
import React from 'react'
import { COLORS, SIZES, FONTS, SHADOWS } from '../constants'

export const CircleButton = ({imageUrl, handlePress, ...props}) => {
  return (
    <TouchableOpacity
    style={{
        width: 40,
        height: 40,
        borderRadius: SIZES.extraLarge,
        backgroundColor:COLORS.white,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        ...SHADOWS.light,
        ...props
    }}
    >
        <Image source={imageUrl} 
        resizeMode="contain"
         style={{width: 24, height: 24}} />

    </TouchableOpacity>

  )
}
export const RectButton = () => {
    return (
      <View>
        <Text>Button</Text>
      </View>
    )
  }


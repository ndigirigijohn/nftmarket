import {View, Text, Image} from 'react-native'
import { COLORS, FONTS, SIZES, assets } from '../constants'

import { CircleButton } from '../components'

import { useNavigation } from '@react-navigation/native'

const NFTCard = ({data}) => {
    return (
            <View
            style={{
                backgroundColor: COLORS.white,
                borderRadius: SIZES.font,
                marginBottom: SIZES.extraLarge,
                margin: SIZES.base
   
            }}>
            <View 
            style={{
                height: 250,
                width: '100%',
            }}
            >
                <Image
                source={data.image}
                resizeMode="cover"
                style={{
                    width: '100%',
                    height: '100%',
                    borderTopRightRadius: SIZES.font,
                    borderTopLeftRadius: SIZES.font
                }}
                />
                <CircleButton imageUrl={assets.heart} right={10} top={10} />
        </View>
        <Text>NFTcard</Text>

            </View>
    )
    }

export default NFTCard
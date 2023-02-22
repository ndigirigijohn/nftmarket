import {View, Text, Image} from 'react-native'
import { COLORS, FONTS, SIZES, assets, SHADOWS } from '../constants'

import { CircleButton, RectButton } from './Button'
import { EthPrice, NFTTitle, SubInfo } from './SubInfo'

import { useNavigation } from '@react-navigation/native'

const NFTCard = ({data}) => {
    const navigation = useNavigation()
    return (
            <View
            style={{
                backgroundColor: COLORS.white,
                borderRadius: SIZES.font,
                marginBottom: SIZES.extraLarge,
                margin: SIZES.base,
                ...SHADOWS.dark
   
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
        <SubInfo/>
        <View style={{
            width: '100%',
            padding: SIZES.font
        }}>
            <NFTTitle
            title={data.name}
            subTitle={data.creator}
            titleSize={SIZES.large}
            subTitleSize={SIZES.small}


            
            />
            </View>
            <View style={{
                margin: SIZES.font,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <EthPrice price={data.price}/>
                <RectButton
                minWidth={SIZES.large}
                fontSize={SIZES.font}
                handlePress={() => navigation.navigate('Details', {data})}
                
                />
                </View>
    

            </View>
    )
    }

export default NFTCard
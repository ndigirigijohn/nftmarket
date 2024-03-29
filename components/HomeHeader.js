import { View, Text , Image, TextInput} from 'react-native'

import { COLORS, FONTS, SIZES, assets } from '../constants'
const HomeHeader = ({onSearch}) => {
  return (
    <View
    style={{
      backgroundColor: COLORS.primary,
      padding: SIZES.font,
    }}    
    >
      <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}
      >
        <Image
        source={assets.logo}
        resizeMode="contain"
        style={{
          width: 95,
          height:25,
        }}
        />
        <View
        style={{
          width: 45,
          height: 45,

       
        }}
        >
          <Image
          source={assets.person01}
          resizeMode="contain"
          style={{
            width: '100%',
            height: '100%',
          }}
          >
          </Image>
          <Image
          source={assets.badge}
          resizeMode="contain"
          style={{
            position: 'absolute',

            width: 15,
            height: 15,

            bottom: 0,
            right: 0,
        
          }}
          >
          </Image>
        </View>


      </View>
      <View
      style={{
        marginVertical: SIZES.font,
      }}
      >
        <Text
        style={{
          fontFamily: FONTS.bold,
          color: COLORS.white,
          fontSize: SIZES.small,
          marginTop: SIZES.small,
        
        }}
        >
          Hello, Victoria 👋
        </Text>
        <Text
        style={{
          fontFamily: FONTS.bold,
          color: COLORS.white,
          fontSize: SIZES.large,
          marginTop: SIZES.base/2,
        
        }}
        >
          Let's find a masterpiece
        </Text>
      </View>

      <View
      style={{
        marginTop: SIZES.base,
      }}
      >
        <View
        style={{
          width: '100%',
          flexDirection: 'row',
          height: 50,
          backgroundColor: COLORS.gray,
          borderRadius: SIZES.font,
          alignItems: 'center',
          paddingHorizontal: SIZES.base,
          paddingVertical: SIZES.small-2
        }}
        >
          <Image
          source={assets.search}
          resizeMode="contain"
          style={{
            width: 20,
            height: 20,
            marginRight: SIZES.base,

          
          }}
         />
         <TextInput
          placeholder="Search"
          onChangeText={onSearch}
          placeholderTextColor={COLORS.white}
          style={{
            flex: 1,
            
          }}
         
         />
          

        </View>
        </View> 
    </View>
  )
}

export default HomeHeader
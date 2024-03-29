import React from 'react'
import {View, SafeAreaView, FlatList, Text } from 'react-native'
import { useState } from 'react'

const {COLORS, NFTData} = require('../constants')

import { NFTCard, HomeHeader, FocusedStatusBar } from '../components'

const Home =()=> {
  return (
    <SafeAreaView style={{flex: 1}}>
      <FocusedStatusBar background={COLORS.primary} />
      <View style={{flex:1}}>
        <View
          style={{ zIndex:0}}
        >
          <FlatList
            data={NFTData}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => <NFTCard data={item} />}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<HomeHeader />}
            ListHeaderComponentStyle={{zIndex: 1}}
          />
            

        </View>
        <View style={{position: 'absolute',
         top: 0,
          left: 0,
           right: 0,
            bottom: 0,
             zIndex: -1}}>
              <View style={{ height:300, backgroundColor: COLORS.primary}} />
              <View style={{flex: 1, height:300, backgroundColor: COLORS.white}} />

      </View>

      </View>

    </SafeAreaView>

  )
}

export default Home
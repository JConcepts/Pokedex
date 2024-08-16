import { View, ActivityIndicator } from 'react-native'
import React from 'react'
import { colors } from '../constants/Colors'

const Loading = () => {
  return (
    <View>
      <ActivityIndicator color={colors.primary} size={'small'} />
    </View>
  )
}

export default Loading
import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { router, Stack, useRouter } from 'expo-router'
import UserProvider from './Context/UserProvider';

const _layout = () => {
  const router = useRouter();
  return (
    <UserProvider>
      <Stack >
        <Stack.Screen name='index' options={{ headerShown: false }} />
      </Stack>
    </UserProvider>
  )
}

export default _layout

const styles = StyleSheet.create({})
import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { router, Stack, useRouter } from 'expo-router'
import UserProvider from './Context/UserProvider';
import FormProvider from './Context/FormProvider';

const _layout = () => {
  const router = useRouter();
  return (

    <UserProvider>
      <FormProvider>
        <Stack >
          <Stack.Screen name='index' options={{ headerShown: false }} />
          <Stack.Screen name='form' />
        </Stack>
      </FormProvider>
    </UserProvider>
  )
}

export default _layout

const styles = StyleSheet.create({})
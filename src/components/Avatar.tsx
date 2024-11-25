import { Image, StyleSheet, View } from 'react-native'
import React from 'react'

interface Props {
    source: string
    size: number
    marginTop?: number;
    marginBottom?: number;
}

export const Avatar = ({ source, size, marginTop, marginBottom }: Props) => {
    return (
        <View style={[styles.avatarContainer, { width: size, height: size }, { marginTop: marginTop }, { marginBottom: marginBottom }]}>
            <Image
                source={{ uri: source }}
                style={[styles.avatar, { width: size, height: size, borderRadius: size / 2 }]}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    avatarContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical: 35   
    },
    avatar: {
      borderRadius: 50, 
    },
  });

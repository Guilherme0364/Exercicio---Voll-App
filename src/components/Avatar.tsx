import { Image, StyleSheet, View } from 'react-native'
import React from 'react'

interface Props {
    source: {uri: string} // O 'source' deve ser um objeto com a chave 'uri'
    size: number
    alt: string
}

export const Avatar = ({ source, size, alt }: Props) => {
    return (
        <View style={[styles.avatarContainer, { width: size, height: size }]}>
            <Image
                source={source}
                style={[styles.avatar, { width: size, height: size, borderRadius: size / 2 }]}
                alt={alt}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    avatarContainer: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    avatar: {
      borderRadius: 50, 
    },
  });
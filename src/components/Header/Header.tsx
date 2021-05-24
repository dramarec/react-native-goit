import React from 'react'
import { View, Text } from 'react-native'
import styles from './HeaderrStyle';

const Header = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>My Todo</Text>
        </View>
    )
}

export default Header

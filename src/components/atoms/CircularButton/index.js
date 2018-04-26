import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CircularButton = ({ title }) => {
    return (
        <View style={styles.mainContainer}>
            <Text>{title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        padding: 10,
        backgroundColor: 'red',
        width: '70%',
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center'
    }
});

export default CircularButton;
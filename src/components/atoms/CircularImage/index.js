import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

const CircularImage = ({ image }) => {
    return (
        <View style={styles.mainContainer}>
            <Image source = {image} style={{height:70, width:70}}/>
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

export default CircularImage;
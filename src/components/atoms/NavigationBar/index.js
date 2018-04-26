import React from 'react';
import { View, Text,StyleSheet } from 'react-native';

const NavigationBar = ({ title }) => {
    return (
        <View style = {styles.mainContainer}>
            <Text>{title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer:{
        height:64,
        backgroundColor:'white',
        width:'100%',
        alignItems:'center',
        alignSelf:'center',
        justifyContent:'center'
    }
});

export default NavigationBar;
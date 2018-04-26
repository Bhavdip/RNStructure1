import React from 'react';
import { View, Text,StyleSheet } from 'react-native';
import {NAVIGATION_FONT_SIZE} from 'fonts';

const NavigationBar = ({ title }) => {
    return (
        <View style = {styles.mainContainer}>
            <Text style = {{fontSize:NAVIGATION_FONT_SIZE}}>{title}</Text>
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
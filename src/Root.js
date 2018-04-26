import React from 'react';
import { Text, View, StyleSheet, Image,Button } from 'react-native';
import { NavigationBar, CircularButton } from './components/atoms';
import {IC_IMAGE1 } from './assets/images';
import { ButtonView } from './components/molecules';

const _onPress = ({text}) =>{
    alert(JSON.stringify(text));
}

const Root = () => {
    return (
        <View style={styles.mainContainer}>
            <NavigationBar title='Home' />
            <CircularButton title='click me' />
            <ButtonView />
            <Text>Hello world</Text>
            <Button title="Learn More"
            onPress = {_onPress.bind('hello')}/>
        </View>
    );
}


const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: 'pink',
    }
});

export default Root;
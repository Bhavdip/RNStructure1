import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationBar, CircularButton } from './components/atoms';
import { ButtonView } from './components/molecules';

const Root = () => {
    return (
        <View style={styles.mainContainer}>
            <NavigationBar title='Home' />
            <CircularButton title='click me' />
            <ButtonView/>
            <Text>Hello world</Text>
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
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { CircularButton } from 'atoms';

class ButtonView extends React.Component {
    render() {
        return (
            <View style={styles.mainContainer}>
                <Text>This is ButtonView</Text>
                <CircularButton title='click' />
            </View>
        );
    }
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

export default ButtonView;
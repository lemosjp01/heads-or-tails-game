import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';

export default class GameInfo extends Component {
    render() {
        return(
            <Text style={styles.text}>Aqui podem ser apresentadas informações sobre o jogo</Text>
        );
    }
}

const styles = StyleSheet.create({
    text: {
        flex: 1,
        backgroundColor: '#618BDC'
    }
});

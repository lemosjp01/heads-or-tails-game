import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';

export default class MoreGames extends Component {
    render() {
        return (
            <Text style={styles.text}>Aqui podem ser apresentadas informações sobre outros jogos do desenvolvedor</Text>
        );
    }
}

const styles = StyleSheet.create({
    text: {
        flex: 1,
        backgroundColor: '#618BDC'
    }
});

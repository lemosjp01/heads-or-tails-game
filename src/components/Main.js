import React, { Component } from 'react';
import { View, Image, StyleSheet, TouchableHighlight } from 'react-native';

import { Actions } from 'react-native-router-flux';

import logo from '../imgs/logo.png';
import btnPlay from '../imgs/botao_jogar.png';
import btnGameInfo from '../imgs/sobre_jogo.png';
import btnMoreGames from '../imgs/outros_jogos.png';

export default class Main extends Component {
    render() {
        return (
            <View style={styles.primaryScene}>
                <View style={styles.layoutGame}>
                    <Image source={logo} />

                    <TouchableHighlight onPress={() => { Actions.results(); }}>
                        <Image source={btnPlay} />
                    </TouchableHighlight>
                </View>

                <View style={styles.footer}>
                    <TouchableHighlight onPress={() => { Actions.gameinfo(); }}>
                        <Image source={btnGameInfo} />
                    </TouchableHighlight>

                    <TouchableHighlight onPress={() => { Actions.moregames(); }}>
                        <Image source={btnMoreGames} />
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    primaryScene: {
        flex: 1,
        backgroundColor: '#61bd8c'
    },
    layoutGame: {
        flex: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    footer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});

import React, { Component } from 'react';
import { Image, View, StyleSheet } from 'react-native';

import cara from '../imgs/moeda_cara.png';
import coroa from '../imgs/moeda_coroa.png';

export default class Results extends Component {

    constructor(props) {
        super(props);

        this.state = { results: '' };
    }

    componentWillMount() {
        const randomNumber = Math.floor(Math.random() * 2);
        let caraOuCoroa = '';

        if (randomNumber === 0) {
            caraOuCoroa = 'cara';
        } else {
            caraOuCoroa = 'coroa';
        }

        this.setState({ results: caraOuCoroa });
    }

    render() {

        if (this.state.results === 'cara') {
            return (
                <View style={styles.results}>
                    <Image source={cara} />
                </View>
            );
        }
        return (
            <View style={styles.results}>
                <Image source={coroa} />
            </View>
        );

    }
}

const styles = StyleSheet.create({
    results: {
        flex: 1,
        backgroundColor: '#61bd8c',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

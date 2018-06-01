import React from 'react';
import { Router, Scene, Stack } from 'react-native-router-flux';

import Main from '../components/Main';
import GameInfo from '../components/GameInfo';
import MoreGames from '../components/MoreGames';
import Results from '../components/Results';

const Routes = () => (
    <Router sceneStyle={{ paddingTop: 10 }}>
        <Stack key='root' sceneStyle={{ flex: 1 }}>
            <Scene key='main' component={Main} title='Cara Ou Coroa' />
            <Scene key='gameinfo' component={GameInfo} title='Sobre o jogo' />
            <Scene key='moregames' component={MoreGames} title='Mais Jogos' />
            <Scene key='results' component={Results} title='Resultado' />
        </Stack>
    </Router>
);

export default Routes;

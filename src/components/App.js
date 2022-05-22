import React from 'react';
import styles from '../styles/app.module.scss';

import Cmd from './Cmd';
import Panel from './Panel';

function App() {
    return (
        <div className={styles.app}>
            <Cmd />
            <Panel />
        </div>
    );
}

export default App;

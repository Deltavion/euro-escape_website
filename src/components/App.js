import React, { useEffect, useState } from 'react';
import styles from '../styles/app.module.scss';

import Draggable from 'react-draggable';

function App() {

    useEffect(() => {
        document.addEventListener("mousedown", (e) => {
            console.log(e);
        })
    })

    return (
        <div className={styles.app}>
            <Draggable
                handle="#header"
                bounds={{
                    left: - (window.screen.width / 2 - 800 / 2),
                    top: - (window.screen.height / 2 - 600 / 2),
                    right: window.screen.width / 2 - 800 / 2,
                    bottom: window.screen.height / 2 - 600 / 2
                }}
            >
                <div className={styles.app__cmd}>
                    <header id='header' className={styles.app__cmd__header}>The Console</header>
                    <div className={styles.app__cmd__body}>
                        <p>
                            Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim
                            labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi
                            animcupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est
                            aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia
                            pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit
                            commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa
                            proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia
                            eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim.
                            Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et
                            culpa duis.
                        </p>
                        <br />
                        <p>{"default@chirac.ss:root >>> "}<span><input className={styles.app__cmd__body__input} /></span></p>
                    </div>
                </div>
            </Draggable>
        </div>
    );
}

export default App;
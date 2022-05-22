import React from 'react';
import styles from '../styles/panel.module.scss'
import Draggable from 'react-draggable';

function Panel() {
    const windowSize = [960, 720];

    return (
        <Draggable
            handle="#header"
            bounds={{
                left: - (window.screen.width - windowSize[0]) / 2,
                top: - (window.screen.height - windowSize[1]) / 2,
                right: (window.screen.width - windowSize[0]) / 2,
                bottom: (window.screen.height - windowSize[1]) / 2
            }}
            defaultPosition={{x: (window.screen.width - windowSize[0]) / 2 -30, y: (window.screen.height - windowSize[1]) / 2 -30}}
        >
            <div className={styles.panel}>
                <header id='header' className={styles.panel__header}>Control Panel</header>
                <div className={styles.panel__body}>
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
                </div>
            </div>
        </Draggable>
    );
}

export default Panel;
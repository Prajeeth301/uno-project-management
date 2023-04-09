import React from 'react';
import AppRouter from '../../AppRouter';
import './main.styles.css';

function Main({ shouldHideLayout }) {
    return (
        <main className={shouldHideLayout ? "content-wrapper hide" : "content-wrapper"}>
            <AppRouter />
        </main>
    );
}

export default Main;
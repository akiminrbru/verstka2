import React from 'react';
import styles from './App.module.scss';
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <div className={styles.App}>
            <Header/>
            <Main/>
            <Footer/>
        </div>
    );
}

export default App;

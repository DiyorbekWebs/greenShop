import React from "react";
import Header from "../components/Header/Header";

export default function Layout({ children }) {
    return (
        <>
            <header>
                <Header/>
            </header>
            <main>
                {children}
            </main>
            <footer>

            </footer>
        </>
    );
}

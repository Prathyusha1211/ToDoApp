import React from "react";
import './Header.css'
import SubHeader from "../SubHeader/SubHeader";

export default function Header() {
    return (
        <>
            <h1 className="header">To-Do App</h1>
            <SubHeader/>
        </>
    );
}
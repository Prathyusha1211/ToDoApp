import React from "react";
import './Header.css'
import SubHeader from "../SubHeader/SubHeader";

export default function Header() {
    return (
        <>
            <h1 className="header"><u>To-Do App</u></h1>
            <SubHeader/>
        </>
    );
}
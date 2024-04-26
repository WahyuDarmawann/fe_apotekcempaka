import React from "react";
import apotekcempaka from '../assets/apotekcempaka.svg';

function Header(){
    return(
        <React.Fragment>
            <nav className="py-7 px-10 bg-blue-600">
                <div className="container ">
                    <img src={apotekcempaka} alt="" />
                </div>
            </nav>
        </React.Fragment>
    );
}

export default Header;
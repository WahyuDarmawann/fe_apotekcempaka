import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons";
import apotekcempaka from '../assets/apotekcempaka.svg';

function Header(){
    return(
        <React.Fragment>
            <nav className="py-7 px-10 bg-primari">
                <div className="flex justify-between items-center">
                    <div className="nav-image">
                        <img src={apotekcempaka} alt="logo apotek" />
                    </div>
                    <div className="nav-navigation flex list-none">
                        <li className="px-4 text-sekunder"><a href="#">Beranda</a></li>
                        <li className="px-4 text-sekunder"><a href="#">Profil</a></li>
                        <li className="px-4 text-sekunder"><a href="#">Produk</a></li>
                        <li className="px-4 text-sekunder"><a href="#">Kontak</a></li>
                    </div>
                    <div className="login_logo text-sekunder">
                        <FontAwesomeIcon icon={faArrowRightToBracket} />
                    </div>
                </div>  
            </nav>
        </React.Fragment>
    );
}

export default Header;
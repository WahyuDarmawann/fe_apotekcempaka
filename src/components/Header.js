import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons";
import apotekcempaka from '../assets/apotekcempaka.svg';
import { useNavigate } from "react-router-dom";

function Header(){
    const navigasi = useNavigate()
    return(
        <React.Fragment>
            <nav className="py-7 px-10 bg-blue-600">
                <div className="flex justify-between items-center">
                    <div className="nav-image">
                        <img src={apotekcempaka} alt="logo apotek" />
                    </div>
                    <div className="nav-navigation flex list-none">
                        <li className="px-4"><a href="/">Beranda</a></li>
                        <li className="px-4"><a href="/profil">Profil</a></li>
                        <li className="px-4"><a href="/produk">Produk</a></li>
                        <li className="px-4"><a href="/kontak">Kontak</a></li>
                    </div>
                    <div className="login_logo">
                        <FontAwesomeIcon icon={faArrowRightToBracket} />
                    </div>
                </div>  
            </nav>
        </React.Fragment>
    );
}

export default Header;
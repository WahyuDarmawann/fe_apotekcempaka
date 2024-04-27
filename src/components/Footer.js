import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import apotekcempakaFooter from '../assets/apotekcempaka_footer.svg'

function Footer(){
    return(
        <React.Fragment>
            <footer className="min-h-96 py-7 px-10 bg-primari">
                    <div className="flex justify-between items-center">
                        <div>
                            <img src={apotekcempakaFooter}></img>
                            <p className="py-2 text-xl text-sekunder tracking-widest">Teman sehatmu setiap saat!</p>
                        </div>
                        <div className="nav-navigation list-none">
                            <li className="px-4 text-sekunder"><a href="#">Beranda</a></li>
                            <li className="px-4 text-sekunder"><a href="#">Profil</a></li>
                            <li className="px-4 text-sekunder"><a href="#">Produk</a></li>
                            <li className="px-4 text-sekunder"><a href="#">Kontak</a></li>
                        </div>
                    </div>
            </footer>
        </React.Fragment>
    );
}

export default Footer;
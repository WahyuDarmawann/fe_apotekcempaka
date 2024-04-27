import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBillWave } from "@fortawesome/free-solid-svg-icons";
import fotoProduk from "../assets/contoh_obat.jpg";

function Produk() {
    return (
        <React.Fragment>
            <Header/>
            <section className="min-h-screen">
                <div className="mx-20 py-10 grid grid-cols-5 gap-5">
                    <div className="h-70">
                        <div className="">
                                <img className="w-full max-w-60 rounded-t-lg" src={fotoProduk}></img>
                        </div>
                        <div className="bg-primari text-sekunder px-3 py-2 rounded-b-lg w-full max-w-60">
                            <p>Konidin Tablet</p>
                            <p className="text-xl font-bold"><FontAwesomeIcon className="mr-2" icon={faMoneyBillWave} />Rp 3.000</p>
                            <p className="text-right">Stok <span className="font-bold">54</span></p>
                        </div>
                    </div>
                    <div className="h-70">
                        <div className="">
                                <img className="w-full max-w-60 rounded-t-lg" src={fotoProduk}></img>
                        </div>
                        <div className="bg-primari text-sekunder px-3 py-2 rounded-b-lg w-full max-w-60">
                            <p>Konidin Tablet</p>
                            <p className="text-xl font-bold"><FontAwesomeIcon className="mr-2" icon={faMoneyBillWave} />Rp 3.000</p>
                            <p className="text-right">Stok <span className="font-bold">54</span></p>
                        </div>
                    </div>
                    <div className="h-70">
                        <div className="">
                                <img className="w-full max-w-60 rounded-t-lg" src={fotoProduk}></img>
                        </div>
                        <div className="bg-primari text-sekunder px-3 py-2 rounded-b-lg w-full max-w-60">
                            <p>Konidin Tablet</p>
                            <p className="text-xl font-bold"><FontAwesomeIcon className="mr-2" icon={faMoneyBillWave} />Rp 3.000</p>
                            <p className="text-right">Stok <span className="font-bold">54</span></p>
                        </div>
                    </div>
                    <div className="h-70">
                        <div className="">
                                <img className="w-full max-w-60 rounded-t-lg" src={fotoProduk}></img>
                        </div>
                        <div className="bg-primari text-sekunder px-3 py-2 rounded-b-lg w-full max-w-60">
                            <p>Konidin Tablet</p>
                            <p className="text-xl font-bold"><FontAwesomeIcon className="mr-2" icon={faMoneyBillWave} />Rp 3.000</p>
                            <p className="text-right">Stok <span className="font-bold">54</span></p>
                        </div>
                    </div>
                    <div className="h-70">
                        <div className="">
                                <img className="w-full max-w-60 rounded-t-lg" src={fotoProduk}></img>
                        </div>
                        <div className="bg-primari text-sekunder px-3 py-2 rounded-b-lg w-full max-w-60">
                            <p>Konidin Tablet</p>
                            <p className="text-xl font-bold"><FontAwesomeIcon className="mr-2" icon={faMoneyBillWave} />Rp 3.000</p>
                            <p className="text-right">Stok <span className="font-bold">54</span></p>
                        </div>
                    </div>
                    <div className="h-70">
                        <div className="">
                                <img className="w-full max-w-60 rounded-t-lg" src={fotoProduk}></img>
                        </div>
                        <div className="bg-primari text-sekunder px-3 py-2 rounded-b-lg w-full max-w-60">
                            <p>Konidin Tablet</p>
                            <p className="text-xl font-bold"><FontAwesomeIcon className="mr-2" icon={faMoneyBillWave} />Rp 3.000</p>
                            <p className="text-right">Stok <span className="font-bold">54</span></p>
                        </div>
                    </div>
                    <div className="h-70">
                        <div className="">
                                <img className="w-full max-w-60 rounded-t-lg" src={fotoProduk}></img>
                        </div>
                        <div className="bg-primari text-sekunder px-3 py-2 rounded-b-lg w-full max-w-60">
                            <p>Konidin Tablet</p>
                            <p className="text-xl font-bold"><FontAwesomeIcon className="mr-2" icon={faMoneyBillWave} />Rp 3.000</p>
                            <p className="text-right">Stok <span className="font-bold">54</span></p>
                        </div>
                    </div>
                    
                </div>
            </section>
            <Footer/>
        </React.Fragment>
    )
}

export default Produk
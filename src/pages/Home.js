import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ButtonProduk from "../components/ButtonProduk";

function Home() {
    return (
        <React.Fragment>
            <Header/>
            <section className="min-h-screen max-w-full">
                <div className="bg-[url('/src/assets/bg-landing_page.svg')] min-h-screen flex justify-center items-center">
                    <div className="flex flex-col items-center justify-center text-sekunder font-poppins">
                        <h2 className="text-5xl uppercase font-bold tracking-widest mb-1">Apotek Cempaka</h2>
                        <p className="text-1xl tracking-wider">Teman sehatmu setiap saat!</p>
                        <ButtonProduk/>
                    </div>
                </div>  
            </section>
            <Footer/>
        </React.Fragment>
    )
}

export default Home
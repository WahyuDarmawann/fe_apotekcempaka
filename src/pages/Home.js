import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Home() {
    return (
        <React.Fragment>
            <Header/>
            <section className="min-h-screen max-w-full">
                <div className="bg-[url('/src/assets/bg-landing_page.svg')] min-h-screen flex justify-center items-center">
                    <div className="flex flex-col items-center justify-center">
                        <h2>Apotek Cempaka</h2>
                        <p>Teman Sehatmu setiap saat!</p>
                    </div>
                </div>  
            </section>
            <Footer/>
        </React.Fragment>
    )
}

export default Home
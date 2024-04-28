import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Kontak() {
    return (
        <React.Fragment>
            <Header/>
            <section className="min-h-screen max-w-full">
                <div className="bg-[url('/src/assets/bg_kontak.svg')] min-h-40 flex justify-center items-center">
                    <div className="flex flex-col items-center justify-center text-sekunder font-poppins">
                        <h2 className="text-5xl uppercase font-bold tracking-widest mb-1">Kontak</h2>
                    </div>
                </div> 

                <div className="px-10 py-10 pt-24 grid grid-cols-2 gap-5">
                    <div className="grid grid-rows-2 gap-5 min-h-52">
                        <div className="min-h-52">
                            <iframe className="min-h-52 min-w-full rounded shadow-2xl" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d697.3153593520594!2d115.22392601918115!3d-8.648561426291582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd23f62a63da3cb%3A0x5ff23dc5ff8ef4e!2sApotek%20Cempaka!5e0!3m2!1sid!2sid!4v1714282896190!5m2!1sid!2sid"></iframe>
                        </div>
                        <div className="bg-primari rounded shadow-2xl px-5 py-5">
                            <p className="text-sekunder uppercase text-xl font-bold">Media Sosial</p>
                        </div>
                    </div>
                    <div className="bg-primari rounded shadow-2xl px-5 py-5">
                        <p className="text-sekunder uppercase text-xl font-bold">Kirim Pesan</p>
                        <form class="max-w-auto mx-auto py-5">
                            <div class="mb-5">
                                <label for="nama" className="block mb-2 text-sm font-medium text-sekunder dark:text-white">Nama</label>
                                <input type="text" id="nama" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Ketik nama anda disini..." required />
                            </div>
                            <div class="mb-5">
                            <label for="message" class="block mb-2 text-sm font-medium text-sekunder dark:text-white">Pesan</label>
                            <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Ketik pesan anda disini..."></textarea>                            </div>
                            <button type="submit" className="text-primari bg-sekunder hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Kirim</button>
                        </form>
                    </div>
                </div> 
            </section>
            <Footer/>
        </React.Fragment>
    )
}

export default Kontak
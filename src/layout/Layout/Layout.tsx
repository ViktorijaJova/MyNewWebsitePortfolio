import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import Head from "next/head";

interface P {
  children: any | any[];
}

const Layout = ({ children }: P) => {
  return (
    <>
      <Head>
        <meta
          property='og:image'
        />
        <title>Viktorija Jovanovska</title>
        <meta
          name='description'
        />
      </Head>
      <main className='bg-[#F8F8F8] dark:bg-black overflow-hidden'>    
        <Navbar />
        {children}
      </main>
    </>
  );
};

export default Layout;

//App.js

import Header from './Header.js'
import Cards from './Cards.js'
import { data } from './data.js'
import Footer from './Footer.js'
import './App.css'
import { useState } from 'react'

export default function Home({setPage}) {

    const mappedData = data.map((item) => {
        return (
            <Cards key={item.id} item={item} setPage={setPage} />
        )
    })
    return (<>
        <Header />
        {mappedData}
        <Footer />

    </>

    );
}

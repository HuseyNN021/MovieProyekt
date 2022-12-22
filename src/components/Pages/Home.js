import React from "react"
import Form from "../form/Form"
import List from "../List/List"
import Header from "../header/Header"
import { useState } from "react"
function Home() {
    const [list, setList] = useState([])

    return (
        <div>
            <Header />
            <div className='row'>
                <Form setList={setList} list={list} />
                <List list={list} setList={setList} />
            </div>
        </div>
    )
}

export default Home
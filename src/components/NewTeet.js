"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import { addTweet } from "@/services/Web3Services";

export default function NewTweet() {

    const [text, setText] = useState("")
    const [message, setMessage] = useState("")
    const { push } = useRouter()

    function btnPublishClick() {
        setMessage("Enviando...")
        addTweet(text).then(result => {
            setText("")
            setMessage("Tweet enviado!")
        }).catch(err => {
            setMessage(err.message)
            console.log(err)
        })
    }

    useEffect(() => {
        const wallet = localStorage.getItem("wallet")
        if (!wallet) {
            push("/")
        }
    }, [])

    return (
        <>
            <div className="top">
                <div className="left">
                    <img src="/twitter.jpg" className="brand" />
                </div>
                <h1>Bem vindo</h1>
                <p>Oque esta acontecendo?</p>
                <textarea className="form-control my-3" value={text} onChange={evt => setText(evt.target.value)}>

                </textarea>
                <div>
                    <input type="button" onClick={btnPublishClick} className="btn btn-primary" value="Enviar" />
                    <span className="message">
                        {message}
                    </span>
                </div>
            </div>
        </>
    )
}
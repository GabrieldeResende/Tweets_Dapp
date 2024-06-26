"use client";

import Head from "next/head";
import { doLogin } from "@/services/Web3Services";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {

  const { push } = useRouter()

  const [message, setMessage] = useState("")



  function btnLoginClick() {
    setMessage("Conectando...")
    doLogin().then(wallet => push("/timeline")).catch(err => {
      alert(err);
      setMessage(err.message)
    })
  }
  return (
    <>
      <Head>
        <title>CrypTwitter | Login</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="container px-4 py-5">
        <div className="row flex-lg-row-reverse aligh-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZyaWVuZHN8ZW58MHx8MHx8fDA%3D" className="d-block mx-lg-auto img-fluid" width="700" height="500" />
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">CrypTwitter</h1>
            <p className="lead">Sua rede social descentralizada</p>
            <p className="lead">Autentique-se com a sua carteira, escreva suas mensagens e saiba oque esta acontecendo pelo mundo</p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <button type="button" className="btn btn-primary btn-lg px-4 me-md-2" onClick={btnLoginClick}>
                <img src="/metamaskIcon.jpg" width='64' className="m-3" />
                Conectar com a MetaMask
              </button>
            </div>
            <p className="message">{message}</p>
          </div>
        </div>
      </div>
    </>
  );
}

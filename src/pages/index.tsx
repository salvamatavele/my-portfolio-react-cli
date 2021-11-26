import type {NextPage} from 'next'
import Head from 'next/head'
import Image from 'next/image'
import {InputText} from "primereact/inputtext";

const Home: NextPage = () => {
    return (

        <>
            <Head>
                <title>Salvado&apos;s Portfolio website.</title>
            </Head>
            <div className="card">
                <h5>Basic</h5>
                <InputText  />
                <span className="p-ml-2">base</span>

                <h5>Floating Label</h5>
                <span className="p-float-label">
                    <InputText id="username"  />
                    <label htmlFor="username">Username</label>
                </span>

                <h5>Left Icon</h5>
                <span className="p-input-icon-left">
                    <i className="pi pi-search" />
                    <InputText  placeholder="Search" />
                </span>

                <h5>Right Icon</h5>
                <span className="p-input-icon-right">
                    <i className="pi pi-spin pi-spinner" />
                    <InputText  />
                </span>

                <h5>Help Text</h5>
                <div className="p-field">
                    <label htmlFor="username1" className="p-d-block">Username</label>
                    <InputText id="username1" aria-describedby="username1-help" className="p-d-block"/>
                    <small id="username1-help" className="p-d-block">Enter your username to reset your password.</small>
                </div>

                <h5>Invalid</h5>
                <div className="p-field">
                    <label htmlFor="username2" className="p-d-block">Username</label>
                    <InputText id="username2" aria-describedby="username2-help" className="p-invalid p-d-block" />
                    <small id="username2-help" className="p-error p-d-block">Username is not available.</small>
                </div>

                <h5>Disabled</h5>
                <InputText  disabled />

                <h5>Sizes</h5>
                <div className="sizes">
                    <InputText type="text" className="p-inputtext-sm p-d-block p-mb-2" placeholder="Small" />
                    <InputText type="text" className="p-d-block p-mb-2" placeholder="Normal" />
                    <InputText type="text" className="p-inputtext-lg p-d-block"  placeholder="Large" />
                </div>
            </div>
        </>
    )
}

export default Home

import Document,{ Head, Html, Main, NextScript } from 'next/document'
export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="pt">
                <Head>
                    <meta charSet="UTF-8"/>
                    <meta name="description" content="A portfolio template that uses Material UI."/>
                    <meta name="" content="width=device-width, initial-scale=1.0"/>
                    <meta httpEquiv="X-UA-Compatible" content="ie=edge"/>

                    <link rel="icon" href="/favicon.ico" />

                    {/*fonts*/}
                    <link
                        rel="stylesheet"
                        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
                    />
                    <link
                        rel="stylesheet"
                        href="https://fonts.googleapis.com/icon?family=Material+Icons"
                    />
                    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.14.0/devicon.min.css"/>


                </Head>

                <body>
                <Main/>
                <NextScript/>
                </body>
            </Html>
        )
    }
}

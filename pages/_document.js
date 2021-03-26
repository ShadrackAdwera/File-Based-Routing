import Document, { Html, Head, Main, NextScript } from 'next/document';

//You can overrite the default HTML structure in this class.
//add HTML content outside your app component trees
class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head />
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
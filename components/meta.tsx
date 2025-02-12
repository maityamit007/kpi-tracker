import Head from 'next/head'
import React from 'react'

function Meta() {
    return (
        <div>
            <Head>
                <title>KPI Tracker</title>
                <meta
                    name="description"
                    content="KPI Tracker."
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#000000" />
                <meta property="og:title" content="KPI Tracker" />
                <meta name="image" property="og:image" content="/portfolio.JPG" />
                <meta name="author" content="Amit Maity" />
                <meta
                    property="og:description"
                    content=""
                />
            </Head>
        </div>
    )
}

export default Meta
import Head from "next/head"

const Meta = ({title}) => {
  return (
    <Head>
        <meta name='viewport' content="width=device-width, initial-scale=1"/>
        <title>{title || 'FOX_MOVES'}</title>
    </Head>
  )
}


export default Meta
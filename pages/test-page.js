import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'

import testPageResource from '../resources/test-page'

const TestPage = (props) => {
  return (
    <>
      <div className="test-page-container">
        <Head>
          <title>test-page - Regional Configuration Liaison</title>
          <meta
            property="og:title"
            content="test-page - Regional Configuration Liaison"
          />
        </Head>
        <DataProvider
          renderSuccess={(context_tar6ib) => (
            <>
              <h1>{context_tar6ib?.Name}</h1>
            </>
          )}
          initialData={props.contextTar6ibProp}
          persistDataDuringLoading={true}
          key={props?.contextTar6ibProp?.id}
        />
      </div>
      <style jsx>
        {`
          .test-page-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
        `}
      </style>
    </>
  )
}

export default TestPage

export async function getStaticProps(context) {
  try {
    const contextTar6ibProp = await testPageResource({
      ...context?.params,
    })
    return {
      props: {
        contextTar6ibProp: contextTar6ibProp?.data?.[0],
      },
    }
  } catch (errro) {
    return {
      notFound: true,
    }
  }
}

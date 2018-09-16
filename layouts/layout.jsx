import Head from 'next/head'
// import 'antd/dist/antd.less'
import React, { Component } from 'react'
import layout from './layout.less'

export default class Layout extends Component {

  render() {
    const { props } = this
    const { children } = props
    return (
      <div>
        <Head>
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <meta charSet='utf-8' />
          <link rel='stylesheet' href='/_next/static/style.css' />
        </Head>
        <div className={layout.example}>布局
          {children}
        </div>
      </div>

    )
  }
}


/* export default ({ children }) =>

  <div>
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta charSet='utf-8' />
      <link rel='stylesheet' href='/_next/static/style.css' />
    </Head>
    <div className={layout.example}>布局1
      {children}
    </div>
  </div>
 */
import App, { Container } from 'next/app'
import { Provider } from 'react-redux'
import withReduxSaga from '../redux/withReduxSaga'
import React from 'react'
import Layout from '../layouts/layout'

import style from './common.less'

import '../static/fonts/safont/iconfont.css'

class GlobalApp extends App {
    static async getInitialProps({ Component, router, ctx }) {
        let pageProps = {}

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx)
        }

        return { pageProps }
    }

    render() {
        const { Component, pageProps, store } = this.props
        return  <Container>
                    <Provider store={store}>
                            <Layout>
                    <div className={style.common}>_app样式</div>
                                <Component {...pageProps} />
                            </Layout>
                            
                    </Provider>
                </Container>
    }
}

export default withReduxSaga(GlobalApp)

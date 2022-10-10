import React, { ReactNode } from 'react'
import Head from '@components/Head'
import Header from '@components/Header'

type Props = {
  children: ReactNode
}

const Layout: React.FC<Props> = (props) => (
  <>
    <Head />
    <Header />
    <div className="container">
      <div className="page">{props.children}</div>
    </div>
  </>
)

export default Layout

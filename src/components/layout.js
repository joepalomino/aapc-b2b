/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Menu from "./Menu"
import tw from "tailwind.macro"

/**@jsx jsx */
import { jsx } from "@emotion/core"

const Layout = ({ children, phoneNumber }) => {
  return (
    <>
      <Menu phoneNumber={phoneNumber}/>
      <main css={tw`pt-24`}>{children}</main>
      <footer></footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

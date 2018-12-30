/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

/* eslint-disable import/prefer-default-export, react/prop-types */
import React from 'react'
import { Provider } from 'unstated'

export const wrapRootElement = ({ element }) => <Provider>{element}</Provider>

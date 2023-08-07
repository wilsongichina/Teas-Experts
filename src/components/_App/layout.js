/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { Script } from "gatsby"
import AOS from "aos"
import GoTop from "./GoTop"

const Layout = ({ children }) => {
  React.useEffect(() => {
    AOS.init()
  }, [])

  return (
    <>
      <Script type="text/javascript">
        {`window.$crisp=[];window.CRISP_WEBSITE_ID="cff46048-0bec-4bc3-9f2c-3266798d0962";(function(){d=document;s=d.createElement("script");s.src="https://client.crisp.chat/l.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();strategy="off-main-thread"`}
      </Script>
      <main>{children}</main>

      <GoTop scrollStepInPx="100" delayInMs="10.50" />
    </>
  )
}

export default Layout

import * as React from "react"

import Post from "../components/post"

import Layout from "../components/layout"

const IndexPage = () => (
  <Layout>
    <div className="flex w-full">
      <div className="flex flex-col bf-white w-full" style={{maxWidth: "614px"}}>
        <Post />
      </div>
    </div>
  </Layout>
)

export default IndexPage

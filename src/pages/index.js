import React, { useState } from "react"
import Layout from "../components/layout"
import LoginForm from "../components/login-form"
import Seo from "../components/seo"
import Video from "../components/video"

const IndexPage = () => {
  const [token, setToken] = useState(false)

  return (
    <Layout>
      <Seo title="Home" />
      {!token ? <LoginForm storeToken={setToken} /> : <Video token={token} />}
    </Layout>
  )
}

export default IndexPage

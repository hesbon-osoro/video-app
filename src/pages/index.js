import * as React from "react"
import Layout from "../components/layout"
import LoginForm from "../components/login-form"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <LoginForm />
  </Layout>
)

export default IndexPage

import React, { useState } from "react"
import * as styles from "./login.module.css"
import axios from "axios"

const LoginForm = ({ storeToken, storeName }) => {
  const [name, setName] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    const result = await axios({
      method: "POST",
      url: "https://malachite-llama-9887.twil.io/create-token",
      data: { identity: name },
    })
    console.log(result)
    const jwt = result.data
    storeToken(jwt)
    storeName(name)
  }

  return (
    <section className={styles.contact}>
      <h3>Login</h3>
      <h6>Share link, get connected with friends</h6>
      <div className={styles.center}>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">
              Username: <br />
            </label>
            <input
              type="text"
              id="name"
              value={name}
              className={styles.formControl}
              onChange={(e) => setName(e.target.value)}
            />
            <button type="submit" className={styles.submit}>
              Join Video Chat
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
export default LoginForm

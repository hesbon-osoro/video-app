import React, { useState } from "react"
import * as styles from "./login.module.css"
import axios from "axios"

const LoginForm = () => {
  const [name, setName] = useState("")

  const handleSubmit = async (e) => {
  e.preventDefault()
const result=await axios({method:'POST',url:'https://malachite-llama-9887.twil.io/create-token',data:{identity:name}})
console.log(result)}

  return (
    <section className={styles.contact}>
      <h3>Login</h3>
      <div className={styles.center}>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">
              Display Name: <br />
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

import React, {useState} from 'react'
import './loginForm.css'

const LoginForm = ({login}) => {
    const [details, setDetails] = useState({password: ''})

    const submitHandler = e => {
        e.preventDefault()
        login(details)
    }

    return(
        <div className = "container">
            <form onSubmit = {submitHandler}>
                <label>
                    <b>Masukan Kode Akses Web :</b>
                    <input type={"password"} name = "password" onChange = {e => setDetails(
                        {...details, password: e.target.value}
                    )} value = {details.password} />
                </label>
                <p>Hint : umur 'kamu' sekarang dalam biner</p>
                <button type = "submit">Submit!</button>
            </form>
        </div>
    )
}

export default LoginForm
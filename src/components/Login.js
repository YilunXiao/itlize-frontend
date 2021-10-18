import React, {useState} from "react";

function Login() {
    // initial state
    const initial = {
        username: '',
        password: ''
    }

    // form state
    const [login, setLogin] = useState(initial);

    // handle form change
    function handleChange(event) {
        const value = event.target.value;
        const name = event.target.name;

        setLogin({...login, [name]: value})
    }

    // handle submit
    function handleSubmit(event) {
        event.preventDefault();
        console.log(login);
        setLogin({username: '', password: ''});
    }

    return (
        <div>
            Login
            <form onSubmit={handleSubmit}>
                <label>
                    Username:
                    <input type="text" name={"username"} value={login.username} onChange={handleChange} />
                </label>
                <label>
                    Password:
                    <input type="text" name={"password"} value={login.password} onChange={handleChange} />
                </label>
                <br/>
                <input type="submit" value="Login" />
            </form>
        </div>
    );
}

export default Login;
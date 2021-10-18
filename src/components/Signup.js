import React, {useState} from "react";

function Signup() {
    // initial state
    const initial = {
        username: '',
        password: ''
    }

    // form state
    const [signup, setLogin] = useState(initial);

    // handle form change
    function handleChange(event) {
        const value = event.target.value;
        const name = event.target.name;

        setLogin({...signup, [name]: value})
    }

    // handle submit
    function handleSubmit(event) {
        event.preventDefault();
        console.log(signup);
        setLogin({username: '', password: ''});
    }

    return (
        <div>
            Signup
            <form onSubmit={handleSubmit}>
                <label>
                    Username:
                    <input type="text" name={"username"} value={signup.username} onChange={handleChange} />
                </label>
                <label>
                    Password:
                    <input type="text" name={"password"} value={signup.password} onChange={handleChange} />
                </label>
                <br/>
                <input type="submit" value="Signup" />
            </form>
        </div>
    );
}

export default Signup;
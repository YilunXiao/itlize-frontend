import React, {useState} from "react";
import {connect} from "react-redux";
import * as actions from '../store/actions/index'

function Login(props) {
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
        // localStorage.setItem("Please", "Please save this I dont know anymore");
        props.login(login.username, login.password);
    }

    return (
        <div>
            Login
            <div>Status: {props.logged ? 'Logged In' : 'Logged Out'}</div>
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

// connect props to redux store state
const mapStateToProps = state => {
    return {
        logged: state.auth.token !== null
    };
};
// connect props to redux dispatches
const mapDispatchToProps = dispatch => {
    return {
        login:(username, password) => dispatch(actions.auth(username,password))
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Login);
// export default Login;
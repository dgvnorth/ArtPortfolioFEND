import React, {useState, useEffect} from 'react'

// Redux
import { useDispatch, useSelector } from "react-redux"
import { login } from "../../store/actions/userActions"

// My components

import FormField from '../../components/FormField'

//Assets
import classes from "./LoginScreen.module.css"


const LoginScreen = (props) => {
    const { history } = props
    const dispatch = useDispatch()
    const [ formState, setFormState ] = useState({
        email: "",
        password: "",
    })
    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin

    const formConfig = {
        email: {
            type: "input",
            config: { type: "email", placeHolder: "Your Email" },
        },
        password: {
            type: "input",
            config: { type: "text", placeHolder: "Your Password" },
        },
    }

    // Prepare for formState objects
    const formElements = []
    for (let key in formState) {
        formElements.push({ id: key, setup: formConfig[key] })
    }

    const inputChangeHandler = (event, inputIdentifier) => {
        formElements.forEach((formElement) => {
            if (inputIdentifier === formElement.id) {
                setFormState({
                    ...formState,
                    [inputIdentifier]: event.target.value,
                })
            }
        })
    }

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(login(formState.email, formState.password))
    }

    // Check if login success
    useEffect(() => {
        if (userInfo && userInfo.isAdmin) {
            history.push('/admin')
        }
    }, [userInfo, history])


    return (
        <div className={classes.screen_cointainer}>
            <form onSubmit={submitHandler}>
            <h2>Administrator Login</h2>
                {formElements.map((formElement) => (
                    <FormField
                        key = {formElements.id}
                        type = {formElement.setup.type}
                        config = {formElement.setup.config}
                        value = {formElement.value}
                        changed = {(event) => inputChangeHandler(event, formElement.id)}
                    />
                ))}
            </form>
            <button type='Submit'>Submit</button>
        </div>
    )
}

export default LoginScreen;

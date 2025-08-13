import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {LoginUser, reset} from '../features/authSlice'
const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {user, isError, isLoading, isSuccess, message} = useSelector(state => state.auth);

    useEffect(() => {
        if (user || isSuccess) {
            navigate("/dashboard")
        }
        dispatch(reset());
    }, [user, isSuccess, dispatch, navigate]);

    const Auth = (e) => {
        e.preventDefault();
        dispatch(LoginUser({email, password}));
    }

    return (
    <section className="hero has-backgroud-grey-light is-success is-fullheight is-fullwidth">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-4">
              <form onSubmit={Auth} className="box">
                  {isError && <p className={"has-text-centered"}> {message} </p>}
                <h1 className='title is-2 text-white'>Sign In</h1>
                <div className="field">
                  <label htmlFor="" className="label">Email</label>
                  <div className="controll">
                    <input type="text" className="input" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value) } />
                  </div>
                </div>
                <div className="field">
                  <label htmlFor="" className="label">Password</label>
                  <div className="controll">
                    <input type="password" className="input" placeholder='*****' value={password} onChange={(e) => setPassword(e.target.value) }  />
                  </div>
                </div>
                <div className="field m-5">
                  <button type={"submit"} className="button is-success is-fullwidth is-fullwidth">
                      {isLoading ? 'Login' : 'Harap Tunggu'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Login
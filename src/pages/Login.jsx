import React from 'react'
import google_logo_white from 'assets/google_logo_white.png';
import tech_fun_horizontal_300 from 'assets/tech_fun_horizontal_300.png';
import {Link} from 'react-router-dom'

const Login = () => {
    return (
        <div>
            <div className="limiter">
		<div className="container-login100">
			<div className="wrap-login100">
				<div className="login100-form p-l-55 p-r-55 p-t-178">
					<span className="login100-form-title">
						Sistema de Gestión de Ventas <br />Tech & Fun
					</span>
					<div className="validate-input" >
						Bienvenido
					</div>


					<Link to='/Users'>
        					<div className="nav-link mx-1 active" href="./users.html" id="navLinkUsers"/>
        			</Link> 

					<div className="container-login100-form-btn">
						<button className="login100-form-btn"> 
							<img className="google_logo" src={google_logo_white}/> Ingresa con tu cuenta de Google
						</button>
					</div>

					<div className="footer">
						<img className="footer_logo" src={tech_fun_horizontal_300} />

					</div>
				</div>
			</div>
		</div>
	</div>            
        </div>
    )
}

export default Login

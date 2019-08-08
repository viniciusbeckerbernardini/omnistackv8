import React, {useState} from 'react';
import api from '../services/api';
import './Login.css';
import logo from '../assets/logo.svg'; 

function Login({history}) {

	const [username, setUsername] = useState('');

	async function handleSubmit(e){
		e.preventDefault();
	           
            const response = await api.post('/devs',{
                  username
            });

            const {_id} = response.data;

		history.push(`/dev/${_id}`);
	}

	  return (
	  <div className="login-container">
       	
       	<form onSubmit={handleSubmit}>
       	<img src={ logo } alt="Tindev logo"/>
       	<input 
       	placeholder="Digite seu usuáriodo github"
       	value={username}
       	onChange={e => setUsername(e.target.value)}
       	/>       	
       	<button>Enviar</button>
       	</form>
      </div>
  );
}

export default Login;
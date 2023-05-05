import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useCookies } from 'react-cookie'
import ApiService from '../../data/ApiService';


export default function Login() {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [token, setToken] = useCookies(['mytoken'])
  let navigate = useNavigate()


  const [users, setUsers] = useState([]); 
  const [clients,setClients] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/django_app/Utilisateur/')
      .then(response => {
         setUsers(response.data)

         //get the client credentials :

         axios.get('http://localhost:8000/django_app/Client/')
         .then((clientData) => setClients(clientData.data))
         .catch((error) => console.log(error))

      })
      .catch(error => console.error(error));
  }, []);

  useEffect(() => {
    var user_token = token['mytoken']
    console.log('Login User token is', user_token)
    console.log('Data type', typeof (token['myId']))

  }, [token])


  const loginBtn = (event) => {
    event.preventDefault();
    let filterUsers = clients.filter((client) => {
        return users.some((user) => user.iduser === client.iduser)
    })
    setUsers(filterUsers)
    console.log(users)
    if (username && password) {
       
    } else {
      console.log('Username and password are required');
    }
  }

  return (
    < div className="relative" >
      <div className="flex flex-col justify-center items-center h-screen fixed inset-0 bg-gray-900 bg-opacity-75">
        <div className="sm:w-1/2 md:w-1/4 lg:w-1/5 bg-white p-10 rounded-xl shadow-lg">
          <h1 className="text-3xl font-bold mb-4 text-center">Login</h1>
          <form >
            <div className="mb-4">
              <label htmlFor="username" className="block font-medium mb-2">
                Username:
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="username"
                  name="username"
                  className="border border-gray-400 p-2 rounded w-full"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block font-medium mb-2">
                Password:
              </label>
              <div className="relative">
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={password}
                  className="border border-gray-400 p-2 rounded w-full"
                  placeholder="Password"

                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="mb-4">
              <a href="#" className="text-purple-700 underline">
                Forgot Password?
              </a>
            </div>
            <button
              onClick={loginBtn}
              className="bg-gradient-to-r from-cyan-500 py-2 px-4 to-blue-600 cursor-pointer text-white rounded w-full"
            >
              Login
            </button>
            <div className="mt-4 text-center">
              Not a member?{' '}
              <a className="text-purple-700 underline"
              >

                <Link to="/signUp">Signup</Link>
              </a>
            </div>
          </form>
        </div>
      </div>
    </div >
  );
}


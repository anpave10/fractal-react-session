import { signInWithEmailAndPassword } from 'firebase/auth'
import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { auth, database } from '../../firebase/firebase.config'
import { FirebaseError } from 'firebase/app'
import { useDispatch } from 'react-redux'
import { setUser } from '../../redux/slices/user.slice'
import { get, ref } from 'firebase/database'
import { TitleComponent } from '../../components/styled-components/TitleComponent'
import TextField from '@mui/material/TextField'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { createUserAdapter } from '../../adapters/user.adapter'

interface LoginInterface{
  email: string
  password: string
}

const Login = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const dispatch = useDispatch()

  const loginValidate = yup.object({
    email: yup.string().email().required().min(4, 'El usuario debe tener más de 4 caracteres'),
    password: yup.string().required().min(4, 'El password debe ser de 4 caracteres a más')
  })

  const formik = useFormik<LoginInterface>({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema:loginValidate,
    onSubmit: async (values: LoginInterface) => {
      const {email, password} = values
      try {
        const response = await signInWithEmailAndPassword(auth, email, password)

        if (response) {
          const userRef = ref(database, `users/${response.user.uid}`)

          const snapshot = await get(userRef)
          if (snapshot.exists()) {
            const userData = snapshot.val()
            const data = createUserAdapter(userData)
            console.log('userDate', data)
            const { firstName, lastName } = data
            dispatch(setUser({
              email: response.user.email,
              id: response.user.uid,
              accessToken: '',
              firstName: firstName,
              lastName: lastName
            }))
          }
        }
        setError('')
        setEmail('')
        setPassword('')
        navigate('/dashboard')
        console.log('response', response)
      } catch (error) {
        if (error instanceof FirebaseError) {
          setError(error.message)
        } else {
          setError('Unknown error: ' + error)
        }
      }
    }
  })

  return (<div>
    <h1>Sign in</h1>
    {/* <TitleComponent bgColor="#321FDD">I'm a styled component</TitleComponent>
    <TitleComponent bgColor="#1FDDB2" fontColor='#110781'>I'm another styled component</TitleComponent> */}
    <form onSubmit={formik.handleSubmit}>
      {/* <TextField  id="outlined-basic" label="Outlined" variant="outlined" /> */}
      {/* <label>Email: </label> */}
      <TextField
        error={formik.touched.email && Boolean(formik.errors.email)}
        id="outlined-error-helper-text"
        label="Email"
        name='email'
        value={formik.values.email}
        onChange={formik.handleChange}
        helperText={formik.errors.email}
      />
      {/* <input name='email' type="text" value={formik.values.email} onChange={formik.handleChange}  /> */}
      {/* <br></br>
      {formik.touched.email && Boolean(formik.errors.email) && <label style={{ color: 'red' }}>{formik.errors.email}</label>} */}
      <br></br>
      <label>Password: </label>
      <input name='password' type="password"  value={formik.values.password} onChange={formik.handleChange} />
      <br></br>
      {formik.touched.password && Boolean(formik.errors.password) && <label style={{ color: 'red' }}>{formik.errors.password}</label>}
      <br></br>
      {
        error && <label style={{ color: 'red' }}>{error}</label>
      }
      <br></br>
      <button type="submit">Sign in</button>
    </form>
    <div>
      <h4> Not a member yet? <button onClick={() => navigate('/sign-up')}>Sign up</button> </h4>
    </div>
  </div>)
}

export default Login
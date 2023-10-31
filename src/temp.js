const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [nameError, setNameError] = useState('');
const [emailError, setEmailError] = useState('');
const [passwordError, setPasswordError] = useState('');

const handleChange = (e) => {
  const { name, value } = e.target;

  // Update the corresponding state based on the input field's name
  if (name === 'name') {
    setName(value);
  } else if (name === 'email') {
    setEmail(value);
  } else if (name === 'password') {
    setPassword(value);
  }
};

const handleSubmit = (e)=>{
  e.preventDefault();
  console.log(
    name,email,password
  );
}

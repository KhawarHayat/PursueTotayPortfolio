import { Typography } from '@mui/material'
import TextField from '@mui/material/TextField';
import React, {useState} from 'react'
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles'
import Map from './Map'
import { gql, useMutation } from '@apollo/client';

// Define mutation
const CREATE_MESSAGE = gql`
mutation CreateMessage($input: MessageInput) {
    createMessage(input: $input) {
      id
    }
  }
`;
const useStyles = makeStyles(() => ({
    contact_main: {
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    contact_input: {
        width: '300px',
        margin: '0 10px'
    },
    contact_textarea: {
        width: '640px',
        margin: '2%'
    }
}))
const Contact = (props) => {
    const classes = useStyles(props)
    const [state, setState] = useState({})
    const handleChange = (e) => {
      setState({
          ...state,
          [e.target.name]: e.target.value
      })
      console.log(state)
    }
    const [create, { data, loading, error }] = useMutation(CREATE_MESSAGE);
    const handleSubmit = (e) => {
       create({variables: { input: {
           author: state.author,
           content: state.message
       } }})
       console.log(data,loading, error)
    }
    return (
        <div className={classes.contact_main}> 
            <Typography variant='h2' component='h2' gutterBottom>Contact Me</Typography>
            <div>
                <TextField className={classes.contact_input} id="author" name='author' type='text' onChange={handleChange} label="Name" variant="outlined" />
                <TextField className={classes.contact_input} id="email" name='email' type='email' onChange={handleChange} label="Email" variant="outlined" />
            </div>
            <TextField
            className={classes.contact_textarea}
                id="outlined-multiline-flexible"
                name='message'
                label="Message"
                multiline
                rows={10}
                onChange={handleChange}
            />
            <Button color='error' variant="outlined" onClick={handleSubmit}>Submit</Button>
            <Map />
        </div>
    )
}
export default Contact
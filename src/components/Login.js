import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';

class Login extends React.Component{
    render(){
        return (
            <Container fixed>
                <div>
                    <h2> Welcome To Monitoring Tool </h2>
                    <h4> Please Login To Your Account </h4>

                    <form>
                        {/* <label>Username</label> */}
                        <TextField id="text" type="text" placeholder="Username" /><br/><br/>
                        <TextField id="text" type="password" placeholder="Password" /><br/><br/>
                        <Button size="small" variant="contained" color="secondary">
                            Log Me In
                        </Button>

                    </form>
                </div>
            </Container>
        );
    }
}

export default Login;
import React from 'react';
import { Button, Label, FormGroup, Form } from 'reactstrap';
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'


let LoginFormRedux = props => {

  return (
    <>
      <form onSubmit={props.handleLogin}>
        <FormGroup>
            <Label htmlFor='username'>Username</Label>
            <Field name='username' component='input' type='text'/>
        </FormGroup>
        <div>
          <Label htmlFor='password'>Password</Label>
          <Field name='password' component='input' type='text'/>
        </div>
        <Button type='submit'>Submit</Button>
      </form>
    </>
  );
}

LoginFormRedux = reduxForm({
  form: 'login'
})(LoginFormRedux)

const mapStateToProps = function(state) {
  return {
    form: state.loginForm
  }
}

export default connect(mapStateToProps)(LoginFormRedux);

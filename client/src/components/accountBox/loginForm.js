import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import classnames from "classnames";
import { Marginer } from '../marginer'
import { BoldLink, BoxContainer, FormContainer, Input, MutedLink, SubmitButton } from '../accountBox/common'

class LoginForm extends Component {
    constructor() {
        super();
        this.state = {
          email: "",
          password: "",
          errors: {}
        };
        
    }   
    componentDidMount() {
        // If logged in and user navigates to Login page, should redirect them to dashboard
        if (this.props.auth.isAuthenticated) {
          this.props.history.push("/dashboard");
        }
      }
    componentWillReceiveProps(nextProps) {
        if (nextProps.auth.isAuthenticated) {
          this.props.history.push("/dashboard"); // push user to dashboard when they login
        }
    if (nextProps.errors) {
          this.setState({
            errors: nextProps.errors
          });
        }
      }
    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
      };
    onSubmit = e => {
        e.preventDefault();
    const userData = {
          email: this.state.email,
          password: this.state.password
        };
    this.props.loginUser(userData); // since we handle the redirect within our component, we don't need to pass in this.props.history as a parameter
      };   
    render(){
        const { errors } = this.state;
        return (
            <BoxContainer>
                <FormContainer noValidate onSubmit={this.onSubmit}>
                    <Input 
                        onChange={this.onChange}
                        value={this.state.email}
                        error={errors.email}
                        id="email"
                        type="email" 
                        placeholder="Email" 
                        className={classnames("", {
                        invalid: errors.email || errors.emailnotfound
                        })}
                    />
                    <Input 
                        onChange={this.onChange}
                        value={this.state.password}
                        error={errors.password}
                        id="password"
                        type="password"
                        placeholder="Password" 
                        className={classnames("", {
                            invalid: errors.password || errors.passwordincorrect
                        })}
                    />
                </FormContainer>
                <Marginer direction="vertical" margin={10} />
                <MutedLink href="#">Forget your password?</MutedLink>
                <Marginer direction="vertical" margin="1.6em" />
                <SubmitButton type="submit">Sign-in</SubmitButton>
                <Marginer direction="vertical" margin="1em" />
                <MutedLink href="#">Don't have an account? <BoldLink href="/customer/access/signup">Sign-up</BoldLink></MutedLink>
            </BoxContainer>
            )
        }
    }


LoginForm.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
  };
  const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
  });
  export default connect(
    mapStateToProps,
    { loginUser }
  )(LoginForm);
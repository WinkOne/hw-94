import React, {Component} from 'react';
import './EditForm.css'
import {connect} from "react-redux";
import FormElement from "../../../components/UI/Form/FormElement";
import Button from "@material-ui/core/Button";
import FormGroup from "@material-ui/core/FormGroup";
import Input from "@material-ui/core/Input";
import {Form} from "reactstrap";
import {Box} from "@material-ui/core";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import {editUser} from "../../../store/action/profileAction";

class EditForm extends Component {
    state = {
        username: '',
        avatar: '',
        displayName: '',
    };

    inputChangeHandler = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };

    fileChangeHandler = event => {
        this.setState({
            [event.target.name]: event.target.files[0]
        })
    };

    submitFormHandler = event => {
        event.preventDefault();

        const formData = new FormData();

        Object.keys(this.state).forEach(key => {
            let value = this.state[key];

            formData.append(key, value);
        });

        this.props.editUser(this.props.id, formData);
    };

    getFieldError = fieldName => {
        try {
            return this.props.error.errors[fieldName].message;
        } catch (e) {
            return undefined;
        }
    };

    boxStyle = {
        minHeight: '1080px',
        paddingTop: '150px'
    };
    cardStyle = {
        width: '95%',
        margin: '0 auto',
        padding: '25px 25px 25px 25px',
    };
    buttonStyle = {
        marginLeft: '40%',
        marginTop: '15px'
    };
    cardHeaderStyle = {
        backgroundColor: '#3f51b5',
        width: '100%%',
        padding: '35px',
        margin: '0 auto',
        boxShadow: '0px 0px 50px 10px rgba(0,0,0,1)',
        loginText: {
            display: 'inline-block',
            color: '#fff',
            margin: '5px 38%',
            textTransform: 'uppercase',
        },
    };

    render() {
        return (
            <Box style={this.boxStyle} className='fon'>
                <Container>
                    <Grid container>
                        <Grid style={{margin: '0 auto'}} item xs={12} lg={5} sm={10} ml={8}>
                            <Card style={this.cardHeaderStyle} component='div'>
                                <Box style={this.cardHeaderStyle.loginText}>
                                    Edit Profile
                                </Box>
                                <Card style={this.cardStyle}>
                                    <Form onSubmit={this.submitFormHandler}>
                                        <FormElement
                                            propertyName="username"
                                            title="Username"
                                            value={this.state.username}
                                            onChange={this.inputChangeHandler}
                                            error={this.getFieldError('username')}
                                            placeholder="Enter username"
                                            autoComplete="new-username"
                                        />
                                        <FormElement
                                            propertyName="displayName"
                                            title="Display Name"
                                            value={this.state.displayName}
                                            onChange={this.inputChangeHandler}
                                            placeholder="Enter display name"
                                            autoComplete="new-displayName"
                                        />
                                        <FormGroup>
                                            <Input onChange={this.fileChangeHandler} type="file" name="avatar"
                                                   id="avatar"/>
                                        </FormGroup>
                                        <Grid>
                                            <Button style={this.buttonStyle} type="submit" color="primary">
                                                Edit
                                            </Button>
                                        </Grid>
                                    </Form>
                                </Card>
                            </Card>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        )
    }
}

const mapStateToProps = state => ({
    error: state.users.registerError,
    loading: state.users.registerLoading,
});

const mapDispatchToProps = dispatch => ({
    editUser: (userData, id) => dispatch(editUser(userData, id))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditForm);
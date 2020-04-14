import React, {Component} from 'react';
import '../../App.css'
import './Main.css'
import {connect} from "react-redux";
import {Container} from "reactstrap";
import {Redirect} from "react-router-dom";



class Main extends Component {
    state = {
        modal: false
    };
    publishedArtist = (id) => {

    };

    componentDidMount() {

    }

    routerHandler = (id) => {
        this.props.history.push('/albums/' + id)
    };
    toggle = () => {
        this.setState({modal: false})
    };
    toggleOpen = () => {
        this.setState({modal: true})
    };
    deleteHandler = (id) => {

    };

    render() {
        if (!this.props.user) {
            return <Redirect to='/login'/>
        } else {
            return (
                <div>
                    <Container>

                    </Container>
                </div>
            )
        }
    }
}

const mapStateToProps = state => {
    return {
        user: state.users.user,
    }
};

const mapDispatchToProps = dispatch => {
    return {}
};
export default connect(mapStateToProps, mapDispatchToProps)(Main);

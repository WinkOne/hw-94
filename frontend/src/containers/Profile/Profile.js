import React, {Component} from 'react';
import './Profile.css'
import {Box} from "@material-ui/core";
import noUserImage from '../../assets/image/nouser.png'
import {connect} from "react-redux";
import Grid from "@material-ui/core/Grid";
import SimpleTabs from "../../components/UI/GridList/GridList";
import RecipeReviewCard from "../../components/UI/GridList/CardList";
import Alert from "@material-ui/lab/Alert";
import FullScreenDialog from "../../components/UI/Modal/Modal";


class Profile extends Component {
    state = {setOpen: false}
    boxStyle = {
        minHeight: '500px',
        borderBottom: '6px solid black',
        position: 'relative'
    };
    userAvatar = {
        border: '6px solid black',
        borderRadius: '50%',
        width: '25%',
        height: '50%',
        img: {
            borderRadius: '50%',
            height: '100%',
            width: '100%'
        },
        position: 'absolute',
        top: '33%',
        right: '38%',
    }

    render() {
        return (
            <>
                <Box style={this.boxStyle} className='fon'/>
                <Box style={this.userAvatar && this.userAvatar}>
                    {this.props.user && this.props.user.avatar ? (
                        <img style={this.userAvatar && this.userAvatar.img}
                             src={'http://localhost:5556/uploads/' + this.props.user.avatar} alt=""/>
                    ) : (
                        <img style={this.userAvatar && this.userAvatar.img} src={noUserImage} alt=""/>
                    )}
                </Box>
                <FullScreenDialog id={this.props.match.params.id}/>
                <Grid container style={{justifyContent: 'space-between', padding: '25px'}}>
                    <Grid item xs={4} style={{marginTop: '0'}}>
                        <SimpleTabs/>
                    </Grid>
                    <Grid item xs={4} style={{marginTop: '12%', width: '100%'}}>
                        <Alert style={{paddingLeft: '18%', marginRight: '2%', marginLeft: '1%'}} icon={false}
                               severity="info">
                            <h2>{this.props.user && this.props.user.displayName}</h2>
                        </Alert>

                        {this.props.user && this.props.user.facebookId ? (
                            <Alert style={{paddingLeft: '18%', marginRight: '2%', marginLeft: '1%'}} icon={false}
                                   severity="info">
                                <h4>You logged in as </h4>
                                <h4>a user from facebook</h4>
                            </Alert>

                        ) : (
                            <Alert style={{paddingLeft: '18%', marginTop: '10px', marginRight: '2%', marginLeft: '1%'}}
                                   icon={false} severity="info">
                                <h2>{this.props.user && this.props.user.username}</h2>
                            </Alert>
                        )}
                    </Grid>
                    <Grid item xs={4}>
                        <RecipeReviewCard/>
                    </Grid>
                </Grid>
            </>
        );
    }
}

const mapStateToProps = state => ({
    user: state.users.user,
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
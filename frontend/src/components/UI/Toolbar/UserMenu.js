import React from 'react';
import Avatar from "@material-ui/core/Avatar";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import {useDispatch} from "react-redux";
import {pushProfile} from "../../../store/action/profileAction";

const UserMenu = ({user, logout}) => {
    const dispatch = useDispatch();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        dispatch(pushProfile(user._id))
        setAnchorEl(null);
    };
    const logoutAndClose = () => {
        handleClick(true);
        logout(true)
    };

    return (
        <>
            <div onClick={handleClick} style={{display: "flex"}}>
                {user.facebookId ? (
                    <Avatar style={{marginRight: '10px'}}
                            src={user.avatar ? user.avatar : "/broken-image.jpg"}/>
                ) : (
                    <Avatar style={{marginRight: '10px'}}
                            src={user.avatar ? 'http://localhost:5556/uploads/' + user.avatar : "/broken-image.jpg"}/>
                )}
                <p style={{marginTop: '10px'}}> Hello, {user.displayName || user.username}!</p>
            </div>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={logoutAndClose}>Logout</MenuItem>
            </Menu></>
    );
};

export default UserMenu;
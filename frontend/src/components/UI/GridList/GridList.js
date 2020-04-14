import React from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
    const {children, value, index, ...other} = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box p={3}>{children}</Box>}
        </Typography>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
}));

export default function SimpleTabs() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                    <Tab label="Item One" {...a11yProps(0)} />
                    <Tab label="Item Two" {...a11yProps(1)} />
                    <Tab label="Item Three" {...a11yProps(2)} />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam beatae consectetur culpa delectus
                deserunt dolor doloremque ducimus ea eius ex explicabo hic ipsa iste iure iusto labore laboriosam libero
                natus nemo nihil nostrum nulla officia officiis perspiciatis placeat quasi qui quia rem repellat
                sapiente, similique sint sit tempore temporibus unde veritatis voluptatem. Animi harum ipsam quibusdam.
                Deleniti deserunt, dicta, dolor dolores exercitationem expedita facilis harum illum incidunt labore
                laboriosam natus nihil nisi obcaecati perferendis placeat possimus quam quis sed sint tempora voluptate
                voluptatibus, voluptatum. A adipisci aperiam beatae, blanditiis consectetur corporis dolore excepturi
                illo iure labore magnam numquam qui voluptates!
            </TabPanel>
            <TabPanel value={value} index={1}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aperiam atque blanditiis consectetur
                consequatur corporis, cupiditate deserunt distinctio doloremque, dolores enim esse eum excepturi facere
                fugiat fugit impedit in itaque magnam magni minima modi nulla odio omnis pariatur provident quaerat qui
                quis quo quos reiciendis sit tempora ullam unde velit veniam voluptatibus! Corporis delectus dolor
                dolores ducimus, earum ex fugiat hic in iusto laborum maiores molestiae, nobis nostrum numquam quam quis
                quod sint sunt tenetur totam ullam ut voluptatem! Accusantium aliquid amet architecto culpa deserunt
                distinctio eligendi eum expedita fuga laborum praesentium provident quis quod rerum, sapiente sunt
                temporibus vel velit. Accusantium ad aperiam architecto, beatae, corporis culpa dignissimos dolorem
                doloremque doloribus exercitationem expedita explicabo facere fugiat, incidunt ipsum iure laudantium
                magnam molestiae neque nihil numquam obcaecati omnis quam recusandae repellendus sequi unde vel? Amet
                distinctio ea eaque ex facere fuga inventore iste quae unde voluptatibus. Accusamus alias asperiores
                beatae commodi dignissimos distinctio dolorem ducimus est ipsa iure magni maxime molestiae mollitia
                necessitatibus nihil odio odit officia praesentium quasi recusandae sint soluta, suscipit, tempore unde
                voluptate! Beatae cupiditate dolore eos laudantium maxime nisi placeat, quae quos repellat, saepe soluta
                veritatis voluptas. A ab accusantium aliquam, aliquid eaque exercitationem ipsum molestiae nemo nobis
                optio quae quis rerum saepe sapiente similique temporibus totam vel voluptatem? Animi assumenda
                consectetur consequatur culpa cupiditate, eos esse excepturi fugiat id inventore labore laudantium
                maxime minus molestiae nihil officiis quas recusandae reprehenderit saepe unde, vitae voluptate
                voluptatem voluptatum. Aliquam eaque facere ipsa iure minima molestiae mollitia officia, provident
                reiciendis vel veniam vitae!
            </TabPanel>
            <TabPanel value={value} index={2}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquam aliquid, asperiores assumenda
                blanditiis culpa debitis dicta distinctio dolor, eos error est exercitationem fugit, illo labore laborum
                libero magni maiores minima molestias nemo nihil nulla obcaecati perferendis perspiciatis qui quibusdam
                quidem quos repellendus repudiandae sed temporibus ut vero. Aspernatur doloremque error iure magnam modi
                molestiae natus obcaecati quibusdam tenetur.
            </TabPanel>
        </div>
    );
}
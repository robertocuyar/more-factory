import React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import BuildMenu from "./BuildMenu";
import MachinesMenu from "./MachinesMenu";
import MiningMenu from "./MiningMenu";
import OrdersMenu from "./OrdersMenu";
import UpgradesMenu from "./UpgradesMenu";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    {children}
                </Box>
            )}
        </div>
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

export default function CenteredTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div>
            <Tabs
                id={"tab-control"}
                value={value}
                onChange={handleChange}
                aria-label="user options tab"
                indicatorColor="primary"
                textColor="primary"
                centered
            >
                <Tab label="Mine" {...a11yProps(0)}/>
                <Tab label="Machines" {...a11yProps(1)} />
                <Tab label="Build" {...a11yProps(2)} />
                <Tab label="Orders" {...a11yProps(3)} disabled />
                <Tab label="Upgrades" {...a11yProps(4)} disabled />
            </Tabs>
            <TabPanel value={value} index={0}>
                <MiningMenu id={"mining-menu"}/>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <MachinesMenu/>
            </TabPanel>
            <TabPanel value={value} index={2}>
                <BuildMenu/>
            </TabPanel>
            <TabPanel value={value} index={3}>
                <OrdersMenu/>
            </TabPanel>
            <TabPanel value={value} index={4}>
              <UpgradesMenu/>
            </TabPanel>
        </div>
    );
}
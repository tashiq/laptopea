import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import { Outlet } from 'react-router';

const drawerWidth = 240;

function Dashboard(props) {
    document.title = 'Laptopea | Dashboard';
    const [currentUser, setCurrentUser] = React.useState('');
    const { user } = useAuth();
    React.useEffect(() => {
        fetch(`https://floating-mountain-42780.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => setCurrentUser(data))
    }, [user])

    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    const { logOut } = useAuth()
    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            {user.email && currentUser.role &&

                <List>
                    <ListItem>
                        <Link to='/home' style={{ textDecoration: 'none', color: 'black' }}>
                            <ListItemText primary={'Home'} style={{ textTransform: 'uppercase' }} /></Link>
                    </ListItem>
                    <ListItem>
                        <Link to='add' style={{ textDecoration: 'none', color: 'black' }}>
                            <ListItemText primary={'Add A Product'} style={{ textTransform: 'uppercase' }} /></Link>
                    </ListItem>
                    <ListItem>
                        <Link to='manageorders' style={{ textDecoration: 'none', color: 'black' }}>
                            <ListItemText primary={'Manage All Orders'} style={{ textTransform: 'uppercase' }} /></Link>
                    </ListItem>
                    <ListItem>
                        <Link to='manageproducts' style={{ textDecoration: 'none', color: 'black' }}>
                            <ListItemText primary={'Manage Products'} style={{ textTransform: 'uppercase' }} /></Link>
                    </ListItem>
                    <ListItem>
                        <Link to='makeadmin' style={{ textDecoration: 'none', color: 'black' }}>
                            <ListItemText primary={'Make An Admin'} style={{ textTransform: 'uppercase' }} /></Link>
                    </ListItem>
                </List>
            }
            {
                user.email && !currentUser.role &&
                <List>
                    <ListItem>
                        <Link to='/home' style={{ textDecoration: 'none', color: 'black' }}>
                            <ListItemText primary={'Home'} style={{ textTransform: 'uppercase' }} /></Link>
                    </ListItem>
                    <ListItem>
                        <Link to='pay' style={{ textDecoration: 'none', color: 'black' }}>
                            <ListItemText primary={'Pay'} style={{ textTransform: 'uppercase' }} /></Link>
                    </ListItem>
                    <ListItem>
                        <Link to='myorders' style={{ textDecoration: 'none', color: 'black' }}>
                            <ListItemText primary={'My Orders'} style={{ textTransform: 'uppercase' }} /></Link>
                    </ListItem>
                    <ListItem>
                        <Link to='review' style={{ textDecoration: 'none', color: 'black' }}>
                            <ListItemText primary={'Review'} style={{ textTransform: 'uppercase' }} /></Link>
                    </ListItem>
                </List>
            }
            <Divider />
            <List>
                {['Logout'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemText primary={text} style={{ textTransform: 'uppercase' }} onClick={logOut} />
                    </ListItem>
                ))}
            </List>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Box>
                    <Outlet />
                </Box>
            </Box>
        </Box>
    );
}

Dashboard.propTypes = {

    window: PropTypes.func,
};

export default Dashboard;

import { AppBar, Toolbar, IconButton, Typography, Button } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
function AppBarComp(){
    return(
        <>
        <AppBar color="secondary">
            <Toolbar>
                <IconButton>
                    <MenuIcon />
                </IconButton>
                <Typography varient="h6">
                    MUI
                 </Typography>
                 <Button>
                     Login
                 </Button>
            </Toolbar>
        </AppBar>
        </>
    );
}

export default AppBarComp;
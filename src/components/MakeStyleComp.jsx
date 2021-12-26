import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyle = makeStyles({
    root:{
        background:'green',
        margin: '10px',
        padding: '15px 30px'
    }
});

function MakeStyleComp(){
    const classes = useStyle();
    return(
        <Button className={classes.root}>Test Button</Button>
    );
}

export default MakeStyleComp;
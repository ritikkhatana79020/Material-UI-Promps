import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

function GridComp(){
    return(
        <Grid container spacing={4} justifyContent='center' style={{margin:5}}>
            <Grid item xs={3} sm={6}>
                <Paper style={{ width:'100%', height:100}}></Paper>
            </Grid>
            <Grid item xs={3} sm={6}>
                <Paper style={{ width:'100%', height:100}}></Paper>
            </Grid>
            <Grid item xs={3} sm={6}>
                <Paper style={{ width:'100%', height:100}}></Paper>
            </Grid>
        </Grid>    
        
    );
}

export default GridComp;
import React from 'react';
import { Container, Grid, AppBar, Toolbar, TextField, Typography } from '@material-ui/core';

const MainPage = ()=>{
    return (
        <>
        <AppBar position="static" style={{marginBottom: 20}}>
            <Toolbar>
                <Typography variant="h6">
                    FTL Assignment | Mani
                </Typography>
            </Toolbar>
        </AppBar>
        <Container maxWidth="sm">
            <Grid container direction="column" alignItems="center">
                <Grid item style={{width: '100%', marginBottom: 50}}>
                    <TextField
                        fullWidth 
                        variant="outlined" 
                        placeholder="Type User Name"/>
                </Grid>
                <Grid item>
                    <p>sdfbhwokm</p>
                </Grid>
            </Grid>
        </Container>
        </>
    )
}

export default MainPage;
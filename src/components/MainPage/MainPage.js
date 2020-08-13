import React from 'react';
import { Container, Grid, AppBar, Toolbar } from '@material-ui/core';

const MainPage = ()=>{
    return (
        <>
        <AppBar position="static">
            <Toolbar></Toolbar>
        </AppBar>
        <Container maxWidth="sm">
            <Grid container direction="column" alignItems="center">
                <Grid item>
                    <p>sdfsdfsf</p>
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
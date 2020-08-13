import React from 'react';
import { Container, Grid, AppBar, Toolbar, TextField, Typography, Card, CardContent } from '@material-ui/core';

const MainPage = () => {
    return (
        <>
            <AppBar position="static" style={{ marginBottom: 20 }}>
                <Toolbar>
                    <Typography variant="h6">
                        FTL Assignment | Mani
                </Typography>
                </Toolbar>
            </AppBar>
            <Container maxWidth="sm">
                <Grid container direction="column" alignItems="center">
                    <Grid item style={{ width: '100%', marginBottom: 50 }}>
                        <TextField
                            fullWidth
                            variant="outlined"
                            placeholder="Type User Name" />
                    </Grid>
                    <Grid item container>
                        <Card style={{ width: '100%' }}>
                            <CardContent>
                                <Grid container justify="space-between">
                                    <p>Name : mani</p>
                                    <p>TimeZone : kumaar</p>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default MainPage;
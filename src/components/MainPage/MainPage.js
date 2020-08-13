import React, { useEffect, useState } from 'react';
import { Container, Grid, AppBar, Toolbar, TextField, Typography, Card, CardContent } from '@material-ui/core';

import userAxios from '../../userAxios'

const MainPage = () => {
    const [user, setUser] = useState([]);

    useEffect(() => {
        userAxios.get("/")
            .then((response) => {
                setUser(response.data)
            })
    }, []);

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
                        {
                            user.map((item) => (
                                <Card style={{ width: '100%' }}>
                                    <CardContent>
                                        <Grid container justify="space-between">
                                            <p>Name : {item.real_name}</p>
                                            <p>TimeZone : {item.tz}</p>
                                        </Grid>
                                    </CardContent>
                                </Card>
                            ))
                        }
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default MainPage;
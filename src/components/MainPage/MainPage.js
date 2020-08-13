import React, { useEffect, useState } from 'react';
import { Container, Grid, AppBar, Toolbar, TextField, Typography, Card, CardContent, Box } from '@material-ui/core';

import userAxios from '../../userAxios'

const MainPage = () => {
    const [user, setUser] = useState([]);
    const [textBoxValue, setTextBoxValue] = useState('');

    const textBoxHandler = (event) => {
        event.preventDefault();
        setTextBoxValue(event.target.value)
    }

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
                            placeholder="Type User Name"
                            onChange={textBoxHandler} />
                    </Grid>
                    <Grid item container>
                        {
                            textBoxValue===''?
                                user.map((item) => (
                                    <CardContainer key={item.id} id={item.id} realName={item.real_name} tz={item.tz}/>
                                )):
                                user
                                    .filter(item=>item.real_name.toLowerCase().includes(textBoxValue.toLowerCase())||item.tz.toLowerCase().includes(textBoxValue.toLowerCase()))
                                    .map(item=>(
                                        <CardContainer key={item.id} id={item.id} realName={item.real_name} tz={item.tz}/>
                                    ))
                        }
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}


function CardContainer(props) {
    return (
        <Card raised style={{ width: '100%', borderBottom: '4px solid #ec2029', marginBottom: 20 }}>
            <CardContent>
                <Grid container justify="space-between">
                    <Grid item style={{ width: '40%' }}>
                        <Box component="div">
                            <Typography variant="caption">Name</Typography>
                        </Box>
                        <Box component="div">
                            <Typography variant="body1">{props.realName}</Typography>
                        </Box>
                    </Grid>
                    <Grid item style={{ width: '40%' }}>
                        <Box component="div">
                            <Typography variant="caption">Time Zone</Typography>
                        </Box>
                        <Box component="div">
                            <Typography variant="body1">{props.tz.split("/").join(" / ")}</Typography>
                        </Box>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default MainPage;
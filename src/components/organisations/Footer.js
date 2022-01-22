import React from 'react';
import { AppBar, Container, Toolbar, Typography, Link } from "@mui/material"

const Footer = () => {

    return (
        <>
            <AppBar
                position="fixed"
                color="primary"
                sx={{ top: 'auto', bottom: 0 }}
            >
                <Container maxWidth="xl">
                    <Toolbar>
                        <Typography variant="body1" color="inherit">
                            created by <Link href='https://github.com/oura-hideyoshi' color={"#FFF"}>とまとみ</Link>
                        </Typography>
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    )
}
export default Footer
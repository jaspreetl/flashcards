'use client'

import { SignIn } from "@clerk/clerk-react";
import { AppBar, Typography, Button, Toolbar, Box, Divider} from "@mui/material"
import { Container } from "@mui/system";
import Link from 'next/link'


export default function SignInPage(){
    return(
        <Container maxWidth='100vw'>
            <AppBar position='static'>
                <Toolbar>
                    <Typography variant='h6' sx={{flexGrow:1,}}>
                        Flashcard SaaS
                    </Typography>
                    <Button color='inherit'>
                        <Link href='/sign-in' passHref>
                            Login
                        </Link>
                    </Button>
                    <Button color='inherit'>
                        <Link href='/sign-up' passHref>
                            Sign Up
                        </Link>
                    </Button>
                </Toolbar>
            </AppBar>

            <Box display='flex' flexDirection='column' alignItems='center' justifyContent='center' gutterBottom>
                <Typography variant='h4' gutterBottom>Sign In</Typography>
                <SignIn></SignIn>
            </Box>

        </Container>
    )
}
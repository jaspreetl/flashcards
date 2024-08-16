'use client'
import Image from "next/image"
import getStripe from "@/utils/get-stripe"
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { Container } from "@mui/system"
import Head from 'next/head'
import Link from 'next/link'
import { AppBar, Typography, Button, Toolbar, Box, Grid } from "@mui/material"



export default function Home() {
  return (
    <Container maxWidth='100vw'>
      <Head>
        <title>Flashcards SaaS</title>
        <meta name="description" content="Create flashcards from your text" />
      </Head>

      <AppBar position="static">
        <Toolbar>
          <Typography variant='h6' style={{ flexGrow: 1 }} >Flashcards SaaS</Typography>
          <SignedOut>
            <Button color='inherit'> 
              <Link href='/sign-in' passHref>Login</Link>
            </Button>
            <Button color='inherit'>
              <Link href='/sign-up' passHref>Sign Up</Link>
            </Button>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </Toolbar>
      </AppBar>
      <Box sx={{ textAlign: 'center', my: 4, }}>
        <Typography variant='h2' gutterBottom>Welcome to Flashcard SaaS</Typography>
        <Typography variable='h5' gutterBottom>
          {' '}
          The easiest way to make cards from your text!
        </Typography>
        <Button variant='contained' color='primary' sx={{ mt: 2 }}>Get Started</Button>
      </Box>
      <Box sx={{ my: 6 }}>
        <Typography variant='h4' gutterBottom>Features</Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant='h6' gutterBottom>Easy text input</Typography>
            <Typography>
              {' '}
              Simply input your text and allow our software to do the rest!
              Creating flashcards has never been easier.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4} gutterBottom>
            <Typography variant='h6'>Smart Flashcards</Typography>
            <Typography>
              {' '}
              Our AI intelligently breaks down your text into concise flashcards, perfect for studying.
            </Typography>

          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant='h6' gutterBottom>Accessible Anywhere</Typography>
            <Typography>
              {' '}
              Access your flashcards from anu device, at any time. Stuudy on the go with ease.
            </Typography>

          </Grid>
        </Grid>
      </Box>
      <Box sx={{ my: 6, textAlign: 'center' }}>
        <Typography variant='h4' gutterBottom>Pricing</Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box sx={{ p: 3, border: '1px solid', borderColor: 'grey.300', borderRadius: 2 }}>
              <Typography variant='h5' >Basic</Typography>
              <Typography variant='h6' gutterBottom>$5/month</Typography>
              <Typography>
                {' '}
                Access to basic flashcard features and limited storage.
              </Typography>
              <Button variant='contained' color='primary' sx={{ mt: 2 }}>Buy</Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ p: 3, border: '1px solid', borderColor: 'grey.300', borderRadius: 2 }}>
              <Typography variant='h5' >Pro</Typography>
              <Typography variant='h6' gutterBottom>$10/month</Typography>
              <Typography>
                {' '}
                Unlimited flashcards and storage, with priority support
              </Typography>
              <Button variant='contained' color='primary' sx={{ mt: 2 }}>Buy</Button>
            </Box>

          </Grid>

        </Grid>
      </Box>
    </Container>
  )
}

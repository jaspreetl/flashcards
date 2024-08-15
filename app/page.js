import Image from "next/image";
import getStripe from "@/utils/get-stripe";
import {SignedIn, SignedOut, Userutton} from '@clerk/nextjs'
import { Container } from "@mui/system";
import { AppBar, Typography } from "@mui/material";



export default function Home() {
  return (
    <Container maxWidth='lg'>
      <Head>
        <title>Flashcards SaaS</title>
        <meta name="description" content="Create flashcards from your text"/>
      </Head>

      <AppBar position="static">
        <Toolbar>
          <Typography variant='h6'>Flashcards SaaS</Typography>
          <SignedOut>
            <Button> Log In</Button>
            <Button> Sign Up</Button>
          </SignedOut>
        </Toolbar>
      </AppBar>
    </Container>
  )
}

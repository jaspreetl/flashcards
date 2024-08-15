import {loadStripe} from '@stripe.stripe-js'

let stripePromise
const getStripe = () => {
    if (!stringPromise) {
        stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY)
    }
    return stripePromise
}

export default getStripe 
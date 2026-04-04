import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

export const config = { api: { bodyParser: false } }

async function buffer(readable) {
  const chunks = []
  for await (const chunk of readable) chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk)
  return Buffer.concat(chunks)
}

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end()

  const buf = await buffer(req)
  const sig = req.headers['stripe-signature']

  try {
    const event = stripe.webhooks.constructEvent(buf, sig, process.env.STRIPE_WEBHOOK_SECRET)

    switch (event.type) {
      case 'payment_intent.succeeded':
        const pi = event.data.object
        console.log('✅ Payment succeeded:', pi.id, pi.metadata)
        // Here you could: update Firestore booking status, send confirmation email, etc.
        break

      case 'payment_intent.payment_failed':
        const failedPi = event.data.object
        console.log('❌ Payment failed:', failedPi.id)
        break

      default:
        console.log(`Unhandled event: ${event.type}`)
    }

    res.status(200).json({ received: true })
  } catch (err) {
    console.error('Webhook error:', err.message)
    res.status(400).json({ error: `Webhook Error: ${err.message}` })
  }
}

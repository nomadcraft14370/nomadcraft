import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })

  try {
    const { amount, vanName, customerEmail, customerName, dates } = req.body

    if (!amount || amount < 100) {
      return res.status(400).json({ error: 'Montant invalide' })
    }

    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(amount * 100), // Stripe uses cents
      currency: 'eur',
      metadata: {
        vanName,
        customerEmail,
        customerName,
        startDate: dates?.[0] || '',
        endDate: dates?.[dates.length - 1] || '',
        nights: String(dates?.length - 1 || 0),
      },
      receipt_email: customerEmail,
      description: `NomadCraft — Location ${vanName}`,
    })

    res.status(200).json({
      clientSecret: paymentIntent.client_secret,
      paymentIntentId: paymentIntent.id,
    })
  } catch (error) {
    console.error('Stripe error:', error)
    res.status(500).json({ error: error.message })
  }
}

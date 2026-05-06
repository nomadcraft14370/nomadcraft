# NomadCraft — Site Web Complet

Site web professionnel pour NomadCraft : location de vans, construction de food trucks, vans aménagés et tiny houses.

## Fonctionnalités

- **Page d'accueil** — Hero immersif, 2 pôles (Location / Construction), témoignages
- **Location de vans** — Catalogue dynamique, calendrier, paiement Stripe en 3 étapes
- **Construction** — Devis interactif (Food Truck, Tiny House) avec estimation instantanée
- **Galerie projets** — Filtrable par catégorie
- **Contact** — Formulaire + infos
- **Admin** (caché) — Gestion complète vans, réservations, devis, projets
- **iCal sync** — Synchronisation Yescapa, Wikicampers, Booking.com
- **Stripe** — Paiement en ligne sécurisé

---

## Installation

```bash
# 1. Cloner le projet
git clone <votre-repo>
cd nomadcraft

# 2. Installer les dépendances
npm install

# 3. Configurer les variables d'environnement
cp .env.example .env
# → Remplir .env avec vos clés (voir section Configuration)

# 4. Lancer en local
npm run dev
# → Ouvrir http://localhost:3000
```

---

## Configuration

### 1. Firebase (Base de données + Auth admin)

1. Aller sur https://console.firebase.google.com
2. Créer un projet "NomadCraft"
3. Activer **Authentication** → Email/Mot de passe
4. Créer un utilisateur admin : `nomadcraft14370@gmail.com`
5. Activer **Firestore Database** → Mode production
6. Copier la config dans `.env` (Paramètres > Général > Vos applications > Web)

### 2. Stripe (Paiements)

1. Créer un compte sur https://dashboard.stripe.com
2. Aller dans Développeurs > Clés API
3. Copier les clés dans `.env`
4. Pour le webhook : Développeurs > Webhooks > Ajouter un endpoint
   - URL : `https://votre-domaine.vercel.app/api/webhook`
   - Événements : `payment_intent.succeeded`, `payment_intent.payment_failed`

### 3. EmailJS (optionnel — emails de confirmation)

1. Créer un compte sur https://www.emailjs.com
2. Configurer un service email (Gmail)
3. Créer des templates pour booking + contact
4. Copier les IDs dans `.env`

---

## Déploiement sur Vercel

```bash
# 1. Installer Vercel CLI
npm i -g vercel

# 2. Se connecter
vercel login

# 3. Déployer
vercel

# 4. Ajouter les variables d'environnement
vercel env add STRIPE_SECRET_KEY
vercel env add VITE_STRIPE_PUBLIC_KEY
# ... (toutes les variables de .env)

# 5. Redéployer avec les variables
vercel --prod
```

Ou via l'interface Vercel :
1. Connecter votre repo GitHub
2. Import Project → sélectionner le repo
3. Ajouter les variables d'environnement dans Settings
4. Deploy

---

## Domaine personnalisé

Dans Vercel > Settings > Domains :
1. Ajouter votre domaine (ex: nomadcraft.fr)
2. Configurer les DNS chez votre registrar :
   - `A` → `76.76.21.21`
   - `CNAME www` → `cname.vercel-dns.com`

---

## Accès Admin

L'admin est caché : **cliquer 5 fois** sur "© 2026 NomadCraft" dans le footer.
Login avec votre email/mot de passe Firebase.

---

## Structure du projet

```
nomadcraft/
├── api/
│   ├── create-payment.js   # Stripe PaymentIntent
│   ├── webhook.js           # Stripe Webhook
│   └── ical-sync.js         # Sync calendriers
├── public/images/           # Photos (food truck, tiny house, van, logo)
├── src/
│   ├── App.jsx              # Application principale
│   ├── main.jsx             # Entry point React
│   ├── firebase.js          # Config Firebase
│   ├── index.css            # Styles
│   └── data/defaults.js     # Données par défaut
├── .env.example             # Template variables
├── vercel.json              # Config déploiement
└── package.json
```

---

## Support

Contact : nomadcraft14370@gmail.com
<!-- trigger redeploy -->

# Dar Zellige — site vitrine de restaurant (démonstration)

Premier site vitrine du portfolio freelance. **Établissement fictif** : adresse,
téléphone et carte sont des exemples, et le pied de page le dit.

Il couvre ce que demandent la plupart des annonces de sites vitrines relevées sur
freelancer.ma (novembre 2026) :

| Demande récurrente | Où c'est dans le site |
|---|---|
| Site en français, anglais **et arabe** | sélecteur FR / EN / عربي ; l'arabe passe la page entière en droite-à-gauche (`dir="rtl"`) |
| Bouton WhatsApp | bouton flottant + formulaire de réservation qui ouvre WhatsApp avec le message déjà rédigé |
| Pages accueil, présentation, contact | une page, sections ancrées : maison, carte, expérience, infos, réservation |
| « Pouvoir modifier moi-même textes et prix » | **tout le contenu est dans `content.js`** : textes des trois langues, carte, prix, horaires, photos |
| Avis clients « si disponibles » | section masquée tant que `reviews` est vide — on n'invente pas d'avis |

## Lancer

Aucune installation : ouvrir `index.html`, ou servir le dossier
(`python -m http.server`) et aller sur `http://localhost:8000`.
Hébergement : n'importe quel hébergeur statique (Netlify, OVH, mutualisé).

## Adapter à un vrai client

1. `content.js` → `config.whatsapp` : numéro avec indicatif, sans « + » (ex. `2126…`).
   Vide en démonstration : le bouton ouvre WhatsApp sans destinataire.
2. `config.phone`, `config.email`, les horaires (`hours`) et la carte (`menu`).
3. **Les photos** — la démonstration utilise 8 photos de **Wikimedia Commons**
   (licences CC BY et CC BY-SA, auteurs crédités dans le pied de page ; détail dans
   `assets/photos/credits.json`). Aucune ne montre un établissement réel nommé.
   Pour un vrai client : remplacer les fichiers de `assets/photos/` par ses photos
   (WebP, ~1 600 px), puis **vider `credits`** dans `content.js`. Une case sans photo
   affiche le motif de zellige dans le ton choisi.
4. Retirer la phrase « établissement fictif » de `footer.demo` et `infos.addressText`.

## Choix de conception

- **Palette « Nature Distilled »** (base ui-ux-pro-max) : terre cuite, sable, crème,
  avec un **vert de zellige** en accent. La palette « restaurant » générique de la
  base (rouge et or) ne disait rien du Maroc ; écartée.
- **Contrastes mesurés** (WCAG), pas estimés : encre/crème 14,5 · terre cuite/crème
  5,5 · blanc/terre cuite 6,2 · crème/zellige sombre 10,5 · blanc/vert WhatsApp 6,3.
  Le safran (4,2 sur fond sombre) n'est utilisé que pour le décor et les grands titres.
- **Typographies** : Playfair Display (titres) + Karla (texte) ; **Noto Naskh Arabic**
  pour l'arabe, titres compris.
- **Propriétés CSS logiques** partout : la mise en page se retourne seule en arabe,
  sans feuille de style séparée.
- Accessibilité : lien d'évitement, focus visible, onglets de la carte au clavier
  (flèches inversées en arabe), erreurs de formulaire à côté du champ et annoncées,
  cibles de 44 px minimum, animations coupées si `prefers-reduced-motion`.

## Passe de finition (skill impeccable, 08/11/2026)

- Retiré les sur-titres au-dessus des titres de section : le titre porte seul.
- Une seule animation d'entrée, échelonnée, sur la galerie — plus la même sur chaque section.
- Anneau de focus vert zellige sur fond clair, safran sur fond sombre (≥ 3:1 partout).
- Sélection de texte, curseur, contrôles de formulaire et chiffres (prix, horaires)
  dans la palette ; photo d'ouverture préchargée.
- Mobile : voile sombre uniforme sur la photo d'ouverture, le texte reste lisible.

## Vérifié le 08/11/2026

- Rendu bureau (1 280 px) en français et en arabe, mobile (375 px) sans défilement
  horizontal.
- Formulaire : envoi vide → trois erreurs (nom, date, heure) ; envoi rempli → lien
  WhatsApp avec le message composé.
- Les trois langues ont exactement les mêmes clés de traduction.

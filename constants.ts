export const TOPIC_SOP_1 = "SOP 1 : Les choses à faire";
export const TOPIC_SOP_2 = "SOP 2 : Les choses à ne PAS faire";
export const TOPIC_SOP_3 = "SOP 3 : L'art du Caption";
export const TOPIC_SOP_4 = "SOP 4 : Hashtags SAFE & UTILES";
export const TOPIC_SOP_5 = "SOP 5 : Généralités Captions & Hashtags";
export const TOPIC_SOP_6 = "SOP 6 : Algorithme IG & Threads";
export const TOPIC_SOP_7 = "SOP 7 : Objectifs du Shift Jour";
export const TOPIC_SOP_8 = "SOP 8 : Warmup Insta Shift Jours";
export const TOPIC_SOP_9 = "SOP 9 : Threads Shift Jours";
export const TOPIC_SOP_10 = "SOP 10 : Objectifs du Shift Nuit";
export const TOPIC_SOP_11 = "SOP 11 : Warmup IG Nuit";
export const TOPIC_SOP_12 = "SOP 12 : Warmup Threads Nuit";

export const PASSING_THRESHOLD = 0.8; // 80% de bonnes réponses pour valider

export const evaluationStructure = [
  {
    title: "Évaluation - Shift Jour",
    topics: [
      TOPIC_SOP_1,
      TOPIC_SOP_2,
      TOPIC_SOP_3,
      TOPIC_SOP_4,
      TOPIC_SOP_5,
      TOPIC_SOP_6,
      TOPIC_SOP_7,
      TOPIC_SOP_8,
      TOPIC_SOP_9,
    ],
  },
  {
    title: "Évaluation - Shift Nuit",
    topics: [
      TOPIC_SOP_10,
      TOPIC_SOP_11,
      TOPIC_SOP_12,
    ],
  },
];

export const allTopicsInOrder = evaluationStructure.flatMap(section => section.topics);

export const SOP_CONTENT: Record<string, string> = {
  [TOPIC_SOP_1]: `
# **À FAIRE **

✔ **Respecter la progressivité**

- J1 → discret
- J4 → premiers posts
- J6 → CTA soft
- J7–8 → rythme stable + préparation Threads

✔ **Maintenir le rôle du compte**

- PHARE → séduction + émotion
- CHAUFFE → désir + teasing
- SOUTIEN → crédibilité + régularité

✔ **Cross-like**

- Toujours **10–15 minutes** après chaque post

✔ **Actions humaines**

- Scroller → 5 à 10 min par session
- Likes espacés de 20–60 sec
- Posts espacés de **2h min**

✔ **Ciblage FR**

- Follow hommes FR
- Commentaires FR
- Pas d’international au début

✔ **Images & vidéos**

- Safe → Soft → Suggestif
- Jamais direct NSFW (Instagram = fragile)

✔ **Stories = régularité**

- Même si petit contenu → exister tous les jours

✔ **Sur Threads**

- Ton simple, phrase courte, authentique
- Conversations > vente
- Engagement rapide si réponse sous 5–10 min

✔ **Enregistrer les retours terrain**

- Performances par type de média
- Ne pas répéter un truc qui flop 3x
`,
  [TOPIC_SOP_2]: `
# À NE PAS FAIRE — Méga important

🚫 **Pas de DM massifs**

→ blocage instantané

🚫 **Pas de lien OF, Telegram ou site externe**

→ bannissement accéléré

🚫 **Pas de hashtags au début**

→ J1 → J5 interdits

→ Autorisés **uniquement Phare à partir de J6** (soft)

🚫 **Pas de follow agressif**

→ max 10–15/j par compte au warm-up

🚫 **Pas de commentaires sur des contenus “sensibles”**

→ Pas sur bikini, seins, etc. = risque classement “adulte”

🚫 **Pas de répétition identique**

→ Pas poster exactement la même chose sur 3 comptes

→ Pas publier trop souvent la même pose

🚫 **Pas de modifications brutales**

- Nom d’utilisateur → 1 seule fois J2–J3
- Bio → évolutive, mais pas chaque jour
- Photo de profil → seulement J2

🚫 **Pas de post en mode “vente cachée”**

### → Trop aggressif = flagged

🚫 **Mass actions la nuit**

# → CM nuit = **préparer et activer**, pas exploser les limites
`,
  [TOPIC_SOP_3]: `
## Rappel : Un bon caption doit faire 3 choses

1️⃣ **Créer une émotion** (envie / curiosité / manque)

2️⃣ **Ouvrir une porte** à l’interaction

3️⃣ **Guider** vers une action (safe)

> Si un caption ne fait rien de tout ça → poubelle 🗑️

# Logique derrière chaque type de Caption

| Type de Caption | Objectif | Pourquoi ça marche | Exemples rapides |
| --- | --- | --- | --- |
| **Storyline** | Attachement affectif | Le fan projette un rôle → fidélité | “Tu me regardes encore ? 😏” |
| **Question** | Commentaires | L’algo adore les réponses | “Team matin ☕ ou nuit 🌙 ?” |
| **Teasing flouté** | Curiosité → clic profil | Promesse implicite | “J’ai fait une bêtise… regarde ma bio 👀” |
| **Détail personnel sexy** | Identification | Fan pense “elle est comme moi” | “J’aime rester en sous-vêtements chez moi…” |
| **Impératif soft** | Action | Petite poussée psychologique | “Regarde ma dernière photo 👆” |
| **Highlight Call** (IG seulement) | Drive trafic interne | Met à l’abri des bans | “Check ma story à la une 🧡” |

✅ **Toujours 1 seule logique par caption**

❌ Jamais tout mélanger

# Ce qu’on ne doit JAMAIS écrire

| Interdit | Raison | Alternatives safe |
| --- | --- | --- |
| “OnlyFans / OF” | Ban instant | “Mon univers privé 👀” |
| “18+ / nudes / sexe” | Meta panique | “Réservé aux grands garçons 😏” |
| CTA trop direct (“Abonne-toi”) | Mauvaise détection | “Tu peux venir me parler 🔒” |
| Prix, contenu explicite | Ban | Émotions, teasing, mystère |

✅ Le but : faire **imaginer**, pas **décrire**

# Structure Caption recommandée (3 lignes max)

> 1️⃣ Question / teasing
> 2️⃣ Petit élément d’émotion/persona
> 3️⃣ **Micro-CTA safe** → profil ou Story à la une

# Différence selon type de compte

| Type de compte | Ton | Risque | CTA |
| --- | --- | --- | --- |
| **PHARE** | Teasing soft | Moyen | Story à la une / Profil |
| **CHAUFFE** | Suggestif + mystérieux | Haut | Bio implicite |
| **SOUTIEN** | Lifestyle + humaniser | Faible | CTAs très légers |
`,
  [TOPIC_SOP_4]: `
# Hashtags SAFE & UTILES

> Moins de hashtags = moins de détection risque

| Pour quoi ? | Nombre | Stratégie |
| --- | --- | --- |
| IG Feed | 3–5 max | ciblés, pas de “sexy” |
| Threads | 0–3 | tendance + lieu |

✅ Hashtags à utiliser

- #fypfr
- #frenchgirl
- #brunette / #blonde (selon)
- #selfieoftheday
- #mooddujour
- #parisienne (ou ville ciblée)

🚫 Hashtags interdits

- #sexygirl #hotgirl #nsfw #onlyfans
→ **shadowban** direct
`,
  [TOPIC_SOP_5]: `
# INTRO – Caption & Hashtags : Pourquoi c’est vital ?
Un beau contenu sans bon texte, c’est comme un date sans regard : tu passes à côté de tout.
Sur Instagram & Threads, les **captions** et **hashtags** servent à :
| Caption | Hashtags |
| --- | --- |
| Créer **le désir** / la curiosité | Faire **remonter l’algo** |
| Donner une **raison d’interagir** | Amener du **trafic ciblé** |
| Faire imaginer quelque chose de **privé** | **Protéger le compte** du shadowban |
Si la caption ne **donne pas envie**, le post ne sert à rien.
Si les hashtags sont **interdits**, le compte prend un coup de pelle 🪦

# La logique simple pour une caption puissante
Chaque caption doit générer **au moins 2 des 3 leviers** :
| Leviers | Ce que ça doit déclencher | Exemple simple |
| --- | --- | --- |
| **Émotion** | Faire ressentir quelque chose | «Tu me regardes comme ça…» |
| **Interaction** | Pousser à commenter/liker | «Tu préfères… 1 ou 2 ? 👀👇» |
| **Curiosité** | Donner envie de voir + | «La suite ? 👀 👉 profil» |
**L’objectif final = clic sur le profil**
Doucement, naturellement, sans CTA trop explicite.

# Types de captions selon objectif
| Objectif | Caption idéale | Exemple |
| --- | --- | --- |
| **Engagement** | Question rapide | «Soir ou matin ? 😏» |
| **Mystère** | Suggestion | «Je n’aurais pas dû poster ça…» |
| **Fantasme soft** | Promesse implicite | «J’adore quand on me regarde comme ça…» |
| **Conversion** | Teasing vers “ailleurs” | «Je ne montre pas tout ici…» |
**Règle d’or** : phrases courtes, respirées, naturelles.
Le cerveau adore → l’algo aussi.

# Choses à NE JAMAIS faire en caption
| Interdit | Pourquoi ? |
| --- | --- |
| Mots sexuels explicites («sexe», «nude», «penetration», etc) | Ban direct, reach 0 |
| Mentionner OnlyFans / vente directe | Meta = 👮‍♂️🚓 |
| 3+ emojis 🔞 par phrase | Signal “contenu adulte” |
| Accumuler 20 hashtags | Signal spam |
Si c’est trop chaud → **le mettre en sous-entendu** 😏

# ✅ Hashtags : logique safe & efficace
| Type | Rôle |
| --- | --- |
| **Géolocalisés** (ex : #parisgirl) | Attirer du local & français |
| **Niche lifestyle** (ex : #fashiondaily) | Faire naturel pour Meta |
| **Micro-tendance** (ex : #weekendmood) | Bonus d’exposition court terme |
**Maximum 5–8 hashtags** → c’est optimal et discret
Jamais de hashtags NSFW (ex : #sexygirl, #nsfw…) → Ce sont des pièges à ban
`,
  [TOPIC_SOP_6]: `
# **Comprendre l’algorithme IG & Threads**

## **1️⃣ Objectif de l’algorithme**
- Montrer à chaque utilisateur **le contenu qu’il aime le plus**
- Récompenser le **contenu engageant et naturel**
- Filtrer le **spam, les contenus NSFW ou liens directs**

## **2️⃣ Critères principaux d’évaluation**
### **🔹 Engagement**
- Likes, commentaires, reposts/sauvegardes
- Plus le contenu reçoit d’engagement **rapidement**, plus il est boosté
### **🔹 Temps passé sur le contenu**
- Reels / threads lus jusqu’au bout → signal fort
- Scroll rapide → signal faible
### **🔹 Interactions passées**
- Utilisateur qui interagit régulièrement avec ton compte → score +
- Contenu similaire à ce qu’il a aimé → boost
### **🔹 Récence & fréquence**
- Contenu récent = prioritaire
- Publier trop d’un coup = risque d’alerte spam
### **🔹 Comportement “humain”**
- Likes et follows progressifs
- Cross-likes entre comptes de façon **naturelle**
- Pas de flood de hashtags (+ de 7 # pour chaque post)
### **🔹 Type de contenu**
- IG : Reels > feed > stories
- Threads : textes courts + images, reposts
- Les contenus immersifs et engageants sont favorisés
### **🔹 Hashtags & mots-clés**
- Hashtags ciblés (FR 19–57 ans) → visibilité
- Hashtags génériques ou NSFW → risque shadowban

## **3️⃣ Différences Instagram vs Threads**
| Critère | Instagram | Threads |
| --- | --- | --- |
| Format privilégié | Reels > feed > stories | Threads texte + images / reposts |
| Engagement clé | Likes, comments, shares, saves | Likes, replies, reposts, read time |
| Découverte | Explore, hashtags, Reels | Flux algorithmique, interactions suivis |
| Risque Meta | Strict : NSFW, spam, liens | Moins strict, privilégie contenu safe |
| Cross-interaction | Like/comment entre comptes | Like/comment sur phares/chauffe |
`,
  [TOPIC_SOP_7]: `
## **Objectif Opérationnel Global — Shift Jour (IG + Threads)**

### **Objectifs principaux**
1. **Installer et stabiliser la présence organique des comptes**
    - Construire la crédibilité des profils via une activité régulière, naturelle et humaine.
    - Montrer à l’algorithme une utilisation saine : scroll, like, publication, interaction.
    - Créer une “base comportementale” pour que chaque compte soit reconnu comme authentique.
2. **Structurer la montée en puissance progressive du réseau**
    - Démarrage neutre (J1–J3), puis accent sur l’identité (J4–J5), séparation des rôles à partir du **J6 (Phare / Chauffe / Soutien)**.
    - Threads ne prend le relais que **quand IG a déjà créé la crédibilité du compte** (J7–J8).
3. **Créer un maillage interne cohérent**
    - Cross-like / cross-comment constant entre les 5 comptes d’un même iPhone.
    - Maintien d’une activité équilibrée : 70 % interne / 30 % externe.
    - Synchronisation des publications IG → Threads pour cohérence de ton et de fréquence.
4. **Préparer le terrain pour la conversion (à partir du J8)**
    - Familiariser l’audience avec la personnalité, le ton et le style du compte.
    - Introduire subtilement les CTA “soft” à partir du J6 (selon catégorie).
    - Préparer le transfert naturel vers les plateformes finales (Uncove, OF).

### **Règles de synchronisation IG ↔ Threads**
- Pas de duplication directe : le ton est le même, mais la **forme change** (IG = visuel / Threads = texte).
- Threads ne reprend jamais les stories IG, mais peut **prolonger leur ton**.
- Cross-like systématique dans les **10–15 min** après chaque publication.

### **À ne pas faire pendant le shift jour**
| Interdiction | Pourquoi |
| --- | --- |
| Hashtags ou liens externes (J1–J5) | Risque de flag prématuré |
| Like/Follow massif | Shadowban potentiel / incohérence horaire |
| Post NSFW, suggestif trop tôt | Bloque la crédibilité warm-up |
| Automatisation (bot / app externe) | Risque de blocage immédiat |
| Repost identique entre IG et Threads | Détection de doublon / perte de portée |

### **Objectif final du shift jour**
À la fin de chaque journée, le réseau doit :
- Maintenir **une cohérence d’activité** visible.
- Avoir fait progresser la **courbe de confiance algorithmique**.
- Générer un petit flux organique d’impressions + interactions authentiques.
- Et **préparer naturellement le relais du shift nuit**.
`,
[TOPIC_SOP_8]: `
### J0 – Activation douce
- Se connecter au compte sur l’iPhone.
- Vérifier : mail, 2FA, récupération OK.
- Scroller le feed 10–15 min (simuler comportement normal).
- Suivre 3–5 comptes “safe” (marques, célébrités, pas d’adult).
- Ne pas liker, ne pas commenter.
- Ne pas ajouter photo de profil ni bio encore.
- Ne **rien changer** d’autre pendant 12h.
> Objectif : réchauffer le fingerprint et “humaniser” la navigation.

### J1 — Première personnalisation
- Changer le **nom d’utilisateur** (username) → nouveau pseudo humain, pas trop “chaud” (ex : *camila.ofr*).
- Ajouter **photo de profil neutre** (portrait safe ou lifestyle).
- Ajouter **bio légère et safe** (ex : « nouvelle ici 🌸 » ou « juste moi 💋 »).
- Faire 1 story simple (photo random ou quote lifestyle).
- Liker 5 posts (espacés de 30s).
- Suivre 10 comptes (influenceurs, marques, etc.).
- Pas encore de publication principale.

### J2 — Première vraie activité
- Publier **1 post** (photo lifestyle, pas sexy, caption neutre).
- Liker 10–15 posts espacés (toujours lifestyle).
- Suivre 10–15 nouveaux comptes.
- Visionner 3–5 Reels sans interagir (scroll normal).
- Répondre à 1–2 commentaires si naturels.
- Créer 1 **story courte (même visuel que post si besoin)**.
> Objectif : Instagram reconnaît un comportement “normal” d’utilisateur actif.

### J3 — Engagement léger
- 1 **nouvelle story** (boomerang, selfie léger, quote).
- Liker 20 posts (espacés 1 min).
- Commenter 2–3 publications “non sensibles”.
- 1 **publication lifestyle soft** (caption simple, emojis).
- Cross-like entre comptes du même modèle (⚠️ attendre 10 min entre comptes).
- Suivre 10 nouveaux comptes safe.

### J4 — Intégration des comptes chauffe/soutien
- Publication 1 **post chauffe soft** (pas sexy, mais plus suggestif).
- Cross-like / cross-comment entre les 5 comptes.
- 1–2 stories “journée” (ex : café ☕ + emoji).
- Like 20–25 publications du feed + 5 reels.
- Commencer à follow des comptes hommes FR (public cible, sans excès).
- Ne pas encore utiliser hashtags ni tag externes.

### J5 — Premier CTA indirect
- Publication 1 **photo / short clip engageante** (légèrement suggestif, safe).
- 1–2 stories dans la journée (“journée”, pose naturelle, emoji).
- Likes 25–30 publications + 10 reels.
- Cross-like / cross-comment 10–15 min après post.
- Follow 10–15 comptes hommes FR.

### J6 – Préparation Threads
- **Phare**
    - 1 post sexy-safe / story teasing Threads
    - Likes/commentaires 30
    - Mise en place linktree et bio adapté
- **Chauffe / Soutien**
    - Post soft ou repost
    - Cross-like phares 10–15 min
    - Mise en place bio de redirection vers compte phares
> **Objectif** : préparer migration vers Threads, renforcer visibilité

### J7 — Routine stable
- **Phare**
    - 1–2 posts / jour
    - Story avec CTA du matin / midi
    - Likes/commentaires 30–35
    - Cross-like chauffe / soutien
- **Chauffe**
    - 1 post / jour + story
    - Cross-like phares
- **Soutien**
    - 1 post / 2 jours
    - Cross-like phares / chauffe
> **Objectif** : routine prête, comptes “échauffés” pour Threads

### J8 – Préparation Threads (Exemple de planning)
| Heure 🇲🇬 | Heure 🇫🇷 | Plateforme | Compte | Type de post | Interaction / action CM | Objectif | Prime Time |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 10h | 8h | Story + Threads | Phares | Mood / émotion du matin | Likes/comment légers, veille tendance | Fidélisation / lien perso | ❌ |
| 12h | 10h | Threads | Chauffe | Caption teasing / mini pose | Cross-like/comment sur phares | Reach midi, relance flux | ❌ |
| 14h | 12h | Instagram feed | Phares | Photo teasing / short clip | Likes/comment CM + cross-like chauffe/soutien | Relancer engagement, teaser conversion | ⚠️ pré-prime |
| 16h | 14h | Threads | Soutien | Mini caption / repost | Likes/comment phares | Amplification reach | ❌ |
`
,
[TOPIC_SOP_9]: `
### J1 – Activation
- **PHARE**: Post léger mood + image soft, Like 15–20 posts FR, Cross-like/comment sur chauffe et soutien, Follow 5 comptes ciblés FR. **À ne pas faire**: Pas de hashtags, pas de lien, pas de DM.
- **CHAUFFE**: Post soft / suggestion (texte+image), Cross-like sur comptes phares, Like 10–15 posts externes.
- **SOUTIEN**: Post lifestyle ou repost, Cross-like sur phares, Like 10 posts externes. **À ne pas faire**: Pas de contenu provoc.

### J2 – Installation
- **PHARE**: Post mood / image tendance, Like 15–25 posts externes, Cross-like chauffe/soutien, Follow 5–7 comptes ciblés, CTA subtil texte.
- **CHAUFFE**: Mini teasing / suggestion, Cross-like phares, Likes 10–15 posts externes.
- **SOUTIEN**: Post lifestyle / repost, Cross-like phares, Like 10 posts externes.

### J3
- **PHARE**: Post texte+image 1 fois (morning mood ou teasing), Cross-like chauffe/soutien, Like 20 posts externes.
- **CHAUFFE**: Post soft 1 fois, Cross-like phares, Likes 10–15 posts externes.
- **SOUTIEN**: 1 post léger tous les 2 jours, Cross-like / comment comptes phares & chauffe, Likes : 5 posts par jour, Follow : très léger, ciblé FR, CTA : optionnel, safe.

### J4
- **PHARE**: 1 post mood / teasing léger, Cross-like / comment chauffe & soutien, Likes : 10–12 posts, Follow : progressif, CTA : subtil.
- **CHAUFFE**: 1 post léger / teasing soft par jour, Cross-like / comment comptes phares, Likes : 5–10 posts par jour, Follow : léger, ciblé FR, CTA : subtil, safe.
- **SOUTIEN**: 1 post léger tous les 2 jours, Cross-like / comment comptes phares & chauffe, Likes : 5 posts par jour, Follow : très léger, ciblé FR, CTA : optionnel, safe.

### J5
- **PHARE**: 2 post teasing, Cross-like / comment chauffe & soutien, Likes : 12–15 posts, Follow : progressif, CTA : léger, safe.
- **CHAUFFE**: 1 post léger / teasing soft par jour, Cross-like / comment comptes phares, Likes : 5–10 posts par jour, Follow : léger, ciblé FR, CTA : subtil, safe.
- **SOUTIEN**: 1 post léger tous les 2 jours, Cross-like / comment comptes phares & chauffe, Likes : 5 posts par jour, Follow : très léger, ciblé FR, CTA : optionnel, safe.

### J6
- **PHARE**: 2 post teasing, Cross-like / comment chauffe & soutien, Likes : 15 posts, Follow : progressif, CTA : hashtags soft facultatifs.
- **CHAUFFE**: 1 post léger / teasing soft par jour, Cross-like / comment comptes phares, Likes : 5–10 posts par jour, Follow : léger, ciblé FR, CTA : subtil, safe.
- **SOUTIEN**: 1 post léger tous les 2 jours, Cross-like / comment comptes phares & chauffe, Likes : 5 posts par jour, Follow : très léger, ciblé FR, CTA : optionnel, safe.

### J7
- **PHARE**: 3 post teasing, Cross-like / comment chauffe & soutien, Likes : 15 posts, Follow : progressif, CTA : intégré, vérifier engagement.
- **CHAUFFE**: 1 post léger / teasing soft par jour, Cross-like / comment comptes phares, Likes : 5–10 posts par jour, Follow : léger, ciblé FR, CTA : subtil, safe.
- **SOUTIEN**: 1 post léger tous les 2 jours, Cross-like / comment comptes phares & chauffe, Likes : 5 posts par jour, Follow : très léger, ciblé FR, CTA : optionnel, safe.

### J8
- **PHARE**: 4 post teasing / repost contenu précédent, Cross-like / comment chauffe & soutien, Likes : 15 posts, Follow : confirmer type de compte final (phare / chauffe / soutien), CTA : engageant, safe.
- **CHAUFFE**: 1 post léger / teasing soft par jour, Cross-like / comment comptes phares, Likes : 5–10 posts par jour, Follow : léger, ciblé FR, CTA : subtil, safe.
- **SOUTIEN**: 1 post léger tous les 2 jours, Cross-like / comment comptes phares & chauffe, Likes : 5 posts par jour, Follow : très léger, ciblé FR, CTA : optionnel, safe.

### J8 – Planning Threads (Exemple)
| Heure 🇲🇬 | Heure 🇫🇷 | Plateforme | Compte | Type de post | Interaction / action CM | Objectif | Prime Time |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 10h | 8h | Story + Threads | Phares | Mood / émotion du matin | Likes/comment légers, veille tendance | Fidélisation / lien perso | ❌ |
| 12h | 10h | Threads | Chauffe | Caption teasing / mini pose | Cross-like/comment sur phares | Reach midi, relance flux | ❌ |
| 14h | 12h | Instagram feed | Phares | Photo teasing / short clip | Likes/comment CM + cross-like chauffe/soutien | Relancer engagement, teaser conversion | ⚠️ pré-prime |
| 16h | 14h | Threads | Soutien | Mini caption / repost | Likes/comment phares | Amplification reach | ❌ |

### Règles générales pour tous les comptes Threads pendant warmup
- Posts espacés, 2h de marge minimum.
- Actions progressives pour éviter shadowban (likes, follow, cross-comment).
- Cross-actions → like/comment sur phares ou chauffe dans 10–15 min après publication.
- CTA subtil dans chaque post.
`,
[TOPIC_SOP_10]: `
## **Objectif Opérationnel Global — Shift Nuit (Threads)**

Le **shift nuit** a pour objectif de **maintenir l’activité des comptes pendant les heures creuses** afin d’éviter toute chute de reach et d’algorithme.

Il agit comme un **pont stratégique** entre la fin du shift jour (17–18h) et le redémarrage matinal (7–8h), en consolidant la présence et la cohérence du réseau.

---

### **Objectifs principaux**

1. **Stimulation algorithmique continue**
    - Maintenir le flux de likes, commentaires et publications légères pour conserver la dynamique de reach.
    - Éviter tout “trou d’activité” qui ferait retomber la visibilité organique.
2. **Renforcement du maillage interne**
    - Augmenter les cross-interactions entre comptes (phares ↔ chauffe ↔ soutien).
    - Préparer les threads à relancer le reach dès le matin avec un socle d’activité nocturne.
3. **Pré-chauffe de l’audience FR & internationale**
    - Exploiter le décalage horaire (Madagascar / France) pour tester les contenus auprès des utilisateurs actifs tard dans la nuit.
    - Identifier les créneaux de micro-trafic récurrents.
4. **Optimisation de la crédibilité des comptes**
    - Simuler une activité humaine fluide (pas de rafales, pas de bots).
    - Stabiliser les comportements pour renforcer la “confiance” de l’algo Threads.

---

### **Principes d’exécution**

- Aucune publication lourde ni visuelle : uniquement des **posts courts ou réactions**.
- Actions espacées, rythme humain : **1 à 2 interactions/minute max**.
- Cross-actions ciblées : chauffe et soutien boostent les phares, jamais l’inverse.
- Objectif de **synergie fluide**, pas de croissance brute.

---

## **À éviter absolument**

- Aucune publication d’image ou contenu NSFW.
- Aucune réponse répétée type bot / copier-coller.
- Pas de hashtags ni de liens.
- Pas de follow massif (max 3 à 5 si nécessaire).
- Aucune interaction sur posts étrangers hors niche FR (sauf test spécifique).
`,
[TOPIC_SOP_11]: `
### J0 – Activation douce
*(shift jour a déjà fait activation)*
- Vérification rapide des comptes sur iPhone
- Scroll normal feed 10–15 min
- Pas de post, like, comment ou follow supplémentaire
Objectif : conserver fingerprint “humain”

### J1 — Première personnalisation
*(shift jour a déjà modifié nom, bio, photo de profil)*
- Scroll feed 10–15 min
- Like 5–10 posts safe espacés
- Pas de post supplémentaire
Objectif : continuité activité naturelle

### J2 — Première vraie activité
- Scroll feed + visionnage 3–5 Reels
- Like 10–15 posts safe
- Follow 5–10 comptes FR ciblés (hommes 19–57) espacés
- Pas encore de post principal
Objectif : renforcement comportement normal

### J3 — Engagement léger
- 1 story courte (boomerang, selfie léger, quote)
- Like 15–20 posts espacés
- Commenter 1–2 posts safe espacés
- Pas de post principal
Objectif : humaniser compte

### J4 — Intégration des comptes chauffe/soutien
- Scroll feed 10–15 min
- Like 10–15 posts + 3–5 Reels espacés
- Follow 5–10 comptes safe espacés
- 1 story simple avec CTA discret
- Pas encore de post principal supplémentaire
Objectif : préparer arrivée des comptes chauffe / soutien

### J5 — Premier CTA indirect
- Publier 1 post léger / photo ou short clip safe
- Story courte avec CTA subtil (ex : emoji, question neutre)
- Like 20–25 posts + 5–10 Reels espacés
- Follow 10 comptes FR ciblés espacés
- Objectif : montrer activité normale et engager doucement

### J6 – Préparation Threads
**Phare**
- Publier 1 post principal + 1 story avec CTA
- Like / commenter 25–30 posts ciblés espacés
- Cross-like / cross-comment comptes chauffe / soutien après 10–15 min
- Follow 10 comptes FR ciblés espacés
**Chauffe**
- Publier 1 post léger (photo / mini teaser)
- Cross-like / comment sur posts phares  apres 10–15 min
- Like / commenter 10–15 posts safe espacés
- Follow 7 comptes FR ciblés espacés
**Soutien**
- Publier 1 post tous les 2 jours (photo lifestyle / repost)
- Cross-like / comment posts phares / chauffe
- Like 10–15 posts safe espacés
- Follow 5 comptes FR ciblés espacés
Objectif : finaliser la séparation et préparer flux constant

### J7 — Routine stable
**Phare**
- 1–2 posts / jour + 1 story avec CTA
- Like / commentaire 30–35 posts ciblés
- Cross-like chauffe / soutien 10–15 min
- Follow 15 comptes FR ciblés espacés
**Chauffe**
- 1 post / jour + story courte
- Cross-like phares
- Follow 7 comptes FR ciblés espacés
**Soutien**
- 1 post tous les 2 jours
- Cross-like phares / chauffe
- Follow 5 comptes FR ciblés espacés
Objectif : routine prête pour migration vers Threads

### J8 – Préparation Threads
| Heure 🇲🇬 (Post Threads sur compte Phare) | Heure 🇫🇷 | Plateforme | Compte | Type de post ( a titre d’exemple) | Interaction / action CM | Objectif | Prime Time |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 18h | 16h | Threads | Phares | Story confession / flirt | Likes/comment légers | Pré-prime time, créer tension | ⚡ prime time |
| 20h | 18h | Instagram Reel | Phares | Reel sexy GFE + caption engageante | Cross-like chauffe/soutien 10–15 min | Pic engagement, conversion DM | ⚡ prime time |
| 21h | 19h | Threads | Chauffe | Post teasing | Likes/comment phares | Maintien flux organique soir | ⚡ prime time |
| 22h | 20h | Instagram feed | Soutien | Photo lifestyle / teasing | Cross-like/comment phares | Amplification soir | ⚡ prime time |
| 23h | 21h | Story intime + Threads | Phares | Confession nocturne / flirt | Likes/comment chauffe/soutien | Conversion douce / fidélisation | ⚡ prime time |
| 00h | 22h | Threads | Chauffe/soutien | Caption léger / repost | Cross-like/comment phares | Pic reach nocturne | ⚠️ |

### **INTERACTIONS SHIFT NUIT (SAFE)**
| Action | Limite / CM | Note |
| --- | --- | --- |
| Likes | 30-50 | Inclut cross-like tous comptes |
| Comments | 10-25 | Variés, emojis naturels |
| Follows | 10-25 | Espacé, ciblage FR 19–57 ans |
| Scroll / veille | Illimité | Hashtags, top posts, trends |
| DM | 0 | Pris par chatteurs |
| Posts | Selon planning | Phare 1–2/j, chauffe 1/j, soutien 1/2j |
| Cross-actions | 10–15 min | Toujours espacer entre comptes |
`,
[TOPIC_SOP_12]: `
### J1 – Activation
- Scroll 10–15 min dans le feed (pas de like massif).
- Like 5–10 posts FR safe (influence, lifestyle).
- Ne pas publier, ne pas commenter.
- Ne pas suivre plus de 3 comptes.
- **À ne pas faire :** hashtag, lien, cross-like, DM.
> Objectif : activer le compte en douceur pour faire croire à un nouvel utilisateur humain.

### J2 – Installation
- Publier 1 post léger (quote ou photo lifestyle safe).
- Like 10–15 posts FR.
- Follow 5 comptes FR safe.
- Cross-like pas encore activé.
> Objectif : démarrer un comportement de créateur normal, pas de pattern CM visible.

### J3
- 1 post texte + image légère .
- Like 10–15 posts FR.
- Follow 5 nouveaux comptes FR.
- Commencer à liker 1–2 posts entre vos propres comptes si ça paraît naturel.
> Objectif : amorcer la boucle d’engagement sans laisser de trace algorithmique artificielle.

### J4
- 1 post soft (caption teasing ou quote).
- Like 15–20 posts FR.
- Commencer les cross-like légers entre comptes (2–3 max).
- Follow 5–7 comptes ciblés FR.
> Objectif : réchauffer les interactions internes, préparer la future séparation.

### J5
- 1 post mood + image soft.
- Like 20 posts FR externes.
- Cross-like / comment léger entre tous les comptes.
- Follow 5–7 comptes FR masculins (18–50 ans, actifs).
- Aucun lien, aucun hashtag.
> Objectif : engagement organique crédible et diversification du feed.

### J6
### **PHARE**
- 2 posts teasing ou mood.
- Like 15 posts externes.
- Cross-like / comment sur Chauffe & Soutien (dans les 10–15 min après post).
- Follow 5–7 comptes FR ciblés (hommes).
- CTA subtil (ex : “trop calme ce soir 😌”).
> Créer visibilité + amorcer autorité du compte.
### **CHAUFFE**
- 1 post soft / teasing léger.
- Like 5–10 posts FR.
- Cross-like sur comptes phares.
- Follow léger (3–5 comptes FR).
- CTA safe (“tu dors pas toi ? 👀”).
> Maintenir cohérence avec les phares sans les doubler.
### **SOUTIEN**
- 1 post léger ou repost.
- Like 5 posts FR.
- Cross-like / comment sur phares et chauffe.
- Follow minimal (1–3 comptes).
- CTA optionnel.
> Crédibiliser la présence réseau autour des comptes phares.

### J7
### **PHARE**
- 3 posts teasing / mood.
- Like 15 posts externes.
- Cross-like / comment Chauffe & Soutien (dans les 15 min).
- Follow progressif.
- CTA intégré dans le ton du post.
> Installer rythme et attractivité stable.
### **CHAUFFE**
- 1 post teasing soft.
- Cross-like sur phares.
- Like 5–10 posts FR.
- Follow 3–5 comptes FR.
- CTA subtil.
### **SOUTIEN**
- 1 post léger tous les 2 jours.
- Cross-like / comment phares & chauffe.
- Like 5 posts FR.
- Follow très léger.
- CTA safe, facultatif.

### J8
### **PHARE**
- 4 posts teasing / repost du contenu performant.
- Cross-like / comment Chauffe & Soutien.
- Like 15 posts FR.
- Follow → confirmer type final (phare/chauffe/soutien).
- CTA engageant, toujours safe.
> Simuler un compte très actif avant intégration à la routine globale.
### **CHAUFFE**
- 1 post teasing soft.
- Cross-like / comment phares.
- Likes 5–10 posts FR.
- Follow 3–5 comptes FR.
- CTA discret.
### **SOUTIEN**
- 1 post léger tous les 2 jours.
- Cross-like / comment phares & chauffe.
- Likes 5 posts FR.
- Follow minimal.
- CTA optionnel, safe.

### J8 – Préparation Threads
| Heure 🇲🇬 (Post Threads sur compte Phare) | Heure 🇫🇷 | Plateforme | Compte | Type de post ( a titre d’exemple) | Interaction / action CM | Objectif | Prime Time |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 18h | 16h | Threads | Phares | Story confession / flirt | Likes/comment légers | Pré-prime time, créer tension | ⚡ prime time |
| 20h | 18h | Instagram Reel | Phares | Reel sexy GFE + caption engageante | Cross-like chauffe/soutien 10–15 min | Pic engagement, conversion DM | ⚡ prime time |
| 21h | 19h | Threads | Chauffe | Post teasing | Likes/comment phares | Maintien flux organique soir | ⚡ prime time |
| 22h | 20h | Instagram feed | Soutien | Photo lifestyle / teasing | Cross-like/comment phares | Amplification soir | ⚡ prime time |
| 23h | 21h | Story intime + Threads | Phares | Confession nocturne / flirt | Likes/comment chauffe/soutien | Conversion douce / fidélisation | ⚡ prime time |
| 00h | 22h | Threads | Chauffe/soutien | Caption léger / repost | Cross-like/comment phares | Pic reach nocturne | ⚠️ |

### **Règles générales shift nuit Threads**
- Espacer les posts de **2 h minimum**.
- Cross-actions → 10–15 min après chaque post (jamais en rafale).
- Ne jamais lancer un thread en même temps sur tous les comptes.
- Ne pas liker plus de **30 posts/h** au total.
- Ne pas follow plus de 30 compte / shift
- CTA toujours safe et implicite.
- Les hashtags ne peuvent apparaître qu’à partir de **J6**.
`
};

// ─────────────────────────────────────────────────────────────────────
// Framework : "The Path to Senior Product Designer" — Artiom Dashinsky
// 6 pillars × 15 sous-compétences × 3 niveaux cibles (mid / senior / staff)
// ─────────────────────────────────────────────────────────────────────

const LEVELS = {
  mid: {
    id: 'mid',
    label: 'Mid / Confirmé',
    short: 'Mid',
    description: 'Tu livres des projets de taille moyenne avec guidance. Tu cherches à devenir autonome sur des projets plus ambitieux.',
  },
  senior: {
    id: 'senior',
    label: 'Senior',
    short: 'Senior',
    description: 'Tu pilotes des projets complexes en autonomie. Tu veux augmenter ton impact stratégique et influencer au-delà de ton équipe.',
  },
  staff: {
    id: 'staff',
    label: 'Staff / Principal',
    short: 'Staff',
    description: 'Tu portes des initiatives cross-équipes et tu définis la direction design. Tu es référent sur ton domaine.',
  },
};

const PILLARS = [
  { id: 'craft',         label: 'Craft',          color: '#6366F1', weight: 5, tagline: 'Visuel, UX, outils et process — ce que tu produis.' },
  { id: 'communication', label: 'Communication',  color: '#8B5CF6', weight: 5, tagline: 'Présenter, donner/recevoir du feedback, écrire clair.' },
  { id: 'collaboration', label: 'Collaboration',  color: '#EC4899', weight: 4, tagline: 'Gérer les stakeholders et construire des relations.' },
  { id: 'ownership',     label: 'Ownership',      color: '#F59E0B', weight: 4, tagline: 'Shipper, gérer l\'ambiguïté, initier le travail.' },
  { id: 'strategy',      label: 'Strategy',       color: '#10B981', weight: 3, tagline: 'Comprendre le business et aligner ton design dessus.' },
  { id: 'mentorship',    label: 'Mentorship',     color: '#14B8A6', weight: 2, tagline: 'Faire grandir les autres autour de toi.' },
];

// Targets sur échelle 0-10 par niveau cible
const CATEGORIES = [
  // ── CRAFT ────────────────────────────────────────────────────────
  {
    id: 'research', pillar: 'craft', label: 'Recherche utilisateur',
    targets: { mid: 5, senior: 7, staff: 8 },
    tips: [
      'Pars d\'hypothèses à valider, pas d\'une liste de questions ouvertes.',
      'Triangule quali + quanti pour convaincre les stakeholders sceptiques.',
    ],
  },
  {
    id: 'ia', pillar: 'craft', label: 'Architecture de l\'info',
    targets: { mid: 5, senior: 7, staff: 8 },
    tips: [
      'Teste ton arborescence avec un outil de tree testing (Treejack).',
      'Analyse les logs de recherche avant de redesigner une navigation.',
    ],
  },
  {
    id: 'proto', pillar: 'craft', label: 'Wireframing & Proto',
    targets: { mid: 6, senior: 8, staff: 9 },
    tips: [
      'Basse fidélité en exploration, haute fidélité pour valider les détails d\'interaction.',
      'Maîtrise variables, components avancés et prototypes complexes dans Figma.',
    ],
  },
  {
    id: 'ds', pillar: 'craft', label: 'Design System',
    targets: { mid: 4, senior: 7, staff: 8 },
    tips: [
      'Audite l\'existant dans le produit avant de créer un composant.',
      'Versionne ton DS en semver avec un changelog lisible par les équipes.',
    ],
  },
  {
    id: 'testing', pillar: 'craft', label: 'Tests utilisateurs',
    targets: { mid: 5, senior: 7, staff: 8 },
    tips: [
      'Priorise les findings par fréquence × impact, pas par verbatim frappant.',
      'Combine tests modérés (profondeur) et non modérés (volume) selon la question.',
    ],
  },
  {
    id: 'a11y', pillar: 'craft', label: 'Accessibilité',
    targets: { mid: 5, senior: 7, staff: 8 },
    tips: [
      'Intègre l\'accessibilité dès le wireframe, pas en fin de process.',
      'Teste avec lecteur d\'écran + navigation clavier, pas seulement Lighthouse.',
    ],
  },
  {
    id: 'uxwriting', pillar: 'craft', label: 'UX Writing',
    targets: { mid: 4, senior: 6, staff: 7 },
    tips: [
      'Utilise le vocabulaire réel de tes users (insights research), pas le jargon interne.',
      'Distingue voix (constante, incarnant la marque) et ton (qui s\'adapte au contexte).',
    ],
  },
  {
    id: 'data', pillar: 'craft', label: 'Data & Analytics',
    targets: { mid: 4, senior: 7, staff: 8 },
    tips: [
      'Jamais de conclusion sur une métrique sans son contexte.',
      'Combine données comportementales + insights quali + impact business pour convaincre.',
    ],
  },

  // ── COMMUNICATION ────────────────────────────────────────────────
  {
    id: 'presenting', pillar: 'communication', label: 'Présenter son design',
    targets: { mid: 5, senior: 8, staff: 9 },
    tips: [
      'Structure tes présentations : contexte → problème → hypothèse → solution → rationale → next steps.',
      'Adapte le niveau de détail à l\'audience : recommandation d\'abord pour les execs, détails pour les peers.',
    ],
  },
  {
    id: 'feedback', pillar: 'communication', label: 'Feedback',
    targets: { mid: 5, senior: 7, staff: 9 },
    tips: [
      'Sépare les faits (data, WCAG, patterns) des opinions quand tu donnes du feedback.',
      'Quand tu en reçois : pose des questions, ne défends pas à chaud, traite à tête reposée.',
    ],
  },
  {
    id: 'written_comm', pillar: 'communication', label: 'Écrit & oral',
    targets: { mid: 5, senior: 7, staff: 8 },
    tips: [
      'Commence tes docs par un TL;DR — les détails sont là pour qui veut creuser.',
      'Async-first pour les décisions complexes : laisse une trace écrite consultable.',
    ],
  },

  // ── COLLABORATION ────────────────────────────────────────────────
  {
    id: 'stakeholders', pillar: 'collaboration', label: 'Stakeholder management',
    targets: { mid: 4, senior: 7, staff: 9 },
    tips: [
      'Construis une carte de tes stakeholders : qui informer, qui consulter, qui décide.',
      'Investis dans la relation dans des moments low-stakes, pas seulement quand tu as besoin d\'eux.',
    ],
  },

  // ── OWNERSHIP ────────────────────────────────────────────────────
  {
    id: 'ownership', pillar: 'ownership', label: 'Shipping & indépendance',
    targets: { mid: 6, senior: 8, staff: 9 },
    tips: [
      'Timebox ton exploration puis engage-toi sur une direction — l\'excellence bloque le shipping.',
      'Face à un brief vague : formule ta compréhension, valide-la, puis démarre sans attendre.',
    ],
  },

  // ── STRATEGY ─────────────────────────────────────────────────────
  {
    id: 'strategy', pillar: 'strategy', label: 'Business & Strategy',
    targets: { mid: 3, senior: 6, staff: 9 },
    tips: [
      'Apprends les 3 métriques business du trimestre et articule ton impact dessus.',
      'Creuse le modèle économique : qui paie, combien, pour quoi, quels leviers le font grandir.',
    ],
  },

  // ── MENTORSHIP ───────────────────────────────────────────────────
  {
    id: 'mentorship', pillar: 'mentorship', label: 'Mentorat',
    targets: { mid: 2, senior: 6, staff: 8 },
    tips: [
      'Utilise des questions ouvertes pour débloquer, pas des solutions toutes faites.',
      'Documente tes décisions et anime des sessions de partage pour scaler ta connaissance.',
    ],
  },
];

// ─────────────────────────────────────────────────────────────────────
// QUESTIONS
// ─────────────────────────────────────────────────────────────────────
const QUESTIONS = [
  // ── Recherche utilisateur ──
  {
    category: 'research',
    text: 'Quand tu prépares un guide d\'entretien utilisateur, quelle est ta priorité principale ?',
    options: [
      { text: 'Poser un maximum de questions pour collecter le plus de données possible', score: 0 },
      { text: 'Structurer des questions ouvertes autour des hypothèses à valider', score: 3 },
      { text: 'Suivre un script strict pour garantir la cohérence entre les participants', score: 1 },
      { text: 'Adapter les questions en temps réel selon le profil de chaque utilisateur', score: 2 },
    ],
  },
  {
    category: 'research',
    text: 'Tu analyses 10 entretiens. Comment identifies-tu les insights clés ?',
    options: [
      { text: 'Tu retranscris tout mot pour mot et tu lis plusieurs fois', score: 1 },
      { text: 'Tu repères les patterns récurrents entre les participants', score: 3 },
      { text: 'Tu te fies à ta mémoire des entretiens les plus marquants', score: 0 },
      { text: 'Tu sélectionnes les verbatims les plus forts pour construire ta synthèse', score: 2 },
    ],
  },
  {
    category: 'research',
    text: 'Quelle méthode utilises-tu pour valider une hypothèse sur le comportement utilisateur ?',
    options: [
      { text: 'Un test A/B sur les données existantes', score: 1 },
      { text: 'Des entretiens qualitatifs', score: 2 },
      { text: 'Un sondage quantitatif', score: 1 },
      { text: 'La méthode dépend de l\'hypothèse, des ressources et des objectifs', score: 3 },
    ],
  },
  {
    category: 'research',
    text: 'Tu dois recruter des participants pour un test. 5 ou 20 personnes ?',
    options: [
      { text: '20 pour avoir des données statistiquement significatives', score: 1 },
      { text: '5 suffisent pour identifier les problèmes majeurs en qualitatif', score: 2 },
      { text: 'Ça dépend de la méthode (quali vs quanti) et des objectifs du test', score: 3 },
      { text: 'Je préfère utiliser les analytics plutôt que de faire des tests', score: 0 },
    ],
  },
  {
    category: 'research',
    text: 'Des stakeholders sceptiques remettent en question tes findings qualitatifs. Comment les convaincre ?',
    options: [
      { text: 'Tu leur présentes uniquement des données quantitatives pour valider tes insights', score: 1 },
      { text: 'Tu combines verbatims forts et données chiffrées pour donner du poids à tes findings', score: 3 },
      { text: 'Tu présentes tes insights sans les données — ce sont des experts du domaine', score: 0 },
      { text: 'Tu contournes les sceptiques et travailles directement avec les équipes produit', score: 1 },
    ],
  },

  // ── Architecture de l'information ──
  {
    category: 'ia',
    text: 'Tu dois structurer la navigation d\'une app complexe. Par où commences-tu ?',
    options: [
      { text: 'Tu copies la structure d\'une app similaire qui fonctionne bien', score: 1 },
      { text: 'Tu réalises un tri de cartes ouvert avec des utilisateurs réels', score: 3 },
      { text: 'Tu priorises selon les objectifs business du client ou de l\'équipe', score: 2 },
      { text: 'Tu crées une arborescence directement basée sur la liste des fonctionnalités', score: 0 },
    ],
  },
  {
    category: 'ia',
    text: 'Quelle est la différence entre navigation globale et navigation locale ?',
    options: [
      { text: 'C\'est la même chose, juste à des niveaux différents de l\'interface', score: 1 },
      { text: 'La navigation globale couvre l\'ensemble du produit, la locale est contextuelle à une section', score: 3 },
      { text: 'La navigation globale est sur mobile, la locale sur desktop', score: 0 },
      { text: 'Je ne connais pas vraiment cette distinction', score: 0 },
    ],
  },
  {
    category: 'ia',
    text: 'Tu veux tester la solidité de ton arborescence. Quelle approche adoptes-tu ?',
    options: [
      { text: 'Un prototype Figma cliquable avec les utilisateurs', score: 1 },
      { text: 'Un test d\'arborescence avec un outil dédié (Treejack, Optimal Workshop)', score: 3 },
      { text: 'Des ateliers de tri de cartes fermés avec les équipes', score: 2 },
      { text: 'Je ne teste pas les arborescences, j\'itère après le lancement', score: 0 },
    ],
  },
  {
    category: 'ia',
    text: 'Quelle est la différence entre un sitemap et un wireflow ?',
    options: [
      { text: 'C\'est la même chose, présentée sous une forme différente', score: 0 },
      { text: 'Le sitemap montre la structure hiérarchique du contenu, le wireflow montre les flux de navigation entre écrans', score: 3 },
      { text: 'Le sitemap est pour le SEO, le wireflow pour le design', score: 1 },
      { text: 'Le wireflow est toujours préférable car plus détaillé', score: 1 },
    ],
  },
  {
    category: 'ia',
    text: 'Tu dois améliorer la recherche interne d\'un site e-commerce. Par où commences-tu ?',
    options: [
      { text: 'Tu redesignes la barre de recherche pour la rendre plus visible', score: 0 },
      { text: 'Tu analyses les logs de recherche pour comprendre ce que cherchent les utilisateurs et ce qu\'ils ne trouvent pas', score: 3 },
      { text: 'Tu interroges le client sur les produits qu\'il veut mettre en avant', score: 1 },
      { text: 'Tu t\'inspires des best practices des leaders du e-commerce', score: 2 },
    ],
  },

  // ── Wireframing & Prototypage ──
  {
    category: 'proto',
    text: 'À quel moment utilises-tu un prototype basse fidélité vs haute fidélité ?',
    options: [
      { text: 'Toujours haute fidélité — c\'est plus convaincant pour les stakeholders', score: 0 },
      { text: 'Basse fidélité en exploration, haute fidélité pour valider les détails d\'interaction', score: 3 },
      { text: 'Ça dépend du temps disponible, pas vraiment de la phase du projet', score: 1 },
      { text: 'Je commence directement en haute fidélité, c\'est plus rapide sur le long terme', score: 1 },
    ],
  },
  {
    category: 'proto',
    text: 'Tu dois prototyper un flux de paiement en 2h. Quelle est ton approche ?',
    options: [
      { text: 'Tu crées tous les écrans avec le vrai contenu et la bonne UI', score: 0 },
      { text: 'Tu identifies les écrans critiques et tu esquisses les interactions clés', score: 3 },
      { text: 'Tu fais un wireflow rapide pour montrer la logique de navigation', score: 2 },
      { text: 'Tu présentes un diagramme de flux plutôt qu\'un prototype interactif', score: 1 },
    ],
  },
  {
    category: 'proto',
    text: 'Quel est ton niveau de maîtrise de Figma ?',
    options: [
      { text: 'Je l\'utilise pour des mises en page simples', score: 1 },
      { text: 'Je maîtrise les composants, variants et auto-layout', score: 2 },
      { text: 'Je maîtrise aussi les variables, interactions avancées et prototypes complexes', score: 3 },
      { text: 'Je préfère d\'autres outils (Sketch, Adobe XD, Axure…)', score: 1 },
    ],
  },
  {
    category: 'proto',
    text: 'Comment documentes-tu tes prototypes pour les développeurs ?',
    options: [
      { text: 'Je laisse le prototype Figma sans annotation, les devs se débrouillent', score: 0 },
      { text: 'J\'ajoute des annotations sur les interactions et les états principaux', score: 2 },
      { text: 'Je crée des specs détaillées avec comportements, états et cas limites', score: 3 },
      { text: 'Je préfère une réunion de passation orale plutôt que de la documentation écrite', score: 1 },
    ],
  },
  {
    category: 'proto',
    text: 'Après une tâche en test utilisateur, quelle question poses-tu en priorité ?',
    options: [
      { text: '« Tu as trouvé ça facile ou difficile ? »', score: 1 },
      { text: '« Qu\'est-ce qui t\'a surpris ou dérouté dans ce parcours ? »', score: 3 },
      { text: '« Est-ce que tu recommanderais ce produit à un ami ? »', score: 0 },
      { text: '« Qu\'est-ce que tu changerais en priorité ? »', score: 2 },
    ],
  },

  // ── Design System ──
  {
    category: 'ds',
    text: 'On te demande de créer un composant Button pour le design system. Tu commences par quoi ?',
    options: [
      { text: 'Tu le designs directement dans Figma selon ta vision', score: 1 },
      { text: 'Tu audites les boutons existants dans le produit avant de concevoir', score: 3 },
      { text: 'Tu t\'inspires de Material Design ou d\'autres design systems reconnus', score: 2 },
      { text: 'Tu demandes d\'abord aux devs comment ils veulent l\'implémenter', score: 1 },
    ],
  },
  {
    category: 'ds',
    text: 'Quelle est la différence entre un design token et une variable CSS ?',
    options: [
      { text: 'C\'est la même chose — les tokens sont juste la version design des variables CSS', score: 1 },
      { text: 'Les tokens sont agnostiques de la plateforme, les variables CSS sont spécifiques au web', score: 3 },
      { text: 'Les tokens sont pour les designers, les variables pour les devs — ils ne se parlent pas', score: 0 },
      { text: 'Je ne connais pas bien les design tokens', score: 0 },
    ],
  },
  {
    category: 'ds',
    text: 'Comment garantis-tu l\'adoption et la maintenance d\'un design system dans le temps ?',
    options: [
      { text: 'En imposant son utilisation via des règles de contribution strictes', score: 1 },
      { text: 'En communiquant les mises à jour et en formant les équipes régulièrement', score: 2 },
      { text: 'En faisant des audits réguliers et en impliquant les équipes dans son évolution', score: 3 },
      { text: 'C\'est la responsabilité des développeurs, pas du designer', score: 0 },
    ],
  },
  {
    category: 'ds',
    text: 'Comment gères-tu un composant « one-off » — un élément qui n\'existe qu\'à un seul endroit dans le produit ?',
    options: [
      { text: 'Tu l\'ajoutes systématiquement au design system pour garantir la cohérence', score: 1 },
      { text: 'Tu évalues son potentiel de réutilisation avant de décider de l\'intégrer', score: 3 },
      { text: 'Tu l\'ignores — s\'il n\'est pas réutilisable, le DS n\'est pas concerné', score: 2 },
      { text: 'Tu demandes aux devs de le hardcoder sans passer par le DS', score: 0 },
    ],
  },
  {
    category: 'ds',
    text: 'Quelle est la bonne approche pour versionner un design system ?',
    options: [
      { text: 'Tu changes tout lors de grandes refontes annuelles', score: 0 },
      { text: 'Tu maintiens un changelog et tu appliques du semantic versioning (major/minor/patch)', score: 3 },
      { text: 'Tu mets à jour sans documenter — les équipes voient les changements dans Figma', score: 0 },
      { text: 'Tu gardes toujours les anciennes versions en parallèle indéfiniment', score: 1 },
    ],
  },

  // ── Tests utilisateurs ──
  {
    category: 'testing',
    text: 'Tu modères un test utilisateur et l\'utilisateur est bloqué sur une tâche. Que fais-tu ?',
    options: [
      { text: 'Tu lui donnes la réponse pour ne pas perdre de temps', score: 0 },
      { text: 'Tu restes silencieux et observes — la frustration est une donnée précieuse', score: 3 },
      { text: 'Tu poses une question ouverte pour comprendre ce qui le bloque', score: 2 },
      { text: 'Tu passes directement à la tâche suivante', score: 1 },
    ],
  },
  {
    category: 'testing',
    text: 'Test modéré ou non modéré ? Quand choisis-tu le test non modéré ?',
    options: [
      { text: 'Pour collecter des données quantitatives sur des flux simples et bien connus', score: 3 },
      { text: 'Quand tu n\'as pas le temps de faire du modéré', score: 1 },
      { text: 'Jamais — le test modéré est toujours supérieur', score: 0 },
      { text: 'Quand les participants sont dans un autre fuseau horaire', score: 2 },
    ],
  },
  {
    category: 'testing',
    text: 'Comment analyses-tu les résultats d\'un test utilisateur ?',
    options: [
      { text: 'Tu listes les problèmes observés et tu les priorises par fréquence et impact', score: 3 },
      { text: 'Tu te fies aux verbatims les plus frappants et mémorables', score: 1 },
      { text: 'Tu comptes le nombre d\'occurrences de chaque problème observé', score: 2 },
      { text: 'Tu demandes aux stakeholders présents ce qu\'ils ont retenu des sessions', score: 0 },
    ],
  },
  {
    category: 'testing',
    text: 'Tu identifies un problème critique en test, mais les devs ont déjà tout codé. Que fais-tu ?',
    options: [
      { text: 'Tu notes le problème pour la prochaine itération du produit', score: 1 },
      { text: 'Tu présentes le problème avec des données et proposes une solution rapide à implémenter', score: 3 },
      { text: 'Tu escalades directement au management pour bloquer le lancement', score: 1 },
      { text: 'Tu refais le test pour confirmer le problème avant d\'alerter quiconque', score: 2 },
    ],
  },
  {
    category: 'testing',
    text: 'Quelle est la différence entre un test d\'utilisabilité et une évaluation heuristique ?',
    options: [
      { text: 'C\'est la même chose — les deux permettent de trouver des problèmes UX', score: 0 },
      { text: 'Le test d\'utilisabilité implique de vrais utilisateurs ; l\'évaluation heuristique est faite par des experts UX', score: 3 },
      { text: 'L\'évaluation heuristique est plus fiable car les experts ne font pas d\'erreurs', score: 1 },
      { text: 'Le test d\'utilisabilité se fait en ligne, l\'évaluation heuristique en présentiel', score: 0 },
    ],
  },

  // ── Accessibilité ──
  {
    category: 'a11y',
    text: 'Quel niveau WCAG faut-il viser en priorité pour un produit grand public ?',
    options: [
      { text: 'WCAG A — c\'est le minimum légal, c\'est suffisant', score: 0 },
      { text: 'WCAG AA — c\'est le standard recommandé et souvent requis réglementairement', score: 3 },
      { text: 'WCAG AAA — il faut toujours viser l\'excellence', score: 1 },
      { text: 'Les WCAG sont optionnels si l\'interface est intuitive et simple', score: 0 },
    ],
  },
  {
    category: 'a11y',
    text: 'Quel est le ratio de contraste minimum pour du texte normal en WCAG AA ?',
    options: [
      { text: '3:1', score: 0 },
      { text: '4.5:1', score: 3 },
      { text: '7:1', score: 1 },
      { text: 'Je ne connais pas les ratios exacts', score: 1 },
    ],
  },
  {
    category: 'a11y',
    text: 'Comment intègres-tu l\'accessibilité dans ton process de design ?',
    options: [
      { text: 'Je la vérifie à la toute fin, juste avant le handoff développeur', score: 1 },
      { text: 'Je la prends en compte dès le wireframe (structure, labels, ordre de focus)', score: 3 },
      { text: 'Je délègue entièrement cette responsabilité aux développeurs', score: 0 },
      { text: 'Je me base sur les retours d\'utilisateurs en situation de handicap', score: 2 },
    ],
  },
  {
    category: 'a11y',
    text: 'Un développeur dit que les attributs ARIA ne le concernent pas — c\'est au designer de les spécifier. Quelle est ta réponse ?',
    options: [
      { text: 'Tu es d\'accord — en tant que designer, tu dois tout spécifier dans tes annotations', score: 1 },
      { text: 'Tu expliques que c\'est une responsabilité partagée : le designer spécifie l\'intention, le dev implémente', score: 3 },
      { text: 'Tu ignores — les devs connaissent mieux l\'implémentation technique', score: 0 },
      { text: 'Tu fais appel à un expert accessibilité externe pour trancher', score: 1 },
    ],
  },
  {
    category: 'a11y',
    text: 'Comment testes-tu l\'accessibilité d\'une interface avant le lancement ?',
    options: [
      { text: 'Tu utilises uniquement des outils automatiques comme Lighthouse ou Axe', score: 1 },
      { text: 'Tu combines outils automatiques + navigation clavier + tests avec un lecteur d\'écran', score: 3 },
      { text: 'Tu fais tester par un utilisateur en situation de handicap', score: 2 },
      { text: 'Tu fais confiance aux développeurs pour valider l\'accessibilité', score: 0 },
    ],
  },

  // ── UX Writing ──
  {
    category: 'uxwriting',
    text: 'Tu dois écrire un message d\'erreur pour un champ email. Quelle formulation choisis-tu ?',
    options: [
      { text: '« Erreur — champ invalide »', score: 0 },
      { text: '« Ce champ est obligatoire »', score: 1 },
      { text: '« Merci d\'entrer une adresse email valide (ex : nom@domaine.fr) »', score: 3 },
      { text: '« Oops ! Quelque chose s\'est mal passé »', score: 1 },
    ],
  },
  {
    category: 'uxwriting',
    text: 'Quelle est la règle principale pour rédiger un bon call-to-action (CTA) ?',
    options: [
      { text: 'Utiliser un verbe d\'action + préciser le résultat attendu pour l\'utilisateur', score: 3 },
      { text: 'Le rendre le plus court possible, idéalement 1 seul mot', score: 1 },
      { text: 'Utiliser des termes génériques et familiers comme « Cliquez ici »', score: 0 },
      { text: 'Le mettre entièrement en majuscules pour attirer l\'attention', score: 0 },
    ],
  },
  {
    category: 'uxwriting',
    text: 'Tu révises le copy d\'un onboarding. Comment évalues-tu si le texte est efficace ?',
    options: [
      { text: 'Tu le fais relire par un collègue pour vérifier les fautes', score: 1 },
      { text: 'Tu testes la compréhension directement avec des utilisateurs', score: 3 },
      { text: 'Tu le compares au copy d\'apps concurrentes dans le même secteur', score: 2 },
      { text: 'Tu te fies à ton instinct de communicant et ton expérience', score: 1 },
    ],
  },
  {
    category: 'uxwriting',
    text: 'Tu dois nommer un nouveau bouton de partage dans l\'app. Comment choisis-tu le bon label ?',
    options: [
      { text: 'Tu proposes plusieurs options et tu choisis celle qui sonne le mieux', score: 1 },
      { text: 'Tu utilises le vocabulaire que tes utilisateurs emploient naturellement (insights research ou analytics)', score: 3 },
      { text: 'Tu choisis le terme le plus précis techniquement', score: 0 },
      { text: 'Tu demandes au PM ce qu\'il préfère', score: 1 },
    ],
  },
  {
    category: 'uxwriting',
    text: 'Quelle est la différence entre le ton et la voix d\'un produit en UX Writing ?',
    options: [
      { text: 'C\'est la même chose — la façon dont on s\'exprime dans le produit', score: 0 },
      { text: 'La voix est constante et reflète la personnalité de la marque ; le ton s\'adapte au contexte et à l\'émotion de l\'utilisateur', score: 3 },
      { text: 'La voix c\'est le texte visible, le ton c\'est le style visuel', score: 0 },
      { text: 'Je ne connais pas vraiment cette distinction', score: 1 },
    ],
  },

  // ── Data & Analytics ──
  {
    category: 'data',
    text: 'Ton équipe te montre un taux de rebond de 70% sur une page. Que conclus-tu ?',
    options: [
      { text: 'C\'est clairement un problème à corriger immédiatement', score: 0 },
      { text: 'Rien sans contexte — un taux de rebond élevé peut être normal selon le type de page', score: 3 },
      { text: 'Les utilisateurs n\'apprécient pas le design ou le contenu', score: 0 },
      { text: 'Il faut refondre la page entièrement', score: 0 },
    ],
  },
  {
    category: 'data',
    text: 'Quelle est la différence entre donnée quantitative et qualitative en UX ?',
    options: [
      { text: 'Quanti = comportements mesurables à grande échelle ; quali = intentions et perceptions en profondeur', score: 3 },
      { text: 'La quanti c\'est pour les researchers, la quali pour les designers', score: 0 },
      { text: 'C\'est la même chose analysée différemment', score: 0 },
      { text: 'La donnée qualitative est plus fiable car elle vient directement des utilisateurs', score: 1 },
    ],
  },
  {
    category: 'data',
    text: 'Tu veux mesurer l\'impact d\'une nouvelle feature après son lancement. Quels indicateurs choisis-tu ?',
    options: [
      { text: 'Le NPS global du produit', score: 1 },
      { text: 'Des métriques spécifiques à la feature (adoption, task completion rate, time on task)', score: 3 },
      { text: 'Le nombre de tickets support reçus après le lancement', score: 2 },
      { text: 'Les avis et notes sur les stores d\'applications', score: 1 },
    ],
  },
  {
    category: 'data',
    text: 'Comment utilises-tu les heatmaps dans ton process UX ?',
    options: [
      { text: 'Pour valider que les éléments importants captent bien l\'attention des utilisateurs', score: 3 },
      { text: 'Pour remplacer les tests utilisateurs quand je manque de temps', score: 0 },
      { text: 'Pour montrer aux stakeholders que les utilisateurs « cliquent bien »', score: 1 },
      { text: 'Je ne les utilise pas — ce n\'est pas assez précis pour mes besoins', score: 1 },
    ],
  },
  {
    category: 'data',
    text: 'Tu dois convaincre ton équipe de prioriser une amélioration UX. Quel argument utilises-tu ?',
    options: [
      { text: 'Tu présentes des captures d\'écran de l\'interface actuelle pour illustrer les problèmes', score: 1 },
      { text: 'Tu combines données comportementales (analytics) + insights qualitatifs + impact business estimé', score: 3 },
      { text: 'Tu te bases sur des benchmarks et best practices du secteur', score: 2 },
      { text: 'Tu escalades directement au management pour qu\'il décide', score: 0 },
    ],
  },

  // ── Présenter son design ──
  {
    category: 'presenting',
    text: 'Tu présentes un nouveau design à ton équipe produit. Par quoi commences-tu ?',
    options: [
      { text: 'Tu montres directement la solution finale, c\'est ça qui intéresse', score: 0 },
      { text: 'Tu rappelles le contexte, le problème user et l\'hypothèse avant de montrer quoi que ce soit', score: 3 },
      { text: 'Tu présentes les 3 options explorées et tu demandes laquelle ils préfèrent', score: 1 },
      { text: 'Tu laisses le PM introduire pour rester concentré sur le design', score: 1 },
    ],
  },
  {
    category: 'presenting',
    text: 'Tu présentes à un VP qui a 15 minutes. Quelle structure choisis-tu ?',
    options: [
      { text: 'Le contexte complet puis la solution en fin de réunion pour garder le suspense', score: 0 },
      { text: 'La recommandation en premier, suivie du rationale, puis des détails si le temps le permet', score: 3 },
      { text: 'Le process de conception étape par étape pour montrer ta rigueur', score: 0 },
      { text: 'Les 3 options explorées pour qu\'il tranche lui-même', score: 1 },
    ],
  },
  {
    category: 'presenting',
    text: 'Un dev te demande « pourquoi ce pattern et pas celui-là ? ». Que fais-tu ?',
    options: [
      { text: 'Tu expliques que ton expertise design te fait préférer ce pattern', score: 0 },
      { text: 'Tu articules la logique : objectif user, contraintes, tradeoffs considérés', score: 3 },
      { text: 'Tu te réfères au design system pour couper court à la discussion', score: 1 },
      { text: 'Tu lui demandes ce qu\'il propose à la place', score: 1 },
    ],
  },

  // ── Feedback ──
  {
    category: 'feedback',
    text: 'Tu revois le design d\'un designer junior. Quel type de feedback donnes-tu ?',
    options: [
      { text: '« Je n\'aime pas cette couleur, change-la »', score: 0 },
      { text: '« Ce choix ne respecte pas le contraste WCAG AA — voici le ratio requis et 2 alternatives qui fonctionnent »', score: 3 },
      { text: '« C\'est ton design, fais comme tu le sens »', score: 0 },
      { text: 'Tu modifies directement toi-même pour gagner du temps', score: 1 },
    ],
  },
  {
    category: 'feedback',
    text: 'Tu reçois un feedback négatif sur ton design en public. Ta réaction ?',
    options: [
      { text: 'Tu défends ton choix en expliquant pourquoi l\'autre se trompe', score: 0 },
      { text: 'Tu poses des questions pour bien comprendre, tu remercies, et tu traites à tête reposée', score: 3 },
      { text: 'Tu acceptes silencieusement pour clore le sujet', score: 1 },
      { text: 'Tu proposes d\'en reparler en 1:1 pour ne pas exposer le désaccord', score: 2 },
    ],
  },
  {
    category: 'feedback',
    text: 'Comment crées-tu une culture de feedback dans ton équipe ?',
    options: [
      { text: 'Tu attends les reviews formelles pour donner du feedback', score: 0 },
      { text: 'Tu donnes du feedback régulier dans les deux sens, et tu modèles la façon d\'en recevoir', score: 3 },
      { text: 'Tu t\'assures que seuls les seniors en donnent pour éviter les maladresses', score: 0 },
      { text: 'Tu laisses le lead gérer — c\'est son rôle', score: 1 },
    ],
  },

  // ── Écrit & oral ──
  {
    category: 'written_comm',
    text: 'Tu rédiges un design doc de 4 pages. Où places-tu la recommandation finale ?',
    options: [
      { text: 'À la fin, en conclusion logique de ta démonstration', score: 0 },
      { text: 'Dans un TL;DR en haut, avec les détails pour qui veut creuser', score: 3 },
      { text: 'Au milieu, après avoir posé le contexte', score: 1 },
      { text: 'Pas besoin de recommandation explicite, elle ressort du doc', score: 0 },
    ],
  },
  {
    category: 'written_comm',
    text: 'Tu as un désaccord complexe avec un PM. Quel canal choisis-tu ?',
    options: [
      { text: 'Slack — c\'est plus rapide pour débloquer', score: 0 },
      { text: 'Un 1:1 en visio, suivi d\'un résumé écrit des décisions prises', score: 3 },
      { text: 'Email uniquement pour garder une trace formelle', score: 1 },
      { text: 'Tu laisses passer pour préserver la relation', score: 0 },
    ],
  },
  {
    category: 'written_comm',
    text: 'Un stakeholder relance pour la 3e fois sur un sujet déjà tranché. Que fais-tu ?',
    options: [
      { text: 'Tu réponds poliment à chaque fois sans faire référence aux échanges précédents', score: 0 },
      { text: 'Tu renvoies vers le doc de décision existant et demandes ce qui a changé pour rouvrir le sujet', score: 3 },
      { text: 'Tu rouvres la conversation pour lui faire plaisir', score: 0 },
      { text: 'Tu escalades à son manager pour qu\'il arbitre', score: 1 },
    ],
  },

  // ── Stakeholder management ──
  {
    category: 'stakeholders',
    text: 'Tu arrives sur un nouveau projet. Quelle est ta première action vis-à-vis des stakeholders ?',
    options: [
      { text: 'Tu identifies les décideurs principaux et tu lances le travail', score: 1 },
      { text: 'Tu fais une carte des stakeholders : qui informer, qui consulter, qui décide', score: 3 },
      { text: 'Tu attends qu\'ils se manifestent d\'eux-mêmes', score: 0 },
      { text: 'Tu mets tout le monde en copie de tes updates par sécurité', score: 1 },
    ],
  },
  {
    category: 'stakeholders',
    text: 'Quand tu tiens une réunion de design review, tu…',
    options: [
      { text: 'Laisses la conversation se dérouler librement selon l\'énergie du groupe', score: 0 },
      { text: 'Envoies un agenda avant, captures les décisions pendant, partages un résumé après', score: 3 },
      { text: 'Demandes à quelqu\'un d\'autre de prendre les notes pour toi', score: 1 },
      { text: 'Enregistres la session pour que les absents la revoient', score: 1 },
    ],
  },
  {
    category: 'stakeholders',
    text: 'Un stakeholder senior n\'est jamais dans tes reviews mais critique tes designs en comité. Que fais-tu ?',
    options: [
      { text: 'Tu le classes « informer » et partages proactivement un update avant chaque jalon clé', score: 3 },
      { text: 'Tu exiges qu\'il soit présent à la prochaine review', score: 0 },
      { text: 'Tu ignores ses critiques — il a choisi de ne pas participer', score: 0 },
      { text: 'Tu escalades à son n+1 pour qu\'il le recadre', score: 1 },
    ],
  },
  {
    category: 'stakeholders',
    text: 'Comment construis-tu une relation avec un stakeholder difficile ?',
    options: [
      { text: 'Tu évites les interactions non essentielles pour minimiser les frictions', score: 0 },
      { text: 'Tu cherches des moments informels et low-stakes pour comprendre ses objectifs à lui', score: 3 },
      { text: 'Tu l\'invites systématiquement à tes reviews pour l\'impliquer', score: 1 },
      { text: 'Tu passes par son manager pour médiatiser les échanges', score: 1 },
    ],
  },

  // ── Ownership (shipping + independence) ──
  {
    category: 'ownership',
    text: 'Tu as 2 semaines pour livrer une feature. Quel est ton premier réflexe ?',
    options: [
      { text: 'Tu explores toutes les options possibles, tu trancheras ensuite', score: 0 },
      { text: 'Tu timeboxes l\'exploration à 3-4 jours puis tu t\'engages sur une direction', score: 3 },
      { text: 'Tu attends que le PM précise le scope avant de commencer', score: 0 },
      { text: 'Tu demandes une extension de délai dès le départ', score: 0 },
    ],
  },
  {
    category: 'ownership',
    text: 'Ton PM te donne un brief très vague. Quelle est ta réaction ?',
    options: [
      { text: 'Tu attends qu\'il le clarifie avant de démarrer', score: 0 },
      { text: 'Tu formules ta propre compréhension, tu la valides avec lui, puis tu démarres', score: 3 },
      { text: 'Tu commences à designer en espérant tomber juste', score: 1 },
      { text: 'Tu demandes au lead design de trancher à sa place', score: 0 },
    ],
  },
  {
    category: 'ownership',
    text: 'Tu as identifié un problème UX que l\'équipe n\'a pas priorisé. Tu…',
    options: [
      { text: 'Tu le notes dans un backlog perso en attendant une ouverture', score: 1 },
      { text: 'Tu construis un mini business case (impact, effort, métrique) pour le proposer en priorisation', score: 3 },
      { text: 'Tu attends qu\'il remonte naturellement via le support ou les users', score: 0 },
      { text: 'Tu le corriges en douce pendant tes autres tickets', score: 1 },
    ],
  },
  {
    category: 'ownership',
    text: 'Une feature que tu as livrée a des problèmes en production. Ta réaction ?',
    options: [
      { text: 'Tu attends que l\'équipe produit décide de la suite', score: 0 },
      { text: 'Tu t\'appropries le problème : diagnostic, hypothèse de fix, correction, post-mortem', score: 3 },
      { text: 'Tu documentes que c\'est un problème lié aux specs côté PM', score: 0 },
      { text: 'Tu proposes de refaire la feature entièrement', score: 1 },
    ],
  },

  // ── Strategy ──
  {
    category: 'strategy',
    text: 'Connais-tu les 3 métriques principales que ton entreprise suit ce trimestre ?',
    options: [
      { text: 'Oui, et je sais précisément comment mes projets y contribuent', score: 3 },
      { text: 'Oui, mais je ne fais pas le lien direct avec mon travail', score: 1 },
      { text: 'Partiellement — je connais les objectifs de mon équipe', score: 1 },
      { text: 'Non, ce n\'est pas vraiment mon rôle', score: 0 },
    ],
  },
  {
    category: 'strategy',
    text: 'Tu conçois une feature B2B. Quelle question te poses-tu en priorité ?',
    options: [
      { text: 'Quelle UI sera la plus moderne et travaillée', score: 0 },
      { text: 'Comment cette feature fait gagner ou retenir des clients qui paient', score: 3 },
      { text: 'Quelle feature équivalente proposent les concurrents', score: 1 },
      { text: 'Ce que préfèrent les users en test', score: 1 },
    ],
  },
  {
    category: 'strategy',
    text: 'Connais-tu le modèle économique précis de ton produit ?',
    options: [
      { text: 'Je sais qui paie, combien, pour quoi, et quels leviers le font grandir', score: 3 },
      { text: 'Je sais qu\'il y a des abonnements mais pas les détails chiffrés', score: 1 },
      { text: 'C\'est l\'affaire du PM et de la direction', score: 0 },
      { text: 'Je sais vaguement si c\'est profitable ou pas', score: 1 },
    ],
  },
  {
    category: 'strategy',
    text: 'Un PM te propose une feature « parce que la concurrence l\'a ». Ta réaction ?',
    options: [
      { text: 'OK, on la fait vite pour ne pas prendre de retard', score: 0 },
      { text: 'Tu creuses : pourquoi eux, est-ce adapté à notre user, à notre stratégie, à notre positionnement', score: 3 },
      { text: 'Tu refuses : c\'est du copycat sans valeur ajoutée', score: 1 },
      { text: 'Tu la designes en mieux que chez eux', score: 1 },
    ],
  },

  // ── Mentorship ──
  {
    category: 'mentorship',
    text: 'Un designer junior galère sur un projet important. Tu…',
    options: [
      { text: 'Tu prends le relais pour débloquer le livrable dans les temps', score: 0 },
      { text: 'Tu poses des questions pour qu\'il identifie lui-même ses blocages', score: 3 },
      { text: 'Tu lui donnes directement la solution pour qu\'il apprenne en l\'appliquant', score: 1 },
      { text: 'Tu préviens son manager pour qu\'il l\'accompagne', score: 0 },
    ],
  },
  {
    category: 'mentorship',
    text: 'Quelle est pour toi la meilleure façon de partager ton expertise dans l\'équipe ?',
    options: [
      { text: 'En faisant le travail mieux que les autres — les juniors apprennent par osmose', score: 0 },
      { text: 'En documentant tes décisions et en animant des sessions régulières de partage', score: 3 },
      { text: 'En attendant que les juniors viennent te poser des questions', score: 1 },
      { text: 'En corrigeant leurs livrables en reviews', score: 1 },
    ],
  },
  {
    category: 'mentorship',
    text: 'En 1:1 avec un designer que tu mentores, tu parles surtout de…',
    options: [
      { text: 'Ce qu\'il a livré cette semaine', score: 1 },
      { text: 'Ses objectifs de croissance et les opportunités concrètes pour y progresser', score: 3 },
      { text: 'Tes propres projets pour qu\'il apprenne par exemple', score: 0 },
      { text: 'La vie d\'équipe pour souder la relation', score: 0 },
    ],
  },
];

// ─────────────────────────────────────────────────────────────────────
// State
// ─────────────────────────────────────────────────────────────────────
const state = {
  phase: 'welcome', // 'welcome' | 'quiz' | 'results'
  targetLevel: 'senior',
  currentIndex: 0,
  selectedOption: null,
  scores: {}, // { categoryId: totalScore }
};
CATEGORIES.forEach(c => (state.scores[c.id] = 0));

// ─────────────────────────────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────────────────────────────
function getCategoryById(id) {
  return CATEGORIES.find(c => c.id === id);
}
function getPillarById(id) {
  return PILLARS.find(p => p.id === id);
}
function getCategoryMax(catId) {
  return QUESTIONS.filter(q => q.category === catId).length * 3;
}
function getNormalizedScore(catId) {
  const max = getCategoryMax(catId);
  if (max === 0) return 0;
  return Math.round((state.scores[catId] / max) * 10);
}
function getPillarScore(pillarId) {
  const cats = CATEGORIES.filter(c => c.pillar === pillarId);
  if (!cats.length) return 0;
  const avg = cats.reduce((sum, c) => sum + getNormalizedScore(c.id), 0) / cats.length;
  return Math.round(avg * 10) / 10;
}
function getCategoryTarget(cat) {
  return cat.targets[state.targetLevel];
}
function getInterpretation(score, target) {
  const delta = score - target;
  if (delta >= 1)  return { label: 'Au-dessus', cls: 'badge-expert' };
  if (delta >= 0)  return { label: 'Au niveau', cls: 'badge-maitrise' };
  if (delta >= -2) return { label: 'Proche',    cls: 'badge-progres' };
  return             { label: 'À renforcer', cls: 'badge-renforcer' };
}
function getLetter(i) { return ['A', 'B', 'C', 'D'][i]; }

function getCssVar(name) {
  return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
}

// ─────────────────────────────────────────────────────────────────────
// Theme
// ─────────────────────────────────────────────────────────────────────
let chartInstance = null;

function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
  const next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('mapux-theme', next);
  // Redraw chart if on results screen so colors follow the theme
  if (state.phase === 'results' && document.getElementById('radar-chart')) {
    if (chartInstance) { chartInstance.destroy(); chartInstance = null; }
    drawRadarChart();
  }
}

// ─────────────────────────────────────────────────────────────────────
// Render: Welcome
// ─────────────────────────────────────────────────────────────────────
function renderWelcome() {
  const app = document.getElementById('app');
  const pillarChips = PILLARS.map(p => `
    <div class="cat-chip">
      <div class="cat-dot" style="background:${p.color}"></div>
      ${p.label}
    </div>
  `).join('');

  const levelCards = Object.values(LEVELS).map(lv => `
    <button
      class="level-card${state.targetLevel === lv.id ? ' selected' : ''}"
      data-level="${lv.id}"
      onclick="selectLevel('${lv.id}')"
    >
      <div class="level-card-head">
        <div class="level-card-title">${lv.label}</div>
        <div class="level-card-check" aria-hidden="true">✓</div>
      </div>
      <div class="level-card-desc">${lv.description}</div>
    </button>
  `).join('');

  app.innerHTML = `
    <div class="welcome">
      <div class="welcome-badge">✦ Self-Assessment · d'après Artiom Dashinsky</div>
      <h1>Où en est ton <span>potentiel senior ?</span></h1>
      <p>${QUESTIONS.length} questions pour cartographier tes compétences design au-delà de la craft — communication, collaboration, ownership, stratégie, mentorat.</p>

      <div class="welcome-stats">
        <div class="stat"><div class="stat-value">${QUESTIONS.length}</div><div class="stat-label">Questions</div></div>
        <div class="stat"><div class="stat-value">${PILLARS.length}</div><div class="stat-label">Pillars</div></div>
        <div class="stat"><div class="stat-value">~15</div><div class="stat-label">Minutes</div></div>
      </div>

      <div class="categories-preview">${pillarChips}</div>

      <div class="level-picker">
        <div class="level-picker-label">Quel niveau vises-tu ?</div>
        <div class="level-picker-grid">${levelCards}</div>
      </div>

      <button class="btn btn-primary" onclick="startQuiz()">Commencer le quiz →</button>
    </div>
  `;
}

function selectLevel(id) {
  state.targetLevel = id;
  document.querySelectorAll('.level-card').forEach(el => {
    el.classList.toggle('selected', el.dataset.level === id);
  });
}

// ─────────────────────────────────────────────────────────────────────
// Render: Question
// ─────────────────────────────────────────────────────────────────────
function renderQuestion() {
  const app = document.getElementById('app');
  const q = QUESTIONS[state.currentIndex];
  const cat = getCategoryById(q.category);
  const pillar = getPillarById(cat.pillar);
  const total = QUESTIONS.length;
  const progress = Math.round((state.currentIndex / total) * 100);

  const options = q.options.map((opt, i) => `
    <button
      class="option${state.selectedOption === i ? ' selected' : ''}"
      onclick="selectAnswer(${i})"
    >
      <div class="option-letter">${getLetter(i)}</div>
      <div class="option-text">${opt.text}</div>
    </button>
  `).join('');

  app.innerHTML = `
    <div class="quiz-card">
      <div class="quiz-header">
        <div class="progress-info">
          <span class="progress-label" style="color:${pillar.color}">${pillar.label} · ${cat.label}</span>
          <span class="progress-count">${state.currentIndex + 1} / ${total}</span>
        </div>
        <div class="progress-bar-track">
          <div class="progress-bar-fill" style="width: ${progress}%; background:${pillar.color}"></div>
        </div>
      </div>
      <div class="quiz-body">
        <div class="question-category" style="background:${pillar.color}1A; color:${pillar.color}">
          ${cat.label}
        </div>
        <div class="question-text">${q.text}</div>
        <div class="options">${options}</div>
      </div>
      <div class="quiz-footer">
        <button class="btn btn-ghost" onclick="prevQuestion()" ${state.currentIndex === 0 ? 'disabled' : ''}>
          ← Précédent
        </button>
        <button class="btn btn-primary" id="btn-next" onclick="nextQuestion()" ${state.selectedOption === null ? 'disabled' : ''}>
          ${state.currentIndex < QUESTIONS.length - 1 ? 'Suivant →' : 'Voir mes résultats →'}
        </button>
      </div>
    </div>
  `;
}

// ─────────────────────────────────────────────────────────────────────
// Render: Results
// ─────────────────────────────────────────────────────────────────────
function renderResults() {
  const app = document.getElementById('app');
  const level = LEVELS[state.targetLevel];

  // Pillar sections
  const pillarSections = PILLARS.map(p => {
    const cats = CATEGORIES.filter(c => c.pillar === p.id);
    const pillarScore = getPillarScore(p.id);
    const cards = cats.map(c => {
      const score = getNormalizedScore(c.id);
      const target = getCategoryTarget(c);
      const interp = getInterpretation(score, target);
      return `
        <div class="score-card">
          <div class="score-card-header">
            <div class="score-card-dot" style="background:${p.color}"></div>
            <div class="score-card-label">${c.label}</div>
            <div class="score-card-value">${score}<span class="score-card-target">/${target}</span></div>
          </div>
          <div class="score-bar-track">
            <div class="score-bar-fill" style="width:${score * 10}%; background:${p.color}"></div>
            <div class="score-bar-target" style="left:${target * 10}%"></div>
          </div>
          <span class="score-badge ${interp.cls}">${interp.label}</span>
        </div>
      `;
    }).join('');
    return `
      <div class="pillar-section">
        <div class="pillar-section-head">
          <div class="pillar-section-title">
            <div class="pillar-dot" style="background:${p.color}"></div>
            <h3>${p.label}</h3>
            <div class="pillar-score" style="color:${p.color}">${pillarScore}/10</div>
          </div>
          <p class="pillar-tagline">${p.tagline}</p>
        </div>
        <div class="scores-grid">${cards}</div>
      </div>
    `;
  }).join('');

  // Growth priorities : gap × pillar weight
  const priorities = CATEGORIES
    .map(c => {
      const score = getNormalizedScore(c.id);
      const target = getCategoryTarget(c);
      const gap = Math.max(0, target - score);
      const pillar = getPillarById(c.pillar);
      return { cat: c, pillar, score, target, gap, priority: gap * pillar.weight };
    })
    .filter(p => p.gap > 0)
    .sort((a, b) => b.priority - a.priority)
    .slice(0, 5);

  const priorityCards = priorities.length
    ? priorities.map((p, i) => `
        <div class="priority-card">
          <div class="priority-rank" style="background:${p.pillar.color}">${i + 1}</div>
          <div class="priority-body">
            <div class="priority-head">
              <div class="priority-label">${p.cat.label}</div>
              <div class="priority-meta">
                <span class="priority-pillar" style="color:${p.pillar.color}">${p.pillar.label}</span>
                <span class="priority-gap">${p.score} → ${p.target}</span>
              </div>
            </div>
            <ul class="priority-tips">
              ${p.cat.tips.map(t => `<li>${t}</li>`).join('')}
            </ul>
          </div>
        </div>
      `).join('')
    : `<div class="priority-empty">Tu es au niveau ou au-dessus de la cible sur toutes les compétences. Vise le niveau supérieur 💪</div>`;

  app.innerHTML = `
    <div class="results">
      <div class="results-header">
        <div class="results-level-badge">Cible : ${level.label}</div>
        <h2>Ta carte de compétences</h2>
        <p>Comparée aux attentes industrie pour un·e ${level.short}. Les barres grises marquent ton niveau cible.</p>
      </div>

      <div class="chart-container">
        <canvas id="radar-chart"></canvas>
      </div>

      <div class="priorities-block">
        <div class="priorities-head">
          <h3>Top ${priorities.length || 5} priorités de croissance</h3>
          <p>Calculé selon l'écart à ta cible × l'importance du pillar dans l'industrie.</p>
        </div>
        <div class="priorities-list">${priorityCards}</div>
      </div>

      ${pillarSections}

      <div class="results-actions">
        <button class="btn btn-ghost" onclick="restartQuiz()">↩ Recommencer</button>
      </div>
    </div>
  `;

  drawRadarChart();
}

function drawRadarChart() {
  const ctx = document.getElementById('radar-chart').getContext('2d');
  const scores = PILLARS.map(p => getPillarScore(p.id));
  const targets = PILLARS.map(p => {
    const cats = CATEGORIES.filter(c => c.pillar === p.id);
    const avg = cats.reduce((sum, c) => sum + getCategoryTarget(c), 0) / cats.length;
    return Math.round(avg * 10) / 10;
  });

  const primary      = getCssVar('--primary');
  const chartGrid    = getCssVar('--chart-grid');
  const chartLabel   = getCssVar('--chart-label');
  const chartTick    = getCssVar('--chart-tick');
  const targetLine   = getCssVar('--chart-target-line');
  const targetFill   = getCssVar('--chart-target-fill');
  const youFill      = getCssVar('--chart-you-fill');
  const pointBorder  = getCssVar('--surface');

  chartInstance = new Chart(ctx, {
    type: 'radar',
    data: {
      labels: PILLARS.map(p => p.label),
      datasets: [
        {
          label: 'Cible',
          data: targets,
          backgroundColor: targetFill,
          borderColor: targetLine,
          borderWidth: 1.5,
          borderDash: [5, 4],
          pointRadius: 0,
          pointHoverRadius: 0,
        },
        {
          label: 'Toi',
          data: scores,
          backgroundColor: youFill,
          borderColor: primary,
          borderWidth: 2.5,
          pointBackgroundColor: PILLARS.map(p => p.color),
          pointBorderColor: pointBorder,
          pointBorderWidth: 2,
          pointRadius: 6,
          pointHoverRadius: 8,
        },
      ],
    },
    options: {
      responsive: true,
      scales: {
        r: {
          min: 0,
          max: 10,
          ticks: {
            stepSize: 2,
            font: { size: 11, family: 'Inter' },
            color: chartTick,
            backdropColor: 'transparent',
          },
          grid: { color: chartGrid },
          angleLines: { color: chartGrid },
          pointLabels: {
            font: { size: 12, family: 'Inter', weight: '600' },
            color: chartLabel,
          },
        },
      },
      plugins: {
        legend: {
          display: true,
          position: 'bottom',
          labels: { color: chartLabel, font: { size: 12, family: 'Inter' }, usePointStyle: true, padding: 14 },
        },
        tooltip: { callbacks: { label: ctx => ` ${ctx.dataset.label} : ${ctx.raw}/10` } },
      },
    },
  });
}

// ─────────────────────────────────────────────────────────────────────
// Actions
// ─────────────────────────────────────────────────────────────────────
function startQuiz() {
  state.phase = 'quiz';
  state.currentIndex = 0;
  state.selectedOption = null;
  CATEGORIES.forEach(c => (state.scores[c.id] = 0));
  // Track answer indices to allow back navigation
  state.answers = new Array(QUESTIONS.length).fill(null);
  renderQuestion();
}

function selectAnswer(i) {
  state.selectedOption = i;
  document.querySelectorAll('.option').forEach((el, idx) => {
    el.classList.toggle('selected', idx === i);
  });
  const btn = document.getElementById('btn-next');
  if (btn) btn.disabled = false;
}

function nextQuestion() {
  if (state.selectedOption === null) return;
  const q = QUESTIONS[state.currentIndex];

  // Undo previous answer for this question if going through again
  const prev = state.answers[state.currentIndex];
  if (prev !== null) {
    state.scores[q.category] -= q.options[prev].score;
  }
  state.scores[q.category] += q.options[state.selectedOption].score;
  state.answers[state.currentIndex] = state.selectedOption;

  state.currentIndex++;
  state.selectedOption = state.answers[state.currentIndex] ?? null;

  if (state.currentIndex >= QUESTIONS.length) {
    state.phase = 'results';
    renderResults();
  } else {
    renderQuestion();
  }
}

function prevQuestion() {
  if (state.currentIndex === 0) return;
  state.currentIndex--;
  state.selectedOption = state.answers[state.currentIndex] ?? null;
  renderQuestion();
}

function restartQuiz() {
  state.phase = 'welcome';
  state.selectedOption = null;
  CATEGORIES.forEach(c => (state.scores[c.id] = 0));
  renderWelcome();
}

// ─────────────────────────────────────────────────────────────────────
// Init
// ─────────────────────────────────────────────────────────────────────
renderWelcome();

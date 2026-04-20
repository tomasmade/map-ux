const CATEGORIES = [
  { id: 'research', label: 'Recherche utilisateur', color: '#6366F1', maxScore: 15 },
  { id: 'ia',       label: 'Architecture de l\'info', color: '#8B5CF6', maxScore: 15 },
  { id: 'proto',    label: 'Wireframing & Proto',    color: '#EC4899', maxScore: 15 },
  { id: 'ds',       label: 'Design System',          color: '#F59E0B', maxScore: 15 },
  { id: 'testing',  label: 'Tests utilisateurs',     color: '#10B981', maxScore: 15 },
  { id: 'a11y',     label: 'Accessibilité',          color: '#3B82F6', maxScore: 15 },
  { id: 'writing',  label: 'UX Writing',             color: '#F97316', maxScore: 15 },
  { id: 'data',     label: 'Data & Analytics',       color: '#14B8A6', maxScore: 15 },
];

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
    category: 'writing',
    text: 'Tu dois écrire un message d\'erreur pour un champ email. Quelle formulation choisis-tu ?',
    options: [
      { text: '« Erreur — champ invalide »', score: 0 },
      { text: '« Ce champ est obligatoire »', score: 1 },
      { text: '« Merci d\'entrer une adresse email valide (ex : nom@domaine.fr) »', score: 3 },
      { text: '« Oops ! Quelque chose s\'est mal passé »', score: 1 },
    ],
  },
  {
    category: 'writing',
    text: 'Quelle est la règle principale pour rédiger un bon call-to-action (CTA) ?',
    options: [
      { text: 'Utiliser un verbe d\'action + préciser le résultat attendu pour l\'utilisateur', score: 3 },
      { text: 'Le rendre le plus court possible, idéalement 1 seul mot', score: 1 },
      { text: 'Utiliser des termes génériques et familiers comme « Cliquez ici »', score: 0 },
      { text: 'Le mettre entièrement en majuscules pour attirer l\'attention', score: 0 },
    ],
  },
  {
    category: 'writing',
    text: 'Tu révises le copy d\'un onboarding. Comment évalues-tu si le texte est efficace ?',
    options: [
      { text: 'Tu le fais relire par un collègue pour vérifier les fautes', score: 1 },
      { text: 'Tu testes la compréhension directement avec des utilisateurs', score: 3 },
      { text: 'Tu le compares au copy d\'apps concurrentes dans le même secteur', score: 2 },
      { text: 'Tu te fies à ton instinct de communicant et ton expérience', score: 1 },
    ],
  },

  {
    category: 'writing',
    text: 'Tu dois nommer un nouveau bouton de partage dans l\'app. Comment choisis-tu le bon label ?',
    options: [
      { text: 'Tu proposes plusieurs options et tu choisis celle qui sonne le mieux', score: 1 },
      { text: 'Tu utilises le vocabulaire que tes utilisateurs emploient naturellement (insights research ou analytics)', score: 3 },
      { text: 'Tu choisis le terme le plus précis techniquement', score: 0 },
      { text: 'Tu demandes au PM ce qu\'il préfère', score: 1 },
    ],
  },
  {
    category: 'writing',
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
];

// ── State ──
let currentIndex = 0;
let selectedOption = null;
let scores = {}; // { categoryId: totalScore }

CATEGORIES.forEach(c => (scores[c.id] = 0));

// ── Helpers ──
function getCategoryById(id) {
  return CATEGORIES.find(c => c.id === id);
}

function getNormalizedScore(catId) {
  const cat = getCategoryById(catId);
  return Math.round((scores[catId] / cat.maxScore) * 10);
}

function getInterpretation(score) {
  if (score >= 9) return { label: 'Expert',        cls: 'badge-expert' };
  if (score >= 7) return { label: 'Maîtrisé',      cls: 'badge-maitrise' };
  if (score >= 4) return { label: 'En progression', cls: 'badge-progres' };
  return              { label: 'À renforcer',    cls: 'badge-renforcer' };
}

function getLetter(i) { return ['A', 'B', 'C', 'D'][i]; }

// ── Render: Welcome ──
function renderWelcome() {
  const app = document.getElementById('app');
  const chips = CATEGORIES.map(c => `
    <div class="cat-chip">
      <div class="cat-dot" style="background:${c.color}"></div>
      ${c.label}
    </div>
  `).join('');

  app.innerHTML = `
    <div class="welcome">
      <div class="welcome-badge">✦ Self-Assessment</div>
      <h1>Où en sont tes<br/><span>hard skills UX ?</span></h1>
      <p>40 questions pour cartographier tes compétences UX et visualiser tes points forts et tes axes de progression.</p>
      <div class="welcome-stats">
        <div class="stat"><div class="stat-value">40</div><div class="stat-label">Questions</div></div>
        <div class="stat"><div class="stat-value">8</div><div class="stat-label">Compétences</div></div>
        <div class="stat"><div class="stat-value">~15</div><div class="stat-label">Minutes</div></div>
      </div>
      <div class="categories-preview">${chips}</div>
      <button class="btn btn-primary" onclick="startQuiz()">Commencer le quiz →</button>
    </div>
  `;
}

// ── Render: Question ──
function renderQuestion() {
  const app = document.getElementById('app');
  const q = QUESTIONS[currentIndex];
  const cat = getCategoryById(q.category);
  const total = QUESTIONS.length;
  const progress = Math.round((currentIndex / total) * 100);

  const options = q.options.map((opt, i) => `
    <button
      class="option${selectedOption === i ? ' selected' : ''}"
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
          <span class="progress-label">${cat.label}</span>
          <span class="progress-count">${currentIndex + 1} / ${total}</span>
        </div>
        <div class="progress-bar-track">
          <div class="progress-bar-fill" style="width: ${progress}%"></div>
        </div>
      </div>
      <div class="quiz-body">
        <div class="question-category" style="background:${cat.color}22; color:${cat.color}">
          ${cat.label}
        </div>
        <div class="question-text">${q.text}</div>
        <div class="options">${options}</div>
      </div>
      <div class="quiz-footer">
        <button class="btn btn-primary" id="btn-next" onclick="nextQuestion()" ${selectedOption === null ? 'disabled' : ''}>
          ${currentIndex < QUESTIONS.length - 1 ? 'Suivant →' : 'Voir mes résultats →'}
        </button>
      </div>
    </div>
  `;
}

// ── Render: Results ──
function renderResults() {
  const app = document.getElementById('app');

  const normalizedScores = CATEGORIES.map(c => getNormalizedScore(c.id));

  const cards = CATEGORIES.map((cat, i) => {
    const score = normalizedScores[i];
    const interp = getInterpretation(score);
    return `
      <div class="score-card">
        <div class="score-card-header">
          <div class="score-card-dot" style="background:${cat.color}"></div>
          <div class="score-card-label">${cat.label}</div>
          <div class="score-card-value">${score}/10</div>
        </div>
        <div class="score-bar-track">
          <div class="score-bar-fill" style="width:${score * 10}%; background:${cat.color}"></div>
        </div>
        <span class="score-badge ${interp.cls}">${interp.label}</span>
      </div>
    `;
  }).join('');

  app.innerHTML = `
    <div class="results">
      <div class="results-header">
        <h2>Tes résultats ✦</h2>
        <p>Voici une carte de tes compétences UX actuelles</p>
      </div>
      <div class="chart-container">
        <canvas id="radar-chart"></canvas>
      </div>
      <div class="scores-grid">${cards}</div>
      <div class="results-actions">
        <button class="btn btn-ghost" onclick="restartQuiz()">↩ Recommencer</button>
      </div>
    </div>
  `;

  drawRadarChart(normalizedScores);
}

function drawRadarChart(data) {
  const ctx = document.getElementById('radar-chart').getContext('2d');
  new Chart(ctx, {
    type: 'radar',
    data: {
      labels: CATEGORIES.map(c => c.label),
      datasets: [{
        label: 'Ton niveau',
        data,
        backgroundColor: 'rgba(91, 76, 245, 0.15)',
        borderColor: '#5B4CF5',
        borderWidth: 2.5,
        pointBackgroundColor: CATEGORIES.map(c => c.color),
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
        pointRadius: 6,
        pointHoverRadius: 8,
      }],
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
            color: '#6B63A0',
            backdropColor: 'transparent',
          },
          grid: { color: '#E4E2F8' },
          angleLines: { color: '#E4E2F8' },
          pointLabels: {
            font: { size: 12, family: 'Inter', weight: '600' },
            color: '#1A1033',
          },
        },
      },
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: ctx => ` ${ctx.raw}/10`,
          },
        },
      },
    },
  });
}

// ── Actions ──
function startQuiz() {
  currentIndex = 0;
  selectedOption = null;
  CATEGORIES.forEach(c => (scores[c.id] = 0));
  renderQuestion();
}

function selectAnswer(i) {
  selectedOption = i;
  renderQuestion();
}

function nextQuestion() {
  if (selectedOption === null) return;
  const q = QUESTIONS[currentIndex];
  scores[q.category] += q.options[selectedOption].score;

  currentIndex++;
  selectedOption = null;

  if (currentIndex >= QUESTIONS.length) {
    renderResults();
  } else {
    renderQuestion();
  }
}

function restartQuiz() {
  renderWelcome();
}

// ── Init ──
renderWelcome();

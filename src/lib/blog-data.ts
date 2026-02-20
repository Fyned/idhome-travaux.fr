// ─────────────────────────────────────────────
// ID Home — Données du blog (statiques)
// ─────────────────────────────────────────────

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  datePublished: string;
  readTime: string;
  image: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "fuite-eau-que-faire",
    title: "Fuite d'eau : que faire en cas d'urgence ?",
    image: "/images/blog/fuite-eau.jpg",
    excerpt:
      "Découvrez les premiers gestes à adopter en cas de fuite d'eau chez vous et comment limiter les dégâts avant l'arrivée du plombier.",
    content: `
Une fuite d'eau peut survenir à tout moment et causer d'importants dégâts si elle n'est pas traitée rapidement. Chaque année en France, les dégâts des eaux représentent le sinistre le plus fréquent déclaré aux assureurs. Savoir réagir dans les premières minutes peut faire la différence entre un simple désagrément et une catastrophe coûteuse. Voici les gestes essentiels à adopter.

## Les premiers réflexes

La première chose à faire est de couper l'arrivée d'eau générale de votre logement. Le robinet d'arrêt se trouve généralement près du compteur d'eau, sous l'évier de la cuisine ou dans un placard technique. Si vous vivez en appartement, un robinet d'arrêt individuel se situe souvent à l'entrée de votre logement, près de la colonne montante. Repérez-le dès maintenant, avant qu'une urgence ne survienne.

Ensuite, placez des récipients sous la fuite pour contenir l'eau et épongez immédiatement le sol pour éviter les infiltrations vers les étages inférieurs. Si l'eau atteint des prises électriques ou des appareils branchés, coupez l'électricité au tableau général avant de toucher quoi que ce soit. Éloignez les objets de valeur, les documents importants et les appareils électroniques de la zone touchée.

## Évaluer la gravité de la fuite

Toutes les fuites ne se valent pas. Un robinet qui goutte légèrement peut généralement attendre une intervention programmée. En revanche, certaines situations exigent une réaction immédiate : une canalisation percée qui projette de l'eau sous pression, un cumulus qui se vide au sol, un refoulement d'eaux usées par les évacuations, ou une fuite provenant du plafond chez votre voisin du dessous. Dans ces cas, chaque minute compte pour limiter les dégâts matériels et structurels.

## Quand appeler un professionnel ?

Si la fuite est importante, si vous ne parvenez pas à couper l'eau, ou si la fuite provient d'une canalisation encastrée dans un mur ou un sol, contactez immédiatement un plombier professionnel. N'essayez pas de bricoler une réparation provisoire sur une conduite sous pression, car vous risqueriez d'aggraver la situation.

Chez ID Home, nous intervenons 7J/7, y compris les week-ends et jours fériés, pour toutes les urgences de plomberie en Île-de-France. Notre équipe est formée pour diagnostiquer et réparer rapidement tout type de fuite. Nous disposons d'équipements professionnels de détection, dont des caméras thermiques et des détecteurs acoustiques, qui permettent de localiser les fuites cachées sans démolir vos murs ou sols.

## Les démarches auprès de votre assurance

Pensez à prendre des photos des dégâts avant de commencer tout nettoyage ou réparation. Ces clichés constitueront des preuves essentielles pour votre déclaration de sinistre. Vous disposez d'un délai de cinq jours ouvrés pour déclarer un dégât des eaux à votre assureur. Remplissez le constat amiable de dégât des eaux si un voisin est également concerné.

## Prévenir les fuites

Un entretien régulier de votre installation de plomberie permet de prévenir la plupart des fuites. Vérifiez les joints de vos robinets et de vos raccordements au moins une fois par an. Contrôlez la pression de votre réseau, qui doit se situer entre 3 et 5 bars. Faites inspecter vos canalisations, surtout si elles ont plus de vingt ans. Faites entretenir votre chauffe-eau annuellement et surveillez les signes d'usure comme les traces de calcaire ou les suintements. Enfin, si vous vous absentez longtemps, fermez le robinet d'arrivée d'eau générale par précaution.
    `.trim(),
    category: "Plomberie",
    datePublished: "2025-01-15",
    readTime: "5 min",
  },
  {
    slug: "renovation-salle-de-bain-guide",
    title: "Guide complet : rénover sa salle de bain",
    image: "/images/blog/salle-de-bain.jpg",
    excerpt:
      "Tout ce que vous devez savoir pour réussir la rénovation de votre salle de bain : budget, matériaux, étapes et conseils de pros.",
    content: `
La rénovation d'une salle de bain est l'un des projets les plus valorisants pour votre logement. C'est une pièce que vous utilisez quotidiennement et dont le confort impacte directement votre qualité de vie. Une salle de bain bien conçue et modernisée peut également valoriser votre bien immobilier de 5 à 10 %. Voici notre guide complet pour vous aider à bien préparer votre projet.

## Définir votre budget

Le budget d'une rénovation de salle de bain varie selon l'ampleur des travaux. Pour un simple rafraîchissement, comprenant la peinture, le remplacement des accessoires et la robinetterie, comptez entre 2 000 et 5 000 euros. Une rénovation partielle, qui inclut le changement du carrelage, du meuble vasque et de la douche, se situe entre 5 000 et 10 000 euros. Pour une rénovation complète haut de gamme avec modification de la plomberie, remplacement de tous les équipements et pose de matériaux nobles, le budget peut dépasser 15 000 euros. Prévoyez toujours une marge de 10 à 15 % pour les imprévus, qui sont fréquents dans les logements anciens.

## Choisir les bons matériaux

Dans une salle de bain, les matériaux doivent résister à l'humidité permanente et aux projections d'eau. Le carrelage en grès cérame reste le choix le plus populaire pour les sols et les murs grâce à sa résistance et son entretien facile. Pour les murs hors zone de projection, la peinture spéciale pièces humides offre un rendu moderne et économique. Le meuble vasque doit être en matériaux hydrofuges pour éviter le gonflement. Pour les parois de douche, le verre trempé est à la fois esthétique et durable. Enfin, optez pour de la robinetterie de qualité : les marques comme Grohe ou Hansgrohe offrent des garanties de cinq à dix ans.

## Les tendances actuelles

La douche à l'italienne reste la grande tendance de ces dernières années. Son receveur extra-plat et son accès de plain-pied apportent une touche de modernité tout en facilitant l'accessibilité. Les vasques posées sur plan de travail en bois ou en pierre naturelle créent un effet design recherché. Les couleurs naturelles et les matériaux bruts comme le béton ciré, la pierre et le bois traité sont très prisés pour créer une ambiance spa relaxante.

## Les étapes clés de la rénovation

Une rénovation de salle de bain suit un ordre précis qu'il est important de respecter pour un résultat optimal. Premièrement, la démolition et la dépose des anciens équipements, carrelages et revêtements. Deuxièmement, les travaux de plomberie et d'électricité, qui doivent être réalisés avant la fermeture des murs. Troisièmement, la réalisation de l'étanchéité des sols et des murs, une étape cruciale pour éviter les infiltrations. Quatrièmement, la pose du carrelage au sol puis sur les murs. Cinquièmement, l'installation des équipements sanitaires : douche ou baignoire, WC, vasque, robinetterie. Sixièmement, les finitions incluant la peinture, les joints silicone, les accessoires et l'installation des meubles.

## Faire appel à un professionnel

La rénovation d'une salle de bain fait intervenir plusieurs corps de métier : plombier, électricien, carreleur, peintre. La coordination de ces intervenants et le respect des normes, notamment la norme NF C 15-100 pour l'électricité en pièce humide, exigent une expertise professionnelle. Une mauvaise étanchéité peut entraîner des infiltrations coûteuses et des problèmes de moisissures.

Chez ID Home, nous gérons votre projet de rénovation de salle de bain de A à Z. Un interlocuteur unique coordonne l'ensemble des travaux, du diagnostic initial à la livraison finale. Nous vous accompagnons dans le choix des matériaux et des équipements, et nous vous garantissons un travail aux normes avec des finitions impeccables. Contactez-nous pour un devis gratuit et personnalisé.
    `.trim(),
    category: "Rénovation",
    datePublished: "2025-02-10",
    readTime: "6 min",
  },
  {
    slug: "securiser-porte-entree",
    title: "Comment sécuriser sa porte d'entrée ?",
    image: "/images/blog/porte-entree.jpg",
    excerpt:
      "Les meilleures solutions pour renforcer la sécurité de votre porte d'entrée : serrure multipoints, blindage, cylindre haute sécurité.",
    content: `
La porte d'entrée est le premier rempart de votre logement contre les intrusions. Selon les statistiques du ministère de l'Intérieur, plus de 80 % des cambriolages se font par la porte d'entrée. Renforcer sa sécurité est donc un investissement prioritaire pour protéger votre foyer. Voici les solutions disponibles, de la plus simple à la plus complète.

## La serrure multipoints

La serrure multipoints est la première amélioration à envisager. Contrairement à une serrure monopoint qui verrouille la porte en un seul endroit, une serrure multipoints la fixe en trois, cinq ou même sept points répartis sur toute la hauteur. Chaque point de verrouillage augmente la résistance à l'effraction. Remplacez votre serrure simple par une serrure 3 ou 5 points certifiée A2P. Cette certification, délivrée par le Centre National de Prévention et de Protection, garantit une résistance éprouvée contre les tentatives d'effraction. Une serrure A2P une étoile résiste cinq minutes, deux étoiles dix minutes, et trois étoiles quinze minutes. Pour un logement en zone urbaine, nous recommandons au minimum une certification deux étoiles.

## Le blindage de porte

Le blindage consiste à renforcer votre porte existante avec une plaque d'acier fixée sur la face intérieure. Un encadrement métallique vient compléter le dispositif en renforçant le dormant. C'est une solution efficace et économique par rapport au remplacement complet de la porte, avec un budget moyen de 800 à 1 500 euros pose comprise. Le blindage conserve l'aspect extérieur de votre porte, ce qui est un avantage important en copropriété où les modifications de l'aspect des parties communes sont souvent soumises à l'accord du syndic.

## Le cylindre haute sécurité

Le cylindre, aussi appelé barillet, est souvent le maillon faible d'une porte. Un cambrioleur expérimenté peut crocheter un cylindre standard en quelques secondes. Un cylindre haute sécurité intègre des protections anti-crochetage, anti-perçage, anti-arrachement et anti-bumping. Les modèles brevetés empêchent la reproduction non autorisée des clés. Comptez entre 100 et 300 euros pour un cylindre haute sécurité de qualité, une dépense modeste au regard de la protection apportée.

## Les solutions complémentaires

Au-delà de la serrure et du blindage, d'autres dispositifs renforcent la sécurité de votre porte d'entrée. Un entrebâilleur ou une chaîne de sécurité vous permet de vérifier l'identité d'un visiteur avant d'ouvrir complètement. Un judas optique ou un visiophone connecté offre une vision claire de votre palier. Les cornières anti-effraction, fixées sur le bâti de la porte, empêchent l'insertion d'un pied-de-biche. Enfin, un détecteur d'ouverture relié à une alarme constitue une couche de protection supplémentaire efficace.

## L'entretien régulier

Une serrure bien entretenue fonctionne mieux et dure plus longtemps. Graissez le mécanisme deux à trois fois par an avec un lubrifiant adapté, jamais avec de l'huile alimentaire qui attire la poussière. Vérifiez l'état des joints et du pêne. Si la clé tourne difficilement ou si la porte ferme mal, ne forcez pas : un ajustement préventif par un professionnel coûtera toujours moins cher qu'un remplacement complet en urgence.

## Quel budget prévoir ?

Le budget pour sécuriser une porte d'entrée varie selon les solutions choisies. Le remplacement du cylindre seul se situe entre 100 et 300 euros. Une serrure multipoints avec pose coûte entre 300 et 800 euros. Le blindage complet avec serrure représente entre 800 et 2 000 euros. Nos serruriers professionnels réalisent un diagnostic gratuit de votre porte et vous conseillent les solutions les plus adaptées à votre logement et à votre budget. Contactez ID Home pour un devis personnalisé.
    `.trim(),
    category: "Serrurerie",
    datePublished: "2025-03-05",
    readTime: "5 min",
  },
  {
    slug: "entretien-chauffe-eau",
    title: "Comment entretenir son chauffe-eau ?",
    image: "/images/blog/chauffe-eau.jpg",
    excerpt:
      "L'entretien régulier de votre chauffe-eau prolonge sa durée de vie et optimise ses performances. Découvrez nos conseils pratiques.",
    content: `
Votre chauffe-eau fonctionne quotidiennement pour vous fournir de l'eau chaude sanitaire. Sans entretien régulier, ses performances diminuent et sa durée de vie se raccourcit considérablement. Un chauffe-eau bien entretenu dure en moyenne 10 à 15 ans, contre 7 à 8 ans sans maintenance. Voici tout ce que vous devez savoir pour en prendre soin.

## Pourquoi entretenir son chauffe-eau ?

L'eau qui circule dans votre ballon contient naturellement du calcaire et des sédiments. Au fil du temps, ces dépôts s'accumulent au fond de la cuve et autour de la résistance. Le calcaire forme une couche isolante qui oblige l'appareil à consommer davantage d'énergie pour chauffer l'eau. Un chauffe-eau entartré peut voir sa consommation augmenter de 10 à 20 %. Par ailleurs, la corrosion progressive fragilise la cuve et peut provoquer des fuites. L'entretien régulier vous permet donc de réaliser des économies d'énergie tout en évitant les pannes coûteuses.

## À quelle fréquence faut-il l'entretenir ?

Les fabricants recommandent un entretien annuel de votre chauffe-eau. Cette visite de maintenance comprend plusieurs opérations essentielles. Premièrement, la vérification de l'anode de protection, qui est une tige en magnésium ou en titane destinée à protéger la cuve contre la corrosion. Si l'anode en magnésium est usée à plus de 75 %, il faut la remplacer. Deuxièmement, la vidange partielle de la cuve permet d'évacuer les sédiments accumulés au fond du ballon. Troisièmement, le contrôle du groupe de sécurité garantit que la soupape fonctionne correctement et peut évacuer la surpression. Enfin, la vérification du thermostat assure que la température est réglée entre 55 et 60 degrés, ce qui est optimal pour limiter le tartre tout en empêchant le développement de bactéries comme la légionelle.

## Les signes qui doivent vous alerter

Plusieurs symptômes indiquent que votre chauffe-eau a besoin d'une intervention. Si l'eau met plus de temps à chauffer, si vous constatez une baisse de la quantité d'eau chaude disponible, ou si des bruits inhabituels proviennent de l'appareil, il est temps d'agir. Une eau qui sort rouillée ou avec une odeur désagréable est également un signal d'alerte important. Des gouttes d'eau au pied du ballon peuvent indiquer une corrosion avancée de la cuve, ce qui nécessite souvent un remplacement complet de l'appareil.

## Faire appel à un professionnel

Si certaines opérations simples comme l'actionnement du groupe de sécurité peuvent être réalisées vous-même, l'entretien complet nécessite l'intervention d'un professionnel qualifié. Chez ID Home, nos plombiers assurent la maintenance de tous types de chauffe-eau, qu'ils soient électriques, à gaz ou thermodynamiques. Nous vous proposons un diagnostic complet et vous conseillons sur le remplacement si votre appareil arrive en fin de vie. Contactez-nous pour planifier votre entretien annuel et profiter d'un devis gratuit.
    `.trim(),
    category: "Plomberie",
    datePublished: "2025-04-12",
    readTime: "4 min",
  },
  {
    slug: "panne-electrique-gestes",
    title: "Panne électrique : les bons gestes à adopter",
    image: "/images/blog/panne-electrique.jpg",
    excerpt:
      "Coupure de courant chez vous ? Découvrez les gestes à adopter et les erreurs à éviter avant l'arrivée de l'électricien.",
    content: `
Une panne électrique peut survenir à tout moment et plonger votre logement dans le noir. Avant de paniquer, quelques vérifications simples vous permettront de comprendre l'origine du problème et d'agir en toute sécurité. Voici les bons gestes à adopter.

## Identifier l'origine de la panne

La première étape consiste à déterminer si la coupure est générale ou limitée à votre logement. Regardez par la fenêtre : si vos voisins sont également dans le noir, il s'agit probablement d'une coupure du réseau Enedis. Dans ce cas, il suffit d'attendre le rétablissement. En revanche, si vous êtes le seul touché, le problème vient de votre installation intérieure. Vérifiez votre tableau électrique : un disjoncteur a peut-être déclenché suite à un court-circuit ou une surcharge. Identifiez le disjoncteur en position basse et tentez de le remonter. Si le disjoncteur refuse de rester enclenché ou redéclenche immédiatement, un appareil défectueux ou un défaut d'isolement est probablement en cause.

## Les erreurs à ne surtout pas commettre

En cas de panne électrique, certains gestes sont dangereux et doivent être absolument évités. Ne touchez jamais un appareil électrique si vous avez les mains mouillées ou si le sol est humide. Ne tentez pas de réparer vous-même un câble dénudé ou une prise noircie. N'utilisez jamais de bougies à proximité de votre tableau électrique. N'essayez pas de ponter un disjoncteur qui déclenche en le forçant ou en le bloquant, car cela supprime une protection vitale contre les risques d'incendie et d'électrocution. Enfin, ne débranchez pas et ne rebranchez pas de multiples appareils en même temps lors du rétablissement du courant.

## Quand appeler un électricien ?

Si le disjoncteur refuse de rester enclenché après deux tentatives, si vous sentez une odeur de brûlé, si une prise ou un interrupteur est chaud au toucher, ou si le problème revient régulièrement, faites appel à un électricien professionnel sans hésiter. Ces signes peuvent indiquer un défaut grave dans votre installation qui présente un risque d'incendie. Chez ID Home, nos électriciens interviennent rapidement pour diagnostiquer et résoudre toutes vos pannes électriques. Nous disposons de l'équipement nécessaire pour localiser précisément un défaut d'isolement ou un court-circuit.

## Prévenir les pannes

Pour limiter les risques de panne, évitez de brancher trop d'appareils sur une même multiprise. Faites vérifier votre installation tous les dix ans par un professionnel, notamment si votre logement a plus de vingt ans. Remplacez immédiatement toute prise endommagée ou tout interrupteur qui chauffe. Un diagnostic électrique complet vous assure une installation conforme et sécurisée. Contactez ID Home pour un devis gratuit.
    `.trim(),
    category: "Électricité",
    datePublished: "2025-05-08",
    readTime: "3 min",
  },
  {
    slug: "choisir-serrure-securite",
    title: "Bien choisir sa serrure de sécurité",
    image: "/images/blog/serrure-securite.jpg",
    excerpt:
      "Serrure multipoints, cylindre haute sécurité, certification A2P… Guide complet pour bien choisir la serrure adaptée à votre logement.",
    content: `
La serrure est l'élément central de la sécurité de votre domicile. Face à la diversité des modèles disponibles sur le marché, il n'est pas toujours facile de s'y retrouver. Ce guide vous aide à comprendre les différentes options et à choisir la serrure la mieux adaptée à vos besoins.

## Serrure monopoint ou multipoints ?

Une serrure monopoint ne verrouille la porte qu'en un seul point, généralement au niveau de la poignée. Elle offre un niveau de sécurité basique, suffisant pour les portes intérieures mais insuffisant pour une porte d'entrée. Les serrures multipoints, en revanche, verrouillent la porte en trois, cinq ou même sept points répartis sur toute la hauteur de l'ouvrant. Plus le nombre de points est élevé, plus l'effraction est difficile. Pour une porte d'entrée, nous recommandons au minimum une serrure trois points. Les serrures cinq points sont le standard recommandé par les assureurs pour les logements en rez-de-chaussée ou en zone urbaine.

## Comprendre la certification A2P

La certification A2P, délivrée par le Centre National de Prévention et de Protection, est la référence en matière de résistance aux effractions. Elle se décline en trois niveaux. Une étoile A2P correspond à cinq minutes de résistance à l'effraction, ce qui convient aux logements à risque modéré. Deux étoiles A2P garantissent dix minutes de résistance et sont recommandées pour la plupart des habitations. Trois étoiles A2P offrent quinze minutes de résistance et sont destinées aux sites sensibles ou aux logements situés dans des zones à risque élevé. Choisir une serrure certifiée A2P est également un avantage pour votre assurance habitation, car de nombreux contrats exigent ce niveau de protection.

## Les cylindres de sécurité

Le cylindre, aussi appelé barillet, est la partie de la serrure dans laquelle vous insérez votre clé. Un cylindre standard peut être crocheté en quelques secondes par un cambrioleur expérimenté. Les cylindres haute sécurité intègrent des protections anti-crochetage, anti-perçage, anti-arrachement et anti-bumping. Les marques reconnues proposent des cylindres brevetés dont les clés ne peuvent être reproduites que sur présentation d'une carte de propriété, empêchant ainsi toute copie non autorisée.

## Les serrures connectées

Les serrures connectées représentent l'avenir de la sécurité résidentielle. Elles permettent de verrouiller et déverrouiller votre porte à distance via une application smartphone, de créer des codes d'accès temporaires pour vos visiteurs et de recevoir des notifications à chaque ouverture. Certains modèles conservent une entrée de clé classique en secours, ce qui est recommandé en cas de panne de batterie ou de problème technique. Le prix d'une serrure connectée varie de 150 à 500 euros selon les fonctionnalités, hors installation.

## Budget et installation professionnelle

Le budget pour une serrure de sécurité varie selon le type choisi. Comptez entre 80 et 200 euros pour une serrure trois points d'entrée de gamme, entre 200 et 600 euros pour une serrure cinq points certifiée A2P, et entre 100 et 300 euros pour un cylindre haute sécurité seul. L'installation par un professionnel est fortement recommandée pour garantir le bon fonctionnement et la validité de la certification. Chez ID Home, nos serruriers vous conseillent sur le choix le plus adapté à votre porte et à votre budget, et assurent une pose conforme aux normes. Demandez votre devis gratuit.
    `.trim(),
    category: "Serrurerie",
    datePublished: "2025-06-20",
    readTime: "5 min",
  },
  {
    slug: "renovation-appartement-etapes",
    title: "Rénover son appartement : les étapes clés",
    image: "/images/blog/renovation-appartement.jpg",
    excerpt:
      "De la planification au résultat final, découvrez toutes les étapes essentielles pour réussir la rénovation de votre appartement.",
    content: `
Rénover un appartement est un projet ambitieux qui transforme votre cadre de vie. Que ce soit pour moderniser un logement ancien, gagner en confort ou valoriser votre bien avant une vente, une rénovation réussie repose sur une préparation rigoureuse. Voici toutes les étapes à suivre pour mener votre projet à bien.

## La phase de planification

Avant de commencer les travaux, prenez le temps de définir précisément vos besoins et vos priorités. Établissez une liste des pièces à rénover et des améliorations souhaitées. Faites réaliser un diagnostic complet de votre logement pour identifier les éventuels problèmes structurels, d'humidité ou d'isolation. Ce diagnostic vous permettra d'anticiper les travaux imprévus et d'affiner votre budget. Pensez également à vérifier les autorisations nécessaires : en copropriété, certains travaux nécessitent l'accord de l'assemblée générale, notamment ceux qui touchent aux parties communes ou modifient l'aspect extérieur de l'immeuble. Pour les travaux lourds comme la modification de cloisons porteuses, un permis de construire ou une déclaration préalable peut être exigée.

## Estimer son budget

Le budget est la pierre angulaire de tout projet de rénovation. En moyenne, une rénovation légère coûte entre 200 et 500 euros le mètre carré, une rénovation complète entre 500 et 1 000 euros, et une rénovation lourde avec modification de la structure peut dépasser 1 500 euros le mètre carré. Prévoyez toujours une marge de 10 à 15 % pour les imprévus, qui sont quasi inévitables dans un logement ancien. Renseignez-vous sur les aides financières disponibles : MaPrimeRénov' pour les travaux d'amélioration énergétique, éco-prêt à taux zéro, TVA réduite à 5,5 % pour certains travaux de rénovation énergétique, et aides de l'Anah pour les logements anciens.

## Le déroulement des travaux

Les travaux suivent un ordre logique précis qu'il est important de respecter. La première phase concerne la démolition et le gros œuvre : abattage de cloisons, ouverture de trémies, ragréage des sols. Viennent ensuite les travaux de plomberie et d'électricité, qui doivent être réalisés avant la fermeture des murs et des sols. C'est le moment de repenser l'emplacement des prises, des points d'eau et des évacuations. La troisième phase comprend l'isolation thermique et phonique, essentielle pour le confort quotidien. Puis vient le cloisonnement et la pose des revêtements de sol et muraux. Enfin, les finitions comprennent la peinture, la pose des équipements sanitaires, l'installation des luminaires et la mise en place des menuiseries intérieures.

## Vivre dans son logement pendant les travaux

Si vous ne pouvez pas quitter votre appartement pendant la rénovation, quelques astuces facilitent le quotidien. Concentrez les travaux pièce par pièce plutôt que de tout ouvrir en même temps. Protégez les pièces non concernées avec des bâches en plastique épais pour limiter la poussière. Prévoyez un coin cuisine temporaire si votre cuisine est en travaux. Communiquez avec vos voisins sur le planning des travaux bruyants, et respectez les horaires autorisés par le règlement de copropriété, généralement de 8h à 20h en semaine et de 10h à 12h le samedi.

## Confier son projet à des professionnels

Une rénovation complète fait intervenir de nombreux corps de métier : maçon, plombier, électricien, plaquiste, carreleur, peintre. Coordonner tous ces intervenants est un véritable défi. Chez ID Home, nous prenons en charge l'intégralité de votre projet de rénovation. De la conception à la livraison, un interlocuteur unique coordonne tous les travaux. Contactez-nous pour un devis gratuit et un accompagnement personnalisé.
    `.trim(),
    category: "Rénovation",
    datePublished: "2025-07-15",
    readTime: "6 min",
  },
  {
    slug: "choisir-peinture-interieure",
    title: "Comment choisir sa peinture intérieure ?",
    image: "/images/blog/peinture-interieure.jpg",
    excerpt:
      "Mat, satiné ou brillant ? Acrylique ou glycéro ? Tous nos conseils pour choisir la peinture idéale pour chaque pièce de votre intérieur.",
    content: `
Le choix de la peinture intérieure influence considérablement l'ambiance et le style de votre logement. Entre les différents types de peinture, les finitions et les couleurs disponibles, il est facile de se sentir dépassé. Ce guide vous aide à faire le bon choix pour chaque pièce de votre intérieur.

## Les types de peinture

Trois grandes familles de peinture se partagent le marché. La peinture acrylique, à base d'eau, est la plus utilisée aujourd'hui. Elle est facile à appliquer, sèche rapidement, dégage peu d'odeur et les outils se nettoient simplement à l'eau. Elle convient à la plupart des pièces et existe dans une vaste gamme de couleurs. La peinture glycéro, à base de solvants, offre un rendu plus lisse et une meilleure résistance à l'humidité et aux taches. Elle est idéale pour les cuisines, les salles de bain et les boiseries, mais son odeur forte et son temps de séchage plus long la rendent moins pratique. La peinture alkyde, qui combine les avantages des deux précédentes, est une alternative intéressante : elle offre le rendu tendu de la glycéro avec la facilité d'application et le faible impact environnemental de l'acrylique.

## Les finitions : mat, satiné ou brillant ?

La finition détermine l'aspect visuel de vos murs et leur entretien. La finition mate absorbe la lumière et masque les petites imperfections des murs. Elle crée une atmosphère douce et contemporaine, idéale pour les chambres et les séjours. En revanche, elle est plus fragile et difficile à nettoyer. La finition satinée offre un léger reflet qui illumine la pièce tout en restant sobre. C'est le meilleur compromis entre esthétique et praticité, car elle se nettoie facilement d'un coup d'éponge. Elle convient à toutes les pièces, y compris les couloirs et les chambres d'enfants. La finition brillante reflète fortement la lumière et apporte un côté chic et moderne. Très résistante et lessivable, elle est parfaite pour les cuisines et les salles de bain, mais elle souligne chaque défaut du support.

## Choisir les couleurs pièce par pièce

Le choix des couleurs dépend de la fonction de chaque pièce et de la lumière naturelle disponible. Pour un salon, les tons neutres comme le blanc cassé, le gris perle ou le beige créent une base élégante que vous pouvez agrémenter d'un mur d'accent dans un coloris plus soutenu. Les chambres privilégient les teintes apaisantes : bleu pastel, vert sauge, rose poudré ou lavande. La cuisine et la salle de bain supportent bien les couleurs plus affirmées grâce à l'éclairage souvent plus direct. Pour les petites pièces ou les pièces sombres, optez pour des teintes claires qui agrandissent visuellement l'espace. Testez toujours un échantillon sur le mur avant de vous engager, car la couleur peut varier considérablement selon la lumière de la pièce.

## Estimer la quantité et choisir des peintures écologiques

Pour calculer la quantité nécessaire, mesurez la surface totale à peindre en mètres carrés et divisez par le rendement indiqué sur le pot, généralement entre 10 et 12 mètres carrés par litre. Prévoyez deux couches pour un résultat optimal, voire trois si vous passez d'une couleur foncée à une couleur claire. Si vous êtes soucieux de l'environnement et de la qualité de l'air intérieur, orientez-vous vers des peintures labellisées Écolabel européen ou NF Environnement. Ces peintures à faible teneur en composés organiques volatils réduisent la pollution intérieure et sont sans danger pour les personnes sensibles et les enfants. Chez ID Home, nos peintres professionnels vous conseillent sur le choix de la peinture et assurent une application impeccable. Demandez votre devis gratuit pour tous vos travaux de peinture.
    `.trim(),
    category: "Peinture",
    datePublished: "2025-08-03",
    readTime: "4 min",
  },
  {
    slug: "isolation-economies-energie",
    title: "Isolation : combien pouvez-vous économiser ?",
    image: "/images/blog/isolation-economies.jpg",
    excerpt:
      "L'isolation est le premier poste d'économies d'énergie. Découvrez combien vous pouvez économiser selon le type de travaux réalisés.",
    content: `
L'isolation thermique est le levier le plus efficace pour réduire vos factures d'énergie. Dans un logement mal isolé, jusqu'à 30 % de la chaleur s'échappe par le toit, 25 % par les murs et 15 % par les fenêtres. Investir dans l'isolation, c'est réaliser des économies durables tout en améliorant votre confort. Voici un tour d'horizon complet des gains possibles.

## Les économies selon le type d'isolation

L'isolation des combles est le chantier le plus rentable. La toiture étant la première source de déperdition thermique, isoler vos combles permet de réduire votre facture de chauffage de 25 à 30 %. Pour des combles perdus, le coût moyen se situe entre 20 et 50 euros le mètre carré, ce qui représente un investissement rapidement amorti, souvent en moins de cinq ans. L'isolation des murs par l'intérieur ou par l'extérieur permet d'économiser 20 à 25 % sur votre consommation de chauffage. L'isolation par l'extérieur est plus performante car elle supprime les ponts thermiques, mais elle est aussi plus coûteuse, entre 100 et 200 euros le mètre carré contre 40 à 80 euros pour l'intérieur. Le remplacement des fenêtres simple vitrage par du double ou triple vitrage réduit les pertes de 10 à 15 % et améliore considérablement le confort acoustique. Enfin, l'isolation du plancher bas représente une économie de 7 à 10 % et ne doit pas être négligée.

## Calcul du retour sur investissement

Pour un logement de 100 mètres carrés avec une facture de chauffage annuelle de 2 000 euros, l'isolation complète des combles coûte environ 3 000 à 5 000 euros et permet d'économiser 500 à 600 euros par an. Le retour sur investissement est atteint en six à huit ans, et les économies se poursuivent pendant toute la durée de vie de l'isolation, soit 30 à 50 ans. L'isolation des murs par l'intérieur, pour un coût de 5 000 à 8 000 euros, génère des économies de 400 à 500 euros par an, avec un retour sur investissement de dix à quinze ans. En cumulant tous les postes d'isolation, un ménage peut réduire sa facture énergétique de 50 à 60 %, ce qui représente pour notre exemple une économie de 1 000 à 1 200 euros chaque année.

## Les aides financières disponibles

De nombreuses aides existent pour financer vos travaux d'isolation. MaPrimeRénov' est accessible à tous les propriétaires et son montant varie en fonction de vos revenus et du type de travaux réalisés. Les Certificats d'Économies d'Énergie, aussi appelés primes CEE, sont versés par les fournisseurs d'énergie et peuvent couvrir une part significative du coût des travaux. L'éco-prêt à taux zéro permet de financer jusqu'à 50 000 euros de travaux de rénovation énergétique sans payer d'intérêts. La TVA réduite à 5,5 % s'applique automatiquement pour les travaux d'amélioration de la performance énergétique réalisés par un professionnel RGE. Certaines collectivités locales proposent également des aides complémentaires. Au total, ces dispositifs peuvent couvrir 40 à 90 % du coût des travaux selon vos revenus.

## Choisir des matériaux écologiques

Au-delà des économies financières, le choix de matériaux d'isolation écologiques contribue à réduire votre impact environnemental. La laine de bois, la ouate de cellulose, le liège expansé ou la laine de chanvre offrent d'excellentes performances thermiques et phoniques tout en étant fabriqués à partir de ressources renouvelables. Ces matériaux régulent naturellement l'humidité et offrent un meilleur confort en été grâce à leur inertie thermique. Chez ID Home, nous vous accompagnons dans le choix des solutions d'isolation les plus adaptées à votre logement et à votre budget. Nos techniciens réalisent un bilan thermique gratuit et vous orientent vers les aides auxquelles vous avez droit. Contactez-nous pour un devis gratuit.
    `.trim(),
    category: "Isolation",
    datePublished: "2025-09-10",
    readTime: "5 min",
  },
  {
    slug: "urgence-plomberie-weekend",
    title: "Plombier d'urgence le week-end : que faire ?",
    image: "/images/blog/plombier-weekend.jpg",
    excerpt:
      "Fuite d'eau ou canalisation bouchée un samedi soir ? Voici comment réagir et trouver un plombier fiable disponible le week-end.",
    content: `
Les urgences de plomberie n'attendent pas les jours ouvrables. Une fuite importante, une canalisation bouchée ou un dégât des eaux un samedi soir peut rapidement devenir un cauchemar si vous ne savez pas comment réagir. Voici nos conseils pour gérer efficacement une urgence de plomberie pendant le week-end.

## Ce qui constitue une vraie urgence

Toutes les situations ne nécessitent pas une intervention immédiate le week-end. Les véritables urgences de plomberie sont les fuites d'eau importantes que vous ne parvenez pas à stopper en coupant un robinet d'arrêt, les canalisations bouchées qui provoquent un refoulement d'eaux usées, un chauffe-eau qui fuit abondamment, une rupture de canalisation, ou encore un dégât des eaux qui menace la structure du logement ou celui du voisin. En revanche, un robinet qui goutte légèrement, un WC qui coule dans la cuvette ou une baisse de pression modérée peuvent généralement attendre le lundi pour être traités, ce qui vous évitera les tarifs majorés du week-end.

## Les premiers gestes avant l'arrivée du plombier

En attendant l'intervention du professionnel, quelques gestes simples limitent considérablement les dégâts. Commencez par couper l'arrivée d'eau au robinet d'arrêt le plus proche de la fuite, ou au robinet général si nécessaire. Si de l'eau s'accumule au sol, coupez également l'électricité dans les pièces touchées pour éviter tout risque d'électrocution. Placez des serpillières, des bassines et des seaux pour contenir l'eau. Prévenez vos voisins du dessous si vous habitez en appartement. Prenez des photos des dégâts pour votre déclaration de sinistre auprès de votre assurance.

## Trouver un plombier fiable le week-end

Trouver un plombier compétent et honnête en urgence le week-end demande de la prudence. Méfiez-vous des numéros qui apparaissent en première position dans les publicités sur internet, car les tarifs pratiqués sont parfois excessifs. Privilégiez les entreprises locales ayant une adresse physique vérifiable et des avis clients authentiques. Avant toute intervention, exigez un devis détaillé, même verbal, précisant le coût de la main-d'œuvre, des pièces et du déplacement. Un professionnel sérieux vous informera toujours du tarif avant de commencer les travaux. Les majorations le week-end sont normales mais doivent rester raisonnables, généralement entre 30 et 50 % du tarif en semaine.

## ID Home : votre plombier disponible 7J/7

Chez ID Home, nous comprenons que les urgences de plomberie ne préviennent pas. C'est pourquoi notre équipe de plombiers qualifiés intervient 7 jours sur 7 pour toutes les situations d'urgence. Nous pratiquons des prix transparents avec un devis systématique avant intervention. Pas de mauvaise surprise sur la facture. Notre engagement : une intervention rapide, un diagnostic précis et une réparation durable. Enregistrez notre numéro dès maintenant pour être prêt en cas de besoin : appelez le 09 87 52 91 81.
    `.trim(),
    category: "Plomberie",
    datePublished: "2025-10-05",
    readTime: "3 min",
  },
  {
    slug: "normes-electriques-2025",
    title: "Normes électriques 2025 : ce qui change",
    image: "/images/blog/normes-electriques.jpg",
    excerpt:
      "La norme NF C 15-100 évolue régulièrement. Découvrez les exigences actuelles et les points de contrôle essentiels pour votre installation.",
    content: `
La réglementation électrique en France évolue régulièrement pour garantir la sécurité des occupants et adapter les installations aux nouveaux usages. La norme NF C 15-100 est le texte de référence qui fixe les règles de conception, de réalisation et d'entretien des installations électriques basse tension. Voici ce que vous devez savoir sur les exigences actuelles.

## Les exigences de la norme NF C 15-100

La norme NF C 15-100 définit des règles précises pour chaque pièce du logement. Dans la cuisine, un minimum de six prises de courant est désormais requis, dont quatre au-dessus du plan de travail. La salle de bain est divisée en volumes de sécurité qui déterminent le type d'appareillage autorisé selon la distance avec la baignoire ou la douche. Chaque chambre doit disposer d'au moins trois prises de courant et d'une prise de communication. Le salon nécessite un minimum de cinq prises de courant réparties sur les murs. Par ailleurs, tout logement neuf ou rénové doit être équipé d'un espace technique électrique du logement regroupant le tableau électrique, le disjoncteur de branchement et les dispositifs de communication. La norme impose également la présence de dispositifs différentiels 30 milliampères sur l'ensemble des circuits pour protéger les personnes contre les risques d'électrocution.

## Le diagnostic électrique obligatoire

Depuis 2009, un diagnostic électrique est obligatoire pour la vente d'un logement dont l'installation a plus de quinze ans. Depuis 2017, cette obligation a été étendue à la location. Le diagnostic, réalisé par un diagnostiqueur certifié, vérifie onze points de contrôle essentiels : la présence d'un appareil général de commande et de protection, la présence de dispositifs différentiels, la présence de dispositifs de protection contre les surintensités, la mise à la terre et la liaison équipotentielle, les conditions de réalisation des installations dans les locaux contenant une baignoire ou une douche, et l'absence de matériels vétustes ou inadaptés. Si des anomalies sont détectées, le propriétaire n'est pas obligé de faire les travaux de mise en conformité pour vendre, mais l'acheteur est informé de l'état de l'installation.

## Les défauts les plus fréquents

Les installations anciennes présentent souvent les mêmes types de non-conformité. L'absence de mise à la terre est le défaut le plus courant et le plus dangereux. Les fils électriques dénudés accessibles, les tableaux électriques obsolètes avec des fusibles en porcelaine, les prises de courant non reliées à la terre dans les pièces humides, et l'absence de dispositifs différentiels 30 milliampères figurent parmi les anomalies les plus fréquemment relevées. Dans les logements construits avant les années 1990, il est également courant de trouver des sections de câble insuffisantes pour les usages modernes, ce qui provoque des échauffements et augmente le risque d'incendie.

## Le coût d'une mise aux normes

Le coût de la mise aux normes de votre installation électrique dépend de l'ampleur des travaux nécessaires. Un simple remplacement du tableau électrique coûte entre 800 et 2 000 euros. La création d'une mise à la terre complète représente entre 1 000 et 3 000 euros. Une rénovation électrique complète d'un appartement de 70 mètres carrés se situe entre 5 000 et 10 000 euros. Chez ID Home, nos électriciens certifiés réalisent un diagnostic gratuit de votre installation et vous proposent un devis détaillé pour la mise en conformité. Nous vous accompagnons également dans les démarches pour obtenir l'attestation de conformité Consuel après travaux. Contactez-nous pour sécuriser votre installation électrique.
    `.trim(),
    category: "Électricité",
    datePublished: "2025-11-18",
    readTime: "5 min",
  },
  {
    slug: "cambriolage-securiser-maison",
    title: "Après un cambriolage : comment sécuriser sa maison",
    image: "/images/blog/securiser-maison.jpg",
    excerpt:
      "Victime d'un cambriolage ? Découvrez les démarches immédiates et les solutions pour renforcer la sécurité de votre domicile.",
    content: `
Être victime d'un cambriolage est une expérience traumatisante. Au-delà du choc émotionnel et des pertes matérielles, c'est le sentiment de violation de son espace privé qui marque le plus. Après cette épreuve, il est essentiel de réagir méthodiquement pour protéger vos droits et empêcher que cela ne se reproduise. Voici les étapes à suivre et les solutions pour renforcer durablement la sécurité de votre domicile.

## Les démarches immédiates après un cambriolage

La première chose à faire est de ne toucher à rien et de quitter le logement si vous constatez le cambriolage en arrivant chez vous, car les intrus pourraient encore se trouver à l'intérieur. Appelez immédiatement le 17 pour signaler l'effraction à la police ou à la gendarmerie. Les forces de l'ordre se déplaceront pour constater les faits et relever d'éventuels indices. Ensuite, rendez-vous au commissariat ou à la brigade de gendarmerie pour déposer une plainte officielle. Listez tous les objets volés ou endommagés de la manière la plus précise possible, avec les marques, modèles et numéros de série si vous les avez. Contactez votre assureur dans les deux jours ouvrés suivant la découverte du cambriolage pour déclarer le sinistre. Votre contrat d'assurance habitation couvre généralement le vol avec effraction. Conservez tous les justificatifs d'achat et les photos de vos biens pour faciliter l'indemnisation.

## Renforcer les points d'accès

Après un cambriolage, la priorité est de sécuriser tous les points d'entrée de votre logement. La porte d'entrée est le premier élément à renforcer. Faites installer une serrure multipoints certifiée A2P trois étoiles si ce n'est pas déjà le cas. Le blindage de la porte existante ou le remplacement par une porte blindée offre une résistance nettement supérieure. N'oubliez pas de remplacer le cylindre, même si la serrure n'a pas été forcée, car les cambrioleurs ont pu prendre une empreinte de la clé. Renforcez également les fenêtres avec des poignées à clé, des vitrages retardateurs d'effraction et des volets roulants sécurisés. Les portes-fenêtres et les baies vitrées du rez-de-chaussée sont des points de vulnérabilité fréquemment exploités par les cambrioleurs.

## Installer un système d'alarme

Un système d'alarme dissuade efficacement les tentatives d'intrusion. Les statistiques montrent que les logements équipés d'une alarme sont trois fois moins cambriolés que ceux qui n'en ont pas. Les systèmes modernes combinent des détecteurs d'ouverture sur les portes et fenêtres, des détecteurs de mouvement dans les pièces principales et une sirène intérieure et extérieure. Certains systèmes sont reliés à un centre de télésurveillance qui alerte les forces de l'ordre en cas de déclenchement. Les caméras de surveillance connectées vous permettent de visualiser votre domicile à distance et d'enregistrer les images en cas d'intrusion. Pour une protection complète, combinez alarme, caméras et éclairage automatique à détection de mouvement à l'extérieur.

## Prévenir les futurs cambriolages

La prévention passe par des habitudes simples mais efficaces. Ne laissez jamais de clé cachée sous le paillasson, dans un pot de fleurs ou dans la boîte aux lettres, car ce sont les premières cachettes vérifiées par les cambrioleurs. Simulez une présence lorsque vous vous absentez en utilisant des programmateurs pour les lumières et la radio. Entretenez de bonnes relations avec vos voisins et participez au dispositif Voisins Vigilants si votre commune le propose. Ne communiquez pas vos dates de vacances sur les réseaux sociaux. Faites relever votre courrier et rentrer vos poubelles pendant vos absences prolongées. Enfin, photographiez et référencez tous vos objets de valeur et conservez ces informations en lieu sûr.

## ID Home sécurise votre domicile

Chez ID Home, nos serruriers interviennent en urgence après un cambriolage pour sécuriser immédiatement votre logement. Nous réalisons un audit de sécurité complet et vous proposons les solutions les mieux adaptées : remplacement ou blindage de porte, serrures haute sécurité, installation de systèmes d'alarme. Nos devis sont gratuits et transparents. Appelez le 09 87 52 91 81 pour une intervention rapide, disponible 7 jours sur 7.
    `.trim(),
    category: "Serrurerie",
    datePublished: "2025-12-02",
    readTime: "5 min",
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

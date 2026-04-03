// La réponse correcte est TOUJOURS à l'index 0 dans le tableau `a`
// Elle est mélangée lors de la création de la partie

export const QUESTIONS = {
  1: [
    // LOT 1
    {
      q: "Qu'est-ce que la CNIL ?",
      a: [
        "Autorité administrative indépendante qui veille à ce que l'informatique respecte les droits des citoyens et contrôle les traitements de données personnelles",
        "L'agence nationale de cybersécurité française qui protège les SI de l'État",
        "La Direction des Systèmes d'Information, responsable des systèmes informatiques",
        "Un organisme européen de standardisation des normes de sécurité informatique",
      ],
    },
    {
      q: "Qu'est-ce qu'une donnée à caractère personnel ?",
      a: [
        "Toute information permettant d'identifier une personne physique, directement ou indirectement (nom, photo, IP, voix…)",
        "Uniquement les informations confidentielles stockées dans les systèmes d'une entreprise",
        "Les données médicales et bancaires d'une personne exclusivement",
        "Toute information numérique stockée dans un système informatique",
      ],
    },
    {
      q: "Comment une donnée cesse-t-elle d'être personnelle ?",
      a: [
        "Lorsqu'elle est anonymisée de façon irréversible : aucune identification ne reste possible, même par recoupement",
        "Lorsqu'elle est supprimée de la base de données principale",
        "Lorsqu'elle est chiffrée avec une clé secrète connue uniquement de l'administrateur",
        "Lorsqu'elle est transférée à un organisme certifié par la CNIL",
      ],
    },
    {
      q: "Qu'est-ce que la DSI ?",
      a: [
        "Direction des Systèmes d'Information : service responsable des systèmes informatiques, données, sécurité et conformité",
        "Délégation à la Sécurité de l'Information, en charge de la protection des données personnelles",
        "Direction de la Sûreté Informatique, responsable des audits de cybersécurité",
        "Division des Services Internet, gérant les accès réseau et les connexions",
      ],
    },
    {
      q: "Qu'est-ce qu'un traitement de données à caractère personnel ?",
      a: [
        "Toute opération portant sur des données personnelles : enregistrer, conserver, modifier, transmettre, rapprocher, supprimer…",
        "Uniquement les opérations automatisées de collecte et de stockage de données",
        "La collecte et l'analyse de données par un algorithme de traitement automatisé",
        "La suppression sécurisée de données personnelles obsolètes ou inutilisées",
      ],
    },
    {
      q: "Que faut-il faire pour informer les clients lors d'un enregistrement d'appel ?",
      a: [
        "Informer chaque interlocuteur au moment de l'appel : objectif, destinataires, droit d'opposition et d'accès (message ou document)",
        "Envoyer un email d'information aux clients 48h avant tout enregistrement téléphonique",
        "Obtenir un accord écrit signé avant tout enregistrement téléphonique",
        "Afficher une mention légale sur le site web de l'entreprise uniquement",
      ],
    },
    {
      q: "Qu'est-ce que la méthode PIA (Privacy Impact Assessment) ?",
      a: [
        "Analyse d'impact relative à la protection des données (art. 35 RGPD) avec 4 phases : contexte, principes fondamentaux, risques, validation",
        "Protocole d'Identification et d'Authentification, mécanisme de contrôle d'accès en 4 étapes",
        "Procédure d'Inspection et d'Audit des systèmes informatiques selon l'ANSSI",
        "Politique Interne d'Archivage des données personnelles à des fins probatoires",
      ],
    },
    {
      q: "Qu'est-ce qu'une vulnérabilité en sécurité informatique ?",
      a: [
        "Faiblesse du système d'information pouvant affecter son fonctionnement normal et permettre l'exploitation par une menace",
        "Attaque délibérée visant à compromettre la confidentialité des données",
        "Panne matérielle pouvant entraîner une indisponibilité du système",
        "Logiciel malveillant installé à l'insu de l'utilisateur sur un poste de travail",
      ],
    },
    {
      q: "Qu'est-ce que le SI (Système d'Information) ?",
      a: [
        "Ensemble des ressources permettant de collecter, stocker, traiter et diffuser l'information : matériel, logiciels, données, utilisateurs, procédures",
        "Infrastructure réseau d'une organisation comprenant serveurs, routeurs et commutateurs",
        "Ensemble des logiciels de sécurité protégeant les données d'une organisation",
        "Base de données relationnelle hébergeant les données métier d'une entreprise",
      ],
    },
    {
      q: "Comment réaliser un tableau d'analyse des scénarios de menaces ?",
      a: [
        "Tableau croisant : source de menace, type, bien ciblé, vraisemblance, impacts sur confidentialité, disponibilité et intégrité",
        "Tableau listant les incidents de sécurité passés classés par gravité et fréquence",
        "Matrice de contrôle des accès aux ressources du système d'information",
        "Registre des vulnérabilités identifiées lors d'un audit de sécurité",
      ],
    },
    {
      q: "Quels sont les niveaux de gravité EBIOS (ANSSI) ?",
      a: [
        "G1 Mineure, G2 Significative, G3 Grave, G4 Critique (survie de l'organisation menacée)",
        "Niveau 1 à 4 : Faible, Modéré, Sévère, Catastrophique",
        "Bas, Moyen, Élevé, Critique (comme les niveaux de classification OTAN)",
        "Acceptable, Tolérable, Grave, Inacceptable",
      ],
    },
    {
      q: "Comment cartographier les risques ?",
      a: [
        "Placer chaque scénario sur une grille croisant vraisemblance et gravité, révélant 3 zones : acceptable, tolérable sous contrôle, inacceptable",
        "Lister tous les risques par ordre décroissant de coût financier estimé",
        "Classer les incidents par fréquence d'occurrence et par source de menace",
        "Établir un registre des vulnérabilités non corrigées par niveau de criticité",
      ],
    },
    {
      q: "Qu'est-ce que la gravité d'un événement redouté ?",
      a: [
        "Niveau d'impact sur les valeurs métier de l'organisation (pertes financières, image, obligations légales, sécurité des personnes…)",
        "Probabilité qu'un mode opératoire d'attaque aboutisse selon les vulnérabilités",
        "Fréquence historique des incidents de sécurité similaires sur le même SI",
        "Durée d'indisponibilité du système causée par un incident de sécurité",
      ],
    },
    {
      q: "Qu'est-ce que la vraisemblance ?",
      a: [
        "Probabilité qu'un mode opératoire d'attaque aboutisse, selon les vulnérabilités du support et les capacités de l'attaquant",
        "Niveau d'impact sur les valeurs métier en cas de réalisation de l'événement redouté",
        "Fréquence historique des attaques similaires enregistrées par l'ANSSI",
        "Coût estimé de la remédiation après un incident de sécurité réussi",
      ],
    },
    {
      q: "Définition d'une vulnérabilité",
      a: [
        "Faiblesse du SI exploitable par une menace, compromettant son bon fonctionnement ou sa sécurité",
        "Attaque volontaire d'un acteur malveillant visant à porter atteinte au SI",
        "Risque résultant de la combinaison d'une menace et d'un impact sur les données",
        "Incident de sécurité ayant entraîné une perte ou une altération de données",
      ],
    },
    {
      q: "Définition d'une menace",
      a: [
        "Cause, intentionnelle ou non, susceptible de produire un dommage sur le SI (attaque externe, espionnage, erreur humaine…)",
        "Faiblesse exploitable d'un système pouvant compromettre sa sécurité",
        "Probabilité d'exploitation d'une vulnérabilité avec impact sur les données",
        "Incident ayant causé une indisponibilité ou une perte d'intégrité des données",
      ],
    },
    {
      q: "Définition d'un risque",
      a: [
        "Probabilité d'exploitation d'une vulnérabilité par une menace, mesuré en croisant gravité et vraisemblance",
        "Faiblesse du système d'information exploitable par un attaquant interne ou externe",
        "Événement redouté pouvant affecter les valeurs métier d'une organisation",
        "Cause intentionnelle ou non susceptible de produire un dommage sur le SI",
      ],
    },
    {
      q: "Qu'est-ce que l'ANSSI ?",
      a: [
        "Agence nationale de cybersécurité qui protège les SI de l'État, détecte et réagit aux attaques, publie des méthodes (EBIOS)",
        "Autorité administrative indépendante contrôlant les traitements de données personnelles",
        "Organisme européen de certification des produits et services de cybersécurité",
        "Direction interministérielle du numérique supervisant les SI de l'administration",
      ],
    },
    {
      q: "Qu'est-ce que la méthode EBIOS Risk Manager ?",
      a: [
        "Méthode de gestion des risques développée par l'ANSSI identifiant scénarios de menace, hiérarchisant les risques et définissant les mesures de sécurité",
        "Standard international ISO 27001 de management de la sécurité de l'information",
        "Méthode d'analyse d'impact relative à la protection des données (art. 35 RGPD)",
        "Protocole d'audit de sécurité des systèmes d'information développé par la CNIL",
      ],
    },
    {
      q: "Qu'est-ce qu'un « risque » selon l'ANSSI ?",
      a: [
        "Scénario combinant un événement redouté et un ou plusieurs scénarios de menace, exprimant la possibilité d'atteindre des données avec conséquences",
        "Toute vulnérabilité non corrigée identifiée dans un système d'information",
        "Attaque réussie ayant causé une perte ou une divulgation de données personnelles",
        "Probabilité d'un incident calculée à partir de la fréquence historique des attaques",
      ],
    },
    {
      q: "Qu'est-ce qu'un événement redouté ?",
      a: [
        "Atteinte aux données ou valeurs métier : altération, vol, perte, indisponibilité, exploitation frauduleuse… servant à évaluer la gravité",
        "Attaque informatique détectée et bloquée par les dispositifs de sécurité du SI",
        "Incident de sécurité déclaré à l'ANSSI ou à la CNIL selon les obligations légales",
        "Vulnérabilité critique identifiée lors d'un test d'intrusion ou d'un audit",
      ],
    },
    {
      q: "Quels sont les trois niveaux de cartographie des risques ?",
      a: [
        "Inacceptable (action immédiate), Tolérable sous contrôle (à surveiller), Acceptable (pas d'action prioritaire)",
        "Critique, Grave, Mineure (correspondant aux niveaux G4, G3, G1/G2 d'EBIOS)",
        "Rouge, Orange, Vert (code couleur standard ANSSI de classification des risques)",
        "Priorité haute, Priorité moyenne, Priorité basse",
      ],
    },
    {
      q: "Catégories d'impacts EBIOS : Impacts sur les missions et services",
      a: [
        "Conséquences directes ou indirectes sur la capacité de l'organisation à assurer ses missions et services",
        "Atteintes à la réputation et à la confiance des clients et partenaires de l'organisation",
        "Conséquences pécuniaires directes ou indirectes pour l'organisation",
        "Risques liés à la non-conformité légale, réglementaire ou contractuelle",
      ],
    },
    {
      q: "Catégories d'impacts EBIOS : Impacts humains, matériels ou environnementaux",
      a: [
        "Atteintes à la sécurité des personnes, à leur santé, au matériel ou à l'environnement",
        "Conséquences financières directes sur le budget et les ressources de l'organisation",
        "Risques de non-conformité avec les réglementations nationales et européennes",
        "Impacts sur la capacité de décision et le patrimoine intellectuel de l'organisation",
      ],
    },
    {
      q: "Catégories d'impacts EBIOS : Impacts sur la gouvernance",
      a: [
        "Atteintes à la capacité de décision, au lien social interne et au patrimoine intellectuel de l'organisation",
        "Conséquences pécuniaires directes ou indirectes pour l'organisation",
        "Impacts sur la capacité à assurer les missions et services de l'organisation",
        "Risques de non-conformité légale, réglementaire ou contractuelle",
      ],
    },
    {
      q: "Catégories d'impacts EBIOS : Impacts financiers",
      a: [
        "Conséquences pécuniaires directes ou indirectes pour l'organisation (pertes, amendes, coûts de remédiation…)",
        "Atteintes à la réputation et à la confiance des clients et partenaires",
        "Impacts sur la capacité de décision et le patrimoine intellectuel",
        "Conséquences sur la capacité de l'organisation à assurer ses missions",
      ],
    },
    {
      q: "Catégories d'impacts EBIOS : Impacts juridiques",
      a: [
        "Risques liés à la non-conformité légale, réglementaire ou contractuelle (sanctions, litiges, obligations manquées…)",
        "Atteintes à la réputation et à la confiance des clients et partenaires",
        "Conséquences pécuniaires directes sur le budget de l'organisation",
        "Impacts sur la gouvernance et la capacité de décision interne",
      ],
    },
    {
      q: "Catégories d'impacts EBIOS : Impacts sur l'image et la confiance",
      a: [
        "Atteinte à la réputation, à la confiance des clients et partenaires de l'organisation",
        "Conséquences pécuniaires directes sur le budget et les ressources",
        "Risques liés à la non-conformité légale ou réglementaire",
        "Impacts sur la capacité de décision et le lien social interne",
      ],
    },
    {
      q: "Quels sont les quatre principes fondamentaux de la sécurité des SI ?",
      a: [
        "Confidentialité, Intégrité, Disponibilité, Preuve",
        "Authentification, Autorisation, Audit, Alerte (les « 4A » de la sécurité)",
        "Prévention, Protection, Détection, Réaction (cycle de gestion des incidents)",
        "Chiffrement, Hachage, Signature numérique, Certificat",
      ],
    },
    {
      q: "Définition du principe : Confidentialité",
      a: [
        "Les données ne doivent être accessibles qu'aux personnes autorisées",
        "Les données doivent rester accessibles et utilisables sans interruption",
        "Les données ne doivent pas être modifiées ou altérées sans autorisation",
        "Les actions sur les données doivent être tracées et non répudiables",
      ],
    },
    {
      q: "Définition du principe : Disponibilité",
      a: [
        "Les données doivent rester accessibles et utilisables sans interruption par les utilisateurs autorisés",
        "Les données ne doivent être accessibles qu'aux personnes dûment autorisées",
        "Les données doivent rester fiables, exactes et complètes tout au long de leur cycle de vie",
        "Les actions dans le SI doivent pouvoir être prouvées de façon non réfutable",
      ],
    },
    {
      q: "Définition du principe : Intégrité",
      a: [
        "Les données ne doivent pas être modifiées ou altérées pendant leur traitement, stockage ou transfert",
        "Les données ne doivent être accessibles qu'aux personnes autorisées",
        "Les données doivent rester accessibles et utilisables sans interruption",
        "Les actions dans le SI doivent être tracées et attribuables à leur auteur",
      ],
    },
    {
      q: "Définition du principe : Preuve (non-répudiation)",
      a: [
        "Apporter une preuve non réfutable d'un acte dans le SI via 3 éléments combinés : authentification, imputabilité et traçabilité",
        "Garantir que seules les personnes autorisées peuvent accéder aux données sensibles",
        "Assurer la disponibilité continue du SI même en cas d'incident ou d'attaque",
        "Vérifier que les données n'ont pas été modifiées lors de leur transmission",
      ],
    },
    {
      q: "Non-répudiation : qu'est-ce que l'Authentification ?",
      a: [
        "Permet de vérifier l'identité d'un utilisateur avant toute action et d'accorder les droits associés (ex : identifiant + mot de passe)",
        "Possibilité d'attribuer clairement la responsabilité d'un acte à une personne identifiée",
        "Fournir un historique détaillé des actions via les journaux (logs) du système",
        "Chiffrer les communications entre utilisateurs et serveurs pour garantir la confidentialité",
      ],
    },
    {
      q: "Non-répudiation : qu'est-ce que l'Imputabilité ?",
      a: [
        "Possibilité d'attribuer clairement la responsabilité d'un acte à une personne identifiée dans le système",
        "Vérifier l'identité d'un utilisateur avant de lui accorder des droits d'accès",
        "Fournir un historique détaillé des actions via les journaux (logs) du système",
        "Garantir l'accessibilité continue des données pour les utilisateurs autorisés",
      ],
    },
    {
      q: "Non-répudiation : qu'est-ce que la Traçabilité ?",
      a: [
        "Fournir un historique détaillé de l'utilisation du SI grâce aux journaux (logs), permettant de savoir qui a fait quoi et quand",
        "Vérifier l'identité d'un utilisateur avant de lui accorder des droits d'accès",
        "Attribuer la responsabilité d'un acte à une personne identifiée dans le SI",
        "Garantir que les données n'ont pas été altérées lors de leur stockage ou transfert",
      ],
    },
    {
      q: "Qu'est-ce que l'intégrité des données ?",
      a: [
        "Fait que les données restent fiables, exactes et complètes durant tout leur cycle de vie, sans altération non autorisée",
        "Fait que les données sont accessibles uniquement aux personnes habilitées",
        "Fait que les données sont disponibles en permanence pour les utilisateurs autorisés",
        "Fait que toutes les actions sur les données sont tracées et horodatées",
      ],
    },
  ],

  2: [
    // LOT 2
    {
      q: "Qu'est-ce que la sûreté en informatique ?",
      a: [
        "Prévenir les risques et conséquences d'un événement accidentel ou involontaire (pannes, erreurs humaines, accidents naturels)",
        "Prévenir les actes de malveillance par des moyens humains, techniques et organisationnels",
        "Détecter et réagir aux intrusions dans le système d'information",
        "Assurer la conformité des traitements de données aux exigences réglementaires",
      ],
    },
    {
      q: "Qu'est-ce que la sécurité informatique ?",
      a: [
        "Prévenir les actes de malveillance en combinant des moyens humains, techniques et organisationnels contre vol, intrusion et dégradation",
        "Prévenir les risques d'événements accidentels ou involontaires par des sauvegardes et redondances",
        "Assurer la continuité d'activité lors de pannes matérielles ou de catastrophes naturelles",
        "Contrôler les traitements de données personnelles et garantir le respect de la vie privée",
      ],
    },
    {
      q: "Quel est le périmètre de la sûreté informatique ?",
      a: [
        "Menaces non intentionnelles : accidents naturels, erreurs humaines et défaillances matérielles",
        "Menaces délibérées provenant d'attaquants internes ou externes à l'organisation",
        "Cyberattaques visant à voler, modifier ou détruire des données sensibles",
        "Risques liés aux vulnérabilités logicielles et aux configurations incorrectes",
      ],
    },
    {
      q: "À quoi sert le hachage en cybersécurité ?",
      a: [
        "Principalement utilisé pour le stockage sécurisé des mots de passe et la vérification de l'intégrité des données",
        "Transformer des données lisibles en données illisibles pour assurer leur confidentialité",
        "Signer numériquement des documents pour garantir leur authenticité et non-répudiation",
        "Anonymiser définitivement des données personnelles dans le cadre du RGPD",
      ],
    },
    {
      q: "Qu'est-ce qu'un salt en hachage ?",
      a: [
        "Valeur aléatoire unique ajoutée au mot de passe avant le hachage pour contrer les Rainbow Tables et rendre chaque hash unique",
        "Algorithme de chiffrement symétrique spécialement conçu pour les mots de passe",
        "Clé secrète utilisée pour dériver le hash d'un mot de passe de façon réversible",
        "Second facteur d'authentification généré aléatoirement à chaque connexion",
      ],
    },
    {
      q: "Qu'est-ce que le chiffrement ?",
      a: [
        "Procédé cryptographique transformant une donnée lisible en donnée illisible à l'aide d'un algorithme et d'une clé, assurant la confidentialité",
        "Fonction mathématique irréversible transformant une donnée en empreinte de taille fixe (hash)",
        "Mécanisme de signature numérique garantissant l'authenticité et l'intégrité des données",
        "Technique d'anonymisation irréversible des données personnelles conforme au RGPD",
      ],
    },
    {
      q: "Quelles sont les propriétés du chiffrement ?",
      a: [
        "Réversible, basé sur une clé secrète ou publique, sécurité reposant sur la protection de la clé et non sur le secret de l'algorithme",
        "Irréversible, sans clé, déterministe et résistant aux collisions",
        "Symétrique uniquement, rapide, basé sur un algorithme secret et propriétaire",
        "Réversible, basé sur un certificat numérique, nécessite une autorité de certification",
      ],
    },
    {
      q: "Quels sont les principaux types de menaces en sécurité informatique ?",
      a: [
        "Déstabilisation, Espionnage, Sabotage, Cybercriminalité",
        "Phishing, Ransomware, DDoS, Injection SQL",
        "Interne, Externe, Accidentelle, Délibérée",
        "Humaine, Matérielle, Logicielle, Environnementale",
      ],
    },
    {
      q: "Quel est le périmètre de la sécurité informatique ?",
      a: [
        "Menaces délibérées provenant de personnes malveillantes, internes ou externes, avec des capacités variables selon leur compétence et leurs droits d'accès",
        "Menaces non intentionnelles : accidents naturels, erreurs humaines, pannes matérielles",
        "Risques réglementaires liés à la non-conformité RGPD et aux obligations légales",
        "Incidents naturels et environnementaux pouvant affecter l'infrastructure informatique",
      ],
    },
    {
      q: "Qu'est-ce que la déstabilisation ?",
      a: [
        "Attaques visant à perturber ou dégrader le fonctionnement du SI : déni de service, défiguration de sites, divulgation de données confidentielles",
        "Attaques visant à accéder discrètement aux informations sensibles d'une organisation",
        "Attaques à but lucratif comme le ransomware et le phishing bancaire",
        "Attaques visant à détruire définitivement les données critiques d'une organisation",
      ],
    },
    {
      q: "Qu'est-ce que l'espionnage ?",
      a: [
        "Attaques visant à accéder discrètement aux informations via le point d'eau (watering hole) ou le hameçonnage ciblé (spearphishing)",
        "Attaques visant à rendre un service inaccessible par envoi massif de requêtes",
        "Attaques à but lucratif visant à extorquer de l'argent via un rançongiciel",
        "Attaques visant à modifier des pages web pour diffuser un message idéologique",
      ],
    },
    {
      q: "Qu'est-ce qu'une authentification multifacteur (MFA) ?",
      a: [
        "Mécanisme combinant au moins 2 facteurs : ce que je sais (mot de passe), ce que je possède (token), ce que je suis (biométrie)",
        "Système d'authentification basé uniquement sur la biométrie (empreinte, iris, visage)",
        "Protocole d'authentification centralisée par serveur LDAP ou Active Directory",
        "Utilisation de plusieurs mots de passe différents selon le service ou l'application",
      ],
    },
    {
      q: "Qu'est-ce que le sabotage ?",
      a: [
        "Modes d'attaques nombreux visant à provoquer une panne ou un dysfonctionnement, partiel ou total, du SI d'une organisation",
        "Accès discret aux informations sensibles d'une organisation par des attaquants ciblés",
        "Attaques à but lucratif utilisant des rançongiciels ou du hameçonnage financier",
        "Modification frauduleuse de données pour tromper les décideurs de l'organisation",
      ],
    },
    {
      q: "Qu'est-ce que la cybercriminalité ?",
      a: [
        "Attaques à but lucratif : rançongiciel (données inaccessibles jusqu'au paiement) et hameçonnage (vol de données personnelles ou bancaires)",
        "Attaques visant à perturber le fonctionnement du SI pour des raisons idéologiques",
        "Accès non autorisé aux SI de l'État par des organisations terroristes ou étatiques",
        "Espionnage industriel visant à voler la propriété intellectuelle d'une organisation",
      ],
    },
    {
      q: "Quelles sont les obligations liées au registre des traitements ?",
      a: [
        "Document de conformité (art. 30 RGPD) recensant les traitements : acteurs, types de données, finalités, destinataires, durées, mesures de sécurité",
        "Journal des violations de données personnelles à déclarer à la CNIL dans les 72h",
        "Certificat de conformité RGPD délivré par la CNIL après audit des traitements",
        "Registre des consentements recueillis auprès des personnes dont on traite les données",
      ],
    },
    {
      q: "Quelle est la durée de conservation des données d'un prospect ?",
      a: [
        "3 ans à compter du dernier contact ou de la dernière interaction émanant du prospect",
        "1 an à compter du premier contact commercial avec le prospect",
        "5 ans, conformément aux obligations légales de prescription commerciale",
        "Illimitée si le prospect a donné son consentement initial et ne l'a pas retiré",
      ],
    },
    {
      q: "Qu'est-ce que l'entropie d'un mot de passe ?",
      a: [
        "Degré d'imprévisibilité d'un mot de passe, exprimé en bits. Plus élevée = plus difficile à deviner. L'ANSSI recommande 80 bits minimum",
        "Nombre de caractères minimum d'un mot de passe (12 caractères selon l'ANSSI)",
        "Complexité syntaxique requise (majuscules, chiffres, caractères spéciaux obligatoires)",
        "Temps nécessaire pour craquer un mot de passe par attaque par force brute",
      ],
    },
    {
      q: "Qu'est-ce qu'une Server-Side Request Forgery (SSRF) ?",
      a: [
        "L'application web récupère une ressource distante sans valider l'URL fournie par l'utilisateur, permettant d'accéder à des ressources internes non exposées",
        "Injection de code malveillant côté serveur via les paramètres d'une requête HTTP",
        "Falsification de requêtes côté client pour effectuer des actions à l'insu de l'utilisateur (CSRF)",
        "Attaque par déni de service ciblant spécifiquement les serveurs web applicatifs",
      ],
    },
    {
      q: "Quels algorithmes de hachage sont recommandés par l'ANSSI pour les mots de passe ?",
      a: [
        "Argon2 (recommandé en priorité) et scrypt. SHA-256/SHA-512 ne sont PAS adaptés pour les mots de passe car trop rapides",
        "MD5 et SHA-1, standards éprouvés et largement supportés par les systèmes actuels",
        "SHA-256 et SHA-512, standards industriels recommandés par toutes les autorités",
        "bcrypt exclusivement, les autres algorithmes étant considérés obsolètes par l'ANSSI",
      ],
    },
    {
      q: "Quelle est la différence entre chiffrement symétrique et asymétrique ?",
      a: [
        "Symétrique = une seule clé pour chiffrer et déchiffrer ; Asymétrique = paire clé publique (chiffrement) / clé privée (déchiffrement)",
        "Symétrique = plus lent et sécurisé ; Asymétrique = plus rapide mais moins sécurisé",
        "Symétrique = sans clé, basé sur l'algorithme ; Asymétrique = avec clé secrète partagée",
        "Symétrique = pour données sensibles ; Asymétrique = pour mots de passe uniquement",
      ],
    },
    {
      q: "Qu'est-ce que le principe de moindre privilège ?",
      a: [
        "Accorder aux utilisateurs uniquement les droits strictement nécessaires à l'accomplissement de leurs tâches, limitant les risques en cas de compromission",
        "Accorder des droits administrateur uniquement aux responsables de la sécurité informatique",
        "Limiter l'accès aux données au strict minimum légal défini par le RGPD et la CNIL",
        "Supprimer automatiquement les droits des utilisateurs après 2 ans d'inactivité",
      ],
    },
    {
      q: "Quelle est la durée de conservation des données d'un client actif ?",
      a: [
        "Durée de la relation contractuelle, puis archivées 5 ans à des fins probatoires",
        "3 ans à compter du dernier achat ou de la dernière interaction commerciale",
        "10 ans, conformément aux obligations comptables et fiscales applicables",
        "Illimitée tant que le client reste actif et n'exerce pas son droit à l'effacement",
      ],
    },
    {
      q: "Quelle est la durée de conservation des données de connexion (logs) ?",
      a: [
        "6 mois à 1 an selon la finalité de sécurité et les obligations légales applicables",
        "30 jours maximum, comme les données de vidéosurveillance selon la CNIL",
        "5 ans, conformément aux obligations légales de prescription pénale",
        "2 ans après la dernière connexion de l'utilisateur concerné",
      ],
    },
    {
      q: "Quelle est la durée de conservation des données de compte utilisateur ?",
      a: [
        "2 ans d'inactivité, puis suppression ou anonymisation, sauf obligation légale ou contractuelle contraire",
        "1 an d'inactivité, puis désactivation automatique du compte selon les bonnes pratiques",
        "5 ans, conformément aux obligations légales de conservation des données contractuelles",
        "Illimitée si le compte n'est pas explicitement supprimé par l'utilisateur lui-même",
      ],
    },
    {
      q: "Quelle est la durée de conservation des données de recrutement (candidat non retenu) ?",
      a: [
        "2 ans après le dernier contact avec le candidat non retenu",
        "1 an après la fin du processus de recrutement, sauf accord du candidat",
        "5 ans, conformément aux obligations légales RH et Code du travail",
        "Illimitée si le candidat a consenti à être recontacté pour de futures opportunités",
      ],
    },
    {
      q: "Quelle est la durée de conservation des données de vidéosurveillance ?",
      a: [
        "30 jours maximum, sauf procédure judiciaire en cours nécessitant la conservation",
        "7 jours maximum selon les recommandations de la CNIL pour les zones sensibles",
        "6 mois maximum selon les obligations légales de sécurité des établissements",
        "1 an maximum pour les espaces à accès restreint ou les zones à risque élevé",
      ],
    },
    {
      q: "Quelle est la durée de conservation des données comptables et fiscales ?",
      a: [
        "10 ans, conformément aux obligations légales comptables et fiscales",
        "5 ans, conformément aux obligations légales prévues par le Code du travail",
        "7 ans, conformément au délai de prescription fiscale de droit commun",
        "20 ans, conformément aux obligations de conservation des archives officielles",
      ],
    },
    {
      q: "Quelle est la durée de conservation des bulletins de salaire et données RH ?",
      a: [
        "5 ans minimum, selon le Code du travail et les obligations de conservation RH",
        "2 ans, conformément au délai de prescription des actions en paiement de salaire",
        "10 ans, conformément aux obligations comptables et fiscales applicables",
        "Illimitée, car le salarié peut en réclamer une copie à tout moment",
      ],
    },
    {
      q: "Quelle est la durée de conservation des cookies et traceurs ?",
      a: [
        "13 mois maximum, sauf consentement renouvelé par l'utilisateur",
        "6 mois maximum, conformément aux dernières recommandations de la CNIL",
        "2 ans, conformément au RGPD et aux lignes directrices de la Commission européenne",
        "Illimitée si l'utilisateur ne les refuse pas activement via le bandeau de consentement",
      ],
    },
    {
      q: "Quelle est la durée de conservation des données de santé ?",
      a: [
        "20 ans, données sensibles nécessitant des mesures de sécurité renforcées",
        "5 ans, comme les données RH, sauf disposition légale spécifique contraire",
        "10 ans, conformément aux obligations générales de conservation médicale",
        "Illimitée, car nécessaires à la continuité des soins et au suivi médical",
      ],
    },
    {
      q: "Quel principe du RGPD encadre la durée de conservation des données ?",
      a: [
        "Principe de limitation de la conservation : données conservées uniquement le temps nécessaire à la finalité du traitement",
        "Principe de minimisation : ne collecter que les données strictement nécessaires à la finalité",
        "Principe de transparence : informer les personnes de la durée de conservation prévue",
        "Principe de finalité : interdire de réutiliser les données pour des finalités incompatibles",
      ],
    },
    {
      q: "Qu'est-ce qu'une menace délibérée ?",
      a: [
        "Action volontaire menée par un acteur malveillant visant à porter atteinte au SI, à ses données ou à ses services",
        "Événement accidentel causant une panne ou une perte de données non intentionnelle",
        "Vulnérabilité logicielle non corrigée pouvant être exploitée par un attaquant externe",
        "Risque naturel comme une inondation ou un incendie pouvant affecter le SI",
      ],
    },
    {
      q: "Quelles sont les catégories d'attaquants selon l'ANSSI ?",
      a: [
        "Organisations structurées (États, crime organisé) ; groupes idéologiques (terroristes, activistes) ; attaquants aux moyens limités (individus, petits groupes)",
        "Hackers éthiques, script kiddies, cybercriminels professionnels, acteurs étatiques",
        "Attaquants externes, internes, sous-traitants compromis, partenaires malveillants",
        "Débutants, intermédiaires, experts, groupes parrainés par des États étrangers",
      ],
    },
    {
      q: "Quels types d'attaques relèvent de la déstabilisation ?",
      a: [
        "Déni de service (rendre inaccessible par requêtes massives), défiguration web (message idéologique), divulgation de données confidentielles",
        "Watering hole (infection de site légitime) et spearphishing (hameçonnage ciblé)",
        "Ransomware (rançon) et phishing (vol de données bancaires ou personnelles)",
        "Exfiltration de données sensibles et espionnage industriel à long terme",
      ],
    },
    {
      q: "Quels types d'attaques relèvent de l'espionnage ?",
      a: [
        "Point d'eau (watering hole) : infection d'un site légitime ; hameçonnage ciblé (spearphishing) : usurpation d'identité pour pièce jointe malveillante",
        "Déni de service (DoS/DDoS) et défiguration de sites web",
        "Ransomware et hameçonnage financier (phishing bancaire)",
        "Sabotage des infrastructures critiques et destruction de données",
      ],
    },
    {
      q: "Qu'est-ce que le Broken Access Control (OWASP) ?",
      a: [
        "L'application n'applique pas correctement les restrictions d'accès, permettant des accès horizontaux (autres utilisateurs) ou verticaux (droits supérieurs) non autorisés",
        "Données sensibles non protégées par des mécanismes de chiffrement ou hachage adaptés",
        "Utilisation de composants obsolètes contenant des vulnérabilités connues et exploitables",
        "Mauvaise configuration des paramètres de sécurité par défaut du système",
      ],
    },
    {
      q: "Qu'est-ce qu'une Cryptographic Failure (OWASP) ?",
      a: [
        "Données sensibles non protégées par des mécanismes de chiffrement ou de hachage adaptés, ou mécanismes mal utilisés (ex: MD5 pour mots de passe)",
        "L'application ne vérifie pas correctement les droits d'accès des utilisateurs authentifiés",
        "Injection de données malveillantes interprétées comme du code exécutable par le système",
        "Faille de conception où la sécurité n'a pas été intégrée dès la phase de design",
      ],
    },
    {
      q: "Qu'est-ce qu'une Injection (OWASP) ?",
      a: [
        "Données fournies par l'utilisateur interprétées comme du code exécutable (SQL, OS, template), modifiant le comportement de l'application",
        "Faille où l'application fait confiance à du code modifié sans vérification d'intégrité",
        "Mauvaise implémentation de l'authentification permettant l'usurpation de compte",
        "Composants obsolètes avec des vulnérabilités connues et exploitables",
      ],
    },
    {
      q: "Qu'est-ce qu'un Insecure Design (OWASP) ?",
      a: [
        "La sécurité n'a pas été intégrée dès la phase de conception, rendant la logique métier de l'application exploitable par un attaquant",
        "Utilisation de paramètres de configuration par défaut non modifiés, affaiblissant la protection",
        "Données sensibles non protégées par des algorithmes de chiffrement appropriés",
        "Bibliothèques ou frameworks obsolètes contenant des vulnérabilités connues",
      ],
    },
    {
      q: "Qu'est-ce qu'une Security Misconfiguration (OWASP) ?",
      a: [
        "Utilisation de paramètres par défaut, excessifs ou mal désactivés, affaiblissant la protection (ports ouverts, comptes par défaut, messages d'erreur verbeux)",
        "Faille de conception où la sécurité n'a pas été prise en compte dès le début",
        "Composants, bibliothèques ou frameworks obsolètes contenant des vulnérabilités connues",
        "Absence de mécanisme de vérification d'intégrité sur le code ou les données",
      ],
    },
    {
      q: "Qu'est-ce que les Vulnerable and Outdated Components (OWASP) ?",
      a: [
        "Utilisation de composants, bibliothèques ou frameworks obsolètes ou contenant des vulnérabilités connues et exploitables",
        "Mauvaise configuration des paramètres de sécurité par défaut du système ou de l'application",
        "Faille d'authentification permettant l'usurpation de session ou de compte utilisateur",
        "Absence de logs et de monitoring empêchant la détection des attaques en cours",
      ],
    },
    {
      q: "Qu'est-ce qu'une Identification and Authentication Failure (OWASP) ?",
      a: [
        "Identification, authentification ou gestion des sessions mal implémentée, permettant l'usurpation de compte (mots de passe faibles, sessions non invalidées…)",
        "L'application fait confiance à du code ou des données modifiés sans vérification d'intégrité",
        "Composants obsolètes avec des vulnérabilités connues et non corrigées",
        "Absence de journalisation empêchant la détection et l'analyse des intrusions",
      ],
    },
    {
      q: "Qu'est-ce qu'une Software and Data Integrity Failure (OWASP) ?",
      a: [
        "Le système fait confiance à du code ou des données modifiés sans mécanisme de vérification d'intégrité ou de signature (ex: mises à jour non signées)",
        "Mauvaise configuration des paramètres de sécurité par défaut du système",
        "Faille d'authentification permettant l'usurpation de compte utilisateur",
        "Utilisation de bibliothèques obsolètes contenant des vulnérabilités connues",
      ],
    },
    {
      q: "Qu'est-ce qu'une Security Logging and Monitoring Failure (OWASP) ?",
      a: [
        "Absence ou insuffisance de logs et de monitoring, empêchant la détection, l'analyse et la réponse aux attaques en cours ou passées",
        "Utilisation de composants obsolètes avec des vulnérabilités connues et exploitables",
        "Mauvaise implémentation de l'authentification permettant l'usurpation de session",
        "Faille de conception rendant la logique métier de l'application exploitable",
      ],
    },
    {
      q: "Qu'est-ce qu'un algorithme de hachage ?",
      a: [
        "Fonction mathématique transformant une donnée de taille variable en empreinte de taille fixe (hash), de manière irréversible et sans clé",
        "Procédé cryptographique réversible transformant des données via un algorithme et une clé secrète",
        "Mécanisme de signature numérique garantissant l'authenticité et l'intégrité des messages",
        "Protocole d'échange de clés permettant à deux parties de partager un secret de façon sécurisée",
      ],
    },
    {
      q: "Quelles sont les propriétés d'un algorithme de hachage ?",
      a: [
        "Déterministe, irréversible, rapide à calculer, effet avalanche (changement mineur = hash totalement différent), résistant aux collisions",
        "Réversible avec la clé, basé sur un algorithme secret, lent par design pour la sécurité",
        "Non déterministe, irréversible, nécessite un salt, résistant aux attaques par force brute",
        "Symétrique, avec clé publique/privée, déterministe et rapide pour le chiffrement",
      ],
    },
    {
      q: "Quelle est la différence entre hachage et chiffrement ?",
      a: [
        "Hachage = irréversible, sans clé, empreinte de taille fixe ; Chiffrement = réversible, avec clé secrète ou publique",
        "Hachage = avec clé secrète, réversible ; Chiffrement = sans clé, irréversible",
        "Hachage = pour données en transit ; Chiffrement = pour données stockées au repos",
        "Hachage = symétrique ; Chiffrement = asymétrique uniquement avec paire de clés",
      ],
    },
  ],
}

// Reconstruit la question avec les réponses mélangées selon le shuffle stocké en DB
export function buildQuestion(room, questionIndex) {
  const qIdx = room.questionIndices[questionIndex]
  const original = QUESTIONS[room.lot][qIdx]
  const shuffle = room.shuffles[questionIndex]
  return {
    text: original.q,
    answers: shuffle.map((i) => original.a[i]),
    correct: shuffle.indexOf(0), // la réponse correcte était à l'index 0 à l'origine
  }
}

// Génère un tableau de mélange aléatoire [0,1,2,3] → permutation
export function generateShuffle() {
  const arr = [0, 1, 2, 3]
  for (let i = 3; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr
}

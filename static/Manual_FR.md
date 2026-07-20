# Manuel d'utilisation — Moniteur de Conformité d'Entreprise

**Programme d'Intégrité · Loi argentine 27.401 · Normes internationales**
Ecosistema Transparencia · Ph.D. Vicente H. Monteverde

---

## 1. Introduction

Le **Moniteur de Conformité d'Entreprise** est une plateforme web permettant de gérer, mesurer et rendre compte du Programme d'Intégrité d'une entreprise au regard de la loi argentine 27.401 et de plus de 20 référentiels internationaux (anticorruption, protection des données, sécurité de l'information, environnement, gouvernance et numérique).

La plateforme centralise, dans un seul tableau de bord :

- Le **score de conformité**, décomposé par axe et par référentiel réglementaire.
- Un **canal d'alerte interne** (whistleblowing), avec suivi des dossiers.
- La **gestion des risques**, les contrôles, les incidents et les conflits d'intérêts.
- Le **plan d'action** et les alertes réglementaires.
- La **génération de rapports PDF** pour le conseil d'administration, les auditeurs et l'Office Anticorruption.

Chaque client accède à une instance disposant de sa propre URL (par exemple `mapacompliance-production.up.railway.app`) et ne voit que les modules activés dans son forfait (Starter, Professional ou Enterprise).

### 1.1 Navigation générale

L'ensemble du système est organisé en **onglets** situés dans la barre supérieure. Il en existe deux types :

- **Onglets internes** : changent de contenu sans recharger la page (Tableau de bord, Loi 27.401, ISO 27001, etc.). Ils constituent la majorité.
- **Onglets ouvrant une page séparée** : Benchmark, Conflits, Prédicteur, Incidents, Contrôles, Signatures et Documents. Chacun dispose de son propre bouton « ← Tableau de bord » pour revenir en arrière.

Le sélecteur de langue se trouve en haut à droite : **🇦🇷 ES / 🇺🇸 EN / 🇧🇷 PT**. Il traduit le texte de l'interface (pas le contenu réglementaire propre à chaque pays, qui reste dans sa langue d'origine lorsque cela s'applique). L'interface elle-même n'est pas encore disponible en français ; ce manuel est fourni en français afin de documenter la plateforme pour les lecteurs francophones — l'utilisation se fait dans l'une des trois langues de l'interface (ES/EN/PT).

### 1.2 Mode démo

Si l'URL contient `?demo=true`, la plateforme affiche des données fictives d'exemple afin qu'un client potentiel puisse explorer tous les onglets sans charger d'informations réelles. Une bannière en haut de page indique « 🧪 MODE DÉMO — Données fictives » avec un lien pour quitter ce mode (`?demo=false`).

### 1.3 Accès protégé par code PIN

Certains panneaux d'administration (Canal d'alerte — panneau de gestion, Portail Client, Panneau Documents) sont protégés par un **code PIN d'accès**. La saisie du bon code crée une session temporaire (8 heures par défaut) identifiée par un jeton stocké dans le navigateur. Après plusieurs tentatives échouées consécutives, le système bloque temporairement les nouvelles tentatives depuis cette même connexion, à titre de protection contre les attaques par force brute.

---

## 2. Tableau de bord

L'écran d'accueil, qui donne une vue d'ensemble instantanée du Programme d'Intégrité :

- **Score de conformité** : un chiffre de 0 à 100 calculé à partir de six axes pondérés (programme, formation, devoir de vigilance envers les tiers, gestion des risques, communication/canal d'alerte, enquêtes). Comprend une barre de progression et le niveau de maturité atteint (Initial / Intermédiaire / Avancé).
- **Cartes Programme et Formation** : résumé rapide de l'avancement de chacun.
- **Risque par domaine** : vue compacte de la cartographie des risques.
- **Alertes actives** : notifications réglementaires et d'échéances, générées automatiquement par le système (collecte depuis des sources officielles telles que l'Office Anticorruption, l'Unité d'Information Financière — UIF, et l'OCDE, ainsi que des alertes internes d'échéance).
- **Couverture par référentiel** : score de mise en œuvre synthétique pour chaque référentiel réglementaire actif, calculé sur les contrôles de la Cartographie Multi-Référentiels.
- **Prochaines échéances** : réunit en une seule vue les échéances de formation, du plan d'amélioration et réglementaires.

Le tableau de bord donne également accès au **Vérificateur de numéro d'identification fiscale (CUIT)** (le même composant que dans l'onglet Devoir de vigilance) et au **Registre RITE**.

---

## 3. Vue Conseil — Vue exécutive

Conçue pour être présentée au Conseil d'administration ou à un auditeur externe. Comprend un bouton **🖨️ Imprimer** pour générer une version prête pour une réunion du conseil.

Contient :

- **Principaux indicateurs clés** du programme en un coup d'œil.
- **État par feu tricolore et par axe** : statut (vert/jaune/rouge) pour chacun des six axes du score.
- **Évolution du score** : graphique linéaire avec l'historique mois par mois.
- **Risques critiques** : liste des risques non atténués de plus forte sévérité.
- **Alertes pour le conseil** : alertes pertinentes filtrées par importance stratégique.
- **Prochaines actions prioritaires** : extrait du Plan d'action.
- **Couverture Multi-Référentiels** : synthèse du niveau de conformité sur l'ensemble des référentiels internationaux actifs.
- **Bloc de validation** : espace permettant au Responsable Conformité et/ou au Conseil de constater la revue du rapport.

---

## 4. Référentiels réglementaires et normes

Chacun de ces référentiels dispose de son propre onglet comprenant : une introduction réglementaire, un score spécifique calculé sur ses éléments, une liste de contrôle de conformité, des références aux articles/sections clés et, dans plusieurs cas, des comparaisons avec des référentiels connexes.

### 4.1 Loi 27.401 (Argentine)
L'onglet central de la plateforme. Mesure le **niveau de maturité du Programme d'Intégrité** (Initial / Moyen / Avancé) au titre de l'Art. 23. Il distingue :
- Les **éléments obligatoires** (Art. 23) — requis pour contracter avec l'État national (Art. 24).
- Les **éléments optionnels** — qui élèvent le niveau de maturité et atténuent la responsabilité pénale (Art. 9).
- Un résumé « Que manque-t-il pour le niveau suivant ? » avec des actions concrètes suggérées.

### 4.2 Lei 12.846/2013 — Brésil (Loi Anticorruption)
Fondée sur le régime brésilien de **responsabilité objective**. Couvre les éléments obligatoires du programme d'intégrité prévus par le Décret 11.129/2022 et l'Ordonnance CGU 909/2015, les facteurs atténuants (Art. 7), et le mécanisme d'accord de clémence (Art. 16, réduction pouvant aller jusqu'à 2/3 de l'amende).

### 4.3 FCPA & UK Bribery Act
Couvre deux régimes anticorruption à portée extraterritoriale :
- **FCPA** (États-Unis, 1977) : s'applique aux entreprises ayant un lien avec les États-Unis (cotation en bourse américaine, paiements en USD, filiales ou employés sur le territoire américain). Books & Records et Internal Controls (§ 78m(b)).
- **UK Bribery Act 2010** : la loi la plus stricte au monde en la matière — *responsabilité stricte* (strict liability) de l'entreprise (Section 7) pour toute société présente ou faisant affaire au Royaume-Uni.
Comprend un tableau comparatif entre les deux régimes.

### 4.4 LGPD — Loi Générale de Protection des Données (Brésil, Loi 13.709/2018)
Liste de contrôle de conformité par chapitres clés : bases légales de traitement (Art. 7), score et niveau de conformité, éléments réalisés/en attente, et détail des sanctions ANPD (jusqu'à 2 % du chiffre d'affaires au Brésil, plafonné à 50 millions de reais par infraction, plus une amende journalière).

### 4.5 OCDE — Principes directeurs pour les entreprises multinationales (édition 2023)
Recommandations de conduite responsable des affaires émises par les 50 pays adhérents (l'Argentine depuis 1997). Détaille les **11 chapitres** (Politiques générales, Publication d'informations, Droits de l'homme, Emploi, Environnement, Lutte contre la corruption, Intérêts des consommateurs, Science et technologie, Concurrence, Fiscalité, et le nouveau Chapitre XI de 2023 sur la chaîne d'approvisionnement). Comprend des informations sur le Point de Contact National (PCN) argentin et les avantages de l'adoption du référentiel (accès aux fonds ESG, appels d'offres d'organismes multilatéraux, réduction du risque réputationnel).

### 4.6 ISO 37001 — Système de management anti-corruption
Norme internationale certifiable, complémentaire à la Loi 27.401, au FCPA, à l'UK Bribery Act et à la Lei 12.846. Comprend les clauses clés et une comparaison directe avec la Loi 27.401.

### 4.7 ISO 14001 — Système de management environnemental
Couvre les clauses 4 à 10 (Contexte, Planification, Fonctionnement, Amélioration continue) et son intégration avec les indicateurs de l'axe Environnemental du module ESG (émissions de GES, effluents, économie circulaire, biodiversité).

### 4.8 ISO 45001 — Systèmes de management de la santé et sécurité au travail
Pertinent pour les secteurs à risque professionnel élevé (construction, industrie, énergie, mines). Couvre les clauses 4 à 10.

### 4.9 RGPD — Règlement Général sur la Protection des Données (UE)
Liste de contrôle des 7 principes et des droits des personnes concernées. Comprend le détail des sanctions par palier (jusqu'à 10 M€ / 2 % du chiffre d'affaires mondial, ou jusqu'à 20 M€ / 4 % — le montant le plus élevé étant retenu) et une comparaison RGPD vs. LGPD.

### 4.10 ESG — Environnement, Social & Gouvernance
Trois dimensions, chacune avec son propre score :
- **Environnement** : registre des émissions de GES par périmètre (1, 2 et 3 — GRI 305), plan de réduction et type de reporting (interne/public, GRI/TCFD).
- **Social** : % de femmes au conseil d'administration et dans l'encadrement intermédiaire, écart de rémunération entre les sexes, politique DEI, audit d'équité salariale.
- **Gouvernance** : liste de contrôle du canal d'alerte, du code d'éthique, de l'indépendance du conseil, de l'audit interne, de la politique anticorruption, du rapport ESG annuel et du taux de résolution des signalements.
Références croisées avec GRI 2021, TCFD, SASB, les ODD de l'ONU et la Résolution CNV 896/2021.

### 4.11 ISO 27001 — Sécurité de l'information
Score global sur les 4 domaines de l'Annexe A (ISO 27001:2022) : Organisationnel (37 contrôles), Personnes (8), Physique (14) et Technologique (34), avec compteurs de contrôles conformes / en cours / en attente.

### 4.12 SOC 2 — Service Organization Control 2
Référentiel de l'AICPA pour les prestataires cloud/SaaS, évalué selon les 5 Trust Service Criteria (Security est obligatoire ; Availability, Processing Integrity, Confidentiality et Privacy sont optionnels). Distingue les rapports de Type I (conception) et de Type II (efficacité opérationnelle, ≥ 6 mois). Comparaison SOC 2 vs. ISO 27001.

### 4.13 CCPA / CPRA — California Consumer Privacy Act
Liste de contrôle des droits et obligations. Sanctions : 7 500 US$ par violation intentionnelle, 2 500 US$ par violation non intentionnelle, et actions privées de 100 à 750 US$ par consommateur en cas de violation de données. Comparaison CCPA vs. RGPD vs. LGPD.

### 4.14 NIS2 — Directive européenne sur la cybersécurité
Gestion des risques (Art. 21), gouvernance et responsabilité des dirigeants (Art. 20), chaîne d'approvisionnement (Art. 21.2.d) et délais de notification des incidents (24h alerte précoce, 72h évaluation initiale, 1 mois rapport final). Sanctions différenciées pour les entités essentielles (jusqu'à 10 M€/2 %) et importantes (jusqu'à 7 M€/1,4 %), avec responsabilité personnelle des dirigeants.

### 4.15 EU AI Act — Règlement européen sur l'intelligence artificielle
Organisé par **niveaux de risque** : interdit (en vigueur depuis février 2025), risque élevé (échéance août 2026), transparence obligatoire (août 2025) et risque minimal. Comprend un calendrier de mise en œuvre et les sanctions (jusqu'à 35 M€/7 % pour une IA interdite).

### 4.16 ISO 27701 — Système de gestion de l'information relative à la vie privée
Extension de l'ISO 27001 dédiée à la protection de la vie privée, alignée sur le RGPD/LGPD/CCPA. Nécessite l'ISO 27001 comme base. Couvre les responsables et sous-traitants de données personnelles.

### 4.17 PCI DSS v4.0 — Sécurité des données de cartes de paiement
12 exigences organisées en 6 objectifs (réseaux sécurisés, protection des données du titulaire, gestion des vulnérabilités, contrôle d'accès, surveillance, politique de sécurité). Sanctions de 5 000 à 100 000 US$ par mois pour les entités non conformes.

### 4.18 COBIT 2019 — Gouvernance des systèmes d'information
Les 5 domaines (EDM, APO, BAI, DSS, MEA) et leur relation avec l'ISO 27001, SOX, DORA et SOC 2. Pertinent pour le secteur financier et les sociétés cotées.

### 4.19 SOX — Loi Sarbanes-Oxley
Pour les entreprises cotées au NYSE/NASDAQ. Sections 302 (certification des dirigeants), 404 (ICFR — contrôle interne du reporting financier), 409 et 802 (publication et conservation des documents), 906 (responsabilité pénale, jusqu'à 20 ans d'emprisonnement). Carte de correspondance SOX–COBIT–ISO 27001.

### 4.20 DORA — Règlement sur la résilience opérationnelle numérique (UE)
En vigueur depuis le 17/01/2025 pour les entités financières et leurs prestataires critiques de services TIC. Cinq piliers : Gestion des risques TIC, Gestion et notification des incidents, Tests de résilience opérationnelle numérique, Risque lié aux prestataires tiers, et Partage d'informations.

---

## 5. Outils transversaux

### 5.1 Risque
- **Carte de chaleur Probabilité × Impact** : matrice des risques inhérents par domaine, avec un bouton « Charger l'auto-évaluation » pour compléter le questionnaire de base.
- **Radar des risques** et **Répartition** (graphique en anneau) par niveau.
- **Détail par domaine**.

### 5.2 Cartographie Multi-Référentiels
Montre quels contrôles satisfont simultanément plusieurs référentiels réglementaires à la fois, maximisant le retour sur investissement de la conformité. Comprend un compteur de contrôles cartographiés, la couverture moyenne par contrôle, la couverture maximale atteinte, et une matrice de couverture par référentiel. Organisé par domaine : Sécurité de l'information, Protection de la vie privée, Tiers et chaîne d'approvisionnement, Gouvernance et culture, Gestion des incidents, Intelligence artificielle.

### 5.3 Plan d'action
Liste les contrôles en attente issus de la Cartographie Multi-Référentiels, avec un responsable suggéré et une échéance estimée, filtrable par priorité (Haute / Moyenne / Basse) et exportable en CSV via le bouton correspondant.

### 5.4 Formation (avancement)
Vue de suivi de l'avancement des formations : progression par module (graphique en barres), radar d'achèvement et liste des modules. (Pour le processus de signature des employés, voir « Signatures / Formations avec signature » ci-dessous.)

### 5.5 Devoir de vigilance
- **Vérificateur de numéro d'identification fiscale (CUIT) par rapport aux listes de l'OCDE** : saisissez un CUIT et le système vérifie le statut auprès de l'AFIP (simulé/stub dans cette version), les listes de personnes politiquement exposées de l'UIF, et les listes grises/noires de l'OCDE, en renvoyant un niveau de risque (faible/moyen).
- **Résumé des vérifications** et **historique** des consultations.
- **Radar de marché** : une liste en direct, provenant de **MEACI** (Carte des Entreprises et Acteurs de la Conformité Internationale), des entreprises sanctionnées dans des affaires de l'OCDE ayant une présence en Argentine. Il s'agit d'une information de contexte pour l'évaluation des tiers — elle n'implique aucune relation commerciale.

### 5.6 International
Résume l'**exposition internationale** de l'entreprise et le **cadre légal applicable** selon les pays d'opération. Intègre également, dans ce même onglet, le contenu complet des Principes directeurs de l'OCDE (voir 4.5).

### 5.7 RITE — Registre d'Intégrité (Office Anticorruption)
Guide pas à pas pour s'inscrire sur la plateforme officielle de l'Office Anticorruption (rite.gob.ar) : pourquoi s'inscrire (cela valorise le programme pour les appels d'offres de l'Art. 24, réduit la responsabilité pénale au titre de l'Art. 9), les trois modules du RITE (Programme d'Intégrité, Devoir de vigilance, Données Personnelles) et les 5 étapes d'inscription.

### 5.8 Améliorations & Alertes
- **Alertes actives** (identiques à celles du tableau de bord, avec plus de détails).
- **Évolution du score**.
- **Écarts par rapport à la norme de l'Office Anticorruption** : comparaison entre le niveau actuel, le minimum exigé par l'Office Anticorruption et le niveau avancé.
- **Plan d'amélioration priorisé**.
- **Accès rapides** vers Incidents, Contrôles, Prédicteur et Benchmark.

### 5.9 Calendrier
Calendrier réglementaire unifié : formations, éléments du plan d'amélioration et échéances réglementaires, filtrables par type de source.

### 5.10 Législation
Catalogue réglementaire complet, avec une barre de recherche en texte libre (« Rechercher une norme, un article ou un sujet… ») qui filtre par nom, description, catégorie ou pays. Organisé en 5 catégories :
1. **Éthique et Transparence** (AR) : Loi 27.401, Loi 25.188, Loi 27.275.
2. **Lutte contre le blanchiment de capitaux** : Loi 25.246 et les 40 Recommandations du GAFI/FATF.
3. **Législation internationale anticorruption** : FCPA, UK Bribery Act 2010, Loi Sapin II (France), Lei 12.846/2013 (Brésil), Loi 2/2023 (Espagne), Directive (UE) 2019/1937, Convention anticorruption de l'OCDE de 1997, CNUCC et la norme ISO 37001.
4. **Protection des données personnelles** : Loi 25.326 (AR) et RGPD (UE).
5. **Marché des capitaux et concurrence** : Loi 26.831 et Loi 27.442.

Chaque norme comprend le pays, une brève description et un lien vers le texte officiel.

### 5.11 Rapport
Génère le **Rapport Exécutif de Conformité**, adapté à une présentation à l'Office Anticorruption, au conseil d'administration ou à des auditeurs externes. Comprend une page de couverture, le score global, et neuf sections : données de l'organisation, état du programme (Loi 27.401), score par axe, éléments en attente, formation, inscription au RITE, plan d'amélioration, couverture par référentiel international et plan d'action priorisé.

Deux boutons d'export :
- **🖨️ Exporter en PDF** — rapport exécutif complet.
- **🌐 PDF Référentiels** — rapport centré sur la couverture multi-référentiels internationale.

---

## 6. Canal d'alerte (Whistleblowing)

Disponible à la fois intégré au tableau de bord (onglet « 🔒 Canal d'alerte ») et sur une page indépendante (`canal_denuncias.html`). Conforme à la Loi 27.401 (Argentine) et à la Loi 2/2023 (Espagne), qui transpose en droit espagnol la Directive (UE) 2019/1937 relative à la protection des lanceurs d'alerte.

**Pour toute personne (sans compte requis) :**
- **Déposer un signalement** : catégorie (corruption/pot-de-vin, harcèlement, fraude, conflit d'intérêts, violation de données, non-conformité environnementale, autre), description, priorité suggérée, domaine concerné, et option d'anonymat (si le signalement n'est pas anonyme, des coordonnées sont demandées). L'envoi génère un **code de suivi unique** — c'est le seul moyen de consulter le dossier par la suite, il doit donc être conservé.
- **Consulter le statut** : avec le code de suivi, on peut voir le statut du dossier et envoyer/lire des messages de suivi avec l'équipe Conformité, sans révéler l'identité du lanceur d'alerte.

**Panneau de gestion (code PIN requis — voir Section 11) :**
- Statistiques : total des signalements, reçus, en cours d'investigation, clôturés et alertes.
- Liste filtrable par statut et priorité, avec le détail complet de chaque dossier.
- Alertes automatiques du système pour : délai d'accusé de réception dépassé, délai de réponse proche de l'échéance (10 jours ou moins), et dossiers critiques (priorité haute, plus de 30 jours d'investigation).
- Mise à jour du statut (reçu → en investigation → clôturé), de la priorité et du domaine, avec possibilité de laisser un message au lanceur d'alerte.

Les délais légaux sont calculés automatiquement à la création du signalement : 7 jours pour l'accusé de réception et 90 jours pour la clôture du dossier.

---

## 7. Outils de gestion opérationnelle

Ces pages s'ouvrent séparément du tableau de bord (chacune dispose de son propre bouton « ← Tableau de bord » pour revenir) et nécessitent généralement de remplir des formulaires avec les données propres de l'entreprise — elles ne sont pas préchargées avec des informations réelles.

### 7.1 Benchmark sectoriel
Compare la position de l'entreprise par rapport aux autres entreprises inscrites au RITE dans le même secteur (données OA/RITE 2024-2025) : percentile, radar comparatif face à la moyenne du secteur, classement anonymisé des entreprises du secteur, comparaison par axe, et évolution du score propre par rapport à la moyenne sectorielle.

### 7.2 Conflit d'intérêts
Déclaration sur l'honneur numérique avec circuit d'approbation (Art. 23(g) de la Loi 27.401) :
- Le **déclarant** renseigne ses coordonnées (nom, numéro d'identification fiscale national, poste, domaine), indique s'il a ou non un conflit d'intérêts et, le cas échéant, son type (participation dans un fournisseur/client, lien familial avec un agent public, poste chez un concurrent, avantages reçus de tiers, intérêt dans un contrat/appel d'offres, autre), l'entreprise ou la personne concernée, une description et la mesure d'atténuation proposée. La déclaration est soumise sous serment, avec un avertissement de responsabilité pénale en cas de fausse déclaration (Art. 275 du Code pénal).
- Le **Responsable Conformité** (« Vue Approbateur ») examine et statue sur les déclarations en attente, filtrables par En attente / Approuvée / Rejetée.

### 7.3 Prédicteur de score par IA
Prédit le score de conformité du trimestre suivant à l'aide d'une régression linéaire et d'une analyse factorielle, avec un niveau de confiance du modèle. Comprend des scénarios alternatifs, une projection graphique (historique réel + ligne de prédiction en pointillés + bande de confiance à 80 %), les facteurs ayant le plus d'impact sur la prédiction, et des actions recommandées pour maximiser le score. L'historique de score sous-jacent est modifiable, afin de recalculer la prédiction avec vos propres données.

### 7.4 Registre des incidents
Registre des violations, non-conformités et incidents évités de justesse (Art. 23 de la Loi 27.401). L'enregistrement d'un incident saisit : le titre, le type (corruption, conflit d'intérêts, fraude interne, violation du code d'éthique, violation des marchés publics, blanchiment de capitaux, incident évité de justesse, représailles contre un lanceur d'alerte, usage abusif d'information, autre), la sévérité (critique/élevée/moyenne/faible), le domaine concerné, la date de l'événement, la personne l'ayant détecté, une description détaillée et la première action corrective. Les incidents sont filtrables par statut : Ouvert, En investigation, Clôturé, et chacun peut être fait passer au statut suivant ou supprimé depuis sa fiche détaillée.

### 7.5 Gestion des contrôles
Contrôles internes rattachés à l'ISO 27001, au COSO, à la Loi 27.401, au FCPA ou à d'autres référentiels internes. Chaque contrôle comprend : référentiel de rattachement, catégorie (environnement de contrôle, évaluation des risques, activités de contrôle, information et communication, surveillance, sécurité de l'information, contrôles anticorruption), nom, statut (mis en œuvre / partiel / en attente / non applicable), % de mise en œuvre, preuves et responsable. Vue d'ensemble de la mise en œuvre par référentiel et liste filtrable par statut.

### 7.6 Signatures — Formations avec signature
Registre des lectures, signatures et traçabilité des employés (Art. 23 de la Loi 27.401), avec deux vues :
- **👔 Vue Administrateur** : crée les modules de formation (nom, obligatoire ou optionnel, échéance, public visé, et contenu/description) et suit qui a signé.
- **👤 Vue Employé (Signature)** : l'employé saisit son nom et signe pour confirmer l'achèvement de chaque module qui lui a été assigné.

### 7.7 Gestion documentaire
Dépôt des documents du Programme d'Intégrité avec gestion des versions, rappels d'expiration et traçabilité de lecture (Art. 23 de la Loi 27.401) :
- Création d'un document : nom, code/identifiant, type (code, politique, procédure, manuel, réglementation, formulaire, déclaration sur l'honneur, autre), version, date d'entrée en vigueur et date d'expiration, responsable, URL de référence et description.
- Filtre par statut : Expiré / Bientôt expiré / En vigueur.
- Chaque document permet d'ajouter de **nouvelles versions** (avec une note de modification) et d'enregistrer la **lecture/l'accusé de réception** de chaque employé, certifiant qu'il a lu la version en vigueur — une traçabilité clé en cas d'audit.

---

## 8. Panneau documentaire client

La page `upload_clientes.html`, protégée par un **code PIN** (voir Section 11). Permet de téléverser et d'organiser les preuves documentaires du programme d'intégrité (à ne pas confondre avec le module de Gestion documentaire de la Section 7.7, dédié aux politiques et procédures internes avec contrôle de version) :

- **Téléversement de documents** : glisser-déposer (ou cliquer) un fichier — PDF, XLSX, XLS, CSV, DOC ou DOCX, jusqu'à 20 Mo. Le type de document est détecté automatiquement à partir de son contenu et du nom du fichier (ou peut être forcé manuellement via un menu déroulant) parmi 10 catégories : code d'éthique, politique de cadeaux, déclarations sur l'honneur de conflit d'intérêts, procédure d'investigation, manuel de conformité, preuve d'inscription au RITE, liste du personnel formé, liste des fournisseurs, cartographie des risques et contrats avec le secteur public.
- Le système traite le fichier lors du téléversement : extraction du texte et détection de la date du document (PDF), ou extraction des lignes/colonnes et des numéros d'identification fiscale mentionnés (Excel/CSV).
- **Liste de contrôle documentaire** : indique quels éléments du programme d'intégrité sont déjà couverts par au moins un document, et lesquels manquent.
- **Liste des documents téléversés**, avec possibilité de les supprimer.

**Une connexion par code PIN est requise** avant de pouvoir téléverser ou supprimer des documents.

---

## 9. Portail d'administration client

La page `portal.html`, protégée par un **code PIN** (voir Section 11). Il s'agit du panneau interne d'Ecosistema Transparencia pour administrer l'ensemble des clients de la plateforme (utilisé par l'équipe Ecosistema Transparencia, et non par le client final) :

- **Indicateurs clés** : clients actifs, clients Enterprise, clients avec des suggestions de modules en attente, et clients dont l'onboarding n'est pas terminé.
- **Recherche et filtres** par forfait (Enterprise/Professional/Starter) ou « avec suggestions ».
- **Fiche par client**, dépliable en trois onglets :
  - **Infos** : statut d'onboarding, numéro d'identification fiscale, forfait, secteur, taille, pays, responsable, dates d'inscription/d'expiration, et indicateurs opérationnels (Brésil, UE, États-Unis, société cotée, cartes de paiement, secteur financier réglementé, santé et sécurité au travail).
  - **Modules** : pourcentage de modules actifs regroupés par domaine (Cœur, Anticorruption, Vie privée, Sécurité, Environnement, Gouvernance, Numérique, Transversal).
  - **Suggestions** : recommande des modules supplémentaires en fonction du profil d'onboarding du client (secteur, pays d'opération, caractéristiques). Permet d'activer un seul module suggéré ou tous en une seule fois.

---

## 10. Intégration de nouveaux clients

### 10.1 Assistant d'onboarding interne (`onboarding.html`)
Outil interne (équipe Ecosistema Transparencia) pour configurer un nouveau client en 3 étapes : (1) profil de l'entreprise et forfait, (2) périmètre opérationnel (pays d'opération, caractéristiques telles que la cotation en bourse ou le traitement de cartes de paiement) — ce qui détermine les modules obligatoires — et (3) ajustement fin des modules et génération automatique du bloc de configuration (`modulos_activos` et `onboarding`) prêt à être copié dans le fichier `config.js` du client et dans `data/clientes.json`.

### 10.2 Formulaire public de demande (`formulario-cliente.html`)
Un formulaire destiné à un prospect/client final demandant l'accès à sa propre plateforme : données de l'entreprise, périmètre opérationnel, et forfait suggéré (Starter / Professional / Enterprise), avec un calcul en direct des modules qui seraient activés. Lors de l'envoi, le système :
- Enregistre une copie de sauvegarde de la demande.
- Envoie un e-mail interne à l'équipe Ecosistema Transparencia avec toutes les données.
- Envoie un e-mail de confirmation au demandeur, avec un numéro de référence et une promesse de contact sous 24 à 48 heures.

---

## 11. Sécurité et accès

- **Code PIN Consultant et code PIN Responsable Conformité** : deux rôles ayant accès au panneau de gestion. Configurés en tant que variables d'environnement serveur, avec une durée de validité configurable (30 jours par défaut), après laquelle ils doivent être renouvelés.
- **Session** : la saisie du bon code PIN crée un jeton de session valable pour une durée configurable (8 heures par défaut). Le même jeton donne accès au Canal d'alerte (panneau), au Portail Client et au Panneau Documents — inutile de se reconnecter à chacun si vous vous êtes déjà connecté via l'un d'entre eux.
- **Blocage en cas d'échecs répétés** : après plusieurs codes PIN incorrects consécutifs depuis la même connexion, le système bloque temporairement les nouvelles tentatives.
- **Points d'accès protégés en écriture** : le téléversement ou la suppression de documents, la consultation de la liste complète des clients, et la consultation des demandes d'onboarding nécessitent tous une session active — ils ne sont pas accessibles publiquement.
- **Déconnexion** : disponible depuis la barre de session de chaque panneau protégé.

---

## 12. Questions fréquentes

**Pourquoi le score de conformité est-il vide au départ ?**
Avant que les données réelles du programme ne soient chargées (via les formulaires de chaque onglet), il n'y a rien à partir de quoi calculer le score. Le mode démo affiche à la place des valeurs d'exemple.

**Les données du « Vérificateur de numéro d'identification fiscale » et du « Radar de marché » sont-elles en temps réel ?**
Le vérificateur AFIP/UIF/OCDE est une fonctionnalité de référence ; pour un usage en production, il est recommandé de connecter les services web officiels (AFIP WS_SR_PADRON_A5, listes UIF et OCDE). Le Radar de marché interroge quant à lui le service externe MEACI en direct.

**Que se passe-t-il si je perds le code de suivi d'un signalement ?**
Il n'existe aucun moyen de le récupérer — c'est, par conception, le seul identifiant permettant de consulter le dossier de manière anonyme (afin de ne pas compromettre l'anonymat du lanceur d'alerte).

**Puis-je exporter le Plan d'action vers Excel ?**
Il s'exporte au format CSV, qui s'ouvre directement dans Excel ou Google Sheets.

**Le mode démo modifie-t-il les données réelles ?**
Non. Le mode démo ne change que les données affichées à l'écran (données d'exemple au lieu de celles saisies par l'entreprise) ; il n'écrit ni ne supprime aucune information réelle.

---

*Manuel d'utilisation — Moniteur de Conformité d'Entreprise · Ecosistema Transparencia · Ph.D. Vicente H. Monteverde*

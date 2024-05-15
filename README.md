# Yxir Dashboard

[<img src="https://img.youtube.com/vi/iJvAiVqIcHY/hqdefault.jpg" width="90%">](https://youtu.be/iJvAiVqIcHY "Petit tour du projet et des features")

Dans le cadre d'un test technique pour le compte de l'entreprise Yxir, j'ai été amené à réaliser l'excercice suivant : la mise d'une interface interactive et dynamique permettant aux utilisateurs de visualiser et d'analyser leurs données d'activité sur la plateforme. Ce projet se devait d'utiliser la librairie React et le framework NextJS.

Lors de la création du projet, j'ai souhaité aussi intégrer Typescript (pour intégrer du typage statique renforcer la stabilité du projet) et TailwindCSS (afin de faciliter la mise en place du style du site).

Pour accomplir cette exercice, j'ai souhaité implementer des librairies connues pour leur efficacité, leur performance et qui sont utilisées par bon nombre de projets React :

- _react-grid-layout_ pour la mise en place d'une grille de widgets qui puisse être interactive et responsive, avec des éléments dont on peut modifier la taille et la position.
- _react-apexcharts_ pour l'intégration à l'intérieur des widgets d'élements graphiques interactifs, comme des charts en camembert, en lignes ou en barres
- _react-table_ de Tanstack (aussi connu pour être le développeur de react-query) pour la mise en place de tableaux interactifs, optimisés pour un grand nombre de données, disposant de bon nombre de features rapides à implémenter (tri par critère, pagination, recherche)
- _react-tooltip_ afin d'afficher des tooltip au survol des différentes icônes et ainsi rendre l'interface plus compréhensible aux utilisateurs.
- _react-icons_ afin de bénéficier d'une large bibliothèque d'icônes, dont la couleur et la taille peuvent être changées très aisément.
- _zustand_ afin de pouvoir disposer d'un état et de fonctions acessibles à tous les composants du projet, dans le but ici présent d'afficher une fenêtre d'alerte.

## Taches accomplies

- Intégrer la librairie react-grid-layout et s'insipirer des éléments de démonstrations présentés dans le repository de la librairie. Cependant, le code présenté dans ces demos est assez daté, car principalement basé sur des composants class-based en JS pur. Pour intégrer cette librarie dans le projet, il a fallu porter ce code en Typescript et intégrer à la place des classes fonctionnelles. Il était donc nécessaire de connaître la façon legacy de coder avec React afin d'accomplir ce portage.
- Intégrer la librairie apex-charts en React Typescript et l'intégrer à des composants customs, et corrigeant certains oublis de la documentation.
- Remplir le tableau de données mockés en lien avec un contexte industriel. Ces données ont été générées au format JSON grace au site [Mockaroo](https://www.mockaroo.com/).
- Optimiser au maximum les performances du site en intégrant la mémoisation du layout (avec useMemo) et le lazy-loading des éléments de charts (dynamic imports)

## Structure du projet

Le projet contient :

- Un dossier _app_ qui contient les pages principales pour NextJS
- Un dossier components pour intègre les composants qui seront utilisés dans le projets (Widget, Chart, le menu, le tableau, etc.)
- Un dossier _hooks_ qui intègre les hooks qui nous seront utile, ici le hook useAlertStore, qui permet d'avoir accès au store zustand contenant les données de la fenêtre Alert et si oui ou non cette fenêtre doit être affichée.
- Un dossier _mocks_ qui rassemble l'ensemble des données mockées du tableau et les fichiers de configuration des différents graphiques (données à afficher, couleurs, échelles, etc.).
- Un dossier _providers_ qui intègre un hoc permettant l'affichage de la fenêtre d'alerting. Il s'agit d'une bonne pratique car cela permet d'utiliser ce composant sur l'ensemble des pages du site très aisément, si tant est que ce projet regroupe plus que la vue actuelle.
- Un dossier _types_ qui recense les déclarations des types qui sont utilisés sur plus d'un seul composant.
- Un dossier _views_ qui intègre les vues du site, ici la vue principale Dashboard, qui affiche les différents widgets.

## Comment lancer le projet

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Puis ouvrir le lien [http://localhost:3000](http://localhost:3000) sur votre navigateur.

Ce projet utilise [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) afin d'utiliser de façon optimisée la police Google Fonts _DM Sans_.

## Todolist/Bugs à corriger

- Un problème d'overflow subsiste encore sur le tableau lorsque le widget est de trop petite taille.
- Des erreurs "maximum call stack exceeded" se déclenchent arbitrairement lors du resize de la fenêtre.
- Le layout du site peut parfois ne pas être retenu en mémoire correctement par le WidthProvider de react-grid-layout, ce qui peut parfois faire déplacer certains widgets.

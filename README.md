# DraggableCircularMenu

`DraggableCircularMenu` est un composant React personnalisable qui permet de créer un menu circulaire interactif et draggable (pouvant être déplacé par glisser-déposer). Idéal pour offrir une navigation dynamique et visuellement attrayante dans vos applications React.

## Installation

Pour installer le package, utilisez npm ou yarn :

```bash
npm install draggableCircularMenu
```
ou
```terminal
yarn add draggableCircularMenu
```
## Utilisation

```jsx
import React from "react";
import DraggableCircularMenu from "draggable-circular-menu";

const MyComponent = () => {
  return (
    <div>
      <DraggableCircularMenu />
    </div>
  );
};

export default MyComponent;
```

## Propriétés

| Propriété    | Description                                                        | Type                 | Par défaut  |
|--------------|--------------------------------------------------------------------|----------------------|--------------|
| values       | Les valeurs à afficher dans le menu.                                | `number[]`           | `[0, 1, ..., 100]` |
| circleColor  | La couleur du cercle central.                                      | `string`             | `#00c8b7`    |
| textColor    | La couleur du texte.                                               | `string`             | `black`      |
| text         | Texte supplémentaire à afficher.                                   | `string`             | `""`         |

## Exemples

```jsx
<DraggableCircularMenu
  values={[10, 20, 30, 40, 50]}
  circleColor="#ff0000"
  textColor="white"
  text="€"
/>
```

import React from "react";
interface SalaryWheelProps {
    values?: number[];
    textColor?: string;
    options?: string[];
    circleColor?: string;
    text?: string;
}
/**
 * Affiche un menu circulaire draggable avec des valeurs personnalisables.
 * TODO: améliorer le composant en permettant de définir des intervales entre 2 nombres
 *
 * @param {Object} props Les propriétés du composant.
 * @param {number[]=} props.values - Les valeurs à afficher dans le menu. Par défaut, génère un tableau de 0 à 100.
//  * @param {string[]} props.colors - Les couleurs utilisées pour le menu. Doit être un tableau de chaînes de caractères représentant des couleurs.
 * @param {string=} props.circleColor - La couleur du cercle central. Par défaut, '#00c8b7'.
 * @param {string=} props.textColor - La couleur du texte. Par défaut, 'black'.
//  * @param {string[]=} props.options - Les options supplémentaires à afficher. Par défaut, un tableau vide.
 * @param {string=} props.text - Texte supplémentaire à afficher. Par défaut, aucune valeur.
 * @return {JSX.Element} Le composant DraggableCircularMenu.
 */
declare const DraggableCircularMenu: React.FC<SalaryWheelProps>;
export default DraggableCircularMenu;

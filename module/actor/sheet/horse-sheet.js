import FSActorSheet from "./actor-sheet.js";

/**
 * @extends {FSActorSheet}
 */
export class FSHorseSheet extends FSActorSheet {
  /** @override */
  static get defaultOptions() {
    return mergeObject(super.defaultOptions, {
      classes: ["frontierscum", "sheet", "actor", "horse"],
      template: "systems/frontierscum/templates/actor/horse-sheet.html",
      width: 685,
      // height: 880,
      height: 835,
      tabs: [
        {
          navSelector: ".sheet-tabs",
          contentSelector: ".sheet-body",
          initial: "personal",
        },
      ],
      dragDrop: [{ dragSelector: ".item-list .item", dropSelector: null }],
    });
  }  
}
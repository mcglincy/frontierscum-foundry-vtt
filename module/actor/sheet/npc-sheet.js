import FSActorSheet from "./actor-sheet.js";

/**
 * @extends {FSActorSheet}
 */
export class FSNpcSheet extends FSActorSheet {
  /** @override */
  static get defaultOptions() {
    return mergeObject(super.defaultOptions, {
      classes: ["frontierscum", "sheet", "actor", "npc"],
      template: "systems/frontierscum/templates/actor/npc-sheet.html",
      width: 705,
      height: 500,
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

  /** @override */
  activateListeners(html) {
    super.activateListeners(html);
  }  

}
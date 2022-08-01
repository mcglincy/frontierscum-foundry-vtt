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
      height: 477,
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
    html.find(".reaction-button").click(this._onReactionClick.bind(this));
    html.find(".morale-button").click(this._onMoraleClick.bind(this));
  }  

  _onReactionClick(event) {
    event.preventDefault();
    this.actor.rollReaction();
  }

  _onMoraleClick(event) {
    event.preventDefault();
    this.actor.rollMorale();
  }
}
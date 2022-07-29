import FSActorSheet from "./actor-sheet.js";

/**
 * @extends {FSActorSheet}
 */
export class FSCharacterSheet extends FSActorSheet {
  /** @override */
  static get defaultOptions() {
    return mergeObject(super.defaultOptions, {
      classes: ["frontierscum", "sheet", "actor", "character"],
      template: "systems/frontierscum/templates/actor/character-sheet.html",
      width: 705,
      height: 905,
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
    html.find(".ability-name").click(this._onAbilityClick.bind(this));
  }  

  _onAbilityClick(event) {
    event.preventDefault();
    const ability = event.currentTarget.dataset.ability;
    this.actor.abilityCheck(ability);
  }  
}
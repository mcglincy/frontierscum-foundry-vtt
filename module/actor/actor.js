import { d20Formula } from "../utils.js";

/**
 * @extends {Actor}
 */
export class FSActor extends Actor {
  /** @override */
  static async create(data, options = {}) {
    data.prototypeToken = data.prototypeToken || {};
    let defaults = {};
    if (data.type === "character") {
      defaults = {
        actorLink: true,
        disposition: 1, // friendly
        vision: true,
      };
    } else if (data.type === "npc") {
      defaults = {
        actorLink: false,
        disposition: -1, // hostile
        vision: false,
      };
    } else if (data.type === "horse") {
      defaults = {
        actorLink: true,
        disposition: 0, // neutral
        vision: true,
      };
    }
    mergeObject(data.prototypeToken, defaults, { overwrite: false });
    return super.create(data, options);
  }

  _onCreate(data, options, userId) {
    super._onCreate(data, options, userId);
  }

  async abilityCheck(ability) {
    const value = this.system.abilities[ability];
    const formula = d20Formula(value);
    const roll = new Roll(formula);
    const flavor = `Check ${ability.toUpperCase()}`;
    await roll.toMessage({
      flavor,
      speaker: ChatMessage.getSpeaker({ actor: this }),
    });      
  }

  async rollMorale() {
    const roll = new Roll("2d6");
    roll.evaluate({ async: false });
    let key = "";
    if (roll.total > this.data.data.morale) {
      key = "FS.MoraleFleesOrSurrenders";
    } else {
      key = "FS.MoraleStandsStrong";
    }
    const flavor = `${this.name} ${game.i18n.localize(key)}!`;
    await roll.toMessage({
      flavor,
      speaker: ChatMessage.getSpeaker({ actor: this }),
    });  
  }

  async rollReaction() {
    const roll = new Roll("2d6");
    roll.evaluate({ async: false });
    let key = "";
    if (roll.total <= 3) {
      key = "FS.ReactionKillOrCapture";
    } else if (roll.total <= 6) {
      key = "FS.ReactionIrritated";
    } else if (roll.total <= 8) {
      key = "FS.ReactionApathetic";
    } else if (roll.total <= 10) {
      key = "FS.ReactionSomewhatAmicable";
    } else {
      key = "FS.ReactionSeeminglyFriendly";
    }
    const flavor = `${this.name} ${game.i18n.localize("FS.Reaction")}: ${game.i18n.localize(key)}.`;
    await roll.toMessage({
      flavor,
      speaker: ChatMessage.getSpeaker({ actor: this }),
    });  
  }

}


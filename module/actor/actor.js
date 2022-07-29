import { d20Formula } from "../utils.js";

/**
 * @extends {Actor}
 */
export class FSActor extends Actor {
  /** @override */
  static async create(data, options = {}) {
    data.token = data.token || {};
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
    mergeObject(data.token, defaults, { overwrite: false });
    return super.create(data, options);
  }

  _onCreate(data, options, userId) {
    super._onCreate(data, options, userId);
  }

  async abilityCheck(ability) {
    console.log(this);
    const value = this.data.data.abilities[ability];
    const formula = d20Formula(value);
    console.log(formula);
    const roll = new Roll(formula);
    const flavor = `Check ${ability.toUpperCase()}`;
    await roll.toMessage({
      flavor,
      speaker: ChatMessage.getSpeaker({ actor: this }),
    });      
  }

  // rollMorale() {
  //   const moraleRoll = new Roll("2d6");
  //   moraleRoll.evaluate({ async: false });
  //   let key = "";
  //   if (moraleRoll.total > actor.data.data.morale) {
  //     const resultRoll = new Roll("1d6");
  //     resultRoll.evaluate({ async: false });
  //     if (resultRoll.total <= 3) {
  //       key = "CY.MoraleFlees";
  //     } else {
  //       key = "CY.MoraleSurrenders";
  //     }
  //   } else {
  //     key = "CY.MoraleStandsStrong";
  //   }
  //   const moraleText = `${actor.name} ${game.i18n.localize(key)}.`;
  //   await moraleRoll.toMessage({
  //     flavor: moraleText,
  //     speaker: ChatMessage.getSpeaker({ actor }),
  //   });  
  // }

}


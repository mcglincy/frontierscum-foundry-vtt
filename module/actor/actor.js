
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
}

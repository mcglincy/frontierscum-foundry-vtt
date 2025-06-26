/**
 * Frontier module.
 */

import { FSActor } from "./actor/actor.js";
import { FSCharacterSheet } from "./actor/sheet/character-sheet.js";
import { FSHorseSheet } from "./actor/sheet/horse-sheet.js";
import { FSNpcSheet } from "./actor/sheet/npc-sheet.js";
import { FS } from "./config.js";
import { FSItem } from "./item/item.js";
import { FSItemSheet } from "./item/sheet/item-sheet.js";
import { configureHandlebars } from "./handlebars.js";

/**
 * Init hook.
 */
Hooks.once("init", async function () {
  console.log(`Initializing Frontier Scum System`);
  game.frontierscum = {
    config: FS,
    FSActor,
    FSItem,
  };
  CONFIG.Actor.documentClass = FSActor;
  CONFIG.Item.documentClass = FSItem;

  CONFIG.FS = FS;
  foundry.documents.collections.Actors.unregisterSheet(
    "core",
    foundry.appv1.sheets.ActorSheet,
  );
  foundry.documents.collections.Actors.registerSheet(
    "frontierscum",
    FSCharacterSheet,
    {
      types: ["character"],
      makeDefault: true,
      label: "FS.SheetClassCharacter",
    },
  );
  foundry.documents.collections.Actors.registerSheet(
    "frontierscum",
    FSHorseSheet,
    {
      types: ["horse"],
      makeDefault: true,
      label: "FS.SheetClassHorse",
    },
  );
  foundry.documents.collections.Actors.registerSheet(
    "frontierscum",
    FSNpcSheet,
    {
      types: ["npc"],
      makeDefault: true,
      label: "FS.SheetClassNpc",
    },
  );
  foundry.documents.collections.Items.unregisterSheet(
    "core",
    foundry.appv1.sheets.ItemSheet,
  );
  foundry.documents.collections.Items.registerSheet(
    "frontierscum",
    FSItemSheet,
    {
      types: ["item"],
      makeDefault: true,
      label: "FS.SheetClassItem",
    },
  );
  configureHandlebars();
});

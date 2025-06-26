/**
 * @extends {ItemSheet}
 */
export class FSItemSheet extends foundry.appv1.sheets.ItemSheet {
  /** @override */
  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, {
      classes: ["frontierscum", "sheet", "item"],
      template: "systems/frontierscum/templates/item/item-sheet.html",
      width: 705,
      height: 235,
    });
  }
}

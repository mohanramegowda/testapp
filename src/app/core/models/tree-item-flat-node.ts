import { SectionDialogData } from "./section-dialog-data";

/** Flat tree item node with expandable and level information */
export class TreeItemFlatNode extends SectionDialogData {
    level: number;
    expandable: boolean;
  }
import { SectionDialogData } from "./section-dialog-data";
import { IProduct } from "./product";

/** Flat tree item node with expandable and level information */
export class TreeItemFlatNode extends SectionDialogData {
  id: number;
  level: number;
  expandable: boolean;
  products: IProduct[];
  parentId: number;
}
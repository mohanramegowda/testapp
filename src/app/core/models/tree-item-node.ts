import { SectionDialogData } from "./section-dialog-data";
import { IProduct } from "./product";

/**
 * Node for tree item
 */
export class TreeItemNode extends SectionDialogData {
    children: TreeItemNode[];
    products: IProduct[];
  }
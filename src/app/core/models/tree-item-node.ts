import { SectionDialogData } from "./section-dialog-data";
import { IProduct } from "./product";

/**
 * Node for tree item
 */
export class TreeItemNode extends SectionDialogData {
  constructor(
    name?: string,
    status?: string,
    categoryType?: string,
    description?: string,
    keywords?: string[],
    public children?: TreeItemNode[],
    public parentId?: number,
    public id?: number,
    public templateId?: number,
    public products?: IProduct[],
    isFilter?: boolean,
    isEdit?: boolean,
    dialogTitle?: string,
    isReadonly?: boolean
  ) {
    super(name, status, categoryType, description, keywords, isFilter, isEdit, dialogTitle,
      isReadonly);
  }



}
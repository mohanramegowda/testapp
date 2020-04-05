export class SectionDialogData {
  constructor(
    public name?: string,
    public status?: string,
    public categoryType?: string,
    public description?: string,
    public keywords?: string[],
    public isFilter?: boolean,
    public isEdit?: boolean,
    public dialogTitle?: string,
    public isReadonly?: boolean
  ) { }
}
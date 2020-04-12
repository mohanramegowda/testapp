export interface IProduct{
    name: string;
    status: string;
    unit: string;
    unitPrice: number;
    color: string;
    modelName: string;
    brand: string;
    addedDate: Date;
    image: any;     // todo image uploader
    categoryId: string;    
    description: string;
    keywords: string[];
    isFilter: boolean;
    isEdit: boolean;
    dialogTitle: string;
    isReadonly: boolean;
}
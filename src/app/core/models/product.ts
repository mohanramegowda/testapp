export interface IProduct{
    id: number;
    categoryId: number;
    name: string;
    status: string;
    unit: string;
    unitPrice: number;
    color: string;
    modelName: string;
    brand: string;
    addedDate: Date;
    image: any;     // todo image uploader  
    description: string;
    keywords: string[];
    isFilter: boolean;
    isEdit: boolean;
    dialogTitle: string;
    isReadonly: boolean;
    images: any[];
}

export interface IProducts {
    products: IProduct[];
    loading: boolean;
    message: string;
}
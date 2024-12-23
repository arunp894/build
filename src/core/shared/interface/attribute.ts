export interface AttributeCreateModel{
    id : number | null;
    name: string;
    field_type: string;
    values : Array<string>
}
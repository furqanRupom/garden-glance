export interface IFlowers {
  _id?:string;
  name:string;
  user:string;
  price:number;
  quantity:number;
  bloomDate:string;
  type:string;
  color:string;
  fragrance:string;
  size:string;
}

export interface ISeller {
  id: string;
  buyerName: string;
  saleDate: Date;
  quantity: number;
}
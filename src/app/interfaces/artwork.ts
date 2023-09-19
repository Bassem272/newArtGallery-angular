export interface Artwork {
// editing: any;
// we want the id to be input or not to be input in the createion of the artwork

  id:number ;
  name:string;
  description:string;
  price:number;
  stock:number;
  image:string;
  category_id?:number;
  // status:string;


}

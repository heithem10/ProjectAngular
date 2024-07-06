
export interface Review {
  _id?: string;
  rating: number;
  title: string;
  comment: string;
  user: string;
  product: string;
  createdAt?: Date;
  updatedAt?: Date;
}

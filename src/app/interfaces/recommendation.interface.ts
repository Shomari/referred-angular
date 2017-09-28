export interface Recommendation {
  id: number;
  text: string;
  user_name: string;
  zipcode: string;
  business_name: string;
  image_location: string;
  category: string;
  created_at: Date;
  updated_at: Date;
}

export interface Referral {
  id: number;
  referrer_name: string;
  referrer_image: string;
  referred_name: string;
  referred_image: string;
  business_name: string;
  business_zipcode: string;
  created_at: Date;
  updated_at: Date;
}

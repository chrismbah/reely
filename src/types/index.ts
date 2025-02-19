export interface ProductTag {
  id: number;
  x: number;
  y: number;
  product: {
    name: string;
    price: string;
    image: string;
    url: string;
  };
}

export interface ReelData {
  id: number;
  videoUrl: string;
  user: {
    name: string;
    avatar: string;
  };
  description: string;
  likes: number;
  comments: number;
  productTags: ProductTag[];
}


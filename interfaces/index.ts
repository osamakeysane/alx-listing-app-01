// // Card component props
// export interface CardProps {
//   title: string;
//   image: string;
//   description: string;
// }

// // Button component props
// export interface ButtonProps {
//   label: string;
//   onClick: () => void;
// }// interfaces/index.ts
// export interface PropertyProps {
//   name: string;
//   address: { state: string; city: string; country: string };
//   rating: number;
//   category: string[];
//   price: number;
//   offers: { bed: string; shower: string; occupants: string };
//   image: string;
//   discount: string; // percentage string or empty
// }
export interface ReviewProps {
  name: string;
  avatar: string;
  rating: number;
  comment: string;
}

export interface PropertyProps {
  name: string;
  address: { state: string; city: string; country: string };
  rating: number;
  category: string[];
  price: number;
  offers: { bed: string; shower: string; occupants: string };
  image: string;
  discount: string; // percentage string or empty
  reviews?: ReviewProps[]; // ✅ optional reviews array
}

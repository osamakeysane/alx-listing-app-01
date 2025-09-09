// Card component props
export interface CardProps {
  title: string;
  image: string;
  description: string;
}

// Button component props
export interface ButtonProps {
  label: string;
  onClick: () => void;
}

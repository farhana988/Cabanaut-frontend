export type Plan = {
  name: string;
  description: string;
  price: number;
  features: string[];
  highlighted?: boolean;
};

export type ExclusivePlanCardProps = {
  plan: Plan;
};

export interface VilnyyBank {
  vilnyy: Vilnyy;
  vilnyyId: number;
  goal: number;
  amount: number;
}

export interface Vilnyy {
  id: number;
  name: string;
  internalId: string;
  address: string;
  bankId: string;
  createdAt: string;
}

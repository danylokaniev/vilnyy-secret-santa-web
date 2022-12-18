export interface VilnyyBank {
  id: number;
  vilnyy: Vilnyy;
  goal: number;
  amount: number;
  createdAt: string;
}

export interface Vilnyy {
  id: number;
  name: string;
  internalId: string;
  address: string;
  bankId: string;
  createdAt: string;
}

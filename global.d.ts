interface User {
  email: string;
  password?: string;
  username: string;
}

interface Note {
  _id?: string;
  score?: number;
  name: string;
  comment: string;
  date: string;
  fragrance: number;
  flavor: number;
  aftertaste: number;
  acidity: number;
  body: number;
  uniformity: {
    1: boolean;
    2: boolean;
    3: boolean;
    4: boolean;
    5: boolean;
  };
  cleanCup: {
    1: boolean;
    2: boolean;
    3: boolean;
    4: boolean;
    5: boolean;
  };
  sweetness: {
    1: boolean;
    2: boolean;
    3: boolean;
    4: boolean;
    5: boolean;
  };

  balance: number;
  overall: number;
  taint: number;
  fault: number;
  score: number;
}

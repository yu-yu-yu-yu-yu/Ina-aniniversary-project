export interface CreditPerson {
  name: string;
  url?: string;
}

export interface CreditEntry {
  title: string;
  people: CreditPerson[];
  showTakoCount?: boolean;
}

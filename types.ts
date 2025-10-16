
export interface NavItem {
  label: string;
  href: string;
  dropdown?: NavItem[];
}

export interface NewsItem {
  date: string;
  day: string;
  month: string;
  title: string;
  description: string;
}

export interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface Faculty {
  name: string;
  imageUrl: string;
}

export interface Stat {
  value: number;
  label: string;
}

export interface College {
    name: string;
    location: string;
}

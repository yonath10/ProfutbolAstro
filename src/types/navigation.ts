export interface NavigationItem {
  href: string;
  label: string;
  current?: boolean;
}

export interface Match {
  id: string;
  date: string;
  time: string;
  homeTeam: string;
  awayTeam: string;
  location: string;
  result?: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image?: string;
}
export interface JwtPayloadWithID extends JwtPayload {
  id: number;
}
export interface Contributor {
  login: string;
  avatar_url: string;
  contributions: string;
  html_url: string;
}

export interface Project {
  name: string;
  description: string;
  github_repo: string;
  github_username: string;
  image: string;
}

export interface Quests {
  name: string;
  description: string;
  github_repo: string;
  github_username: string;
  image?: string;
}

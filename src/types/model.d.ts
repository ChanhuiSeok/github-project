interface Users {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  name: string;
  company: string;
  blog: string;
  location: string;
  email: string;
  bio: string;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  type: string;
}

interface ErrorState {
  documentation_url: string;
  message: string;
}

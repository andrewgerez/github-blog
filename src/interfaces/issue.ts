export interface Issue {
  active_lock_reason: string;
  assignee: string;
  assignees: [];
  author_association: string;
  body: string;
  closed_at: string;
  comments: number;
  comments_url: string;
  created_at: string;
  events_url: string;
  html_url: string;
  id: number;
  labels: [];
  labels_url: string;
  locked: boolean;
  node_id: string;
  number: number;
  performed_via_github_app: null;
  repository_url: string;
  state: string;
  timeline_url: string;
  title: string;
  updated_at: string;
  url: string;
  user: object;
}
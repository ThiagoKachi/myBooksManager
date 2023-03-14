export type BookStatus = 'finished' | 'in_progress' | 'my_list' | string;

export interface BookProps {
  id: string;
  author: string;
  gender: string;
  title: string;
  pages: string;
  summary: string;
  year: string;
  status: BookStatus;
  image?: string;
}

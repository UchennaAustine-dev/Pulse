export interface Author {
  id: string;
  name: string;
  avatar: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string;
  date: string;
  category: string;
  tags: string[];
  author: Author;
  views?: number;
  gallery?: GalleryImage[];
}

export interface Tag {
  id: string;
  name: string;
  count: number;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
}

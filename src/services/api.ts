import { useQuery } from '@tanstack/react-query';

export interface Player {
  id: number;
  name: string;
  position: string;
  bio: string;
  photoUrl: string;
}

export interface NewsArticle {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  imageUrl: string;
  slug: string;
  category: string;
}

export interface Product {
  id: number;
  name: string;
  price: string;
  description: string;
  imageUrl: string;
  category: string;
}

export interface Project {
  id: number;
  name: string;
  status: 'Ongoing' | 'Completed';
  description: string;
  imageUrl: string;
  slug: string;
}

const WORDPRESS_API_URL = import.meta.env.VITE_WORDPRESS_API_URL;
const WORDPRESS_CONSUMER_KEY = import.meta.env.VITE_WORDPRESS_CONSUMER_KEY;
const WORDPRESS_CONSUMER_SECRET = import.meta.env.VITE_WORDPRESS_CONSUMER_SECRET;

async function fetchPlayers(): Promise<Player[]> {
  try {
    const response = await fetch(`${WORDPRESS_API_URL}/wp-json/wp/v2/players`);
    const data = await response.json();
    
    return data.map((player: any) => ({
      id: player.id,
      name: player.title.rendered,
      position: player.acf.position,
      bio: player.acf.bio,
      photoUrl: player.acf.photo?.url || 'https://images.pexels.com/photos/3765114/pexels-photo-3765114.jpeg',
    }));
  } catch (error) {
    console.error('Error fetching players:', error);
    return [];
  }
}

async function fetchNews(): Promise<NewsArticle[]> {
  try {
    const response = await fetch(`${WORDPRESS_API_URL}/wp-json/wp/v2/posts`);
    const data = await response.json();
    
    return data.map((post: any) => ({
      id: post.id,
      title: post.title.rendered,
      excerpt: post.excerpt.rendered,
      content: post.content.rendered,
      date: new Date(post.date).toLocaleDateString(),
      imageUrl: post._embedded?.['wp:featuredmedia']?.[0]?.source_url || 'https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg',
      slug: post.slug,
      category: post._embedded?.['wp:term']?.[0]?.[0]?.name || 'News',
    }));
  } catch (error) {
    console.error('Error fetching news:', error);
    return [];
  }
}

async function fetchProducts(): Promise<Product[]> {
  try {
    const response = await fetch(`${WORDPRESS_API_URL}/wp-json/wc/v3/products`, {
      headers: {
        'Authorization': 'Basic ' + btoa(`${WORDPRESS_CONSUMER_KEY}:${WORDPRESS_CONSUMER_SECRET}`),
      },
    });
    const data = await response.json();
    
    return data.map((product: any) => ({
      id: product.id,
      name: product.name,
      price: `UGX ${product.price}`,
      description: product.short_description,
      imageUrl: product.images[0]?.src || 'https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg',
      category: product.categories[0]?.name || 'General',
    }));
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
}

async function fetchProjects(): Promise<Project[]> {
  try {
    const response = await fetch(`${WORDPRESS_API_URL}/wp-json/wp/v2/projects`);
    const data = await response.json();
    
    return data.map((project: any) => ({
      id: project.id,
      name: project.title.rendered,
      status: project.acf.status,
      description: project.acf.description,
      imageUrl: project.acf.image?.url || 'https://images.pexels.com/photos/3148452/pexels-photo-3148452.jpeg',
      slug: project.slug,
    }));
  } catch (error) {
    console.error('Error fetching projects:', error);
    return [];
  }
}

// React Query hooks
export function usePlayers() {
  return useQuery({
    queryKey: ['players'],
    queryFn: fetchPlayers,
  });
}

export function useNews() {
  return useQuery({
    queryKey: ['news'],
    queryFn: fetchNews,
  });
}

export function useProducts() {
  return useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts,
  });
}

export function useProjects() {
  return useQuery({
    queryKey: ['projects'],
    queryFn: fetchProjects,
  });
}
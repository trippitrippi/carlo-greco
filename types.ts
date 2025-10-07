
export interface Artist {
  id: number;
  name: string;
  bio: string;
  artworkUrl: string;
  artistWebsite?: string;
}

export interface ArtGallery {
  id: number;
  name: string;
  location: string;
  country: string;
  description: string;
  website: string;
  imageUrl: string;
  artists: Artist[];
}
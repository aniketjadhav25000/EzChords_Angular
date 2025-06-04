export interface Song {
  id: string;
  title: string;
  movie?: string;      // Optional: some songs use 'artist' instead
  artist?: string;     // Optional: used when movie is not available
  chords: string;
  capo: string;
  strumming: string;
  tips: string;
  imageUrl: string;
  lyrics: string;
}

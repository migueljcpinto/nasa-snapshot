export interface ApodData {
  title: string;
  url: string;
  explanation: string;
  date: string;
  media_type: string;
  copyright: string;
}

export interface DailyPhotoProps {
  title: string;
  url: string;
  explanation: string;
  date: string;
  type: string;
  author: string;
}

export interface PhotoData {
  title: string;
  url: string;
  date: string;
  copyright: string;
  media_type: string;
}

export interface ParallaxGalleryProps {
  images: PhotoData[];
  fetchMoreData: () => void;
  loading: boolean;
}

export interface PhotoCardProps {
  imageUrl: string;
  date: string;
  title: string;
  author: string;
}

export interface PhotoDatePickerProps {
  date: Date | null;
  setDate: (date: Date | null) => void;
}

export interface SearchBarProps {
  onSearch: (date: string) => void;
}

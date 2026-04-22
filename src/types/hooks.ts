import { Tags } from "./timeline";

export interface UseFetchOptions extends RequestInit {}

export interface UseFetchResult<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
  refetch: () => void;
}

export interface PaginationState {
  page: number;
  hasMore: boolean;
  items: unknown[];
}

export interface SearchFilterState {
  searchString: string;
  selectedTags: Tags;
  selectedTitleTag: string;
}

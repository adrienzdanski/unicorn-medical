export interface ISearchResult {
  has_more: boolean;
  items: ISearchResultItem[];
  quota_max: number;
  quota_remaining: number;
}

export interface ISearchResultItem  {
  answer_count: number;
  content_license: string;
  creation_date: number;
  is_answered: boolean;
  last_activity_date: number;
  last_edit_date: number;
  link: string;
  owner: IOwner;
  question_id: number;
  score: number;
  tags: Array<string>;
  title: string;
  view_count: number;
  closed_date: number;
  closed_reason: string;
}

export interface IOwner {
  accept_rate: number;
  display_name: string;
  link: string;
  profile_image: string;
  reputation: number;
  user_id: number;
  user_type: string;
}

export enum OrderEnum {
  ASC = 'asc',
  DESC = 'desc'
}

export interface ISearchQueryParams {
  searchTerm: string;
  pageSize?: number;
  order?: OrderEnum;
  sort?: string;
  site?: string;
}

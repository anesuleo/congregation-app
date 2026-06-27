export type UserRole = 'publisher' | 'elder' | 'ministerial_servant' | 'delegate';

export interface Congregation {
  id: string;
  name: string;
  code: string;
  city: string;
  country: string;
  created_at: string;
}

export interface Publisher {
  id: string;
  congregation_id: string;
  full_name: string;
  email: string;
  role: UserRole;
  is_active: boolean;
  expo_push_token?: string;
  created_at: string;
}

export type AssignmentType =
  | 'clm_treasures' | 'clm_apply' | 'clm_living' | 'clm_chairman'
  | 'clm_prayer' | 'clm_reading' | 'weekend_chairman'
  | 'weekend_wt_reader' | 'weekend_hospitality'
  | 'public_talk_local' | 'public_talk_away';

export interface Assignment {
  id: string;
  congregation_id: string;
  publisher_id: string;
  type: AssignmentType;
  part: string;
  meeting_date: string;
  assistant_id?: string;
  created_at: string;
}

export interface FieldServiceReport {
  id: string;
  congregation_id: string;
  publisher_id: string;
  month: number;
  year: number;
  hours?: number;
  placements?: number;
  videos?: number;
  return_visits?: number;
  bible_studies?: number;
  submitted_at: string;
}

export interface Territory {
  id: string;
  congregation_id: string;
  name: string;
  code: string;
  area: string;
  notes?: string;
  boundary_coordinates: [number, number][];
  assigned_to?: string;
  date_assigned?: string;
  date_due?: string;
  returned_at?: string;
}

export type DutyType =
  | 'attendant' | 'sound' | 'video' | 'platform'
  | 'microphones' | 'zoom_host' | 'cleaning'
  | 'lawn_garden' | 'hospitality';

export interface Duty {
  id: string;
  congregation_id: string;
  publisher_id: string;
  type: DutyType;
  date: string;
}

export interface CongregationEvent {
  id: string;
  congregation_id: string;
  title: string;
  description?: string;
  event_date: string;
  type: string;
}

export interface Announcement {
  id: string;
  congregation_id: string;
  title: string;
  body: string;
  document_url?: string;
  created_at: string;
}

export interface AwayPeriod {
  id: string;
  congregation_id: string;
  publisher_id: string;
  from_date: string;
  to_date: string;
  notes?: string;
}

export interface LiteratureRequest {
  id: string;
  congregation_id: string;
  publisher_id: string;
  item: string;
  quantity: number;
  fulfilled: boolean;
  created_at: string;
}

export interface Delegate {
  id: string;
  congregation_id: string;
  publisher_id: string;
  delegate_publisher_id: string;
  created_at: string;
}

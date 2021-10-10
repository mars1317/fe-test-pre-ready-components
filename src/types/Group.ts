export interface Group {
  id: string;
  name: string;
  source: string;
  contactInfo: ContactInfo;
  notes?: string;
  domain: string;
  creationDateTime: string;
  lastUpdateTime: string;
}

export interface ContactInfo {
  firstName?: string;
  lastName?: string;
  primaryPhone?: string;
  primaryEmail?: string;
}

export interface GroupDTO {
  id: string;
  name: string;
  creationDateTime: string;
  lastUpdateTime: string;
}

export interface GroupPageDTO {
  result: GroupDTO[];
  totalElements: number;
  currentPage: number;
  totalPages: number;
}

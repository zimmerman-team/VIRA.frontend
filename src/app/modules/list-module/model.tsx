export interface DataModel {
  _id: string;
  organisation_name: string;
  org_type?: OrgType;
  street: string;
  house_number: string;
  additional_house_number: string;
  postcode: string;
  place: string;
  country: string;
  telephone: string;
  email: string;
  website: string;
  __v: number;
}

export interface OrgType {
  _id: string;
  name: string;
}

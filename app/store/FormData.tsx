export interface BaseFormData {
  email: string;
  password: string;
}

export interface FullFormData extends BaseFormData {
  name: string;
  username: string;
}

export type FormData = BaseFormData | FullFormData;
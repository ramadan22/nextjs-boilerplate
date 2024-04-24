export type ProfileTypes = {
  id_user: string | undefined;
  first_name: string | undefined;
  last_name: string | undefined;
  gender: 'Male' | 'Female' | undefined;
  birth_date: string | undefined;
  email: string | undefined;
  phone: string | undefined;
  created_at: string | undefined;
  updated_at: string | null | undefined;
}

export type ResponseUsersProfileTypes = ProfileTypes

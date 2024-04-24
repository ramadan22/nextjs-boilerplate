import { DefaultSession, DefaultUser } from 'next-auth';
import { DefaultJWT } from 'next-auth/jwt';

import { ProfileTypes } from '@/services/users/types';

type Profile = {
  token: string | undefined
} & CamelCase<ProfileTypes>

declare module 'next-auth' {
  interface TokenData extends DefaultJWT {
    profile: Profile
  }

  interface UserData extends DefaultUser {
    profile: Profile
  }

  // interface User extends DefaultUser {
  //   profile: {
  //     token: string
  //   }
  // }

  interface Session {
    user: Profile & DefaultSession['user']
  }
}

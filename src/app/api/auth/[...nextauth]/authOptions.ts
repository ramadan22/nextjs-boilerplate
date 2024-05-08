/* eslint-disable camelcase */
/* eslint-disable no-param-reassign */

import { NextAuthOptions, TokenData, UserData } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

import { ErrorConvertToMessage } from '@/helpers/handleResponseError';
import AuthenticationService from '@/services/authentication';
import UserService from '@/services/users';

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: 'Sign in',
      credentials: {
        email: { label: 'email', type: 'text' },
        password: { label: 'password', type: 'password' },
      },
      async authorize(credentials): Promise<UserData | null> {
        try {
          const { getProfileByToken } = UserService();
          const { signIn } = AuthenticationService();

          const resultAuth = await signIn({
            email: credentials?.email || '',
            password: credentials?.password || '',
          });

          if (resultAuth?.status !== 200) {
            throw new Error(resultAuth?.message || 'Something wrong!');
          }

          const getProfile = await getProfileByToken(resultAuth.data?.token || '');

          const {
            id_user, first_name, last_name, birth_date, email, gender, phone
          } = getProfile.data || {};

          return {
            id: id_user || '',
            name: `${first_name} ${last_name}`,
            email,
            profile: {
              gender,
              phone,
              idUser: id_user,
              firstName: first_name,
              lastName: last_name,
              birthDate: birth_date,
              token: resultAuth.data?.token,
            }
          };
        } catch (error) {
          throw new Error(ErrorConvertToMessage(error));
        }
      },
    }),
  ],
  pages: {
    signIn: '/',
  },
  callbacks: {
    async signIn() {
      return true;
    },
    async jwt({ token, user }) {
      if (user) {
        return {
          ...token,
          profile: {
            ...user
          },
        };
      }

      return token;
    },
    async session({ session, token }) {
      const tokenData = token as TokenData;

      session.user = {
        ...session.user,
        ...tokenData.profile
      };

      return session;
    },
    async redirect({ url, baseUrl }: { url: string, baseUrl: string }) {
      return url.startsWith(baseUrl)
        ? Promise.resolve(url)
        : Promise.resolve(baseUrl);
    },
  },
};

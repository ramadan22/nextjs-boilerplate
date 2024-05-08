'use client';

import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';

import Button from '@/components/button';
import Input from '@/components/input';
import { handleLogin } from './hooks/postData';

const LoginFeature = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    const from = searchParams.get('from');
    const result = await handleLogin({
      event,
      email,
      password,
    });

    if (result?.status === 200) router.push(from ?? '/dashboard');
    // eslint-disable-next-line no-alert
    if (result?.status !== 200) alert(`${result?.error}`);
  };

  return (
    <form
      className="bg-blue-400 h-screen w-screen"
      onSubmit={(event) => handleSubmit(event)}
    >
      <div className="flex flex-col items-center flex-1 h-full justify-center px-4 sm:px-0">
        <div className="flex rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/2 bg-white sm:mx-0 h-[500px]">
          <div className="flex flex-col w-full md:w-1/2 p-4">
            <div className="flex flex-col flex-1 justify-center mb-8">
              <h1 className="text-4xl text-center font-thin">Welcome Back</h1>
              <div className="w-full mt-4">
                <div className="flex flex-col mt-4">
                  <Input
                    type="text"
                    placeholder="Email"
                    onChange={(event) => setEmail(event?.target.value)}
                    className="flex-grow h-8 px-2 border rounded border-grey-400"
                  />
                </div>
                <div className="flex flex-col mt-4">
                  <Input
                    type="password"
                    placeholder="Password"
                    onChange={(event) => setPassword(event?.target.value)}
                    className="flex-grow h-8 px-2 border rounded border-grey-400"
                  />
                </div>
                {/* <div className="flex items-center mt-4">
                    <input type="checkbox" name="remember"
                      id="remember" className="mr-2">
                      <label for="remember" className="text-sm text-grey-dark">Remember Me</label>
                  </div> */}
                <div className="flex flex-col mt-8">
                  <Button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white text-sm font-semibold py-2 px-4 rounded">
                    Login
                  </Button>
                </div>
                {/* <div className="text-center mt-4">
                  <a className="no-underline hover:underline text-blue-dark text-xs" href="#">
                    Forgot Your Password?
                  </a>
                </div> */}
              </div>
            </div>
          </div>
          <div className="hidden md:block md:w-1/2 rounded-r-lg bg-cover bg-center">
            <Image
              id="image-detail"
              width={0}
              height={0}
              quality={10}
              priority
              className="w-auto h-full mx-auto rounded object-cover"
              src="https://images.unsplash.com/photo-1515965885361-f1e0095517ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3300&q=80"
              loader={() => 'https://images.unsplash.com/photo-1515965885361-f1e0095517ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3300&q=80'}
              alt="side-photo"
            />
          </div>
        </div>
      </div>
    </form>
  );
};

export default LoginFeature;

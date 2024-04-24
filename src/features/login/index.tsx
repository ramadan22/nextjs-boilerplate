'use client';

import { useState } from 'react';

import Button from '@/components/button';
import Input from '@/components/input';
import Label from '@/components/label';
import { handleLogin } from './hooks/postData';

const LoginFeature = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  return (
    <form
      onSubmit={(event) => handleLogin({
        event,
        email,
        password,
      })}
      className="flex flex-col gap-y-5 w-[300px] items-center mx-auto my-10"
    >
      <Label>Login</Label>
      <Input
        value={email}
        placeholder="email"
        className="border w-full"
        onChange={(event) => setEmail(event?.target.value)}
      />
      <Input
        type="password"
        value={password}
        placeholder="password"
        className="border w-full"
        onChange={(event) => setPassword(event?.target.value)}
      />
      <Button className="w-full" type="submit">Submit</Button>
    </form>
  );
};

export default LoginFeature;

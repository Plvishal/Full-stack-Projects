'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import GlobalApi from '@/app/_utils/GlobalApi';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

function CreateAccount() {
  const [username, setUserName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const router = useRouter();
  useEffect(() => {
    const jwt = sessionStorage.getItem('jwt');
    if (jwt) {
      toast('Already account created');
      router.push('/');
    }
  }, []);
  const onCreateAccount = () => {
    GlobalApi.registerUser(username, email, password).then(
      (resp) => {
        sessionStorage.setItem('user', JSON.stringify(resp.data.user));
        sessionStorage.setItem('jwt', resp.data.jwt);
        toast('Account created successfully');
        router.push('/');
      },
      (e) => {
        toast('Error while creating account');
      }
    );
  };
  return (
    <div className="flex flex-baseline justify-center my-10 ">
      <div className="flex flex-col items-center justify-center p-10 bg-slate-100 border border-green-900 rounded-xl">
        <Image src={'/logo.png'} alt="logo" width={200} height={100} />
        <h2 className="font-bold text-3xl">Create an Account</h2>
        <h2 className="text-gray-500 text-justify">
          Enter your Email and Password to Create an Account
        </h2>
        <div className="w-full flex  flex-col gap-5 mt-7">
          <Input
            placeholder="Username"
            onChange={(e) => setUserName(e.target.value)}
          />
          <Input
            placeholder="name@example.com"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            className="bg-green-600 hover:bg-green-500"
            onClick={() => onCreateAccount()}
            disabled={!(username || email || password)}
          >
            Create an Account
          </Button>
          <p>
            Already have a account &nbsp;
            <Link href={'/sign-in'} className="text-green-600 font-bold ">
              Click here to Sign In{' '}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
export default CreateAccount;

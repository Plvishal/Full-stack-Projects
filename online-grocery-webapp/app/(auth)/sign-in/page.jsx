'use client';
import GlobalApi from '@/app/_utils/GlobalApi';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';

function SignIn() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const router = useRouter();
  useEffect(() => {
    const jwt = sessionStorage.getItem('jwt');
    if (jwt) {
      toast('You are already login');
      router.push('/');
    }
  }, []);
  const onSignIn = () => {
    GlobalApi.signIn(email, password).then(
      (resp) => {
        sessionStorage.setItem('user', JSON.stringify(resp.data.user));
        sessionStorage.setItem('jwt', resp.data.jwt);
        toast('Login successfully done');
        router.push('/');
      },
      (e) => {
        console.log(e);
        toast('Error while login ');
      }
    );
  };
  return (
    <div className="flex flex-baseline justify-center my-10 ">
      <div className="flex flex-col items-center justify-center p-10 bg-slate-100 border border-green-900 rounded-xl">
        <Image src={'/logo.png'} alt="logo" width={200} height={100} />
        <h2 className="font-bold text-3xl">Sign In to Account</h2>
        <h2 className="text-gray-500 text-justify">
          Enter your Email and Password for Sign In
        </h2>
        <div className="w-full flex  flex-col gap-5 mt-7">
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
            onClick={() => onSignIn()}
            disabled={!(email || password)}
          >
            Sign In
          </Button>
          <p>
            Don't have a account &nbsp;
            <Link
              href={'/create-account'}
              className="text-green-600 font-bold "
            >
              Click here to create new account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignIn;

import { Envelope, Lock } from 'phosphor-react';
import { FormEvent, useState } from 'react';
import axios from 'axios';

import { Button } from '../components/Button';
import { Checkbox } from '../components/Checkbox';
import { Heading } from '../components/Heading';
import { Text } from '../components/Text';
import { TextInput } from '../components/TextInput';

import { ReactLogo } from '../ReactLogo';

export function SignIn() {
  const [isUserSignIn, setIsUserSignIn] = useState(false);

  async function handleSignIn(event: FormEvent) {
    event.preventDefault();

    await axios.post('/sessions', {
      email: 'email@example.com',
      password: '12345678',
    });

    setIsUserSignIn(true);
  }

  return (
    
    <div className='w-screen h-screen bg-gray-900 flex flex-col items-center justify-center text-gray-100'>
      <header className='flex flex-col items-center'>
        <ReactLogo />

        <Heading size='lg' className='mt-4'>
          Ignite Lab
        </Heading>

        <Text className='text-gray-400 mt-1'>
          Faça login e comece a usar
        </Text>
      </header>

      <form
        onSubmit={handleSignIn}
        className='flex flex-col items-stretch gap-4 w-full max-w-sm mt-10'
      >
        {isUserSignIn && <Text>Login realizado</Text>}
        <label htmlFor="email" className='flex flex-col gap-3'>
          <Text className='font-semibold'>
            Endereço de e-mail
          </Text>
        
          <TextInput.Root>
            <TextInput.Icon>
              <Envelope />
            </TextInput.Icon>
          
            <TextInput.Input
            id='email'
            placeholder='Digite seu email'
            type='email'
            />
          </TextInput.Root>
        </label>
      
        <label htmlFor="password" className='flex flex-col gap-3'>
          <Text className='font-semibold'>
            Sua senha
          </Text>
        
          <TextInput.Root>
            <TextInput.Icon>
             <Lock />
            </TextInput.Icon>
          
            <TextInput.Input
            id='password'
            placeholder='********'
            type='password'
            />
          </TextInput.Root>
        </label>
      
        <label htmlFor="remember" className='flex items-center justify-start gap-2'>
         <Checkbox id='remember'/>
        
          <Text size='sm' className='text-gray-200'>
            Lembrar de mim por 30 dias
          </Text>
        </label>
      
        <Button type='submit' className='mt-4'>
          Entrar na plataforma
        </Button>
      </form>
    
      <footer className='flex flex-col items-center gap-4 mt-8'>
        <Text asChild size='sm'>
          <a href="" className='text-gray-400 underline hover:text-gray-200 transition-colors'>Esqueceu sua senha</a>
        </Text>
        
        <Text asChild size='sm'>
          <a href="" className='text-gray-400 underline hover:text-gray-200 transition-colors'>Não possui conta? Crie uma agora</a>
        </Text>
      </footer>
    </div>
  );
}
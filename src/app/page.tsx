'use client';
import Button from '@/shared/ui/Button/Button';
import TestEntity from '@/entities/TestEntity/ui/TestEntity';

export default function Home() {
  return (
    <>
      <main>
        <h1>Next.js Project home page</h1>
        <Button href={'/another-page'}>Go to another page</Button>
        <h2 className="text-[10rem] font-bold py-4">TestEntity</h2>
        <TestEntity />
      </main>
    </>
  );
}

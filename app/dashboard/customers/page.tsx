import { getUserData } from '@/app/lib/userData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Customers page',
};

export default async function Page() {
  const currentUser = await getUserData();
  return (
    <div>
      <p>Customers Page</p>

      <div>{currentUser?.name}</div>
      <div>{currentUser?.email}</div>
    </div>
  );
}

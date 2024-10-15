import { auth } from '@/auth';

export async function getUserData() {
  const currentUserData = await auth();

  if (currentUserData) {
    return {
      name: currentUserData.user?.name,
      email: currentUserData.user?.email,
    };
  }
  return null;
}

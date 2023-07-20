import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from 'next/navigation';
import { prisma } from '@/lib/prisma';
import { ProfileForm } from "./ProfileForm";
// import { prisma } from '@/lib/prisma';

export default async function Dashboard() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect('/api/auth/signin');
  }

  // console.log(session?.user?.image!);

  // const currentUserName = session?.user?.name!;
  // const user = await prisma.user.findUnique({
  //   where: {
  //     email: currentUserName,
  //   },
  // });

  return (
    <>
      <h1>Dashboard</h1>
      {/* <ProfileForm user={user} /> */}
    </>
  )
}
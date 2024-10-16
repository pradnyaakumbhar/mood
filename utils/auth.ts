import { auth } from '@clerk/nextjs/server';
import { prisma } from '@/utils/db';

export const getUserByClerkId = async (select = { id: true }) => {
  const { userId } = auth();

  const user = await prisma.user.findUniqueOrThrow({
    where: {
      clerkId: userId,
    },
    select,
  });
  return user;
};

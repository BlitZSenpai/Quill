import { currentUser } from "@clerk/nextjs";
import { db } from "./db";

export const getUser = async () => {
  const clerkUser = await currentUser();

  if (!clerkUser || !clerkUser.username) {
    throw new Error("Unauthorized");
  }

  const user = await db.user.findUnique({
    where: {
      externalUserId: clerkUser.id,
    },
  });

  if (!user) {
    throw new Error("User not found");
  }

  return user;
};

import { getUser } from "./auth-service";
import { db } from "./db";

export const isFollowingUser = async (id: string) => {
  try {
    const currentUser = await getUser();

    const otherUser = await db.user.findUnique({
      where: { id },
    });

    if (!otherUser) {
      throw new Error("User not found");
    }

    if (otherUser.username === currentUser.username) {
      return true;
    }

    const existingFollow = await db.follow.findFirst({
      where: {
        followerId: currentUser.id,
        followingId: otherUser.id,
      },
    });

    return !!existingFollow;
  } catch {
    return false;
  }
};

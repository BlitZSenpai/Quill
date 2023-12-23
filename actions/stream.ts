"use server";

import { getUser } from "@/lib/auth-service";
import { db } from "@/lib/db";
import { Stream } from "@prisma/client";
import { revalidatePath } from "next/cache";

export const updateStream = async (values: Partial<Stream>) => {
  try {
    const currentUser = await getUser();

    const userStream = await db.stream.findUnique({
      where: {
        userId: currentUser.id,
      },
    });

    if (!userStream) {
      throw new Error("Stream not found");
    }

    const validData = {
      name: values.name,
      isChatEnabled: values.isChatEnabled,
      isChatDelayed: values.isChatDelayed,
      isChatFollowersOnly: values.isChatFollowersOnly,
    };

    const stream = await db.stream.update({
      where: {
        id: userStream.id,
      },
      data: {
        ...validData,
      },
    });

    revalidatePath(`/u/${currentUser.username}/chat`);
    revalidatePath(`/u/${currentUser.username}`);
    revalidatePath(`/${currentUser.username}`);

    return stream;
  } catch {
    throw new Error("Internal Error");
  }
};

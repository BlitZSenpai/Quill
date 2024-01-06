"use server";

import { getUser } from "@/lib/auth-service";
import { db } from "@/lib/db";
import { User } from "@prisma/client";
import { revalidatePath } from "next/cache";

export const updateUser = async (values: Partial<User>) => {
  try {
    const currentUser = await getUser();

    const validData = {
      bio: values.bio,
    };

    const user = await db.user.update({
      where: { id: currentUser.id },
      data: { ...validData },
    });

    revalidatePath(`/${currentUser.username}`);
    revalidatePath(`/u/${currentUser.username}`);

    return user;
  } catch {
    throw new Error("Internal Error");
  }
};

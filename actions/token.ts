"use server";

import { getUser } from "@/lib/auth-service";
import { isBlockedByUser } from "@/lib/block-service";
import { getUserById } from "@/lib/user-service";
import { AccessToken } from "livekit-server-sdk";
import { v4 } from "uuid";

export const createViewerToken = async (hostId: string) => {
  let user;

  try {
    user = await getUser();
  } catch {
    const id = v4();
    const username = `guest#${Math.floor(Math.random() * 1000)}`;

    user = { id, username };
  }

  const host = await getUserById(hostId);

  if (!host) {
    throw new Error("User not found");
  }

  const isBlocked = await isBlockedByUser(host.id);

  if (isBlocked) {
    throw new Error("User is blocked");
  }

  const isHost = user.id === host.id;

  const token = new AccessToken(process.env.LIVEKIT_API_KEY, process.env.LIVEKIT_API_SECRET, {
    identity: isHost ? `host-${user.id}` : user.id,
    name: user.username,
  });

  token.addGrant({
    room: host.id,
    roomJoin: true,
    canPublish: false,
    canPublishData: true,
  });

  return await Promise.resolve(token.toJwt());
};

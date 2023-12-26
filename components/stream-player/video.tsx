"use client";

import { useConnectionState, useRemoteParticipant, useTracks } from "@livekit/components-react";
import { Track, ConnectionState } from "livekit-client";

interface VideoProps {
  hostName: string;
  hostId: string;
}

export const Video = ({ hostName, hostId }: VideoProps) => {
  const connectionState = useConnectionState();
  const participant = useRemoteParticipant(hostId);
  const tracks = useTracks([Track.Source.Camera, Track.Source.Microphone]).filter(
    (track) => track.participant.identity === hostId
  );

  console.log({ participant });
  console.log({ connectionState });

  let content;

  if (!participant && connectionState === ConnectionState.Connected) {
    content = <p>Host is offline</p>;
  } else if (!participant || tracks.length === 0) {
    content = <p>Loading...</p>;
  } else {
    content = <p>Live video</p>;
  }

  return <div className="aspect-video border-b group relative">{content}</div>;
};

"use client";

import { useConnectionState, useRemoteParticipant, useTracks } from "@livekit/components-react";
import { Track, ConnectionState } from "livekit-client";
import { OfflineVideo } from "./offline-video";
import { LoadingVideo } from "./loading-video";

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

  let content;

  if (!participant && connectionState === ConnectionState.Connected) {
    content = <OfflineVideo username={hostName} />;
  } else if (!participant || tracks.length === 0) {
    content = <LoadingVideo label={connectionState} />;
  } else {
    content = <p>Live video</p>;
  }

  return <div className="aspect-video border-b group relative">{content}</div>;
};

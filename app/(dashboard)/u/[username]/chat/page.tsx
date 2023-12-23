import { getUser } from "@/lib/auth-service";
import { getStreamByUserId } from "@/lib/stream-service";

const ChatPage = async () => {
  const currentUser = await getUser();
  const stream = await getStreamByUserId(currentUser.id);

  return (
    <div className="p-6">
      <div className="mb-4">
        <h1 className="text-2xl font-bold">Chat settings</h1>
      </div>
    </div>
  );
};

export default ChatPage;

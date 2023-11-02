import ChatHeader from "@/components/chat/chat-header";
import ChatInput from "@/components/chat/chat-input";
import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";
import { redirectToSignIn } from "@clerk/nextjs";
import { redirect } from "next/navigation";

const ChannelPage = async ({
  params,
}: {
  params: { channelId: string; serverId: string };
}) => {
  const profile = await currentProfile();

  if (!profile) {
    return redirectToSignIn();
  }

  const channel = await db.channel.findUnique({
    where: {
      id: params.channelId,
    },
  });

  const member = await db.member.findFirst({
    where: {
      serverId: params.serverId,
      profileId: profile.id,
    },
  });

  if (!channel || !member) {
    redirect("/");
  }

  return (
    <div className="h-full flex flex-col bg-white dark:bg-[#313338]">
      <ChatHeader
        type="channel"
        name={channel.name}
        serverId={channel.serverId}
      />
      <div className="flex-1">futher message</div>
      <ChatInput
        name={channel.name}
        type="channel"
        apiUrl="/api/socket/messages"
        query={{
          channelId: channel.id,
          serverId: channel.serverId,
        }}
      />
    </div>
  );
};

export default ChannelPage;

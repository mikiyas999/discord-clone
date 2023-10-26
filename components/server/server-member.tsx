"use client";

import { Member, MemberRole, Profile, Server } from "@prisma/client";
import { ShieldAlert, ShieldCheck } from "lucide-react";
import { UserAvatar } from "../user-avatar";
import { cn } from "@/lib/utils";
import { useParams, useRouter } from "next/navigation";

interface ServerMemberProps {
  server: Server;
  member: Member & { profile: Profile };
}

const roleIconMap = {
  [MemberRole.GUEST]: null,
  [MemberRole.MODERATOR]: (
    <ShieldCheck className="h-4 w-4 ml-2 text-indigo-500" />
  ),
  [MemberRole.ADMIN]: <ShieldAlert className="h-44 w-4 ml-2 text-rose-500" />,
};

const ServerMember = ({ server, member }: ServerMemberProps) => {
  const params = useParams();
  const router = useRouter();

  const onClick = () => {
    return router.push(
      `/servers/${params?.serverId}/conversations/${member?.id}`
    );
  };
  return (
    <button
      onClick={onClick}
      className={cn(
        "group px-2 py-2 flex items-center gap-x-2 rounded-md w-full hover:bg-zinc-700/10 dark:hover:bg-zinc-700/50 transition mb-1",
        params?.memberId === member?.id && "bg-zinck-700/20 dark:bg-zinc-700"
      )}
    >
      <UserAvatar
        src={member.profile.imageUrl}
        className="h-4 w-4 md:h-8 md:w-8"
      />
      <p
        className={cn(
          "font-semibold text-xs text-zinc-500 group-hover:text-zinc-600 dark:hover:text-zinc-400 dark:group-hover:text-zinc-300 transition  ",
          params?.memberId === member.id &&
            "text-primary dark:text-zinc-200 dark:group-hover:text-white"
        )}
      >
        {member.profile.name}
      </p>
      {roleIconMap[member.role]}
    </button>
  );
};

export default ServerMember;

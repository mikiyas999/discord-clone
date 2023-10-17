import NavigationSidebar from "@/components/navigation/navigation-sidebar";

const MainLayOut = async ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <div className="hidden md:flex w-[72px] h-full z-30 flex-col fixed inset-y-0">
        <NavigationSidebar />
      </div>
      <div className="md:pl-[72px] h-full">{children}</div>
    </div>
  );
};

export default MainLayOut;

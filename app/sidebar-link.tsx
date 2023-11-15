import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SidebarLink = ({
  href,
  children,
  icon,
}: {
  href: string;
  children: React.ReactNode;
  icon: React.ReactNode;
}) => {
  const path = usePathname();

  return (
    <Link
      href={href}
      className={cn(
        "flex items-center gap-2 px-3 text-sm py-2 rounded-lg ",
        path == href
          ? "bg-gray-4 text-gray-12 border border-gray-5 "
          : "text-gray-11"
      )}
    >
      {icon}
      {children}
    </Link>
  );
};

export default SidebarLink;

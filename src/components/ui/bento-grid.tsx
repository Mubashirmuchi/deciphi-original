import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "group/bento h-full   shadow-input row-span-1 flex flex-col justify-between space-y-4 rounded-xl border border-neutral-200 bg-white p-4 transition duration-200 hover:shadow-xl dark:bg-[var(--color-neutral-1)]  dark:shadow-none",
        className
      )}
    >
      {/* { src && <Image
        src="/images/img_image_31.png"
        alt="Deciphi Logo"
        width={100}
        height={100}
        className="h-full w-full"
      />} */}
      <h3 className="text-black">{header}</h3>
      <div className="transition duration-200 group-hover/bento:translate-x-2">
        {icon}
        <div className="mt-2 mb-2 font-sans font-bold  ">{title}</div>
        <div className="font-sans text-xs font-normal text-neutral-600 ">
          {description}
        </div>
      </div>
    </div>
  );
};

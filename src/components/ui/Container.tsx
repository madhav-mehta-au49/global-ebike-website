import { cn } from "@/lib/utils";

type Props = React.HTMLAttributes<HTMLDivElement>;

export function Container({ className, ...props }: Props) {
  return <div className={cn("container-px", className)} {...props} />;
}

export default Container;
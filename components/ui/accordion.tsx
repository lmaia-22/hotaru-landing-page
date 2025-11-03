import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const Accordion = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { type?: "single" | "multiple" }
>(({ className, type = "single", children, ...props }, ref) => {
  const [openItems, setOpenItems] = React.useState<Set<number>>(new Set());

  const childrenArray = React.Children.toArray(children);

  const handleToggle = (index: number) => {
    setOpenItems((prev) => {
      const newSet = new Set(prev);
      if (type === "single") {
        newSet.clear();
        if (!prev.has(index)) {
          newSet.add(index);
        }
      } else {
        if (newSet.has(index)) {
          newSet.delete(index);
        } else {
          newSet.add(index);
        }
      }
      return newSet;
    });
  };

  return (
    <div
      ref={ref}
      className={cn("space-y-2", className)}
      {...props}
      role="region"
      aria-label="FAQ Accordion"
    >
      {childrenArray.map((child, index) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child as React.ReactElement<any>, {
            isOpen: openItems.has(index),
            onToggle: () => handleToggle(index),
            index,
          });
        }
        return child;
      })}
    </div>
  );
});
Accordion.displayName = "Accordion";

const AccordionItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    isOpen?: boolean;
    onToggle?: () => void;
    index?: number;
  }
>(({ className, isOpen, onToggle, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("border-b border-border", className)}
      {...props}
    >
      {children}
    </div>
  );
});
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    isOpen?: boolean;
    onToggle?: () => void;
  }
>(({ className, isOpen, onToggle, children, ...props }, ref) => {
  return (
    <button
      ref={ref}
      type="button"
      className={cn(
        "flex w-full items-center justify-between py-4 text-left font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
        className
      )}
      onClick={onToggle}
      aria-expanded={isOpen}
      {...props}
    >
      {children}
      <ChevronDown
        className={cn(
          "h-4 w-4 shrink-0 transition-transform duration-200",
          isOpen && "rotate-180"
        )}
        aria-hidden="true"
      />
    </button>
  );
});
AccordionTrigger.displayName = "AccordionTrigger";

const AccordionContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { isOpen?: boolean }
>(({ className, isOpen, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "overflow-hidden text-sm transition-all",
        isOpen ? "animate-accordion-down pb-4" : "animate-accordion-up"
      )}
      {...props}
    >
      {isOpen && children}
    </div>
  );
});
AccordionContent.displayName = "AccordionContent";

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };


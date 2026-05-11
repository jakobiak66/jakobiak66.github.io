import { Link } from "react-router-dom";
import { ArrowRight, LucideIcon } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  link: string;
}

const ServiceCard = ({ title, description, icon: Icon, link }: ServiceCardProps) => {
  return (
    <Link to={link} className="group block h-full">
      <Card className="h-full overflow-hidden transition-all duration-500 hover:shadow-blue hover:-translate-y-2 hover:scale-[1.02] border-border/50 hover:border-primary/50 flex flex-col">
        <CardHeader className="relative flex-grow">
          <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-500 group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-glow">
            <Icon className="h-7 w-7 transition-transform duration-500 group-hover:scale-110" />
          </div>
          <CardTitle className="text-xl transition-colors duration-300 group-hover:text-primary">{title}</CardTitle>
          <CardDescription className="text-base transition-colors duration-300">{description}</CardDescription>
        </CardHeader>
        <CardContent className="mt-auto">
          <div className="flex items-center text-sm font-medium text-primary transition-all duration-300 group-hover:gap-3">
            <span>Mehr über {title} erfahren</span>
            <ArrowRight className="ml-1 h-4 w-4 transition-all duration-300 group-hover:translate-x-2 group-hover:scale-125" aria-hidden="true" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ServiceCard;

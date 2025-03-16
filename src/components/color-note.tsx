import { LucideIcon, AlertCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import React from "react";

// Define el tipo para las props del componente ColorNote
type ColorNoteProps = {
  color: "yellow" | "blue" | "green" | "red" | "purple" | "orange"; // Especificamos los colores permitidos
  icon?: LucideIcon;
  title?: string;
  children: React.ReactNode;
};

// Mapeo de colores a clases de Tailwind
const colorClassMap: Record<
  ColorNoteProps["color"],
  { border: string; bg: string; text: string }
> = {
  yellow: {
    border: "border-yellow-500",
    bg: "bg-yellow-50 dark:bg-yellow-900/20 dark:border-yellow-900/30",
    text: "text-yellow-500",
  },
  blue: {
    border: "border-blue-500",
    bg: "bg-blue-50 dark:bg-blue-900/20 dark:border-blue-900/30",
    text: "text-blue-500",
  },
  green: {
    border: "border-green-500",
    bg: "bg-green-50 dark:bg-green-900/20 dark:border-green-900/30",
    text: "text-green-500",
  },
  red: {
    border: "border-red-500",
    bg: "bg-red-50 dark:bg-red-900/20 dark:border-red-900/30",
    text: "text-red-500",
  },
  purple: {
    border: "border-purple-500",
    bg: "bg-purple-50 dark:bg-purple-900/20 dark:border-purple-900/30",
    text: "text-purple-500",
  },
  orange: {
    border: "border-orange-500",
    bg: "bg-orange-50 dark:bg-orange-900/20 dark:border-orange-900/30",
    text: "text-orange-500",
  },
};

// Componente para notas con colores
const ColorNote = ({ color, icon, title, children }: ColorNoteProps) => {
  const Icon = icon || AlertCircle;
  const colorClasses = colorClassMap[color];

  return (
    <Card className={`${colorClasses.border} ${colorClasses.bg}`}>
      <CardContent className="p-3">
        <div className="flex items-start gap-2">
          <Icon
            className={`mt-0.5 h-5 w-5 ${colorClasses.text} flex-shrink-0`}
          />
          <p className="text-sm">
            {title && <strong>{title}: </strong>}
            {children}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ColorNote;

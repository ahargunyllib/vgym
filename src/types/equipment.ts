import type { ThreeElements } from "@react-three/fiber";
import type { JSX } from "react";

export type Category = "Cardio" | "Strength" | "Functional";

export type Difficulty = "Beginner" | "Intermediate" | "Advanced";

export type EquipmentData = {
  id: string;
  name: string;
  exerciseName: string;
  category: Category;
  difficulty: Difficulty;
  musclesTargeted: {
    primary: string[];
    secondary: string[];
  };
  usageInstructions: string[];
  properFormTips: string[];
  commonMistakes: string[];
  safety: string;
  alternatives: string[];
  position: [number, number, number];
  rotation: [number, number, number];
  component: (props: ThreeElements["group"]) => JSX.Element;
};

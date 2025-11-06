import type * as THREE from "three";

export type EquipmentCategory = "cardio" | "strength" | "functional";

export type DifficultyLevel = "beginner" | "intermediate" | "advanced";

export type MuscleGroup =
  | "chest"
  | "back"
  | "shoulders"
  | "biceps"
  | "triceps"
  | "legs"
  | "core"
  | "glutes"
  | "calves"
  | "cardio";

export interface EquipmentInfo {
  id: string;
  name: string;
  category: EquipmentCategory;
  description: string;
  primaryMuscles: MuscleGroup[];
  secondaryMuscles: MuscleGroup[];
  instructions: string[];
  properForm: string[];
  commonMistakes: string[];
  difficulty: DifficultyLevel;
  alternatives: string[];
  safetyWarnings: string[];
  position: [number, number, number];
  rotation?: [number, number, number];
  scale?: [number, number, number];
}

export interface Equipment3D {
  id: string;
  mesh: THREE.Mesh | THREE.Group;
  info: EquipmentInfo;
  highlighted: boolean;
}

export type ViewMode = "gym" | "showcase";

export interface CameraState {
  mode: ViewMode;
  targetEquipment: string | null;
}

import { Barbell } from "../components/equipment/barbell";
import { BenchPress } from "../components/equipment/bench-press";
import { Dumbbell } from "../components/equipment/dumbbell";
import { Kettlebell } from "../components/equipment/kettlebell";
import type { EquipmentData } from "../types/equipment";
import { ROOM_DIMENSIONS } from "./constant";

export const equipmentData: Record<string, EquipmentData> = {
  kettlebell: {
    id: "kettlebell",
    name: "Kettlebell",
    exerciseName: "Kettlebell Swing",
    category: "Functional",
    difficulty: "Intermediate",
    musclesTargeted: {
      primary: ["Glutes", "Hamstrings", "Lower Back (Erector Spinae)"],
      secondary: ["Core", "Shoulders", "Forearms (Grip Strength)"],
    },
    usageInstructions: [
      "Stand with feet shoulder-width apart, kettlebell on the floor in front of you.",
      "Hinge at the hips (push butt back) to grab the handle with both hands.",
      "Hike the bell back between your legs like a football snap.",
      "Explosively drive your hips forward to float the bell up to chest height.",
      "Let gravity bring the bell back down and hinge your hips again to repeat.",
    ],
    properFormTips: [
      "This is a hip hinge movement (like a deadlift), not a squat.",
      "Keep your back flat and neutral throughout the movement.",
      "Your arms act as ropes/hooks; the power comes from the hips, not the shoulders.",
    ],
    commonMistakes: [
      "Squatting too low instead of hinging.",
      "Using shoulder muscles to lift the bell (front raise).",
      "Rounding the lower back.",
    ],
    safety:
      "Ensure you have a secure grip (chalk helps). Stop immediately if you feel sharp pain in your lower back.",
    alternatives: [
      "Dumbbell Romanian Deadlift",
      "Cable Pull-Throughs",
      "Glute Bridges",
    ],
    position: [-0.8, -ROOM_DIMENSIONS.H / 2 + 0.12, -1.0],
    rotation: [0, Math.PI / 4, 0],
    component: Kettlebell,
  },
  dumbbell: {
    id: "dumbbell",
    name: "Dumbbell",
    exerciseName: "Dumbbell Bicep Curl",
    category: "Strength",
    difficulty: "Beginner",
    musclesTargeted: {
      primary: ["Biceps Brachii"],
      secondary: ["Brachialis", "Brachioradialis", "Forearms"],
    },
    usageInstructions: [
      "Stand with feet hip-width apart, holding a dumbbell in each hand.",
      "Let your arms hang straight down at your sides with palms facing forward.",
      "Keep your elbows close to your torso throughout the movement.",
      "Curl the weights up by flexing your elbows, keeping upper arms stationary.",
      "Continue until dumbbells are at shoulder level and biceps are fully contracted.",
      "Lower the dumbbells back down slowly with control to the starting position.",
    ],
    properFormTips: [
      "Keep your upper arms completely still - only your forearms should move.",
      "Don't swing or use momentum - control the weight throughout.",
      "Squeeze your biceps at the top of the movement for maximum contraction.",
      "Lower the weight slowly (3-4 seconds) for better muscle activation.",
    ],
    commonMistakes: [
      "Swinging the body or using momentum to lift the weight.",
      "Moving elbows forward or backward during the curl.",
      "Arching the back to help lift heavier weights.",
      "Rushing the lowering phase (eccentric) instead of controlling it.",
    ],
    safety:
      "Start with lighter weights to master the form. Avoid straining your wrists by keeping them neutral. Stop if you feel elbow pain.",
    alternatives: [
      "Barbell Curl",
      "Cable Curl",
      "Hammer Curl",
      "Preacher Curl",
    ],
    position: [1.2, -ROOM_DIMENSIONS.H / 2 + 0.1, 0.8],
    rotation: [0, 0, Math.PI / 2],
    component: Dumbbell,
  },
  barbell: {
    id: "barbell",
    name: "Barbell",
    exerciseName: "Deadlift",
    category: "Strength",
    difficulty: "Advanced",
    musclesTargeted: {
      primary: ["Hamstrings", "Glutes", "Lower Back", "Trapezius"],
      secondary: ["Forearms", "Quads", "Lats", "Core"],
    },
    usageInstructions: [
      "Stand with feet hip-width apart, the bar over your mid-foot (laces).",
      "Bend over and grab the bar just outside your legs.",
      "Bend your knees until your shins touch the bar.",
      "Lift your chest up and straighten your lower back.",
      "Take a deep breath, brace your core, and pull the bar up by driving through your heels.",
      "Stand tall, hips locked out, then lower the bar under control.",
    ],
    properFormTips: [
      "Keep the bar in contact with your legs throughout the lift.",
      '"Engage your lats" (pretend you are squeezing oranges in your armpits).',
      "Do not hyperextend (lean back) at the top.",
    ],
    commonMistakes: [
      "Rounding the back like a scared cat (risk of injury).",
      "Squatting the weight up (hips too low).",
      "Jerking the bar off the floor.",
    ],
    safety:
      "This exercise requires strict form. If your back rounds, lower the weight. Use a weight belt if lifting heavy.",
    alternatives: ["Trap Bar Deadlift", "Rack Pulls", "Romanian Deadlift"],
    position: [0, -ROOM_DIMENSIONS.H / 2 + 0.1, 1.2],
    rotation: [0, Math.PI / 2, 0],
    component: Barbell,
  },
  benchPress: {
    id: "benchPress",
    name: "Bench Press",
    exerciseName: "Barbell Bench Press",
    category: "Strength",
    difficulty: "Intermediate",
    musclesTargeted: {
      primary: [
        "Pectoralis Major (Chest)",
        "Anterior Deltoids (Front Shoulders)",
      ],
      secondary: ["Triceps", "Serratus Anterior", "Core (for stability)"],
    },
    usageInstructions: [
      "Lie flat on the bench with feet firmly planted on the floor.",
      "Position yourself so your eyes are directly under the bar.",
      "Grip the bar slightly wider than shoulder-width with hands evenly spaced.",
      "Unrack the bar and hold it directly over your chest with arms extended.",
      "Lower the bar in a controlled manner to your mid-chest while keeping elbows at 45-degree angle.",
      "Touch your chest lightly (don't bounce), then press the bar back up explosively.",
      "Lock out your elbows at the top and repeat for desired reps.",
    ],
    properFormTips: [
      "Keep your shoulder blades retracted (squeezed together) throughout the movement.",
      "Maintain a slight arch in your lower back with glutes and upper back on the bench.",
      "Drive through your feet to create leg drive and stability.",
      "Lower the bar to your nipple line, not your neck or lower abdomen.",
      "Keep your wrists straight and stacked over your elbows.",
    ],
    commonMistakes: [
      "Bouncing the bar off the chest instead of controlled touch-and-press.",
      "Flaring elbows out to 90 degrees (increases shoulder injury risk).",
      "Lifting hips off the bench during the press.",
      "Not retracting shoulder blades, leading to shoulder strain.",
      "Improper bar path - pressing straight up instead of slight arc toward face.",
    ],
    safety:
      "Always use a spotter when lifting heavy weights. Use safety bars or clips if training alone. Start with just the bar to learn proper form. Don't attempt max lifts without proper warm-up.",
    alternatives: [
      "Dumbbell Bench Press",
      "Push-Ups",
      "Chest Press Machine",
      "Incline Bench Press",
    ],
    position: [0, -ROOM_DIMENSIONS.H / 2, -1.2],
    rotation: [0, 0, 0],
    component: BenchPress,
  },
};

export const getEquipmentById = (id: string): EquipmentData | undefined =>
  equipmentData[id];

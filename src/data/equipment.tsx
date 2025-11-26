import { Barbell } from "../components/equipment/barbell";
import { BenchPress } from "../components/equipment/bench-press";
import { DipStation } from "../components/equipment/dip-station";
import { Dumbbell } from "../components/equipment/dumbbell";
import { Kettlebell } from "../components/equipment/kettlebell";
import { Placeholder } from "../components/equipment/placeholder";
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
    exerciseName: "Dumbbell Curl",
    category: "Strength",
    difficulty: "Beginner",
    musclesTargeted: {
      primary: ["Biceps Brachii"],
      secondary: ["Brachialis", "Brachioradialis", "Forearms"],
    },
    usageInstructions: [
      "Stand with a dumbbell in each hand, arms by your sides, palms facing forward.",
      "Keep elbows tucked close to your ribcage.",
      "Curl the weights up towards your shoulders by bending at the elbow.",
      "Squeeze the biceps hard at the top.",
      "Lower the weights slowly back to the starting position.",
    ],
    properFormTips: [
      "Keep elbows stationary; they shouldn't move forward or backward.",
      "Avoid swinging your upper body to lift the weight.",
      "Perform the full range of motion: all the way up, all the way down.",
    ],
    commonMistakes: [
      "Swinging the hips to generate momentum.",
      "Curling the wrists excessively at the top.",
      "Dropping the weight quickly without control.",
    ],
    safety:
      "Maintain a firm grip. Keep a neutral spine. Don't drop dumbbells near your feet.",
    alternatives: ["Barbell Curl", "Cable Curl", "Chin-Ups"],
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
    position: [0, -ROOM_DIMENSIONS.H / 2 + 0.22, 1.9],
    rotation: [0, Math.PI / 2, 0],
    component: Barbell,
  },
  benchPress: {
    id: "benchPress",
    name: "Bench Press",
    exerciseName: "Flat Barbell Bench Press",
    category: "Strength",
    difficulty: "Intermediate",
    musclesTargeted: {
      primary: ["Pectoralis Major (Chest)"],
      secondary: [
        "Anterior Deltoids (Front Shoulders)",
        "Triceps Brachii (Back of Arms)",
      ],
    },
    usageInstructions: [
      "Lie flat on the bench with your eyes directly under the bar.",
      "Plant your feet firmly on the ground.",
      "Grip the bar slightly wider than shoulder-width.",
      "Unrack the bar and hold it directly over your shoulders (locked out).",
      "Lower the bar slowly to your mid-chest (nipple line).",
      "Press the bar back up to the starting position.",
    ],
    properFormTips: [
      "Keep your 5 points of contact: Head, Shoulders, Butt, Right Foot, Left Foot.",
      "Tuck your elbows slightly (approx. 45-degree angle) to protect shoulders.",
      "Breathe in on the way down, exhale on the push.",
    ],
    commonMistakes: [
      "Bouncing the bar off the chest.",
      "Flaring elbows out too wide (90 degrees).",
      "Lifting the hips/butt off the bench (arching too much).",
    ],
    safety:
      'Always use a spotter when lifting heavy. Ensure lifting clips are on the bar. Do not use a "suicide grip" (thumbless grip).',
    alternatives: ["Dumbbell Bench Press", "Push-Ups", "Chest Press Machine"],
    position: [0, -ROOM_DIMENSIONS.H / 2, -1.2],
    rotation: [0, 0, 0],
    component: BenchPress,
  },
  "squat-rack": {
    id: "squat-rack",
    name: "Squat Rack",
    exerciseName: "Barbell Back Squat",
    category: "Strength",
    difficulty: "Advanced",
    musclesTargeted: {
      primary: ["Quadriceps", "Glutes"],
      secondary: ["Hamstrings", "Calves", "Lower Back", "Core"],
    },
    usageInstructions: [
      "Set the bar height to about chest level.",
      "Step under the bar, resting it on your upper back/traps.",
      "Unrack the bar and take two deliberate steps back.",
      "Stand with feet shoulder-width apart, toes pointed slightly out.",
      "Lower your hips back and down (sit in a chair motion).",
      "Go down until thighs are parallel to the floor, then drive back up.",
    ],
    properFormTips: [
      "Keep your chest up and look straight ahead.",
      "Ensure knees track over your toes, not collapsing inward.",
      "Brace your core (Valsalva maneuver) before descending.",
    ],
    commonMistakes: [
      '"Butt wink" (rounding the lower back at the bottom).',
      "Knees caving inward (valgus collapse).",
      "Not going deep enough (quarter squats).",
    ],
    safety:
      "Always use safety bars/pins set at an appropriate height. Use a spotter for heavy attempts.",
    alternatives: ["Leg Press", "Goblet Squat", "Lunges"],
    position: [-1.5, -ROOM_DIMENSIONS.H / 2 + 0.5, -1.5],
    rotation: [0, 0, 0],
    component: Placeholder,
  },
  "pull-up-bar": {
    id: "pull-up-bar",
    name: "Pull-Up Bar",
    exerciseName: "Pull-Up",
    category: "Functional",
    difficulty: "Advanced",
    musclesTargeted: {
      primary: ["Latissimus Dorsi (Lats)"],
      secondary: ["Biceps", "Rhomboids", "Trapezius", "Forearms"],
    },
    usageInstructions: [
      "Grab the bar with an overhand grip, hands slightly wider than shoulders.",
      "Hang with arms fully extended (dead hang).",
      "Pull your chest up towards the bar by driving elbows down and back.",
      "Clear your chin over the bar.",
      "Lower yourself slowly to the starting position.",
    ],
    properFormTips: [
      "Engage your core to prevent swinging.",
      "Focus on depressing (pulling down) shoulder blades before pulling with arms.",
      "Don't reach with your chin; pull with your back.",
    ],
    commonMistakes: [
      "Kipping (swinging legs) to cheat the rep.",
      "Not going down to full extension.",
      "Rounding shoulders forward at the top.",
    ],
    safety:
      "Ensure grip is dry. Don't jump off aggressively from the top position.",
    alternatives: ["Lat Pulldown", "Assisted Pull-Up Machine", "Inverted Rows"],
    position: [-1.5, -ROOM_DIMENSIONS.H / 2 + 0.5, 0],
    rotation: [0, Math.PI / 2, 0],
    component: Placeholder,
  },
  "dip-station": {
    id: "dip-station",
    name: "Dip Station",
    exerciseName: "Dip",
    category: "Strength",
    difficulty: "Intermediate",
    musclesTargeted: {
      primary: ["Triceps", "Lower Chest"],
      secondary: ["Anterior Deltoids (Front Shoulders)", "Rhomboids"],
    },
    usageInstructions: [
      "Grab the parallel bars and jump up to a straight arm position (support hold).",
      "Cross your ankles behind you.",
      "Lower your body by bending your elbows until shoulders are below elbows (breaking parallel).",
      "Push yourself back up to the starting position.",
    ],
    properFormTips: [
      "For Chest: Lean torso forward slightly.",
      "For Triceps: Keep torso upright.",
      "Keep elbows tucked in; don't let them flare out too wide.",
    ],
    commonMistakes: [
      "Shrugging shoulders up towards ears (keep them depressed).",
      "Not going deep enough (half reps).",
      "Swinging legs for momentum.",
    ],
    safety:
      "Stop if you feel sharp pain in your shoulders or sternum. Ensure the station is stable.",
    alternatives: ["Bench Dips", "Close-Grip Bench Press", "Cable Pushdowns"],
    position: [1.5, -ROOM_DIMENSIONS.H / 2 , -1.5],
    rotation: [0, 0, 0],
    component: DipStation,
  },
};

export const getEquipmentById = (id: string): EquipmentData | undefined =>
  equipmentData[id];

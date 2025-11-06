import * as THREE from "three";
import type { EquipmentInfo } from "../types/equipment";

interface EquipmentGeometryConfig {
  geometry: THREE.BufferGeometry;
  material: THREE.Material | THREE.Material[];
}

export const createEquipmentGeometry = (
  info: EquipmentInfo
): EquipmentGeometryConfig => {
  switch (info.id) {
    case "treadmill": {
      // Create a simple treadmill shape
      const group = new THREE.Group();

      // Base/belt
      const beltGeometry = new THREE.BoxGeometry(1.5, 0.2, 2);
      const beltMaterial = new THREE.MeshStandardMaterial({
        color: 0x2a_2a_2a,
        roughness: 0.7,
        metalness: 0.3,
      });
      const belt = new THREE.Mesh(beltGeometry, beltMaterial);
      belt.position.y = 0.1;
      group.add(belt);

      // Console/display
      const consoleGeometry = new THREE.BoxGeometry(1.2, 0.8, 0.1);
      const consoleMaterial = new THREE.MeshStandardMaterial({
        color: 0x1a_1a_1a,
        roughness: 0.4,
        metalness: 0.6,
      });
      const console = new THREE.Mesh(consoleGeometry, consoleMaterial);
      console.position.set(0, 1.2, 0.8);
      console.rotation.x = -Math.PI / 8;
      group.add(console);

      // Support bars
      const barGeometry = new THREE.CylinderGeometry(0.05, 0.05, 1.5, 8);
      const barMaterial = new THREE.MeshStandardMaterial({
        color: 0x40_40_40,
        roughness: 0.3,
        metalness: 0.8,
      });

      const leftBar = new THREE.Mesh(barGeometry, barMaterial);
      leftBar.position.set(-0.5, 0.75, 0.6);
      group.add(leftBar);

      const rightBar = new THREE.Mesh(barGeometry, barMaterial);
      rightBar.position.set(0.5, 0.75, 0.6);
      group.add(rightBar);

      return {
        geometry: beltGeometry,
        material: beltMaterial,
      };
    }

    case "bench-press": {
      const group = new THREE.Group();

      // Bench
      const benchGeometry = new THREE.BoxGeometry(1.5, 0.3, 0.5);
      const benchMaterial = new THREE.MeshStandardMaterial({
        color: 0x8b_00_00,
        roughness: 0.8,
        metalness: 0.1,
      });
      const bench = new THREE.Mesh(benchGeometry, benchMaterial);
      bench.position.y = 0.5;
      group.add(bench);

      // Barbell
      const barGeometry = new THREE.CylinderGeometry(0.03, 0.03, 2, 12);
      const barMaterial = new THREE.MeshStandardMaterial({
        color: 0x50_50_50,
        roughness: 0.2,
        metalness: 0.9,
      });
      const bar = new THREE.Mesh(barGeometry, barMaterial);
      bar.rotation.z = Math.PI / 2;
      bar.position.set(0, 1.2, 0);
      group.add(bar);

      // Weight plates
      const plateGeometry = new THREE.CylinderGeometry(0.15, 0.15, 0.05, 16);
      const plateMaterial = new THREE.MeshStandardMaterial({
        color: 0x1a_1a_1a,
        roughness: 0.4,
        metalness: 0.7,
      });

      for (let i = 0; i < 2; i++) {
        const side = i === 0 ? -1 : 1;
        for (let j = 0; j < 2; j++) {
          const plate = new THREE.Mesh(plateGeometry, plateMaterial);
          plate.rotation.z = Math.PI / 2;
          plate.position.set(side * (0.85 + j * 0.1), 1.2, 0);
          group.add(plate);
        }
      }

      return {
        geometry: benchGeometry,
        material: benchMaterial,
      };
    }

    case "squat-rack": {
      const group = new THREE.Group();

      // Base
      const baseGeometry = new THREE.BoxGeometry(2, 0.1, 2);
      const baseMaterial = new THREE.MeshStandardMaterial({
        color: 0x2a_2a_2a,
        roughness: 0.6,
        metalness: 0.4,
      });
      const base = new THREE.Mesh(baseGeometry, baseMaterial);
      base.position.y = 0.05;
      group.add(base);

      // Uprights
      const uprightGeometry = new THREE.BoxGeometry(0.1, 2.5, 0.1);
      const uprightMaterial = new THREE.MeshStandardMaterial({
        color: 0x40_40_40,
        roughness: 0.3,
        metalness: 0.8,
      });

      const leftUpright = new THREE.Mesh(uprightGeometry, uprightMaterial);
      leftUpright.position.set(-0.7, 1.25, 0);
      group.add(leftUpright);

      const rightUpright = new THREE.Mesh(uprightGeometry, uprightMaterial);
      rightUpright.position.set(0.7, 1.25, 0);
      group.add(rightUpright);

      // Barbell
      const barGeometry = new THREE.CylinderGeometry(0.03, 0.03, 2, 12);
      const barMaterial = new THREE.MeshStandardMaterial({
        color: 0x60_60_60,
        roughness: 0.2,
        metalness: 0.9,
      });
      const bar = new THREE.Mesh(barGeometry, barMaterial);
      bar.rotation.z = Math.PI / 2;
      bar.position.set(0, 1.8, 0);
      group.add(bar);

      return {
        geometry: baseGeometry,
        material: baseMaterial,
      };
    }

    case "dumbbells": {
      const group = new THREE.Group();

      // Create a pair of dumbbells
      for (let i = 0; i < 2; i++) {
        const dumbbell = new THREE.Group();

        // Handle
        const handleGeometry = new THREE.CylinderGeometry(0.03, 0.03, 0.3, 8);
        const handleMaterial = new THREE.MeshStandardMaterial({
          color: 0x30_30_30,
          roughness: 0.7,
          metalness: 0.5,
        });
        const handle = new THREE.Mesh(handleGeometry, handleMaterial);
        handle.rotation.z = Math.PI / 2;
        dumbbell.add(handle);

        // Weights
        const weightGeometry = new THREE.CylinderGeometry(0.08, 0.08, 0.1, 12);
        const weightMaterial = new THREE.MeshStandardMaterial({
          color: 0x1a_1a_1a,
          roughness: 0.4,
          metalness: 0.8,
        });

        const leftWeight = new THREE.Mesh(weightGeometry, weightMaterial);
        leftWeight.rotation.z = Math.PI / 2;
        leftWeight.position.x = -0.2;
        dumbbell.add(leftWeight);

        const rightWeight = new THREE.Mesh(weightGeometry, weightMaterial);
        rightWeight.rotation.z = Math.PI / 2;
        rightWeight.position.x = 0.2;
        dumbbell.add(rightWeight);

        dumbbell.position.set((i - 0.5) * 0.4, 0.1, 0);
        group.add(dumbbell);
      }

      return {
        geometry: new THREE.BoxGeometry(1, 0.2, 0.4),
        material: new THREE.MeshStandardMaterial({ color: 0x30_30_30 }),
      };
    }

    case "stationary-bike": {
      const group = new THREE.Group();

      // Seat
      const seatGeometry = new THREE.BoxGeometry(0.3, 0.1, 0.4);
      const seatMaterial = new THREE.MeshStandardMaterial({
        color: 0x1a_1a_1a,
        roughness: 0.8,
        metalness: 0.1,
      });
      const seat = new THREE.Mesh(seatGeometry, seatMaterial);
      seat.position.set(0, 0.8, 0);
      group.add(seat);

      // Frame base
      const baseGeometry = new THREE.BoxGeometry(1, 0.1, 0.8);
      const baseMaterial = new THREE.MeshStandardMaterial({
        color: 0x2a_2a_2a,
        roughness: 0.6,
        metalness: 0.5,
      });
      const base = new THREE.Mesh(baseGeometry, baseMaterial);
      base.position.set(0, 0.05, 0);
      group.add(base);

      // Handlebar post
      const postGeometry = new THREE.CylinderGeometry(0.05, 0.05, 1, 8);
      const postMaterial = new THREE.MeshStandardMaterial({
        color: 0x40_40_40,
        roughness: 0.3,
        metalness: 0.8,
      });
      const post = new THREE.Mesh(postGeometry, postMaterial);
      post.position.set(0, 0.5, 0.5);
      post.rotation.x = -Math.PI / 6;
      group.add(post);

      // Handlebars
      const handlebarGeometry = new THREE.CylinderGeometry(0.03, 0.03, 0.6, 8);
      const handlebar = new THREE.Mesh(handlebarGeometry, postMaterial);
      handlebar.rotation.z = Math.PI / 2;
      handlebar.position.set(0, 1, 0.7);
      group.add(handlebar);

      // Flywheel
      const flywheelGeometry = new THREE.CylinderGeometry(0.25, 0.25, 0.1, 24);
      const flywheelMaterial = new THREE.MeshStandardMaterial({
        color: 0x50_50_50,
        roughness: 0.2,
        metalness: 0.9,
      });
      const flywheel = new THREE.Mesh(flywheelGeometry, flywheelMaterial);
      flywheel.rotation.x = Math.PI / 2;
      flywheel.position.set(0, 0.3, -0.2);
      group.add(flywheel);

      return {
        geometry: baseGeometry,
        material: baseMaterial,
      };
    }

    case "pull-up-bar": {
      const group = new THREE.Group();

      // Base supports
      const supportGeometry = new THREE.CylinderGeometry(0.08, 0.08, 2.5, 12);
      const supportMaterial = new THREE.MeshStandardMaterial({
        color: 0x40_40_40,
        roughness: 0.3,
        metalness: 0.8,
      });

      const leftSupport = new THREE.Mesh(supportGeometry, supportMaterial);
      leftSupport.position.set(-0.7, 1.25, 0);
      group.add(leftSupport);

      const rightSupport = new THREE.Mesh(supportGeometry, supportMaterial);
      rightSupport.position.set(0.7, 1.25, 0);
      group.add(rightSupport);

      // Pull-up bar
      const barGeometry = new THREE.CylinderGeometry(0.04, 0.04, 1.6, 16);
      const barMaterial = new THREE.MeshStandardMaterial({
        color: 0x60_60_60,
        roughness: 0.2,
        metalness: 0.9,
      });
      const bar = new THREE.Mesh(barGeometry, barMaterial);
      bar.rotation.z = Math.PI / 2;
      bar.position.set(0, 2.3, 0);
      group.add(bar);

      return {
        geometry: supportGeometry,
        material: supportMaterial,
      };
    }

    case "cable-machine": {
      const group = new THREE.Group();

      // Main frame
      const frameGeometry = new THREE.BoxGeometry(1.5, 2.5, 0.3);
      const frameMaterial = new THREE.MeshStandardMaterial({
        color: 0x2a_2a_2a,
        roughness: 0.5,
        metalness: 0.6,
      });
      const frame = new THREE.Mesh(frameGeometry, frameMaterial);
      frame.position.set(0, 1.25, 0);
      group.add(frame);

      // Weight stack
      const weightGeometry = new THREE.BoxGeometry(0.3, 1.5, 0.25);
      const weightMaterial = new THREE.MeshStandardMaterial({
        color: 0x1a_1a_1a,
        roughness: 0.4,
        metalness: 0.7,
      });
      const weights = new THREE.Mesh(weightGeometry, weightMaterial);
      weights.position.set(0, 0.75, -0.2);
      group.add(weights);

      // Top pulley
      const pulleyGeometry = new THREE.CylinderGeometry(0.1, 0.1, 0.05, 16);
      const pulleyMaterial = new THREE.MeshStandardMaterial({
        color: 0x50_50_50,
        roughness: 0.2,
        metalness: 0.9,
      });
      const pulley = new THREE.Mesh(pulleyGeometry, pulleyMaterial);
      pulley.rotation.x = Math.PI / 2;
      pulley.position.set(0, 2.4, 0);
      group.add(pulley);

      // Handle
      const handleGeometry = new THREE.CylinderGeometry(0.03, 0.03, 0.4, 8);
      const handleMaterial = new THREE.MeshStandardMaterial({
        color: 0x30_30_30,
        roughness: 0.6,
        metalness: 0.5,
      });
      const handle = new THREE.Mesh(handleGeometry, handleMaterial);
      handle.rotation.z = Math.PI / 2;
      handle.position.set(0, 1.8, 0.3);
      group.add(handle);

      return {
        geometry: frameGeometry,
        material: frameMaterial,
      };
    }

    case "kettlebell": {
      const group = new THREE.Group();

      // Main bell body
      const bellGeometry = new THREE.SphereGeometry(0.15, 16, 16);
      const bellMaterial = new THREE.MeshStandardMaterial({
        color: 0x1a_1a_1a,
        roughness: 0.7,
        metalness: 0.6,
      });
      const bell = new THREE.Mesh(bellGeometry, bellMaterial);
      bell.position.y = 0.15;
      bell.scale.y = 0.9;
      group.add(bell);

      // Handle
      const handleCurve = new THREE.TorusGeometry(0.12, 0.03, 8, 16, Math.PI);
      const handleMaterial = new THREE.MeshStandardMaterial({
        color: 0x2a_2a_2a,
        roughness: 0.6,
        metalness: 0.7,
      });
      const handle = new THREE.Mesh(handleCurve, handleMaterial);
      handle.rotation.x = Math.PI / 2;
      handle.position.y = 0.28;
      group.add(handle);

      // Flat bottom
      const bottomGeometry = new THREE.CylinderGeometry(0.08, 0.08, 0.02, 16);
      const bottom = new THREE.Mesh(bottomGeometry, bellMaterial);
      bottom.position.y = 0.01;
      group.add(bottom);

      return {
        geometry: bellGeometry,
        material: bellMaterial,
      };
    }

    default:
      return {
        geometry: new THREE.BoxGeometry(1, 1, 1),
        material: new THREE.MeshStandardMaterial({ color: 0x88_88_88 }),
      };
  }
};

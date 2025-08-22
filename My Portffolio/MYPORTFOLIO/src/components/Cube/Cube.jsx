import { useEffect, useRef } from "react";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import * as THREE from "three";

export default function MagicCube() {
  const mountRef = useRef(null);

  useEffect(() => {
    // Cena e câmera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, 1, 0.1, 1000);
    camera.position.z = 10;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(300, 300); // cubo maior

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true; // suaviza o movimento
    controls.enableZoom = false; // desabilita zoom
    controls.enablePan = false; // desabilita arrastar tela

    if (mountRef.current && mountRef.current.childNodes.length === 0) {
      mountRef.current.appendChild(renderer.domElement);
    }

    // Luzes (mais fortes para destacar as cores)
    const light = new THREE.DirectionalLight(0xffffff, 2);
    light.position.set(5, 5, 5).normalize();
    scene.add(light);

    const ambient = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambient);

    // Materiais das faces (cores mais vivas com brilho)
    const colors = [
      "#ff0000",
      "#0000ff",
      "#00ff00",
      "#ffff00",
      "#ffffff",
      "#ff7f00",
    ];
    const materials = colors.map(
      (color) =>
        new THREE.MeshPhongMaterial({
          color,
          shininess: 80, // brilho forte
        })
    );

    // Criando cubinhos 3x3x3
    const group = new THREE.Group();
    const cubeSize = 1.8;
    const spacing = 0.05; // espaço entre cubinhos para parecer cubo mágico

    for (let x = -1; x <= 1; x++) {
      for (let y = -1; y <= 1; y++) {
        for (let z = -1; z <= 1; z++) {
          const geometry = new THREE.BoxGeometry(cubeSize, cubeSize, cubeSize);
          const cube = new THREE.Mesh(geometry, materials);
          cube.position.set(
            x * (cubeSize + spacing),
            y * (cubeSize + spacing),
            z * (cubeSize + spacing)
          );
          group.add(cube);
        }
      }
    }

    scene.add(group);

    // Animação
    const animate = () => {
      group.rotation.x += 0.01;
      group.rotation.y += 0.01;

      controls.update(); // necessário para os OrbitControls funcionarem

      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    animate();

    return () => {
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{ width: "400px", height: "400px" }} // cubo maior
    />
  );
}

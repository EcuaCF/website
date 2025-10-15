"use client"

import { useRef, useMemo } from "react"
import { useFrame } from "@react-three/fiber"
import { useTexture } from "@react-three/drei"
import * as THREE from "three"

// Create a rounded rectangle alpha map
const createRoundedAlphaMap = (width: number, height: number, radius: number) => {
  const canvas = document.createElement('canvas')
  canvas.width = width
  canvas.height = height
  const context = canvas.getContext('2d')!
  
  // Clear canvas
  context.clearRect(0, 0, width, height)
  
  // Draw rounded rectangle
  context.fillStyle = 'white'
  context.beginPath()
  context.roundRect(0, 0, width, height, radius)
  context.fill()
  
  const texture = new THREE.CanvasTexture(canvas)
  return texture
}

export function ParticleSphere() {
  const PARTICLE_COUNT = 1500 // Reduced particle count to make images more visible
  const PARTICLE_SIZE_MIN = 0.005
  const PARTICLE_SIZE_MAX = 0.010
  const SPHERE_RADIUS = 9
  const POSITION_RANDOMNESS = 4
  const ROTATION_SPEED_X = 0.0
  const ROTATION_SPEED_Y = 0.0005
  const PARTICLE_OPACITY = 1

  const IMAGE_COUNT = 24

  const groupRef = useRef<THREE.Group>(null)

  const textures = useTexture([
    `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/contact/img1.jpg`,
    `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/contact/img2.jpg`,
    `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/contact/img3.jpg`,
    `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/contact/img4.jpg`,
    `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/contact/img5.jpg`,
    `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/contact/img6.jpg`,
    `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/contact/img7.jpg`,
    `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/contact/img8.jpg`,
    `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/contact/img9.jpg`,
    `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/contact/img10.jpg`,
    `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/contact/img11.jpg`,
    `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/contact/img12.jpg`,
    `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/contact/img13.jpg`,
    `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/contact/img1.jpg`,
    `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/contact/img2.jpg`,
    `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/contact/img3.jpg`,
    `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/contact/img4.jpg`,
    `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/contact/img5.jpg`,
    `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/contact/img6.jpg`,
    `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/contact/img7.jpg`,
    `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/contact/img8.jpg`,
    `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/contact/img9.jpg`,
    `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/contact/img10.jpg`,
    `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/contact/img11.jpg`,
    `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/contact/img12.jpg`
  ])

  // Create rounded alpha map (256x256 with 32px border radius)
  const alphaMap = useMemo(() => createRoundedAlphaMap(256, 256, 32), [])

  useMemo(() => {
    textures.forEach((texture) => {
      if (texture) {
        texture.wrapS = THREE.ClampToEdgeWrapping
        texture.wrapT = THREE.ClampToEdgeWrapping
        texture.flipY = false
      }
    })
  }, [textures])

  const particles = useMemo(() => {
    const particles = []

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      // Generate points on sphere surface with some random variation
      const phi = Math.acos(-1 + (2 * i) / PARTICLE_COUNT)
      const theta = Math.sqrt(PARTICLE_COUNT * Math.PI) * phi

      // Add random variation to make it more organic
      const radiusVariation = SPHERE_RADIUS + (Math.random() - 0.5) * POSITION_RANDOMNESS

      const x = radiusVariation * Math.cos(theta) * Math.sin(phi)
      const y = radiusVariation * Math.cos(phi)
      const z = radiusVariation * Math.sin(theta) * Math.sin(phi)

      particles.push({
        position: [x, y, z] as [number, number, number], // Explicitly type as tuple
        scale: Math.random() * (PARTICLE_SIZE_MAX - PARTICLE_SIZE_MIN) + PARTICLE_SIZE_MIN,
        color: new THREE.Color().setHSL(
          Math.random() * 0.1 + 0.05, // Yellow-orange hues
          0.8,
          0.6 + Math.random() * 0.3,
        ),
        rotationSpeed: (Math.random() - 0.5) * 0.01,
      })
    }

    return particles
  }, [PARTICLE_COUNT, SPHERE_RADIUS, POSITION_RANDOMNESS, PARTICLE_SIZE_MIN, PARTICLE_SIZE_MAX])

  const orbitingImages = useMemo(() => {
    const images = []

    for (let i = 0; i < IMAGE_COUNT; i++) {
      const angle = (i / IMAGE_COUNT) * Math.PI * 2
      const x = SPHERE_RADIUS * Math.cos(angle)
      const y = 0 // All images aligned on X-axis
      const z = SPHERE_RADIUS * Math.sin(angle)

      const position = new THREE.Vector3(x, y, z)
      const center = new THREE.Vector3(0, 0, 0)
      const outwardDirection = position.clone().sub(center).normalize()

      // Create a rotation that makes the plane face outward
      const euler = new THREE.Euler()
      const matrix = new THREE.Matrix4()
      matrix.lookAt(position, position.clone().add(outwardDirection), new THREE.Vector3(0, 1, 0))
      euler.setFromRotationMatrix(matrix)

      euler.z += Math.PI

      images.push({
        position: [x, y, z] as [number, number, number], // Explicitly type as tuple
        rotation: [euler.x, euler.y, euler.z] as [number, number, number], // Explicitly type as tuple
        textureIndex: i % textures.length,
        color: new THREE.Color().setHSL(Math.random(), 0.7, 0.6), // Added random colors
      })
    }

    return images
  }, [IMAGE_COUNT, SPHERE_RADIUS, textures.length])

  useFrame(() => { // Removed unused 'state' parameter
    if (groupRef.current) {
      groupRef.current.rotation.y += ROTATION_SPEED_Y
      groupRef.current.rotation.x += ROTATION_SPEED_X
    }
  })

  return (
    <group ref={groupRef}>
      {/* Existing particles */}
      {particles.map((particle, index) => (
        <mesh key={index} position={particle.position} scale={particle.scale}>
          <sphereGeometry args={[1, 8, 6]} />
          <meshBasicMaterial color={particle.color} transparent opacity={PARTICLE_OPACITY} />
        </mesh>
      ))}

      {orbitingImages.map((image, index) => (
        <mesh key={`image-${index}`} position={image.position} rotation={image.rotation}>
          <planeGeometry args={[1.8, 1.15]}/>
          <meshBasicMaterial 
            map={textures[image.textureIndex]} 
            alphaMap={alphaMap}
            transparent
            opacity={1} 
            side={THREE.DoubleSide} 
          />
        </mesh>
      ))}
    </group>
  )
}
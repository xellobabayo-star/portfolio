"use client";

import { useTransform, useScroll, MotionValue } from "framer-motion";

/**
 * useParallax utilitas untuk menggeser posisi elemen berdasarkan posisi scroll.
 * @param value Progress scroll dari Framer Motion (MotionValue<number>)
 * @param distance Jarak pergeseran elemen dalam pixel (misal: 200 atau -200)
 */
export default function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [0, distance]);
}

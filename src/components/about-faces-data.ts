import p1 from "@/assets/mosaic/portrait-1.jpg";
import p2 from "@/assets/mosaic/portrait-2.jpg";
import p3 from "@/assets/mosaic/portrait-3.jpg";
import p4 from "@/assets/mosaic/portrait-4.jpg";
import p5 from "@/assets/mosaic/portrait-5.jpg";
import p6 from "@/assets/mosaic/portrait-6.jpg";
import p7 from "@/assets/mosaic/portrait-7.jpg";
import p8 from "@/assets/mosaic/portrait-8.jpg";
import p9 from "@/assets/mosaic/portrait-9.jpg";

export type Face = { name: string; image?: string; linkedin?: string };

// Real members first; sample portraits fill the rows until more profiles are supplied.
// LinkedIn blocks automatic photo downloads, so a real member without an image shows initials.
export const realFaces: Face[] = [
  { name: "Nikhil Sharma", linkedin: "https://www.linkedin.com/in/sharmanikh03/" },
];

const samples: Face[] = [p1, p2, p3, p4, p5, p6, p7, p8, p9].map((image, i) => ({
  name: `Sample member ${i + 1}`,
  image,
}));

const rotate = (arr: Face[], n: number) => [...arr.slice(n), ...arr.slice(0, n)];

export const faceRows: Face[][] = [
  [...realFaces, ...samples],
  rotate(samples, 3),
  [...rotate(samples, 6), ...realFaces],
];

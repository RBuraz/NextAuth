"use server";

import { db } from "@/lib/db";

export const sviUseri = async () => {
  const sviUseri = await db.user.findMany();
  return sviUseri;
};

"use server";

import { redirect } from "next/navigation";
import { createMeal } from "./meals";

function isInvalidText(text) {
  return !text || text.trim() === "";
}

export async function shareMeal(prevState, formData) {
  const data = Object.fromEntries(formData);

  const meal = {
    creator: data.name,
    creator_email: data.email,
    title: data.title,
    summary: data.summary,
    instructions: data.instructions,
    image: data.image,
    slug: null,
  };

  if (
    isInvalidText(meal.creator) ||
    isInvalidText(meal.creator_email) ||
    isInvalidText(meal.title) ||
    isInvalidText(meal.summary) ||
    isInvalidText(meal.instructions) ||
    !meal.creator_email.includes("@") ||
    !meal.image ||
    meal.image.size === 0
  ) {
    return { message: "Invalid Input" };
  }
  await createMeal(meal);
  redirect("/meals");
}

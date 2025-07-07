import Link from "next/link";

export default function MealsPage() {
  return (
    <>
      <div>MealsPage</div>
      <div>
        <Link href="/meals/meal-1">Meal 1</Link>
        <Link href="/meals/meal-2">Meal 2</Link>
        <Link href="/meals/meal-3">Meal 3</Link>
      </div>
    </>
  );
}

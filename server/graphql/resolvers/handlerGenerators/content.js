// resolvers/handlerGenerators/content.js
import Hero from "../../../models/Hero";
export async function fetchHero(args = []) {
  try {
    const hero = await Hero.findOne();
    return hero;

    if (!hero) throw new Error("Hero does not exist");
  } catch (err) {
    throw err;
  }
}

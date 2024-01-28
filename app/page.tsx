import Image from "next/image";
import { serif } from "@/app/font"

export default function Home() {
  return (
    <main className="bg-white md:rounded-3xl md:w-auto w-full flex flex-col md:mt-[123px] md:mb-[124px]">
      <div className="md:pt-10 md:px-10 max-w-[656px]">
        <Image
          src={"/image-omelette.jpeg"}
          alt="Omelette"
          height={300}
          width={656}
          className="md:rounded-xl mb-10 "
        />
      </div>
      <div className="md:max-w-[656px] w-full flex flex-col gap-8 md:px-10 px-8 md:pb-10 pb-8">
        <div className="text-[#5F564D]">
          <h1 className={`${serif.className} md:text-[40px] text-4xl mb-6 text-[#312E2C]`}>Simple Omelette Recipe</h1>
          <p>An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats.</p>
        </div>
        <div className="bg-[#FFF7FB] p-7 flex flex-col gap-4">
          <p className="text-[#7A284E] text-xl font-bold rounded-xl">Preparation Time</p>
          <ul className="prep list-disc flex flex-col gap-2">
            <li className="text-[#5F564D]"><span className="font-bold pl-4">Total:</span> Approximately 10 minutes</li>
            <li className="text-[#5F564D]"><span className="font-bold pl-4">Preparation:</span> 5 minutes</li>
            <li className="text-[#5F564D]"><span className="font-bold pl-4">Cooking:</span> 5 minutes</li>
          </ul>
        </div>
        <div className="flex flex-col gap-6">
          <h2 className={`${serif.className} text-[#854632] text-[28px] `}>Ingredients</h2>
          <div className="ml-[17px]">
            <ul className="ing list-disc flex flex-col gap-2 text-[#5F564D]">
              <li className="pl-4">2-3 large eggs</li>
              <li className="pl-4">Salt, to taste</li>
              <li className="pl-4">Pepper, to taste</li>
              <li className="pl-4">1 tablespoon of butter or oil</li>
              <li className="pl-4 align-middle">Optional fillings: cheese, diced vegetables, cooked meats, herbs</li>
            </ul>
          </div>
        </div>
        <div className="h-[1px] w-full bg-[#E3DDD7]"></div>
        <div className="flex flex-col gap-6">
          <h2 className={`${serif.className} text-[#854632] text-[28px] `}>Instructions</h2>
          <div className="ml-[17px]">
            <ol className="ing list-decimal flex flex-col gap-2 ">
              <li className="text-[#5F564D]">
                <p className="pl-4"><span className="font-bold">Beat the eggs:</span> In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.</p>
              </li>
              <li className="text-[#5F564D]">
                <p className="pl-4"><span className="font-bold">Heat the pan:</span> Place a non-stick frying pan over medium heat and add butter or oil.</p>
              </li>
              <li className="text-[#5F564D]">
                <p className="pl-4"><span className="font-bold">Cook the omelette:</span> Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.</p>
              </li>
              <li className="text-[#5F564D]">
                <p className="pl-4"><span className="font-bold">Add fillings (optional):</span> When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.</p>
              </li>
              <li className="text-[#5F564D]">
                <p className="pl-4"><span className="font-bold">Fold and serve:</span> As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.</p>
              </li>
              <li className="text-[#5F564D]">
                <p className="pl-4"><span className="font-bold">Enjoy:</span> Serve hot, with additional salt and pepper if needed.</p>
              </li>
            </ol>
          </div>
        </div>
        <div className="h-[1px] w-full bg-[#E3DDD7]"></div>
        <div className="flex flex-col gap-6 text-[#5F564D]">
          <h2 className={`${serif.className} text-[#854632] text-[28px] `}>Nutrition</h2>
          <p>The table below shows nutritional values per serving without the additional fillings.</p>
          <table>
            <tbody className="">
              <tr className="border-b border-[#E3DDD7]">
                <td className="pb-3 pl-8">Calories</td>
                <td className="pb-3 text-[#854632] font-bold">277kcal</td>
              </tr>
              <tr className="border-b border-[#E3DDD7]">
                <td className="py-3 pl-8">Carbs</td>
                <td className="pb-3 text-[#854632] font-bold">0g</td>
              </tr>
              <tr className="border-b border-[#E3DDD7] ">
                <td className="py-3 pl-8">Protein</td>
                <td className="pb-3 text-[#854632] font-bold">20g</td>
              </tr>
              <tr className="border-b border-[#E3DDD7] ">
                <td className="py-3 pl-8">Fat</td>
                <td className="pb-3 text-[#854632] font-bold">22g</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}

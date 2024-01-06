import React from "react";
import Link from "next/link";
import Image from "next/image";

const DrinksList = ({ drinks }) => {
  console.log(drinks);
  return (
    <ul className="grid sm:grid-cols-2 gap-6 mt-6">
      {drinks?.map((drink) => {
        return (
          <li key={drink?.idDrink}>
            <Link
              href={`/drinks/${drink?.idDrink}`}
              className="text-xl font-medium"
            >
              <Image
                src={drink.strDrinkThumb}
                fill
                sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw"
                alt={drink.strDrink}
                className="rounded-md object-cover"
              />

              {drink?.strDrink}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default DrinksList;

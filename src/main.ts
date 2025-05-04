//! MileStone-1
type Person = {
  readonly id: number;
  readonly name: string;
  birth_year: number;
  death_year?: number;
  biography: string;
  image: string;
};

//! MileStone-2
type ActressNat =
  | "American"
  | "British"
  | "Australian"
  | "American"
  | "South African"
  | "French"
  | "Indian"
  | "Spanish"
  | "South Korean"
  | "Chinese";

type Actress = Person & {
  most_famous_movies: [string, string, string];
  awards: string;
  nationality: ActressNat;
};
//! Milestone 3 
 function isActress(data: unknown):data is Actress{
  return (
    typeof data === "object" && data !== null &&
    "id" in data && data.id === "number" &&
    "name" in data && data.name === "string" &&
    "birth_year" in data && data.birth_year === "number" &&
    "death_year" in data && data.death_year === "number" &&
    "biography" in data &&  data.biography === "string" &&
    "image" in data && data.image === "string" &&
    "most_famous_movies" in data && data.most_famous_movies instanceof Array && data.most_famous_movies.length === 3 &&
    "awards" in data && data.awards === "string" &&
    "nationality" in data && Array.isArray(data.nationality) &&  data.nationality.every((nat) => typeof nat === "string")
  );
}

async function getActress (id:number):Promise<Actress|null> {
  try {
    const response = await fetch(
      `https://boolean-spec-frontend.vercel.app/freetestapi/actresses/${id}`);
      const data = await response.json()
      if (!isActress){
        throw new  Error (" fomato di data non valido ")
      }
      return data 
  
    
  } catch (error) {
    if(error instanceof Error){
     console.log("errore :", error)
  }
  else {
    console.log("errore sconoscuito",error)
  }
     return null;
}



}
// getActress(2).then((result) => {
// console.log(result); }) .catch((error) => {
//  console.log(error); });



//! milestone 4 

async function getAllActresses(): Promise<Actress[]> {
  try {
    const response = await fetch(
      `https://boolean-spec-frontend.vercel.app/freetestapi/actresses`
    );
    const data:unknown = await response.json();
    if (Array.isArray(data) && data.length >0) {
      const validActress = data.filter(el=>isActress(el))
      return validActress
    } else {
      throw new Error("Formato dati non valido");
    }
  } catch (error) {
    console.log("errore nel restituzione dei dati", error);
  }
  return []
}
getAllActresses().then(result=>console.log(result)).catch(error=>console.log(error))

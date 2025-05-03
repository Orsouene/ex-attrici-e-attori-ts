
//! MileStone-1
type Person = {
  readonly id:number;
  readonly name : string;
  birth_year:number;
  death_year?:number;
  biography:string;
  image:string;
};

//! MileStone-2
type ActressNat = 
|"American"
|"British"
|"Australian"
|"American"
|"South African" 
|"French"
|"Indian"
|"Spanish"
|"South Korean" 
| "Chinese"
 
type Actress = Person & {
  most_famous_movies: [string, string, string];
  awards: string;
  nationality: ActressNat;
};
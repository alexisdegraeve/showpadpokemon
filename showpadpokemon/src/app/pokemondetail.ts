
export interface pokemondetail {
  abilities: [ {
          ability : {
            name: string,
            url: string
          }
     }
  /*  {  ability: [name: string,
    url: string] } */
  ];
  name: string;
  weight: number;
  order: number;
  height: number;
  sprites: {
    front_default: string;
  }
}

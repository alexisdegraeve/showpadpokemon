export interface pokemondetail {
  abilities: [
    {
      ability: {
        name: string;
        url: string;
      };
    }
  ];
  stats: [
    {
      base_stat: number,
      stat: {
        name: string;
        url: string;
      };
    }
  ];
  name: string;
  weight: number;
  order: number;
  height: number;
  sprites: {
    front_default: string;
  };
}

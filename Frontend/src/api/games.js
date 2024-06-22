let games = [
  {
    id: 1,
    title: "The Legend of Zelda: Breath of the Wild",
    releaseDate: 2017,
    publisher: "Nintendo",
  },
  {
    id: 2,
    title: "Red Dead Redemption 2",
    releaseDate: 2018,
    publisher: "Rockstar Games",
  },
  {
    id: 3,
    title: "The Witcher 3: Wild Hunt",
    releaseDate: 2015,
    publisher: "CD Projekt",
  },
  {
    id: 4,
    title: "God of War",
    releaseDate: 2018,
    publisher: "Sony Interactive Entertainment",
  },
  {
    id: 5,
    title: "Cyberpunk 2077",
    releaseDate: 2020,
    publisher: "CD Projekt",
  },
  {
    id: 6,
    title: "Minecraft",
    releaseDate: 2011,
    publisher: "Mojang",
  },
  {
    id: 7,
    title: "Grand Theft Auto V",
    releaseDate: 2013,
    publisher: "Rockstar Games",
  },
  {
    id: 8,
    title: "Hades",
    releaseDate: 2020,
    publisher: "Supergiant Games",
  },
  {
    id: 9,
    title: "Among Us",
    releaseDate: 2018,
    publisher: "Innersloth",
  },
  {
    id: 10,
    title: "Fortnite",
    releaseDate: 2017,
    publisher: "Epic Games",
  },
  {
    id: 11,
    title: "Overwatch",
    releaseDate: 2016,
    publisher: "Blizzard Entertainment",
  },
  {
    id: 12,
    title: "Animal Crossing: New Horizons",
    releaseDate: 2020,
    publisher: "Nintendo",
  },
  {
    id: 13,
    title: "Dark Souls III",
    releaseDate: 2016,
    publisher: "Bandai Namco Entertainment",
  },
  {
    id: 14,
    title: "Super Mario Odyssey",
    releaseDate: 2017,
    publisher: "Nintendo",
  },
  {
    id: 15,
    title: "Half-Life: Alyx",
    releaseDate: 2020,
    publisher: "Valve",
  },
  {
    id: 16,
    title: "Celeste",
    releaseDate: 2018,
    publisher: "Matt Makes Games",
  },
  {
    id: 17,
    title: "Persona 5",
    releaseDate: 2016,
    publisher: "Atlus",
  },
  {
    id: 18,
    title: "Hollow Knight",
    releaseDate: 2017,
    publisher: "Team Cherry",
  },
  {
    id: 19,
    title: "Sekiro: Shadows Die Twice",
    releaseDate: 2019,
    publisher: "Activision",
  },
  {
    id: 20,
    title: "Doom Eternal",
    releaseDate: 2020,
    publisher: "Bethesda Softworks",
  },
];

export const getData = (filter = {}) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(
        games.filter((item) => {
          return (
            (!filter.title ||
              item.title.toLowerCase().includes(filter.title.toLowerCase())) &&
            (!filter.releaseDate ||
              item.releaseDate === parseInt(filter.releaseDate)) &&
            (!filter.publisher ||
              item.publisher
                .toLowerCase()
                .includes(filter.publisher.toLowerCase()))
          );
        })
      );
    }, 1000);
  });
};

export const updateGame = (updatedGame) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      games = games.map((game) =>
        game.id === updatedGame.id ? updatedGame : game
      );
      resolve();
    }, 500);
  });
};

export const deleteGame = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      games = games.filter((game) => game.id !== id);
      resolve();
    }, 500);
  });
};

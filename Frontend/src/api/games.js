const games = [
  {
    title: "The Legend of Zelda: Breath of the Wild",
    releaseDate: 2017,
    publisher: "Nintendo",
  },
  {
    title: "Red Dead Redemption 2",
    releaseDate: 2018,
    publisher: "Rockstar Games",
  },
  {
    title: "The Witcher 3: Wild Hunt",
    releaseDate: 2015,
    publisher: "CD Projekt",
  },
  {
    title: "God of War",
    releaseDate: 2018,
    publisher: "Sony Interactive Entertainment",
  },
  {
    title: "Cyberpunk 2077",
    releaseDate: 2020,
    publisher: "CD Projekt",
  },
  {
    title: "Minecraft",
    releaseDate: 2011,
    publisher: "Mojang",
  },
  {
    title: "Grand Theft Auto V",
    releaseDate: 2013,
    publisher: "Rockstar Games",
  },
  {
    title: "Hades",
    releaseDate: 2020,
    publisher: "Supergiant Games",
  },
  {
    title: "Among Us",
    releaseDate: 2018,
    publisher: "Innersloth",
  },
  {
    title: "Fortnite",
    releaseDate: 2017,
    publisher: "Epic Games",
  },
  {
    title: "Overwatch",
    releaseDate: 2016,
    publisher: "Blizzard Entertainment",
  },
  {
    title: "Animal Crossing: New Horizons",
    releaseDate: 2020,
    publisher: "Nintendo",
  },
  {
    title: "Dark Souls III",
    releaseDate: 2016,
    publisher: "Bandai Namco Entertainment",
  },
  {
    title: "Super Mario Odyssey",
    releaseDate: 2017,
    publisher: "Nintendo",
  },
  {
    title: "Half-Life: Alyx",
    releaseDate: 2020,
    publisher: "Valve",
  },
  {
    title: "Celeste",
    releaseDate: 2018,
    publisher: "Matt Makes Games",
  },
  {
    title: "Persona 5",
    releaseDate: 2016,
    publisher: "Atlus",
  },
  {
    title: "Hollow Knight",
    releaseDate: 2017,
    publisher: "Team Cherry",
  },
  {
    title: "Sekiro: Shadows Die Twice",
    releaseDate: 2019,
    publisher: "Activision",
  },
  {
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

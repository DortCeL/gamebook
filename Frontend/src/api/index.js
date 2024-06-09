const data = [
  {
    id: 1,
    name: "Seline",
    age: 44,
    gender: "Female",
    nationality: "Morocco",
  },
  {
    id: 2,
    name: "Franz",
    age: 43,
    gender: "Male",
    nationality: "Philippines",
  },
  {
    id: 3,
    name: "Aleksandr",
    age: 64,
    gender: "Male",
    nationality: "Serbia",
  },
  {
    id: 4,
    name: "Edward",
    age: 88,
    gender: "Male",
    nationality: "China",
  },
  {
    id: 5,
    name: "Helaine",
    age: 92,
    gender: "Female",
    nationality: "Portugal",
  },
  {
    id: 6,
    name: "Lindsey",
    age: 10,
    gender: "Male",
    nationality: "China",
  },
  {
    id: 7,
    name: "Haroun",
    age: 19,
    gender: "Male",
    nationality: "Thailand",
  },
  {
    id: 8,
    name: "Jonas",
    age: 34,
    gender: "Male",
    nationality: "United States",
  },
  {
    id: 9,
    name: "Steward",
    age: 75,
    gender: "Male",
    nationality: "China",
  },
  {
    id: 10,
    name: "Orton",
    age: 55,
    gender: "Male",
    nationality: "France",
  },
];
export const getPersons = (filters) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(
        data.filter((x) => {
          if (!!filters && Object.keys(filters).length > 0) {
            if (!!filters.name && x.name.includes(filters.name)) return true;
            else if (!!filters.age && x.age.includes(filters.age)) return true;
            else if (!!filters.gender && x.gender.includes(filters.gender))
              return true;
            else if (
              !!filters.nationality &&
              x.nationality.includes(filters.nationality)
            )
              return true;
            return false;
          }
          return true;
        })
      );
    }, 0.3 * 1000);
  });
};

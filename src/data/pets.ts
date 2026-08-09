export type Pet = {
  id: number;
  name: string;
  species: string;
  breed: string;
  adopted: boolean;
  age: number;
  intakeDate: Date;
  adoptionDate?: Date;
  medicalRecord: {
    vaccination: string[];
    weightKg: number;
    microchipId: string | null;
  };
  photo: string | null;
};

export const pets: Pet[] = [
  {
    id: 1,
    name: "Rubik",
    species: "Dog",
    breed: "Border Collie",
    adopted: true,
    age: 3,
    intakeDate: new Date("2024-04-15"),
    adoptionDate: new Date("2024-06-20"),
    medicalRecord: {
      vaccination: ["Rabies", "Distemper"],
      weightKg: 18.4,
      microchipId: null,
    },
    photo: null,
  },
  {
    id: 2,
    name: "Luna",
    species: "Dog",
    breed: "Golden Retriever",
    adopted: false,
    age: 2,
    intakeDate: new Date("2024-06-10"),
    medicalRecord: {
      vaccination: ["Rabies", "DHPP"],
      weightKg: 24.5,
      microchipId: "MC100234",
    },
    photo: null,
  },
  {
    id: 3,
    name: "Milo",
    species: "Cat",
    breed: "Persian",
    adopted: true,
    age: 4,
    intakeDate: new Date("2023-11-20"),
    adoptionDate: new Date("2024-01-15"),
    medicalRecord: {
      vaccination: ["Rabies", "FVRCP"],
      weightKg: 5.2,
      microchipId: "MC100235",
    },
    photo: null,
  },
  {
    id: 4,
    name: "Max",
    species: "Dog",
    breed: "German Shepherd",
    adopted: false,
    age: 5,
    intakeDate: new Date("2024-01-08"),
    medicalRecord: {
      vaccination: ["Rabies", "DHPP", "Bordetella"],
      weightKg: 31.8,
      microchipId: null,
    },
    photo: null,
  },
  {
    id: 5,
    name: "Coco",
    species: "Rabbit",
    breed: "Holland Lop",
    adopted: false,
    age: 1,
    intakeDate: new Date("2024-08-02"),
    medicalRecord: {
      vaccination: [],
      weightKg: 1.6,
      microchipId: null,
    },
    photo: null,
  },
  {
    id: 6,
    name: "Bella",
    species: "Dog",
    breed: "Beagle",
    adopted: true,
    age: 3,
    intakeDate: new Date("2023-09-14"),
    adoptionDate: new Date("2023-11-05"),
    medicalRecord: {
      vaccination: ["Rabies", "DHPP"],
      weightKg: 11.3,
      microchipId: "MC100236",
    },
    photo: null,
  },
];
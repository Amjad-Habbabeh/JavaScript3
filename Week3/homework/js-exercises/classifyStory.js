// Abdulkareem is a 35 year old man, that lives in Riyadh. He has a wife and 3 children. As a day job he's a construction worker, that makes houses. He likes to eat dates and smoke water pipe.

// Abdulkareem has a horse, named Adel. The horse is 15 years old and has the color brown. Usually the horse eats grass or helps transport materials for Abdulkareem.

// And they lived happily ever after!

class Horse {
  constructor(name, age, type, job, favorits, happy, color) {
    this.name = name;
    this.age = age;
    this.type = type;
    this.job = job;
    this.favorits = favorits;
    this.happy = happy;
    this.color = color;
  }
}
class Human extends Horse {
  constructor(
    name,
    age,
    type,
    location,
    married,
    children,
    job,
    favorits,
    happy,
  ) {
    super(name, age, type, job, favorits, happy);
    this.location = location;
    this.married = married;
    this.children = children;
  }
}
const AbdulkareemObject = new Human(
  'Abdulkareem',
  35,
  'man',
  'Riyadh',
  true,
  3,
  'construction worker',
  { eat: 'dates', smoke: 'water pipe' },
  true,
);
const AdelObject = new Horse(
  'Adel',
  15,
  'horse',
  'transport materials for Abdulkareem',
  'eats grass',
  true,
  'brown',
);
console.log(AbdulkareemObject);
console.log(AdelObject);

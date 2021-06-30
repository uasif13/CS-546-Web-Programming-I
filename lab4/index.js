const movies = require("./data/movies");
const connection = require("./config/mongoConnection");

const main = async () => {
  // Step 1: Create a movie
  const m1Plot =
    "Dom Cobb (Leonardo DiCaprio) is a thief with the rare ability to enter people's dreams and steal their secrets from their subconscious. His skill has made him a hot commodity in the world of corporate espionage but has also cost him everything he loves. Cobb gets a chance at redemption when he is offered a seemingly impossible task: Plant an idea in someone's mind. If he succeeds, it will be the perfect crime, but a dangerous enemy anticipates Cobb's every move.";
  const m1Info = { director: "Christopher Nolan", yearReleased: 2008 };
  const m1Cast = ["DiCaprio", "Gordan-Levitt", "Hardy"];
  const m1 = await movies.create(
    "Inception",
    m1Plot,
    "8.8",
    "2h42m",
    "Action/Sci-fi",
    m1Cast,
    m1Info
  );
  // Step 2: Log the movie
  console.log(m1);
  console.log(await movies.get(m1._id.toString()))
  // Step 3: Create a 2nd movie
  const m2Plot =
    "A depressed man (Edward Norton) suffering from insomnia meets a strange soap salesman named Tyler Durden (Brad Pitt) and soon finds himself living in his squalid house after his perfect apartment is destroyed. The two bored men form an underground club with strict rules and fight other men who are fed up with their mundane lives. Their perfect partnership frays when Marla (Helena Bonham Carter), a fellow support group crasher, attracts Tyler's attention.";
  const m2Info = { director: "David Fincher", yearReleased: 1999 };
  const m2Cast = ["Pitt", "Norton", "Leto"];
  const m2 = await movies.create(
    "Fight Club",
    m2Plot,
    "8.8",
    "2h31m",
    "Drama/Thriller",
    m2Cast,
    m2Info
  );
  // Step 4: Query all movies and log them all
  const total = await movies.getAll();
  console.log(total);
  // Step 5: Create a 3rd movie
  const m3Plot =
    "Following world war, London is a police state occupied by a fascist government, and a vigilante known only as V (Hugo Weaving) uses terrorist tactics to fight the oppressors of the world in which he now lives. When V saves a young woman named Evey (Natalie Portman) from the secret police, he discovers an ally in his fight against England's oppressors.";
  const m3Info = { director: "James McTeigue", yearReleased: 2006 };
  const m3Cast = ["Portman", "Weaving", "Hurt"];
  const m3 = await movies.create(
    "V for Vendetta",
    m3Plot,
    "8.2",
    "2h13m",
    "Action/Thriller",
    m3Cast,
    m3Info
  );
const m4 = await movies.create(
'Bill and Ted Face the Music',
"Once told they'd save the universe during a time-traveling adventure, 2 would-be rockers from San Dimas, California find themselves as middle-aged dads still trying to crank out a hit song and fulfill their destiny.",
'PG-13',
'1hr 31min',
'Comedy',
['Keanu Reeves', 'Alex Winter'],
{ director: 'Dean Parisot', yearReleased: 2020 },
)
console.log(m4)
  // Step 6: Log the newly created 3rd movie
  console.log(m3);
  // Step 7: Rename the first movie's title
  const updM1 = await movies.rename(m1._id, "Fake Inception");
  // Step 8: Log the first movie with the updated title
  console.log(updM1);
  // Step 9: Remove the second movie you created
  const output = await movies.remove(m2._id);
  console.log(output);
  // Step 10: Query all movies and log them all
  const total2 = await movies.getAll();
  console.log(total2);
  // Step 11: Try to create a movie with bad input parameters to make sure it throws errors
  try {
    const badMovie = await movies.create(
      "Bad Movie",
      "The plot of this movie is an error",
      "-10.0",
      "<1ms",
      "Horror",
      ["CS 546 Student"],
      { director: "Patrick Hill", yearReleased: 2049 }
    );
  } catch (e) {
    console.log(e);
  }
  // Step 12: Try to remove a movie that does not exist to make sure it throws errors
  try {
    const output = await movies.remove("507f1f77bcf86cd799439011");
  } catch (e) {
    console.log(e);
  }
  // Step 13: Try to rename a movie that does not exist to make sure it throws errors
  try {
    const fakeMovie = await movies.rename(
      "507f1f77bcf86cd799439011",
      "FakeTitle"
    );
  } catch (e) {
    console.log(e);
  }
  // Step 14: Try to rename a movie passing in invalid data for the parameter to make sure it throws errors
  try {
    const fakeRename = await movies.rename(m2._id, 101);
  } catch (e) {
    console.log(e);
  }
  // Step 15: Try getting a movie that does not exist to make sure it throws errors
  try {
    const dne = await movies.get("507f1f77bcf86cd799439011");
  } catch (e) {
    console.log(e);
  }
};

main();

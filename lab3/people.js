const axios = require("axios");

async function getPeople() {
  const { data } = await axios.get(
    "https://gist.githubusercontent.com/graffixnyc/31e9ef8b7d7caa742f56dc5f5649a57f/raw/43356c676c2cdc81f81ca77b2b7f7c5105b53d7f/people.json"
  );
  return data;
}

module.exports = {
  getPeople,
  //   id is num bet 1 and 1000 inclusive
  getPersonById: async (id) => {
    const data = await getPeople();
    if (typeof id != "number") throw `${id} is not a number`;
    if (isNaN(id)) throw `${id} is NaN`;
    if (id < 1 || id > 1000) throw `${id} is not between 1 and 1000 inclusive`;
    return data[id - 1];
  },
  howManyPerState: async (stateAbbrv) => {
    const data = await getPeople();
    if (typeof stateAbbrv != "string") throw `${stateAbbrv} is not a string`;
    let count = 0;
    for (i in data) {
      if (data[i].address.state == stateAbbrv) count++;
    }
    if (count == 0) throw `${stateAbbrv} has no people that live in that state`;
    return count;
  },
  personByAge: async (index) => {
    const data = await getPeople();
    if (typeof index != "number") throw `${index} is not a number`;
    if (isNaN(index)) throw `${index} is NaN`;
    if (index < 0 || index > 999)
      throw `${index} is not between 1 and 1000 inclusive`;
    data.sort((a, b) => {
      return new Date(a.date_of_birth) - new Date(b.date_of_birth);
    });
    let age = new Date() - new Date(data[index].date_of_birth);
    return {
      first_name: data[index].first_name,
      last_name: data[index].last_name,
      date_of_birth: data[index].date_of_birth,
      age: Math.abs(new Date(age).getUTCFullYear() - 1970),
    };
  },
  peopleMetrics: async () => {
    const data = await getPeople();
    const myObj = {
      totalLetters: 0,
      totalVowels: 0,
      totalConsonants: 0,
      longestName: "",
      shortestName: "",
      mostRepeatingCity: "",
      averageAge: 0,
    };
    const consoRegex = /[b-df-hj-np-tv-z]/gi;
    const vowelRegex = /[aeiou]/gi;
    let longest = "";
    let shortest = "adjfkladsjflaksfddksjlfsdlkjdsfsdlkfjsdl";
    let city = {};
    let age = [];
    for (i in data) {
      myObj.totalLetters +=
        data[i].first_name.length + data[i].last_name.length;
      myObj.totalVowels +=
        (data[i].first_name.match(vowelRegex) || []).length +
        (data[i].last_name.match(vowelRegex) || []).length;
      myObj.totalConsonants +=
        (data[i].first_name.match(consoRegex) || []).length +
        (data[i].last_name.match(consoRegex) || []).length;
      if (
        longest.length <
        data[i].first_name.length + data[i].last_name.length + 1
      ) {
        longest = `${data[i].first_name} ${data[i].last_name}`;
      }
      if (
        shortest.length >
        data[i].first_name.length + data[i].last_name.length + 1
      ) {
        shortest = `${data[i].first_name} ${data[i].last_name}`;
      }
      if (city.hasOwnProperty(data[i].address.city)) {
        city[data[i].address.city]++;
      } else {
        city[data[i].address.city] = 1;
      }
      let ithAge = new Date() - new Date(data[i].date_of_birth);
      age.push(Math.abs(new Date(ithAge).getUTCFullYear() - 1970));
    }
    myObj.longestName = longest;
    myObj.shortestName = shortest;
    let countCity = 0;
    let place = "";
    for (const town in city) {
      if (countCity < city[town]) {
        place = town;
        countCity = city[town];
      }
    }
    myObj.mostRepeatingCity = place;
    myObj.averageAge = Math.round(age.reduce((a, b) => a + b) / age.length);
    return myObj;
  },
};

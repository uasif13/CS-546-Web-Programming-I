const ppl = require("./people.js");
const work = require("./work.js");

async function main() {
  // gets ppldata
  //   try {
  //     const pplData = await ppl.getPeople();
  //     console.log(pplData);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // getPersonById
  try {
    const data = await ppl.getPersonById(4);
    console.log(data);
  } catch (e) {
    console.log(e);
  }
  // howManyperState
  try {
    const data = await ppl.howManyPerState("NY");
    console.log(data);
  } catch (e) {
    console.log(e);
  }
  //   personbyAge
  try {
    const data = await ppl.personByAge(43);
    console.log(data);
  } catch (e) {
    console.log(e);
  }
  //   person metrics
  try {
    const data = await ppl.peopleMetrics();
    console.log(data);
  } catch (e) {
    console.log(e);
  }
  //   employeesList
  try {
    const data = await work.listEmployees();
    console.log(data);
  } catch (e) {
    console.log(e);
  }
  // phoneNumber
  try {
    const data = await work.fourOneOne("240-144-7553");
    console.log(data);
  } catch (e) {
    console.log(e);
  }
  // where they work
  try {
    const data = await work.whereDoTheyWork("299-63-8866");
    console.log(data);
  } catch (e) {
    console.log(e);
  }
  // copy this for each test case
  // try {
  //   console.log();
  // } catch (e) {
  //   console.log(e);
  // }
}

main();

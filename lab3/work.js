const axios = require("axios");
const people = require("./people.js");

async function getWork() {
  const { data } = await axios.get(
    "https://gist.githubusercontent.com/graffixnyc/febcdd2ca91ddc685c163158ee126b4f/raw/c9494f59261f655a24019d3b94dab4db9346da6e/work.json"
  );
  return data;
}

module.exports = {
  getWork,
  listEmployees: async () => {
    const workData = await getWork();
    const pplData = await people.getPeople();
    let myArray = [];
    for (i in workData) {
      let myObj = {};
      let companyName = workData[i].company_name;
      let employees = workData[i].employees;
      for (k in employees) {
        let firstName = pplData[employees[k] - 1].first_name;
        let lastName = pplData[employees[k] - 1].last_name;
        let employee = {
          first_name: firstName,
          last_name: lastName,
        };
        employees[k] = employee;
      }
      myObj = {
        company_name: companyName,
        employees: employees,
      };
      myArray.push(myObj);
    }
    return myArray;
  },
  fourOneOne: async (phoneNumber) => {
    const data = await getWork();
    if (typeof phoneNumber != "string") throw `${phoneNumber} is not a string`;
    const phoneRegex = /\d{3}-\d{3}-\d{4}/;
    if (!phoneRegex.test(phoneNumber))
      throw `${phoneNumber} is not in proper format of xxx-xxx-xxxx`;
    for (i in data) {
      if (data[i].company_phone == phoneNumber) {
        const company_name = data[i].company_name;
        const company_address = data[i].company_address;
        return { company_name, company_address };
      }
    }
    throw `${phoneNumber} is not in the list`;
  },
  whereDoTheyWork: async (ssn) => {
    const workData = await getWork();
    const pplData = await people.getPeople();
    if (typeof ssn != "string") throw `${ssn} is not a string`;
    const ssnRegex = /\d{3}-\d{2}-\d{4}/;
    if (!ssnRegex.test(ssn))
      throw `${ssn} is not in proper format of xxx-xx-xxxx`;
    let id = -1;
    let fullName = "";
    for (i in pplData) {
      //   console.log(pplData[i].ssn);
      if (pplData[i].ssn == ssn) {
        id = pplData[i].id;
        fullName = `${pplData[i].first_name} ${pplData[i].last_name}`;
      }
    }
    if (id == -1) throw `{ssn} is not in the people listed in people.json`;
    for (j in workData) {
      for (k in workData[j].employees) {
        if (workData[j].employees[k] == id)
          return `${fullName} works at ${workData[j].company_name}.`;
      }
    }
    throw `${ssn} is not in the people listed in work.json`;
  },
};

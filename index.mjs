import {loadStdlib} from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
const stdlib = loadStdlib(process.env);

const startingBalance = stdlib.parseCurrency(100);

const accAlice =
  await stdlib.newTestAccount(startingBalance);
// console.log(`Hello, Alice test account ${accAlice}`);

console.log('Launching...');
const ctcAlice = accAlice.contract(backend);
console.log(`Alice deployed the contract`)

const voters = []

const newVoter = async (who) => {
  const acc =
  await stdlib.newTestAccount(startingBalance);
  const ctcBob = acc.contract(backend, ctcAlice.getInfo());
  console.log(`${who} attaches to contract`)
  const voterAddress = acc.getAddress()
  voters.push(voterAddress)
}

const getVoters = async () => {
 await newVoter("voter 1")
 await newVoter("voter 2")
 await newVoter("voter 3")
 await newVoter("voter 4")
 await newVoter("voter 5")
 console.log(voters)
}


console.log('Starting backends...');
await ctcAlice.p.Alice({
    // implement Alice's interact object here
    ready : () => {
      console.log("contract is ready")
      getVoters()
    },
});

console.log('Goodbye, Alice and Bobs!');

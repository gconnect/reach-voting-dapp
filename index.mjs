import {loadStdlib, ask} from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
const stdlib = loadStdlib(process.env);
// stdlib.setProviderByName('TestNet');

const startingBalance = stdlib.parseCurrency(100);

const accAlice =
  await stdlib.newTestAccount(startingBalance);
// console.log(`Hello, Alice test account ${accAlice}`);

console.log('Launching...');
const ctcAlice = accAlice.contract(backend);
// console.log(`Alice deployed the contract`)
ctcAlice.getInfo().then((info) => {
  console.log(`The contract is deployed as = ${JSON.stringify(info)}`); 
  console.log(`${info}`)
});

const voters = []

const newVoter = async (who) => {
  console.log(`creating new ${who}`)
  const acc =
  await stdlib.newTestAccount(startingBalance);
  const ctcBob = await acc.contract(backend, ctcAlice.getInfo());
  console.log(`${who} attaches to contract`)
  const voterAddress = acc.getAddress()
  voters.push(voterAddress)
}

const getVoters = async () => {
 await newVoter("voter1")
 await newVoter("voter2")
 await newVoter("voter3")
 await newVoter("voter4")
 await newVoter("voter5")
 console.log(voters)
}

console.log('Starting backends...');
await ctcAlice.p.Alice({
    // implement Alice's interact object here
    ready : () => {
      console.log("Alice is ready to accept attachers")
        // getVoters()
    },
    log: () =>{
      console.log("Attaching")
    }
});


// await getVoters()
const users = await stdlib.newTestAccounts(6, startingBalance);

const ctcWho = (whoi) =>  users[whoi].contract(backend, ctcAlice.getInfo());

const voter = async (whoi) => {
  const who = users[whoi];
  const ctc = ctcWho(whoi);
  // console.log('Voter address of', stdlib.formatAddress(who));
  const votersAddress = stdlib.formatAddress(who)
  if(voters.length < 5){
    voters.push(votersAddress)
    console.log(voters)
    await ctc.apis.Bob.register;  
  }else{
    await ctcAlice.apis.Bob.done;
    console.log("Voters should not be more than 5")
  }
}

await voter(0)
await voter(1)
await voter(2)
await voter(3)
await voter(4)
await voter(5)


console.log('Goodbye, Alice and Bobs!');

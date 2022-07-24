import { loadStdlib } from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
const stdlib = loadStdlib(process.env);

const startingBalance = stdlib.parseCurrency(100);

const accAlice = await stdlib.newTestAccount(startingBalance);

console.log('Launching...');
const ctcAlice = accAlice.contract(backend);

ctcAlice.getInfo().then((info) => {
  console.log(`The contract is deployed as = ${JSON.stringify(info)}`); 
  console.log(`${info}`)
});

const voters = []

console.log('Starting backends...');
await ctcAlice.p.Alice({
    // implement Alice's interact object here
    ready : () => {
      console.log("Alice is ready to accept attachers")
    },
    log: () =>{
      console.log("Attaching")
    }
});


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

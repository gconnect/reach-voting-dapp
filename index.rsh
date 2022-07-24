'reach 0.1';

export const main = Reach.App(() => {
  setOptions({ untrustworthyMaps: true });

  const A = Participant('Alice', {
    // Specify Alice's interact interface here
    ready: Fun([], Null),
    log: Fun(true, Null)
  });

  const B = API('Bob', {
    // Specify Bob's interact interface here
    register: Fun([], Bool),
    done: Fun([], Null),
  });

  const M = View("Message", {
    logger: Bytes(20)
  })

  init();
  A.publish();
  A.interact.ready();
  M.logger.set("voter is less than 5")

  //SECOND LEVEL
  const voters = new Set();


  const [ done, howmany] =
  parallelReduce([ true, 0 ])
  .invariant(balance() == 0)
  .invariant(voters.Map.size() == howmany)
  .while(!done && howmany < 5)
  .api_(B.register, () => {
    check( !voters.member(this), "not yet a member" );
    check(howmany == 5)
    return [ (k) => {
      k(true);
      voters.insert(this);
      A.interact.log(this,"voter is less than 5");

      // if(howmany < 5){
      //   A.interact.log("voter is less than 5");
      //   k(true);
      //   voters.insert(this);
      //   return [ done, howmany + 1 ];
      // }else{
      //   A.interact.log("voter is more than 5");
      //   voters.remove(this);
      //   k(false)
      //   return [ done, howmany - 1 ];
      // }
      return [ done, howmany + 1 ];
    }]; 
  }) 
  .api(B.done, (k) => {
      check( this == A, "you are the deployer");
      check(howmany == 5)
      k(null);
      A.interact.log("Done when users are 5");
      return [ true, howmany ];
  });

  commit();
  A.interact.log();
  exit();

});

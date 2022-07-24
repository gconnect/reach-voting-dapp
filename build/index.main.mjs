// Automatically generated with Reach 0.1.11 (578589af)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (578589af)';
export const _backendVersion = 17;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Bool;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Null;
  const ctc4 = stdlib.T_Data({
    None: ctc3,
    Some: ctc3
    });
  const map0_ctc = ctc4;
  
  
  return {
    infos: {
      },
    views: {
      3: [ctc0, ctc1, ctc2]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Tuple([ctc1]);
  return {
    mapDataTy: ctc2
    };
  };
export async function Alice(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Alice expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Alice expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Tuple([]);
  const ctc3 = stdlib.T_Data({
    Bob_done0_60: ctc2,
    Bob_register0_60: ctc2
    });
  const ctc4 = stdlib.T_Bool;
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  
  const txn1 = await (ctc.sendrecv({
    args: [],
    evt_cnt: 0,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:19:5:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:19:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [], secs: v346, time: v345, didSend: v22, from: v344 } = txn1;
      
      ;
      
      const v348 = true;
      const v349 = stdlib.checkedBigNumberify('./index.rsh:26:26:decimal', stdlib.UInt_max, '0');
      const v350 = v345;
      
      if (await (async () => {
        const v365 = stdlib.lt(v349, stdlib.checkedBigNumberify('./index.rsh:29:29:decimal', stdlib.UInt_max, '5'));
        const v366 = v348 ? false : v365;
        
        return v366;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v346, time: v345, didSend: v22, from: v344 } = txn1;
  ;
  stdlib.protect(ctc0, await interact.ready(), {
    at: './index.rsh:20:19:application',
    fs: ['at ./index.rsh:20:19:application call to [unknown function] (defined at: ./index.rsh:20:19:function exp)', 'at ./index.rsh:20:19:application call to "liftedInteract" (defined at: ./index.rsh:20:19:application)'],
    msg: 'ready',
    who: 'Alice'
    });
  
  let v348 = true;
  let v349 = stdlib.checkedBigNumberify('./index.rsh:26:26:decimal', stdlib.UInt_max, '0');
  let v350 = v345;
  
  while (await (async () => {
    const v365 = stdlib.lt(v349, stdlib.checkedBigNumberify('./index.rsh:29:29:decimal', stdlib.UInt_max, '5'));
    const v366 = v348 ? false : v365;
    
    return v366;})()) {
    const txn2 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 2,
      out_tys: [ctc3],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v394], secs: v396, time: v395, didSend: v201, from: v393 } = txn2;
    switch (v394[0]) {
      case 'Bob_done0_60': {
        const v397 = v394[1];
        undefined /* setApiDetails */;
        ;
        const v404 = stdlib.addressEq(v393, v344);
        stdlib.assert(v404, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:53:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:52:20:application call to [unknown function] (defined at: ./index.rsh:52:20:function exp)'],
          msg: 'you are the deployer',
          who: 'Alice'
          });
        const v406 = stdlib.eq(v349, stdlib.checkedBigNumberify('./index.rsh:54:24:decimal', stdlib.UInt_max, '5'));
        stdlib.assert(v406, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:54:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:52:20:application call to [unknown function] (defined at: ./index.rsh:52:20:function exp)'],
          msg: null,
          who: 'Alice'
          });
        const v408 = null;
        await txn2.getOutput('Bob_done', 'v408', ctc0, v408);
        const v415 = 'Done when users are 5';
        stdlib.protect(ctc0, await interact.log(v415), {
          at: './index.rsh:56:21:application',
          fs: ['at ./index.rsh:56:21:application call to [unknown function] (defined at: ./index.rsh:56:21:function exp)', 'at ./index.rsh:56:21:application call to "liftedInteract" (defined at: ./index.rsh:56:21:application)', 'at ./index.rsh:52:20:application call to [unknown function] (defined at: ./index.rsh:52:20:function exp)'],
          msg: 'log',
          who: 'Alice'
          });
        
        const cv348 = true;
        const cv349 = v349;
        const cv350 = v395;
        
        v348 = cv348;
        v349 = cv349;
        v350 = cv350;
        
        continue;
        break;
        }
      case 'Bob_register0_60': {
        const v455 = v394[1];
        undefined /* setApiDetails */;
        ;
        const v476 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v393), null);
        let v477;
        switch (v476[0]) {
          case 'None': {
            const v478 = v476[1];
            v477 = false;
            
            break;
            }
          case 'Some': {
            const v479 = v476[1];
            v477 = true;
            
            break;
            }
          }
        const v480 = v477 ? false : true;
        stdlib.assert(v480, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:31:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:33:18:application call to [unknown function] (defined at: ./index.rsh:33:18:function exp)'],
          msg: 'not yet a member',
          who: 'Alice'
          });
        const v482 = stdlib.eq(v349, stdlib.checkedBigNumberify('./index.rsh:32:22:decimal', stdlib.UInt_max, '5'));
        stdlib.assert(v482, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:32:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:33:18:application call to [unknown function] (defined at: ./index.rsh:33:18:function exp)'],
          msg: null,
          who: 'Alice'
          });
        const v484 = stdlib.lt(v349, stdlib.checkedBigNumberify('./index.rsh:38:20:decimal', stdlib.UInt_max, '5'));
        if (v484) {
          const v486 = 'voter is less than 5';
          stdlib.protect(ctc0, await interact.log(v486), {
            at: './index.rsh:39:23:application',
            fs: ['at ./index.rsh:39:23:application call to [unknown function] (defined at: ./index.rsh:39:23:function exp)', 'at ./index.rsh:39:23:application call to "liftedInteract" (defined at: ./index.rsh:39:23:application)', 'at ./index.rsh:33:18:application call to [unknown function] (defined at: ./index.rsh:33:18:function exp)'],
            msg: 'log',
            who: 'Alice'
            });
          
          const v487 = true;
          await txn2.getOutput('Bob_register', 'v487', ctc4, v487);
          await stdlib.mapSet(map0, v393, null);
          const v494 = stdlib.add(v349, stdlib.checkedBigNumberify('./index.rsh:42:34:decimal', stdlib.UInt_max, '1'));
          const cv348 = v348;
          const cv349 = v494;
          const cv350 = v395;
          
          v348 = cv348;
          v349 = cv349;
          v350 = cv350;
          
          continue;}
        else {
          const v500 = 'voter is more than 5';
          stdlib.protect(ctc0, await interact.log(v500), {
            at: './index.rsh:44:23:application',
            fs: ['at ./index.rsh:44:23:application call to [unknown function] (defined at: ./index.rsh:44:23:function exp)', 'at ./index.rsh:44:23:application call to "liftedInteract" (defined at: ./index.rsh:44:23:application)', 'at ./index.rsh:33:18:application call to [unknown function] (defined at: ./index.rsh:33:18:function exp)'],
            msg: 'log',
            who: 'Alice'
            });
          
          await stdlib.mapSet(map0, v393, undefined /* Nothing */);
          const v502 = false;
          await txn2.getOutput('Bob_register', 'v502', ctc4, v502);
          const v508 = stdlib.sub(v349, stdlib.checkedBigNumberify('./index.rsh:47:34:decimal', stdlib.UInt_max, '1'));
          const cv348 = v348;
          const cv349 = v508;
          const cv350 = v395;
          
          v348 = cv348;
          v349 = cv349;
          v350 = cv350;
          
          continue;}
        break;
        }
      }
    
    }
  stdlib.protect(ctc0, await interact.log(), {
    at: './index.rsh:61:17:application',
    fs: ['at ./index.rsh:61:17:application call to [unknown function] (defined at: ./index.rsh:61:17:function exp)', 'at ./index.rsh:61:17:application call to "liftedInteract" (defined at: ./index.rsh:61:17:application)'],
    msg: 'log',
    who: 'Alice'
    });
  
  return;
  
  
  };
export async function _Bob_done3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Bob_done3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Bob_done3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Tuple([]);
  const ctc6 = stdlib.T_Data({
    Bob_done0_60: ctc5,
    Bob_register0_60: ctc5
    });
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v344, v348, v349] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc2, ctc3, ctc4]);
  const v369 = stdlib.protect(ctc5, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:52:7:application call to [unknown function] (defined at: ./index.rsh:52:7:function exp)', 'at ./index.rsh:26:17:application call to "runBob_done0_60" (defined at: ./index.rsh:52:7:function exp)', 'at ./index.rsh:26:17:application call to [unknown function] (defined at: ./index.rsh:26:17:function exp)'],
    msg: 'in',
    who: 'Bob_done'
    });
  const v373 = ['Bob_done0_60', v369];
  
  const txn1 = await (ctc.sendrecv({
    args: [v344, v348, v349, v373],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc6],
    pay: [stdlib.checkedBigNumberify('./index.rsh:52:7:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v394], secs: v396, time: v395, didSend: v201, from: v393 } = txn1;
      
      switch (v394[0]) {
        case 'Bob_done0_60': {
          const v397 = v394[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Bob_done"
            });
          ;
          const v408 = null;
          const v409 = await txn1.getOutput('Bob_done', 'v408', ctc0, v408);
          
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          
          break;
          }
        case 'Bob_register0_60': {
          const v455 = v394[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc3, ctc4, ctc6],
    waitIfNotPresent: false
    }));
  const {data: [v394], secs: v396, time: v395, didSend: v201, from: v393 } = txn1;
  switch (v394[0]) {
    case 'Bob_done0_60': {
      const v397 = v394[1];
      undefined /* setApiDetails */;
      ;
      const v404 = stdlib.addressEq(v393, v344);
      stdlib.assert(v404, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:53:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:52:20:application call to [unknown function] (defined at: ./index.rsh:52:20:function exp)'],
        msg: 'you are the deployer',
        who: 'Bob_done'
        });
      const v406 = stdlib.eq(v349, stdlib.checkedBigNumberify('./index.rsh:54:24:decimal', stdlib.UInt_max, '5'));
      stdlib.assert(v406, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:54:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:52:20:application call to [unknown function] (defined at: ./index.rsh:52:20:function exp)'],
        msg: null,
        who: 'Bob_done'
        });
      const v408 = null;
      const v409 = await txn1.getOutput('Bob_done', 'v408', ctc0, v408);
      if (v201) {
        stdlib.protect(ctc0, await interact.out(v397, v409), {
          at: './index.rsh:52:8:application',
          fs: ['at ./index.rsh:52:8:application call to [unknown function] (defined at: ./index.rsh:52:8:function exp)', 'at ./index.rsh:55:8:application call to "k" (defined at: ./index.rsh:52:20:function exp)', 'at ./index.rsh:52:20:application call to [unknown function] (defined at: ./index.rsh:52:20:function exp)'],
          msg: 'out',
          who: 'Bob_done'
          });
        }
      else {
        }
      
      return;
      
      break;
      }
    case 'Bob_register0_60': {
      const v455 = v394[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Bob_register3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Bob_register3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Bob_register3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Tuple([]);
  const ctc6 = stdlib.T_Data({
    Bob_done0_60: ctc5,
    Bob_register0_60: ctc5
    });
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v344, v348, v349] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc2, ctc3, ctc4]);
  const v375 = ctc.selfAddress();
  const v377 = stdlib.protect(ctc5, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:30:24:application call to [unknown function] (defined at: ./index.rsh:30:24:function exp)', 'at ./index.rsh:26:17:application call to "runBob_register0_60" (defined at: ./index.rsh:30:8:function exp)', 'at ./index.rsh:26:17:application call to [unknown function] (defined at: ./index.rsh:26:17:function exp)'],
    msg: 'in',
    who: 'Bob_register'
    });
  const v378 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v375), null);
  let v379;
  switch (v378[0]) {
    case 'None': {
      const v380 = v378[1];
      v379 = false;
      
      break;
      }
    case 'Some': {
      const v381 = v378[1];
      v379 = true;
      
      break;
      }
    }
  const v382 = v379 ? false : true;
  stdlib.assert(v382, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:31:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:30:24:application call to [unknown function] (defined at: ./index.rsh:30:24:function exp)', 'at ./index.rsh:26:17:application call to "runBob_register0_60" (defined at: ./index.rsh:30:8:function exp)', 'at ./index.rsh:26:17:application call to [unknown function] (defined at: ./index.rsh:26:17:function exp)'],
    msg: 'not yet a member',
    who: 'Bob_register'
    });
  const v384 = stdlib.eq(v349, stdlib.checkedBigNumberify('./index.rsh:32:22:decimal', stdlib.UInt_max, '5'));
  stdlib.assert(v384, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:32:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:30:24:application call to [unknown function] (defined at: ./index.rsh:30:24:function exp)', 'at ./index.rsh:26:17:application call to "runBob_register0_60" (defined at: ./index.rsh:30:8:function exp)', 'at ./index.rsh:26:17:application call to [unknown function] (defined at: ./index.rsh:26:17:function exp)'],
    msg: null,
    who: 'Bob_register'
    });
  const v389 = ['Bob_register0_60', v377];
  
  const txn1 = await (ctc.sendrecv({
    args: [v344, v348, v349, v389],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc6],
    pay: [stdlib.checkedBigNumberify('./index.rsh:30:8:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v394], secs: v396, time: v395, didSend: v201, from: v393 } = txn1;
      
      switch (v394[0]) {
        case 'Bob_done0_60': {
          const v397 = v394[1];
          
          break;
          }
        case 'Bob_register0_60': {
          const v455 = v394[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Bob_register"
            });
          ;
          stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v393), null);
          const v484 = stdlib.lt(v349, stdlib.checkedBigNumberify('./index.rsh:38:20:decimal', stdlib.UInt_max, '5'));
          if (v484) {
            const v487 = true;
            const v488 = await txn1.getOutput('Bob_register', 'v487', ctc3, v487);
            
            await stdlib.simMapSet(sim_r, 0, v393, null);
            const v494 = stdlib.add(v349, stdlib.checkedBigNumberify('./index.rsh:42:34:decimal', stdlib.UInt_max, '1'));
            const v955 = v348;
            const v956 = v494;
            const v958 = stdlib.lt(v494, stdlib.checkedBigNumberify('./index.rsh:29:29:decimal', stdlib.UInt_max, '5'));
            const v959 = v348 ? false : v958;
            if (v959) {
              sim_r.isHalt = false;
              }
            else {
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }}
          else {
            await stdlib.simMapSet(sim_r, 0, v393, undefined /* Nothing */);
            const v502 = false;
            const v503 = await txn1.getOutput('Bob_register', 'v502', ctc3, v502);
            
            const v508 = stdlib.sub(v349, stdlib.checkedBigNumberify('./index.rsh:47:34:decimal', stdlib.UInt_max, '1'));
            const v960 = v348;
            const v961 = v508;
            const v963 = stdlib.lt(v508, stdlib.checkedBigNumberify('./index.rsh:29:29:decimal', stdlib.UInt_max, '5'));
            const v964 = v348 ? false : v963;
            if (v964) {
              sim_r.isHalt = false;
              }
            else {
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }}
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc3, ctc4, ctc6],
    waitIfNotPresent: false
    }));
  const {data: [v394], secs: v396, time: v395, didSend: v201, from: v393 } = txn1;
  switch (v394[0]) {
    case 'Bob_done0_60': {
      const v397 = v394[1];
      return;
      break;
      }
    case 'Bob_register0_60': {
      const v455 = v394[1];
      undefined /* setApiDetails */;
      ;
      const v476 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v393), null);
      let v477;
      switch (v476[0]) {
        case 'None': {
          const v478 = v476[1];
          v477 = false;
          
          break;
          }
        case 'Some': {
          const v479 = v476[1];
          v477 = true;
          
          break;
          }
        }
      const v480 = v477 ? false : true;
      stdlib.assert(v480, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:31:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:33:18:application call to [unknown function] (defined at: ./index.rsh:33:18:function exp)'],
        msg: 'not yet a member',
        who: 'Bob_register'
        });
      const v482 = stdlib.eq(v349, stdlib.checkedBigNumberify('./index.rsh:32:22:decimal', stdlib.UInt_max, '5'));
      stdlib.assert(v482, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:32:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:33:18:application call to [unknown function] (defined at: ./index.rsh:33:18:function exp)'],
        msg: null,
        who: 'Bob_register'
        });
      const v484 = stdlib.lt(v349, stdlib.checkedBigNumberify('./index.rsh:38:20:decimal', stdlib.UInt_max, '5'));
      if (v484) {
        const v487 = true;
        const v488 = await txn1.getOutput('Bob_register', 'v487', ctc3, v487);
        if (v201) {
          stdlib.protect(ctc0, await interact.out(v455, v488), {
            at: './index.rsh:30:9:application',
            fs: ['at ./index.rsh:30:9:application call to [unknown function] (defined at: ./index.rsh:30:9:function exp)', 'at ./index.rsh:40:10:application call to "k" (defined at: ./index.rsh:33:18:function exp)', 'at ./index.rsh:33:18:application call to [unknown function] (defined at: ./index.rsh:33:18:function exp)'],
            msg: 'out',
            who: 'Bob_register'
            });
          }
        else {
          }
        
        await stdlib.mapSet(map0, v393, null);
        const v494 = stdlib.add(v349, stdlib.checkedBigNumberify('./index.rsh:42:34:decimal', stdlib.UInt_max, '1'));
        const v955 = v348;
        const v956 = v494;
        const v958 = stdlib.lt(v494, stdlib.checkedBigNumberify('./index.rsh:29:29:decimal', stdlib.UInt_max, '5'));
        const v959 = v348 ? false : v958;
        if (v959) {
          return;
          }
        else {
          return;
          }}
      else {
        await stdlib.mapSet(map0, v393, undefined /* Nothing */);
        const v502 = false;
        const v503 = await txn1.getOutput('Bob_register', 'v502', ctc3, v502);
        if (v201) {
          stdlib.protect(ctc0, await interact.out(v455, v503), {
            at: './index.rsh:30:9:application',
            fs: ['at ./index.rsh:30:9:application call to [unknown function] (defined at: ./index.rsh:30:9:function exp)', 'at ./index.rsh:46:10:application call to "k" (defined at: ./index.rsh:33:18:function exp)', 'at ./index.rsh:33:18:application call to [unknown function] (defined at: ./index.rsh:33:18:function exp)'],
            msg: 'out',
            who: 'Bob_register'
            });
          }
        else {
          }
        
        const v508 = stdlib.sub(v349, stdlib.checkedBigNumberify('./index.rsh:47:34:decimal', stdlib.UInt_max, '1'));
        const v960 = v348;
        const v961 = v508;
        const v963 = stdlib.lt(v508, stdlib.checkedBigNumberify('./index.rsh:29:29:decimal', stdlib.UInt_max, '5'));
        const v964 = v348 ? false : v963;
        if (v964) {
          return;
          }
        else {
          return;
          }}
      break;
      }
    }
  
  
  };
export async function Bob_done(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bob_done expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bob_done expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _Bob_done3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Bob_register(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bob_register expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bob_register expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _Bob_register3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`Bob_done()byte[0]`, `Bob_register()byte`],
    pure: [],
    sigs: [`Bob_done()byte[0]`, `Bob_register()byte`]
    },
  appApproval: `BiAGAAEFAsX9hNEHAyYDAQAAAQEiNQAxGEEB4SlkSSJbNQGBCFs1AjEZIxJBAAgxACgoZkIBrzYaABdJQQAtIjUEIzUGSSEEDEAADiEEEkQpNf8oNP9QQgAogeef++cGEkQpNf8qNP9QQgAWNhoCFzUENhoDNhoBF0klDEAAzyUSRCEFNAESRDQESSISTDQCEhFEKGRJNQNJSVcAIDX/VyABFzX+gSFbNf1JNQU1/IAE2d88CzT8ULA0/CJVQAAjMQA0/xJENP0kEkSACAAAAAAAAAGYsCk1BzT/IzT9MgZCAJUxAIgBMkk1+iJVQAAGIjX7QgAGIzX7QgAANPsURDT9JBJENP0kDEEAIYAJAAAAAAAAAecBsCo1BzEAKCpmNP80/jT9IwgyBkIASzEAKChmgAkAAAAAAAAB9gCwKDUHNP80/jT9IwkyBkIAKiISRIGgjQaIAM8iNAESRDQESSISTDQCEhFEgARfDav6sDEAIyIyBkIAADX/Nf41/TX8NP0UNP4kDBBBACA0/DT9FlEHCFA0/hZQKEsBVwApZ0ghBTUBMgY1AkIAHkIAADEZJBJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKTQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iMTQSRCUxNRJEIjE2EkQjMTcSRCI1ASI1AkL/r0kxGGFAAANIKIkoYok0AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk=`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 1,
  mapDataSize: 1,
  stateKeys: 1,
  stateSize: 41,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T8",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Bob_done0_60",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Bob_register0_60",
                    "type": "bool"
                  }
                ],
                "internalType": "struct T8",
                "name": "v394",
                "type": "tuple"
              }
            ],
            "internalType": "struct T9",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T10",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v408",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v487",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v502",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "Bob_done",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "Bob_register",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "_reachMap0Ref",
    "outputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T0",
            "name": "which",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "_None",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "_Some",
            "type": "bool"
          }
        ],
        "internalType": "struct T0",
        "name": "res",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T8",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Bob_done0_60",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Bob_register0_60",
                    "type": "bool"
                  }
                ],
                "internalType": "struct T8",
                "name": "v394",
                "type": "tuple"
              }
            ],
            "internalType": "struct T9",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T10",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x6080604052604051620010c8380380620010c88339810160408190526200002691620002b8565b600080554360035560408051338152825160208083019190915283015115158183015290517faf3102e4a96b239a2811210526ca19adcde1af3e2876a2c9a5886a5a887a2dcb9181900360600190a16200008334156007620000e0565b6040805160608082018352600082840181815283528351918201845280825260208083018290528285018290528084019283528351339052825160019052825101525143920191909152620000d8816200010a565b505062000360565b81620001065760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b60208101515162000127576005816020015160200151106200012a565b60005b15620001bd576040805160608082018352600080835260208084018281528486018381528751516001600160a01b0316808752888401805151151584525184015182526003909455436001558651928301939093525115159481019490945251908301529060800160405160208183030381529060405260029080519060200190620001b8929190620001d8565b505050565b60008080556001819055620001d59060029062000267565b50565b828054620001e69062000323565b90600052602060002090601f0160209004810192826200020a576000855562000255565b82601f106200022557805160ff191683800117855562000255565b8280016001018555821562000255579182015b828111156200025557825182559160200191906001019062000238565b5062000263929150620002a1565b5090565b508054620002759062000323565b6000825580601f1062000286575050565b601f016020900490600052602060002090810190620001d591905b5b80821115620002635760008155600101620002a2565b600060408284031215620002cb57600080fd5b604080519081016001600160401b0381118282101715620002fc57634e487b7160e01b600052604160045260246000fd5b60405282518152602083015180151581146200031757600080fd5b60208201529392505050565b600181811c908216806200033857607f821691505b602082108114156200035a57634e487b7160e01b600052602260045260246000fd5b50919050565b610d5880620003706000396000f3fe60806040526004361061006e5760003560e01c8063832307571161004b57806383230757146100e0578063ab53f2c6146100f5578063d9d7e3ee14610118578063eca479e71461012b57005b80631e93b0f1146100775780633bc5b7bf1461009b5780636dada13f146100c857005b3661007557005b005b34801561008357600080fd5b506003545b6040519081526020015b60405180910390f35b3480156100a757600080fd5b506100bb6100b63660046109ad565b610133565b6040516100929190610a05565b6100d061015f565b6040519015158152602001610092565b3480156100ec57600080fd5b50600154610088565b34801561010157600080fd5b5061010a610198565b604051610092929190610a37565b610075610126366004610a94565b610235565b6100d0610265565b6040805160608101825260008082526020820181905291810191909152610159826102a4565b92915050565b6000610169610853565b602081810151516000908190526040805180820190915281815291820152610191828261037c565b5192915050565b6000606060005460028080546101ad90610aac565b80601f01602080910402602001604051908101604052809291908181526020018280546101d990610aac565b80156102265780601f106101fb57610100808354040283529160200191610226565b820191906000526020600020905b81548152906001019060200180831161020957829003601f168201915b50505050509050915091509091565b604080518082019091526000808252602082015261026161025b36849003840184610b57565b8261037c565b5050565b600061026f610853565b60208101515160019081905250604080518082019091526000808252602082015261029a828261037c565b6020015192915050565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526004602052604090205460ff1660018111156102f0576102f06109d1565b141561036d576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff166001811115610331576103316109d1565b6001811115610342576103426109d1565b8152905460ff6101008204811615156020840152620100009091041615156040909101529050919050565b60008082526020820152919050565b61038c600360005414600e610767565b81516103a79015806103a057508251600154145b600f610767565b6000808055600280546103b990610aac565b80601f01602080910402602001604051908101604052809291908181526020018280546103e590610aac565b80156104325780601f1061040757610100808354040283529160200191610432565b820191906000526020600020905b81548152906001019060200180831161041557829003601f168201915b505050505080602001905181019061044a9190610c11565b6040805160208101909152600081529091507f27d146f0165d479c3209112a2cf87d6a0d43eb5a8f4fbcf6188ab9560de4cc22338560405161048d929190610c8a565b60405180910390a160006020850151515160018111156104af576104af6109d1565b141561056a576104c134156008610767565b81516104d9906001600160a01b031633146009610767565b6104eb6005836040015114600a610767565b604051600081527f7e783a6b1cdf9348b333ce01df34623d98590d297c601fa993194a4f616d51fa9060200160405180910390a16000835261052b610891565b825181516001600160a01b039091169052602080820180516001905260408086015182519093019290925251439101526105648161078c565b50610761565b6001602085015151516001811115610584576105846109d1565b1415610761576105963415600b610767565b60006105a1336102a4565b5160018111156105b3576105b36109d1565b14156105c257600081526105ea565b60016105cd336102a4565b5160018111156105df576105df6109d1565b14156105ea57600181525b8051610605906105fb5760016105fe565b60005b600c610767565b6106176005836040015114600d610767565b6005826040015110156106d657604051600181527f0f51eb2573cea7814cdac2c66def813af564d99aa505b597406f7e88f2c311319060200160405180910390a160016020848101829052336000908152600490915260409020805462ff00ff19169091179055610686610891565b825181516001600160a01b03909116905260208084015190820151901515905260408301516106b790600190610cf3565b602080830180519091019190915251436040909101526105648161078c565b336000908152600460209081526040808320805462ffffff19169055519182527f664b25d56ed76b4a6fad595f306d874270e9d3f55ee91595c45ffbed0f84d839910160405180910390a160006020840152610730610891565b825181516001600160a01b03909116905260208084015190820151901515905260408301516106b790600190610d0b565b50505050565b816102615760405163100960cb60e01b81526004810182905260240160405180910390fd5b6020810151516107a7576005816020015160200151106107aa565b60005b1561083a576040805160608082018352600080835260208084018281528486018381528751516001600160a01b03168087528884018051511515845251840151825260039094554360015586519283019390935251151594810194909452519083015290608001604051602081830303815290604052600290805190602001906108359291906108c9565b505050565b600080805560018190556108509060029061094d565b50565b60405180604001604052806000815260200161088c60408051608081018252600060208201818152928201819052606082015290815290565b905290565b604080516060810182526000918101918252908190815260408051606081018252600080825260208281018290529282015291015290565b8280546108d590610aac565b90600052602060002090601f0160209004810192826108f7576000855561093d565b82601f1061091057805160ff191683800117855561093d565b8280016001018555821561093d579182015b8281111561093d578251825591602001919060010190610922565b50610949929150610983565b5090565b50805461095990610aac565b6000825580601f10610969575050565b601f01602090049060005260206000209081019061085091905b5b808211156109495760008155600101610984565b6001600160a01b038116811461085057600080fd5b6000602082840312156109bf57600080fd5b81356109ca81610998565b9392505050565b634e487b7160e01b600052602160045260246000fd5b6002811061085057634e487b7160e01b600052602160045260246000fd5b81516060820190610a15816109e7565b8083525060208301511515602083015260408301511515604083015292915050565b82815260006020604081840152835180604085015260005b81811015610a6b57858101830151858201606001528201610a4f565b81811115610a7d576000606083870101525b50601f01601f191692909201606001949350505050565b600060808284031215610aa657600080fd5b50919050565b600181811c90821680610ac057607f821691505b60208210811415610aa657634e487b7160e01b600052602260045260246000fd5b6040516020810167ffffffffffffffff81118282101715610b1257634e487b7160e01b600052604160045260246000fd5b60405290565b6040516060810167ffffffffffffffff81118282101715610b1257634e487b7160e01b600052604160045260246000fd5b801515811461085057600080fd5b60008183036080811215610b6a57600080fd5b6040516040810181811067ffffffffffffffff82111715610b9b57634e487b7160e01b600052604160045260246000fd5b604052833581526060601f1983011215610bb457600080fd5b610bbc610ae1565b9150610bc6610b18565b602085013560028110610bd857600080fd5b81526040850135610be881610b49565b60208201526060850135610bfb81610b49565b6040820152825260208101919091529392505050565b600060608284031215610c2357600080fd5b6040516060810181811067ffffffffffffffff82111715610c5457634e487b7160e01b600052604160045260246000fd5b6040528251610c6281610998565b81526020830151610c7281610b49565b60208201526040928301519281019290925250919050565b6001600160a01b0383168152815160208083019190915282015151805160a083019190610cb6816109e7565b80604085015250602081015115156060840152604081015115156080840152509392505050565b634e487b7160e01b600052601160045260246000fd5b60008219821115610d0657610d06610cdd565b500190565b600082821015610d1d57610d1d610cdd565b50039056fea26469706673582212207314728ee2474fd43e4524fa702f4f799d6166eb1a711207492016305f99724164736f6c634300080c0033`,
  BytecodeLen: 4296,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  2: {
    at: './index.rsh:60:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:26:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Alice": Alice,
  "Bob_done": Bob_done,
  "Bob_register": Bob_register
  };
export const _APIs = {
  Bob: {
    done: Bob_done,
    register: Bob_register
    }
  };

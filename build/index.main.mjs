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
  const ctc3 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '20'));
  const ctc4 = stdlib.T_Null;
  const ctc5 = stdlib.T_Data({
    None: ctc4,
    Some: ctc4
    });
  const map0_ctc = ctc5;
  
  
  return {
    infos: {
      Message: {
        logger: {
          decode: async (i, svs, args) => {
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
              const [v327, v332, v333] = svs;
              return (await ((async () => {
                
                const v331 = 'voter is less than 5';
                
                return v331;}))(...args));
              }
            
            stdlib.assert(false, 'illegal view')
            },
          ty: ctc3
          }
        }
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
    Bob_done0_61: ctc2,
    Bob_register0_61: ctc2
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
    lct: stdlib.checkedBigNumberify('./index.rsh:23:5:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:23:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [], secs: v329, time: v328, didSend: v22, from: v327 } = txn1;
      
      ;
      
      const v332 = true;
      const v333 = stdlib.checkedBigNumberify('./index.rsh:32:26:decimal', stdlib.UInt_max, '0');
      const v334 = v328;
      
      if (await (async () => {
        const v349 = stdlib.lt(v333, stdlib.checkedBigNumberify('./index.rsh:35:29:decimal', stdlib.UInt_max, '5'));
        const v350 = v332 ? false : v349;
        
        return v350;})()) {
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
  const {data: [], secs: v329, time: v328, didSend: v22, from: v327 } = txn1;
  ;
  stdlib.protect(ctc0, await interact.ready(), {
    at: './index.rsh:24:19:application',
    fs: ['at ./index.rsh:24:19:application call to [unknown function] (defined at: ./index.rsh:24:19:function exp)', 'at ./index.rsh:24:19:application call to "liftedInteract" (defined at: ./index.rsh:24:19:application)'],
    msg: 'ready',
    who: 'Alice'
    });
  
  let v332 = true;
  let v333 = stdlib.checkedBigNumberify('./index.rsh:32:26:decimal', stdlib.UInt_max, '0');
  let v334 = v328;
  
  while (await (async () => {
    const v349 = stdlib.lt(v333, stdlib.checkedBigNumberify('./index.rsh:35:29:decimal', stdlib.UInt_max, '5'));
    const v350 = v332 ? false : v349;
    
    return v350;})()) {
    const txn2 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 2,
      out_tys: [ctc3],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v378], secs: v380, time: v379, didSend: v202, from: v377 } = txn2;
    switch (v378[0]) {
      case 'Bob_done0_61': {
        const v381 = v378[1];
        undefined /* setApiDetails */;
        ;
        const v388 = stdlib.addressEq(v377, v327);
        stdlib.assert(v388, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:59:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:58:20:application call to [unknown function] (defined at: ./index.rsh:58:20:function exp)'],
          msg: 'you are the deployer',
          who: 'Alice'
          });
        const v390 = stdlib.eq(v333, stdlib.checkedBigNumberify('./index.rsh:60:24:decimal', stdlib.UInt_max, '5'));
        stdlib.assert(v390, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:60:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:58:20:application call to [unknown function] (defined at: ./index.rsh:58:20:function exp)'],
          msg: null,
          who: 'Alice'
          });
        const v392 = null;
        await txn2.getOutput('Bob_done', 'v392', ctc0, v392);
        const v399 = 'Done when users are 5';
        stdlib.protect(ctc0, await interact.log(v399), {
          at: './index.rsh:62:21:application',
          fs: ['at ./index.rsh:62:21:application call to [unknown function] (defined at: ./index.rsh:62:21:function exp)', 'at ./index.rsh:62:21:application call to "liftedInteract" (defined at: ./index.rsh:62:21:application)', 'at ./index.rsh:58:20:application call to [unknown function] (defined at: ./index.rsh:58:20:function exp)'],
          msg: 'log',
          who: 'Alice'
          });
        
        const cv332 = true;
        const cv333 = v333;
        const cv334 = v379;
        
        v332 = cv332;
        v333 = cv333;
        v334 = cv334;
        
        continue;
        break;
        }
      case 'Bob_register0_61': {
        const v421 = v378[1];
        undefined /* setApiDetails */;
        ;
        const v442 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v377), null);
        let v443;
        switch (v442[0]) {
          case 'None': {
            const v444 = v442[1];
            v443 = false;
            
            break;
            }
          case 'Some': {
            const v445 = v442[1];
            v443 = true;
            
            break;
            }
          }
        const v446 = v443 ? false : true;
        stdlib.assert(v446, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:37:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:39:18:application call to [unknown function] (defined at: ./index.rsh:39:18:function exp)'],
          msg: 'not yet a member',
          who: 'Alice'
          });
        const v448 = stdlib.eq(v333, stdlib.checkedBigNumberify('./index.rsh:38:22:decimal', stdlib.UInt_max, '5'));
        stdlib.assert(v448, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:38:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:39:18:application call to [unknown function] (defined at: ./index.rsh:39:18:function exp)'],
          msg: null,
          who: 'Alice'
          });
        const v450 = true;
        await txn2.getOutput('Bob_register', 'v450', ctc4, v450);
        await stdlib.mapSet(map0, v377, null);
        const v458 = 'voter is less than 5';
        stdlib.protect(ctc0, await interact.log(v377, v458), {
          at: './index.rsh:42:21:application',
          fs: ['at ./index.rsh:42:21:application call to [unknown function] (defined at: ./index.rsh:42:21:function exp)', 'at ./index.rsh:42:21:application call to "liftedInteract" (defined at: ./index.rsh:42:21:application)', 'at ./index.rsh:39:18:application call to [unknown function] (defined at: ./index.rsh:39:18:function exp)'],
          msg: 'log',
          who: 'Alice'
          });
        
        const v459 = stdlib.add(v333, stdlib.checkedBigNumberify('./index.rsh:55:32:decimal', stdlib.UInt_max, '1'));
        const cv332 = v332;
        const cv333 = v459;
        const cv334 = v379;
        
        v332 = cv332;
        v333 = cv333;
        v334 = cv334;
        
        continue;
        break;
        }
      }
    
    }
  stdlib.protect(ctc0, await interact.log(), {
    at: './index.rsh:67:17:application',
    fs: ['at ./index.rsh:67:17:application call to [unknown function] (defined at: ./index.rsh:67:17:function exp)', 'at ./index.rsh:67:17:application call to "liftedInteract" (defined at: ./index.rsh:67:17:application)'],
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
    Bob_done0_61: ctc5,
    Bob_register0_61: ctc5
    });
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v327, v332, v333] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc2, ctc3, ctc4]);
  const v353 = stdlib.protect(ctc5, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:58:7:application call to [unknown function] (defined at: ./index.rsh:58:7:function exp)', 'at ./index.rsh:32:17:application call to "runBob_done0_61" (defined at: ./index.rsh:58:7:function exp)', 'at ./index.rsh:32:17:application call to [unknown function] (defined at: ./index.rsh:32:17:function exp)'],
    msg: 'in',
    who: 'Bob_done'
    });
  const v357 = ['Bob_done0_61', v353];
  
  const txn1 = await (ctc.sendrecv({
    args: [v327, v332, v333, v357],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc6],
    pay: [stdlib.checkedBigNumberify('./index.rsh:58:7:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v378], secs: v380, time: v379, didSend: v202, from: v377 } = txn1;
      
      switch (v378[0]) {
        case 'Bob_done0_61': {
          const v381 = v378[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Bob_done"
            });
          ;
          const v392 = null;
          const v393 = await txn1.getOutput('Bob_done', 'v392', ctc0, v392);
          
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          
          break;
          }
        case 'Bob_register0_61': {
          const v421 = v378[1];
          
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
  const {data: [v378], secs: v380, time: v379, didSend: v202, from: v377 } = txn1;
  switch (v378[0]) {
    case 'Bob_done0_61': {
      const v381 = v378[1];
      undefined /* setApiDetails */;
      ;
      const v388 = stdlib.addressEq(v377, v327);
      stdlib.assert(v388, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:59:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:58:20:application call to [unknown function] (defined at: ./index.rsh:58:20:function exp)'],
        msg: 'you are the deployer',
        who: 'Bob_done'
        });
      const v390 = stdlib.eq(v333, stdlib.checkedBigNumberify('./index.rsh:60:24:decimal', stdlib.UInt_max, '5'));
      stdlib.assert(v390, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:60:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:58:20:application call to [unknown function] (defined at: ./index.rsh:58:20:function exp)'],
        msg: null,
        who: 'Bob_done'
        });
      const v392 = null;
      const v393 = await txn1.getOutput('Bob_done', 'v392', ctc0, v392);
      if (v202) {
        stdlib.protect(ctc0, await interact.out(v381, v393), {
          at: './index.rsh:58:8:application',
          fs: ['at ./index.rsh:58:8:application call to [unknown function] (defined at: ./index.rsh:58:8:function exp)', 'at ./index.rsh:61:8:application call to "k" (defined at: ./index.rsh:58:20:function exp)', 'at ./index.rsh:58:20:application call to [unknown function] (defined at: ./index.rsh:58:20:function exp)'],
          msg: 'out',
          who: 'Bob_done'
          });
        }
      else {
        }
      
      return;
      
      break;
      }
    case 'Bob_register0_61': {
      const v421 = v378[1];
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
    Bob_done0_61: ctc5,
    Bob_register0_61: ctc5
    });
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v327, v332, v333] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc2, ctc3, ctc4]);
  const v359 = ctc.selfAddress();
  const v361 = stdlib.protect(ctc5, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:36:24:application call to [unknown function] (defined at: ./index.rsh:36:24:function exp)', 'at ./index.rsh:32:17:application call to "runBob_register0_61" (defined at: ./index.rsh:36:8:function exp)', 'at ./index.rsh:32:17:application call to [unknown function] (defined at: ./index.rsh:32:17:function exp)'],
    msg: 'in',
    who: 'Bob_register'
    });
  const v362 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v359), null);
  let v363;
  switch (v362[0]) {
    case 'None': {
      const v364 = v362[1];
      v363 = false;
      
      break;
      }
    case 'Some': {
      const v365 = v362[1];
      v363 = true;
      
      break;
      }
    }
  const v366 = v363 ? false : true;
  stdlib.assert(v366, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:37:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:36:24:application call to [unknown function] (defined at: ./index.rsh:36:24:function exp)', 'at ./index.rsh:32:17:application call to "runBob_register0_61" (defined at: ./index.rsh:36:8:function exp)', 'at ./index.rsh:32:17:application call to [unknown function] (defined at: ./index.rsh:32:17:function exp)'],
    msg: 'not yet a member',
    who: 'Bob_register'
    });
  const v368 = stdlib.eq(v333, stdlib.checkedBigNumberify('./index.rsh:38:22:decimal', stdlib.UInt_max, '5'));
  stdlib.assert(v368, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:38:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:36:24:application call to [unknown function] (defined at: ./index.rsh:36:24:function exp)', 'at ./index.rsh:32:17:application call to "runBob_register0_61" (defined at: ./index.rsh:36:8:function exp)', 'at ./index.rsh:32:17:application call to [unknown function] (defined at: ./index.rsh:32:17:function exp)'],
    msg: null,
    who: 'Bob_register'
    });
  const v373 = ['Bob_register0_61', v361];
  
  const txn1 = await (ctc.sendrecv({
    args: [v327, v332, v333, v373],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc6],
    pay: [stdlib.checkedBigNumberify('./index.rsh:36:8:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v378], secs: v380, time: v379, didSend: v202, from: v377 } = txn1;
      
      switch (v378[0]) {
        case 'Bob_done0_61': {
          const v381 = v378[1];
          
          break;
          }
        case 'Bob_register0_61': {
          const v421 = v378[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Bob_register"
            });
          ;
          stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v377), null);
          const v450 = true;
          const v451 = await txn1.getOutput('Bob_register', 'v450', ctc3, v450);
          
          await stdlib.simMapSet(sim_r, 0, v377, null);
          const v459 = stdlib.add(v333, stdlib.checkedBigNumberify('./index.rsh:55:32:decimal', stdlib.UInt_max, '1'));
          const v764 = v332;
          const v765 = v459;
          const v767 = stdlib.lt(v459, stdlib.checkedBigNumberify('./index.rsh:35:29:decimal', stdlib.UInt_max, '5'));
          const v768 = v332 ? false : v767;
          if (v768) {
            sim_r.isHalt = false;
            }
          else {
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
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
  const {data: [v378], secs: v380, time: v379, didSend: v202, from: v377 } = txn1;
  switch (v378[0]) {
    case 'Bob_done0_61': {
      const v381 = v378[1];
      return;
      break;
      }
    case 'Bob_register0_61': {
      const v421 = v378[1];
      undefined /* setApiDetails */;
      ;
      const v442 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v377), null);
      let v443;
      switch (v442[0]) {
        case 'None': {
          const v444 = v442[1];
          v443 = false;
          
          break;
          }
        case 'Some': {
          const v445 = v442[1];
          v443 = true;
          
          break;
          }
        }
      const v446 = v443 ? false : true;
      stdlib.assert(v446, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:37:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:39:18:application call to [unknown function] (defined at: ./index.rsh:39:18:function exp)'],
        msg: 'not yet a member',
        who: 'Bob_register'
        });
      const v448 = stdlib.eq(v333, stdlib.checkedBigNumberify('./index.rsh:38:22:decimal', stdlib.UInt_max, '5'));
      stdlib.assert(v448, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:38:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:39:18:application call to [unknown function] (defined at: ./index.rsh:39:18:function exp)'],
        msg: null,
        who: 'Bob_register'
        });
      const v450 = true;
      const v451 = await txn1.getOutput('Bob_register', 'v450', ctc3, v450);
      if (v202) {
        stdlib.protect(ctc0, await interact.out(v421, v451), {
          at: './index.rsh:36:9:application',
          fs: ['at ./index.rsh:36:9:application call to [unknown function] (defined at: ./index.rsh:36:9:function exp)', 'at ./index.rsh:40:8:application call to "k" (defined at: ./index.rsh:39:18:function exp)', 'at ./index.rsh:39:18:application call to [unknown function] (defined at: ./index.rsh:39:18:function exp)'],
          msg: 'out',
          who: 'Bob_register'
          });
        }
      else {
        }
      
      await stdlib.mapSet(map0, v377, null);
      const v459 = stdlib.add(v333, stdlib.checkedBigNumberify('./index.rsh:55:32:decimal', stdlib.UInt_max, '1'));
      const v764 = v332;
      const v765 = v459;
      const v767 = stdlib.lt(v459, stdlib.checkedBigNumberify('./index.rsh:35:29:decimal', stdlib.UInt_max, '5'));
      const v768 = v332 ? false : v767;
      if (v768) {
        return;
        }
      else {
        return;
        }
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
    pure: [`Message_logger()byte[20]`],
    sigs: [`Bob_done()byte[0]`, `Bob_register()byte`, `Message_logger()byte[20]`]
    },
  appApproval: `BiAHAAEFAwLF/YTRB63f9bwOJgMBAAABASI1ADEYQQHhKWRJIls1AYEIWzUCMRkjEkEACDEAKChmQgGvNhoAF0lBAFgiNQQjNQZJIQUMQAA5SSEGDEAAJCEGEkQ0ASUSRIAUdm90ZXIgaXMgbGVzcyB0aGFuIDU1B0IBfiEFEkQpNf8oNP9QQgAqgeef++cGEkQpNf8qNP9QQgAYNhoCFzUENhoDNhoBF0khBAxAAKQhBBJEJTQBEkQ0BEkiEkw0AhIRRChkSTUDSVcAIDX/gSFbNf5JNQU1/YAE2d88CzT9ULA0/SJVQAAjMQA0/xJENP4kEkSACAAAAAAAAAGIsCk1BzT/IzT+MgZCAHExAIgBDkk1+yJVQAAGIjX8QgAGIzX8QgAANPwURDT+JBJEgAkAAAAAAAABwgGwKjUHMQAoKmY0/zQDVyABFzT+IwgyBkIAKiISRIGgjQaIAM8iNAESRDQESSISTDQCEhFEgARfDav6sDEAIyIyBkIAADX/Nf41/TX8NP0UNP4kDBBBAB80/DT9FlEHCFA0/hZQKEsBVwApZ0glNQEyBjUCQgAeQgAAMRkkEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQpNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yIxNBJEIQQxNRJEIjE2EkQjMTcSRCI1ASI1AkL/rkkxGGFAAANIKIkoYok0AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk=`,
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
        "internalType": "struct T7",
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
        "internalType": "struct T7",
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
                    "internalType": "enum _enum_T9",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Bob_done0_61",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Bob_register0_61",
                    "type": "bool"
                  }
                ],
                "internalType": "struct T9",
                "name": "v378",
                "type": "tuple"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T11",
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
    "name": "_reach_oe_v392",
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
    "name": "_reach_oe_v450",
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
    "name": "Message_logger",
    "outputs": [
      {
        "components": [
          {
            "internalType": "bytes20",
            "name": "elem0",
            "type": "bytes20"
          }
        ],
        "internalType": "struct T1",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
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
                    "internalType": "enum _enum_T9",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Bob_done0_61",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Bob_register0_61",
                    "type": "bool"
                  }
                ],
                "internalType": "struct T9",
                "name": "v378",
                "type": "tuple"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T11",
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
  Bytecode: `0x608060405260405162001186380380620011868339810160408190526200002691620002b8565b600080554360035560408051338152825160208083019190915283015115158183015290517faf3102e4a96b239a2811210526ca19adcde1af3e2876a2c9a5886a5a887a2dcb9181900360600190a16200008334156008620000e0565b6040805160608082018352600082840181815283528351918201845280825260208083018290528285018290528084019283528351339052825160019052825101525143920191909152620000d8816200010a565b505062000360565b81620001065760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b60208101515162000127576005816020015160200151106200012a565b60005b15620001bd576040805160608082018352600080835260208084018281528486018381528751516001600160a01b0316808752888401805151151584525184015182526003909455436001558651928301939093525115159481019490945251908301529060800160405160208183030381529060405260029080519060200190620001b8929190620001d8565b505050565b60008080556001819055620001d59060029062000267565b50565b828054620001e69062000323565b90600052602060002090601f0160209004810192826200020a576000855562000255565b82601f106200022557805160ff191683800117855562000255565b8280016001018555821562000255579182015b828111156200025557825182559160200191906001019062000238565b5062000263929150620002a1565b5090565b508054620002759062000323565b6000825580601f1062000286575050565b601f016020900490600052602060002090810190620001d591905b5b80821115620002635760008155600101620002a2565b600060408284031215620002cb57600080fd5b604080519081016001600160401b0381118282101715620002fc57634e487b7160e01b600052604160045260246000fd5b60405282518152602083015180151581146200031757600080fd5b60208201529392505050565b600181811c908216806200033857607f821691505b602082108114156200035a57634e487b7160e01b600052602260045260246000fd5b50919050565b610e1680620003706000396000f3fe6080604052600436106100795760003560e01c8063ab53f2c61161004b578063ab53f2c614610100578063d9d7e3ee14610123578063ec1749b114610136578063eca479e71461016957005b80631e93b0f1146100825780633bc5b7bf146100a65780636dada13f146100d357806383230757146100eb57005b3661008057005b005b34801561008e57600080fd5b506003545b6040519081526020015b60405180910390f35b3480156100b257600080fd5b506100c66100c1366004610a8a565b610171565b60405161009d9190610ae2565b6100db61019d565b604051901515815260200161009d565b3480156100f757600080fd5b50600154610093565b34801561010c57600080fd5b506101156101d6565b60405161009d929190610b14565b610080610131366004610b71565b610273565b34801561014257600080fd5b5061014b6102a3565b60405190516bffffffffffffffffffffffff1916815260200161009d565b6100db6103ac565b6040805160608101825260008082526020820181905291810191909152610197826103eb565b92915050565b60006101a7610968565b6020818101515160009081905260408051808201909152818152918201526101cf82826104c3565b5192915050565b6000606060005460028080546101eb90610b89565b80601f016020809104026020016040519081016040528092919081815260200182805461021790610b89565b80156102645780601f1061023957610100808354040283529160200191610264565b820191906000526020600020905b81548152906001019060200180831161024757829003601f168201915b50505050509050915091509091565b604080518082019091526000808252602082015261029f61029936849003840184610c34565b826104c3565b5050565b6040805160208101909152600081526003600054141561039d576000600280546102cc90610b89565b80601f01602080910402602001604051908101604052809291908181526020018280546102f890610b89565b80156103455780601f1061031a57610100808354040283529160200191610345565b820191906000526020600020905b81548152906001019060200180831161032857829003601f168201915b505050505080602001905181019061035d9190610cee565b905061037a60408051808201909152600060208201908152815290565b805173766f746572206973206c657373207468616e203560601b90525192915050565b6103a96000600761087c565b90565b60006103b6610968565b6020810151516001908190525060408051808201909152600080825260208201526103e182826104c3565b6020015192915050565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526004602052604090205460ff16600181111561043757610437610aae565b14156104b4576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff16600181111561047857610478610aae565b600181111561048957610489610aae565b8152905460ff6101008204811615156020840152620100009091041615156040909101529050919050565b60008082526020820152919050565b6104d3600360005414600f61087c565b81516104ee9015806104e757508251600154145b601061087c565b60008080556002805461050090610b89565b80601f016020809104026020016040519081016040528092919081815260200182805461052c90610b89565b80156105795780601f1061054e57610100808354040283529160200191610579565b820191906000526020600020905b81548152906001019060200180831161055c57829003601f168201915b50505050508060200190518101906105919190610cee565b6040805160208101909152600081529091507f27d146f0165d479c3209112a2cf87d6a0d43eb5a8f4fbcf6188ab9560de4cc2233856040516105d4929190610d67565b60405180910390a160006020850151515160018111156105f6576105f6610aae565b14156106e4576106083415600961087c565b8151610620906001600160a01b03163314600a61087c565b6106326005836040015114600b61087c565b604051600081527f94cd44bef74fe865749796f3735137b453ef831636c16cd60f34a2f3a82d52999060200160405180910390a1600083526106a5604080516060810182526000918101918252908190815260408051606081018252600080825260208281018290529282015291015290565b825181516001600160a01b039091169052602080820180516001905260408086015182519093019290925251439101526106de816108a1565b50610876565b60016020850151515160018111156106fe576106fe610aae565b1415610876576107103415600c61087c565b600061071b336103eb565b51600181111561072d5761072d610aae565b141561073c5760008152610764565b6001610747336103eb565b51600181111561075957610759610aae565b141561076457600181525b805161077f90610775576001610778565b60005b600d61087c565b6107916005836040015114600e61087c565b604051600181527faae50efe5cf1624eb009c291ac016e84962a3d8eac5b743a2eb89f9e74f24e2b9060200160405180910390a160016020848101829052336000908152600490915260409020805462ff00ff19169091179055610826604080516060810182526000918101918252908190815260408051606081018252600080825260208281018290529282015291015290565b825181516001600160a01b039091169052602080840151908201519015159052604083015161085790600190610dba565b602080830180519091019190915251436040909101526106de816108a1565b50505050565b8161029f5760405163100960cb60e01b81526004810182905260240160405180910390fd5b6020810151516108bc576005816020015160200151106108bf565b60005b1561094f576040805160608082018352600080835260208084018281528486018381528751516001600160a01b031680875288840180515115158452518401518252600390945543600155865192830193909352511515948101949094525190830152906080016040516020818303038152906040526002908051906020019061094a9291906109a6565b505050565b6000808055600181905561096590600290610a2a565b50565b6040518060400160405280600081526020016109a160408051608081018252600060208201818152928201819052606082015290815290565b905290565b8280546109b290610b89565b90600052602060002090601f0160209004810192826109d45760008555610a1a565b82601f106109ed57805160ff1916838001178555610a1a565b82800160010185558215610a1a579182015b82811115610a1a5782518255916020019190600101906109ff565b50610a26929150610a60565b5090565b508054610a3690610b89565b6000825580601f10610a46575050565b601f01602090049060005260206000209081019061096591905b5b80821115610a265760008155600101610a61565b6001600160a01b038116811461096557600080fd5b600060208284031215610a9c57600080fd5b8135610aa781610a75565b9392505050565b634e487b7160e01b600052602160045260246000fd5b6002811061096557634e487b7160e01b600052602160045260246000fd5b81516060820190610af281610ac4565b8083525060208301511515602083015260408301511515604083015292915050565b82815260006020604081840152835180604085015260005b81811015610b4857858101830151858201606001528201610b2c565b81811115610b5a576000606083870101525b50601f01601f191692909201606001949350505050565b600060808284031215610b8357600080fd5b50919050565b600181811c90821680610b9d57607f821691505b60208210811415610b8357634e487b7160e01b600052602260045260246000fd5b6040516020810167ffffffffffffffff81118282101715610bef57634e487b7160e01b600052604160045260246000fd5b60405290565b6040516060810167ffffffffffffffff81118282101715610bef57634e487b7160e01b600052604160045260246000fd5b801515811461096557600080fd5b60008183036080811215610c4757600080fd5b6040516040810181811067ffffffffffffffff82111715610c7857634e487b7160e01b600052604160045260246000fd5b604052833581526060601f1983011215610c9157600080fd5b610c99610bbe565b9150610ca3610bf5565b602085013560028110610cb557600080fd5b81526040850135610cc581610c26565b60208201526060850135610cd881610c26565b6040820152825260208101919091529392505050565b600060608284031215610d0057600080fd5b6040516060810181811067ffffffffffffffff82111715610d3157634e487b7160e01b600052604160045260246000fd5b6040528251610d3f81610a75565b81526020830151610d4f81610c26565b60208201526040928301519281019290925250919050565b6001600160a01b0383168152815160208083019190915282015151805160a083019190610d9381610ac4565b80604085015250602081015115156060840152604081015115156080840152509392505050565b60008219821115610ddb57634e487b7160e01b600052601160045260246000fd5b50019056fea26469706673582212208ba4496f2b6e88672259961f5d4f1000adf5360c945c6de8aed59dc21461dd6f64736f6c634300080c0033`,
  BytecodeLen: 4486,
  Which: `oD`,
  version: 7,
  views: {
    Message: {
      logger: `Message_logger`
      }
    }
  };
export const _stateSourceMap = {
  2: {
    at: './index.rsh:66:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:32:17:after expr stmt semicolon',
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

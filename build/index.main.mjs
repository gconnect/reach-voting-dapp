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
  const ctc0 = stdlib.T_Bool;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Data({
    None: ctc2,
    Some: ctc2
    });
  const map0_ctc = ctc3;
  
  
  return {
    infos: {
      },
    views: {
      3: [ctc0, ctc1]
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
      
      const {data: [], secs: v330, time: v329, didSend: v22, from: v328 } = txn1;
      
      ;
      
      const v332 = true;
      const v333 = stdlib.checkedBigNumberify('./index.rsh:26:26:decimal', stdlib.UInt_max, '0');
      const v334 = v329;
      
      if (await (async () => {
        const v349 = stdlib.lt(v333, stdlib.checkedBigNumberify('./index.rsh:29:29:decimal', stdlib.UInt_max, '5'));
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
  const {data: [], secs: v330, time: v329, didSend: v22, from: v328 } = txn1;
  ;
  stdlib.protect(ctc0, await interact.ready(), {
    at: './index.rsh:20:19:application',
    fs: ['at ./index.rsh:20:19:application call to [unknown function] (defined at: ./index.rsh:20:19:function exp)', 'at ./index.rsh:20:19:application call to "liftedInteract" (defined at: ./index.rsh:20:19:application)'],
    msg: 'ready',
    who: 'Alice'
    });
  
  let v332 = true;
  let v333 = stdlib.checkedBigNumberify('./index.rsh:26:26:decimal', stdlib.UInt_max, '0');
  let v334 = v329;
  
  while (await (async () => {
    const v349 = stdlib.lt(v333, stdlib.checkedBigNumberify('./index.rsh:29:29:decimal', stdlib.UInt_max, '5'));
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
    const {data: [v378], secs: v380, time: v379, didSend: v201, from: v377 } = txn2;
    switch (v378[0]) {
      case 'Bob_done0_60': {
        const v381 = v378[1];
        undefined /* setApiDetails */;
        ;
        const v388 = stdlib.eq(v333, stdlib.checkedBigNumberify('./index.rsh:54:24:decimal', stdlib.UInt_max, '5'));
        stdlib.assert(v388, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:54:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:52:20:application call to [unknown function] (defined at: ./index.rsh:52:20:function exp)'],
          msg: null,
          who: 'Alice'
          });
        const v390 = null;
        await txn2.getOutput('Bob_done', 'v390', ctc0, v390);
        const v397 = 'Done when users are 5';
        stdlib.protect(ctc0, await interact.log(v397), {
          at: './index.rsh:56:21:application',
          fs: ['at ./index.rsh:56:21:application call to [unknown function] (defined at: ./index.rsh:56:21:function exp)', 'at ./index.rsh:56:21:application call to "liftedInteract" (defined at: ./index.rsh:56:21:application)', 'at ./index.rsh:52:20:application call to [unknown function] (defined at: ./index.rsh:52:20:function exp)'],
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
      case 'Bob_register0_60': {
        const v437 = v378[1];
        undefined /* setApiDetails */;
        ;
        const v456 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v377), null);
        let v457;
        switch (v456[0]) {
          case 'None': {
            const v458 = v456[1];
            v457 = false;
            
            break;
            }
          case 'Some': {
            const v459 = v456[1];
            v457 = true;
            
            break;
            }
          }
        const v460 = v457 ? false : true;
        stdlib.assert(v460, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:31:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:33:18:application call to [unknown function] (defined at: ./index.rsh:33:18:function exp)'],
          msg: 'not yet a member',
          who: 'Alice'
          });
        const v462 = stdlib.eq(v333, stdlib.checkedBigNumberify('./index.rsh:32:22:decimal', stdlib.UInt_max, '5'));
        stdlib.assert(v462, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:32:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:33:18:application call to [unknown function] (defined at: ./index.rsh:33:18:function exp)'],
          msg: null,
          who: 'Alice'
          });
        const v464 = stdlib.lt(v333, stdlib.checkedBigNumberify('./index.rsh:38:20:decimal', stdlib.UInt_max, '5'));
        if (v464) {
          const v466 = 'voter is less than 5';
          stdlib.protect(ctc0, await interact.log(v466), {
            at: './index.rsh:39:23:application',
            fs: ['at ./index.rsh:39:23:application call to [unknown function] (defined at: ./index.rsh:39:23:function exp)', 'at ./index.rsh:39:23:application call to "liftedInteract" (defined at: ./index.rsh:39:23:application)', 'at ./index.rsh:33:18:application call to [unknown function] (defined at: ./index.rsh:33:18:function exp)'],
            msg: 'log',
            who: 'Alice'
            });
          
          const v467 = true;
          await txn2.getOutput('Bob_register', 'v467', ctc4, v467);
          await stdlib.mapSet(map0, v377, null);
          const v474 = stdlib.add(v333, stdlib.checkedBigNumberify('./index.rsh:42:34:decimal', stdlib.UInt_max, '1'));
          const cv332 = v332;
          const cv333 = v474;
          const cv334 = v379;
          
          v332 = cv332;
          v333 = cv333;
          v334 = cv334;
          
          continue;}
        else {
          const v480 = 'voter is more than 5';
          stdlib.protect(ctc0, await interact.log(v480), {
            at: './index.rsh:44:23:application',
            fs: ['at ./index.rsh:44:23:application call to [unknown function] (defined at: ./index.rsh:44:23:function exp)', 'at ./index.rsh:44:23:application call to "liftedInteract" (defined at: ./index.rsh:44:23:application)', 'at ./index.rsh:33:18:application call to [unknown function] (defined at: ./index.rsh:33:18:function exp)'],
            msg: 'log',
            who: 'Alice'
            });
          
          await stdlib.mapSet(map0, v377, undefined /* Nothing */);
          const v482 = false;
          await txn2.getOutput('Bob_register', 'v482', ctc4, v482);
          const v488 = stdlib.sub(v333, stdlib.checkedBigNumberify('./index.rsh:47:34:decimal', stdlib.UInt_max, '1'));
          const cv332 = v332;
          const cv333 = v488;
          const cv334 = v379;
          
          v332 = cv332;
          v333 = cv333;
          v334 = cv334;
          
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
  const ctc2 = stdlib.T_Bool;
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Tuple([]);
  const ctc5 = stdlib.T_Data({
    Bob_done0_60: ctc4,
    Bob_register0_60: ctc4
    });
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v332, v333] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc2, ctc3]);
  const v353 = stdlib.protect(ctc4, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:52:7:application call to [unknown function] (defined at: ./index.rsh:52:7:function exp)', 'at ./index.rsh:26:17:application call to "runBob_done0_60" (defined at: ./index.rsh:52:7:function exp)', 'at ./index.rsh:26:17:application call to [unknown function] (defined at: ./index.rsh:26:17:function exp)'],
    msg: 'in',
    who: 'Bob_done'
    });
  const v357 = ['Bob_done0_60', v353];
  
  const txn1 = await (ctc.sendrecv({
    args: [v332, v333, v357],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc5],
    pay: [stdlib.checkedBigNumberify('./index.rsh:52:7:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v378], secs: v380, time: v379, didSend: v201, from: v377 } = txn1;
      
      switch (v378[0]) {
        case 'Bob_done0_60': {
          const v381 = v378[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Bob_done"
            });
          ;
          const v390 = null;
          const v391 = await txn1.getOutput('Bob_done', 'v390', ctc0, v390);
          
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          
          break;
          }
        case 'Bob_register0_60': {
          const v437 = v378[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc3, ctc5],
    waitIfNotPresent: false
    }));
  const {data: [v378], secs: v380, time: v379, didSend: v201, from: v377 } = txn1;
  switch (v378[0]) {
    case 'Bob_done0_60': {
      const v381 = v378[1];
      undefined /* setApiDetails */;
      ;
      const v388 = stdlib.eq(v333, stdlib.checkedBigNumberify('./index.rsh:54:24:decimal', stdlib.UInt_max, '5'));
      stdlib.assert(v388, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:54:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:52:20:application call to [unknown function] (defined at: ./index.rsh:52:20:function exp)'],
        msg: null,
        who: 'Bob_done'
        });
      const v390 = null;
      const v391 = await txn1.getOutput('Bob_done', 'v390', ctc0, v390);
      if (v201) {
        stdlib.protect(ctc0, await interact.out(v381, v391), {
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
      const v437 = v378[1];
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
  const ctc2 = stdlib.T_Bool;
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Tuple([]);
  const ctc5 = stdlib.T_Data({
    Bob_done0_60: ctc4,
    Bob_register0_60: ctc4
    });
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v332, v333] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc2, ctc3]);
  const v359 = ctc.selfAddress();
  const v361 = stdlib.protect(ctc4, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:30:24:application call to [unknown function] (defined at: ./index.rsh:30:24:function exp)', 'at ./index.rsh:26:17:application call to "runBob_register0_60" (defined at: ./index.rsh:30:8:function exp)', 'at ./index.rsh:26:17:application call to [unknown function] (defined at: ./index.rsh:26:17:function exp)'],
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
    fs: ['at ./index.rsh:31:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:30:24:application call to [unknown function] (defined at: ./index.rsh:30:24:function exp)', 'at ./index.rsh:26:17:application call to "runBob_register0_60" (defined at: ./index.rsh:30:8:function exp)', 'at ./index.rsh:26:17:application call to [unknown function] (defined at: ./index.rsh:26:17:function exp)'],
    msg: 'not yet a member',
    who: 'Bob_register'
    });
  const v368 = stdlib.eq(v333, stdlib.checkedBigNumberify('./index.rsh:32:22:decimal', stdlib.UInt_max, '5'));
  stdlib.assert(v368, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:32:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:30:24:application call to [unknown function] (defined at: ./index.rsh:30:24:function exp)', 'at ./index.rsh:26:17:application call to "runBob_register0_60" (defined at: ./index.rsh:30:8:function exp)', 'at ./index.rsh:26:17:application call to [unknown function] (defined at: ./index.rsh:26:17:function exp)'],
    msg: null,
    who: 'Bob_register'
    });
  const v373 = ['Bob_register0_60', v361];
  
  const txn1 = await (ctc.sendrecv({
    args: [v332, v333, v373],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc5],
    pay: [stdlib.checkedBigNumberify('./index.rsh:30:8:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v378], secs: v380, time: v379, didSend: v201, from: v377 } = txn1;
      
      switch (v378[0]) {
        case 'Bob_done0_60': {
          const v381 = v378[1];
          
          break;
          }
        case 'Bob_register0_60': {
          const v437 = v378[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Bob_register"
            });
          ;
          stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v377), null);
          const v464 = stdlib.lt(v333, stdlib.checkedBigNumberify('./index.rsh:38:20:decimal', stdlib.UInt_max, '5'));
          if (v464) {
            const v467 = true;
            const v468 = await txn1.getOutput('Bob_register', 'v467', ctc2, v467);
            
            await stdlib.simMapSet(sim_r, 0, v377, null);
            const v474 = stdlib.add(v333, stdlib.checkedBigNumberify('./index.rsh:42:34:decimal', stdlib.UInt_max, '1'));
            const v935 = v332;
            const v936 = v474;
            const v938 = stdlib.lt(v474, stdlib.checkedBigNumberify('./index.rsh:29:29:decimal', stdlib.UInt_max, '5'));
            const v939 = v332 ? false : v938;
            if (v939) {
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
            await stdlib.simMapSet(sim_r, 0, v377, undefined /* Nothing */);
            const v482 = false;
            const v483 = await txn1.getOutput('Bob_register', 'v482', ctc2, v482);
            
            const v488 = stdlib.sub(v333, stdlib.checkedBigNumberify('./index.rsh:47:34:decimal', stdlib.UInt_max, '1'));
            const v940 = v332;
            const v941 = v488;
            const v943 = stdlib.lt(v488, stdlib.checkedBigNumberify('./index.rsh:29:29:decimal', stdlib.UInt_max, '5'));
            const v944 = v332 ? false : v943;
            if (v944) {
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
    tys: [ctc2, ctc3, ctc5],
    waitIfNotPresent: false
    }));
  const {data: [v378], secs: v380, time: v379, didSend: v201, from: v377 } = txn1;
  switch (v378[0]) {
    case 'Bob_done0_60': {
      const v381 = v378[1];
      return;
      break;
      }
    case 'Bob_register0_60': {
      const v437 = v378[1];
      undefined /* setApiDetails */;
      ;
      const v456 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v377), null);
      let v457;
      switch (v456[0]) {
        case 'None': {
          const v458 = v456[1];
          v457 = false;
          
          break;
          }
        case 'Some': {
          const v459 = v456[1];
          v457 = true;
          
          break;
          }
        }
      const v460 = v457 ? false : true;
      stdlib.assert(v460, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:31:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:33:18:application call to [unknown function] (defined at: ./index.rsh:33:18:function exp)'],
        msg: 'not yet a member',
        who: 'Bob_register'
        });
      const v462 = stdlib.eq(v333, stdlib.checkedBigNumberify('./index.rsh:32:22:decimal', stdlib.UInt_max, '5'));
      stdlib.assert(v462, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:32:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:33:18:application call to [unknown function] (defined at: ./index.rsh:33:18:function exp)'],
        msg: null,
        who: 'Bob_register'
        });
      const v464 = stdlib.lt(v333, stdlib.checkedBigNumberify('./index.rsh:38:20:decimal', stdlib.UInt_max, '5'));
      if (v464) {
        const v467 = true;
        const v468 = await txn1.getOutput('Bob_register', 'v467', ctc2, v467);
        if (v201) {
          stdlib.protect(ctc0, await interact.out(v437, v468), {
            at: './index.rsh:30:9:application',
            fs: ['at ./index.rsh:30:9:application call to [unknown function] (defined at: ./index.rsh:30:9:function exp)', 'at ./index.rsh:40:10:application call to "k" (defined at: ./index.rsh:33:18:function exp)', 'at ./index.rsh:33:18:application call to [unknown function] (defined at: ./index.rsh:33:18:function exp)'],
            msg: 'out',
            who: 'Bob_register'
            });
          }
        else {
          }
        
        await stdlib.mapSet(map0, v377, null);
        const v474 = stdlib.add(v333, stdlib.checkedBigNumberify('./index.rsh:42:34:decimal', stdlib.UInt_max, '1'));
        const v935 = v332;
        const v936 = v474;
        const v938 = stdlib.lt(v474, stdlib.checkedBigNumberify('./index.rsh:29:29:decimal', stdlib.UInt_max, '5'));
        const v939 = v332 ? false : v938;
        if (v939) {
          return;
          }
        else {
          return;
          }}
      else {
        await stdlib.mapSet(map0, v377, undefined /* Nothing */);
        const v482 = false;
        const v483 = await txn1.getOutput('Bob_register', 'v482', ctc2, v482);
        if (v201) {
          stdlib.protect(ctc0, await interact.out(v437, v483), {
            at: './index.rsh:30:9:application',
            fs: ['at ./index.rsh:30:9:application call to [unknown function] (defined at: ./index.rsh:30:9:function exp)', 'at ./index.rsh:46:10:application call to "k" (defined at: ./index.rsh:33:18:function exp)', 'at ./index.rsh:33:18:application call to [unknown function] (defined at: ./index.rsh:33:18:function exp)'],
            msg: 'out',
            who: 'Bob_register'
            });
          }
        else {
          }
        
        const v488 = stdlib.sub(v333, stdlib.checkedBigNumberify('./index.rsh:47:34:decimal', stdlib.UInt_max, '1'));
        const v940 = v332;
        const v941 = v488;
        const v943 = stdlib.lt(v488, stdlib.checkedBigNumberify('./index.rsh:29:29:decimal', stdlib.UInt_max, '5'));
        const v944 = v332 ? false : v943;
        if (v944) {
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
  appApproval: `BiAGAAEFAsX9hNEHAyYDAQAAAQEiNQAxGEEBxilkSSJbNQGBCFs1AjEZIxJBAAgxACgoZkIBlDYaABdJQQAtIjUEIzUGSSEEDEAADiEEEkQpNf8oNP9QQgAogeef++cGEkQpNf8qNP9QQgAWNhoCFzUENhoDNhoBF0klDEAAvCUSRCEFNAESRDQESSISTDQCEhFEKGRJNQNJVwABFzX/I1s1/kk1BTX9gATZ3zwLNP1QsDT9IlVAABs0/iQSRIAIAAAAAAAAAYawKTUHIzT+MgZCAI8xAIgBJkk1+yJVQAAGIjX8QgAGIzX8QgAANPwURDT+JBJENP4kDEEAH4AJAAAAAAAAAdMBsCo1BzEAKCpmNP80/iMIMgZCAEcxACgoZoAJAAAAAAAAAeIAsCg1BzT/NP4jCTIGQgAoIhJEgaCNBogAxyI0ARJENARJIhJMNAISEUSABF8Nq/qwIyIyBkIAADX/Nf5JNf0UNP4kDBBBAB00/RZRBwg0/hZQKEsBVwAJZ0ghBTUBMgY1AkIAHkIAADEZJBJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKTQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iMTQSRCUxNRJEIjE2EkQjMTcSRCI1ASI1AkL/r0kxGGFAAANIKIkoYok0AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk=`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 1,
  mapDataSize: 1,
  stateKeys: 1,
  stateSize: 9,
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
        "internalType": "struct T4",
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
        "internalType": "struct T4",
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
                    "internalType": "enum _enum_T7",
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
                "internalType": "struct T7",
                "name": "v378",
                "type": "tuple"
              }
            ],
            "internalType": "struct T8",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T9",
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
    "name": "_reach_oe_v390",
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
    "name": "_reach_oe_v467",
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
    "name": "_reach_oe_v482",
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
                    "internalType": "enum _enum_T7",
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
                "internalType": "struct T7",
                "name": "v378",
                "type": "tuple"
              }
            ],
            "internalType": "struct T8",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T9",
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
  Bytecode: `0x608060405260405162001037380380620010378339810160408190526200002691620002b3565b600080554360035560408051338152825160208083019190915283015115158183015290517faf3102e4a96b239a2811210526ca19adcde1af3e2876a2c9a5886a5a887a2dcb9181900360600190a16200008334156007620000bd565b6200008d62000193565b6020808201805160019052805160009201919091525143604090910152620000b581620000e7565b50506200035b565b81620000e35760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b602081015151620001045760058160200151602001511062000107565b60005b156200017857604080518082018252600080825260208083018281528582018051511515808652905183015182526003909355436001558451808301939093525182850152835180830385018152606090920190935280519192620001739260029290910190620001d3565b505050565b60008080556001819055620001909060029062000262565b50565b6040518060400160405280600015158152602001620001ce604051806060016040528060001515815260200160008152602001600081525090565b905290565b828054620001e1906200031e565b90600052602060002090601f01602090048101928262000205576000855562000250565b82601f106200022057805160ff191683800117855562000250565b8280016001018555821562000250579182015b828111156200025057825182559160200191906001019062000233565b506200025e9291506200029c565b5090565b50805462000270906200031e565b6000825580601f1062000281575050565b601f0160209004906000526020600020908101906200019091905b5b808211156200025e57600081556001016200029d565b600060408284031215620002c657600080fd5b604080519081016001600160401b0381118282101715620002f757634e487b7160e01b600052604160045260246000fd5b60405282518152602083015180151581146200031257600080fd5b60208201529392505050565b600181811c908216806200033357607f821691505b602082108114156200035557634e487b7160e01b600052602260045260246000fd5b50919050565b610ccc806200036b6000396000f3fe60806040526004361061006e5760003560e01c8063832307571161004b57806383230757146100e0578063ab53f2c6146100f5578063d9d7e3ee14610118578063eca479e71461012b57005b80631e93b0f1146100775780633bc5b7bf1461009b5780636dada13f146100c857005b3661007557005b005b34801561008357600080fd5b506003545b6040519081526020015b60405180910390f35b3480156100a757600080fd5b506100bb6100b6366004610928565b610133565b604051610092919061098c565b6100d061015f565b6040519015158152602001610092565b3480156100ec57600080fd5b50600154610088565b34801561010157600080fd5b5061010a610198565b6040516100929291906109be565b610075610126366004610a1b565b610235565b6100d0610265565b6040805160608101825260008082526020820181905291810191909152610159826102a4565b92915050565b60006101696107e1565b602081810151516000908190526040805180820190915281815291820152610191828261037c565b5192915050565b6000606060005460028080546101ad90610a33565b80601f01602080910402602001604051908101604052809291908181526020018280546101d990610a33565b80156102265780601f106101fb57610100808354040283529160200191610226565b820191906000526020600020905b81548152906001019060200180831161020957829003601f168201915b50505050509050915091509091565b604080518082019091526000808252602082015261026161025b36849003840184610ade565b8261037c565b5050565b600061026f6107e1565b60208101515160019081905250604080518082019091526000808252602082015261029a828261037c565b6020015192915050565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526004602052604090205460ff1660018111156102f0576102f0610958565b141561036d576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff16600181111561033157610331610958565b600181111561034257610342610958565b8152905460ff6101008204811615156020840152620100009091041615156040909101529050919050565b60008082526020820152919050565b61038c600360005414600d610717565b81516103a79015806103a057508251600154145b600e610717565b6000808055600280546103b990610a33565b80601f01602080910402602001604051908101604052809291908181526020018280546103e590610a33565b80156104325780601f1061040757610100808354040283529160200191610432565b820191906000526020600020905b81548152906001019060200180831161041557829003601f168201915b505050505080602001905181019061044a9190610b98565b6040805160208101909152600081529091507f27d146f0165d479c3209112a2cf87d6a0d43eb5a8f4fbcf6188ab9560de4cc22338560405161048d929190610bfe565b60405180910390a160006020850151515160018111156104af576104af610958565b1415610542576104c134156008610717565b6104d360058360200151146009610717565b604051600081527f43aa6d39d3685145b4f8caaa46b9848b222953d27623e7f2390d378ee4fba95e9060200160405180910390a16000835261051361081f565b602080820180516001905284820151815190920191909152514360409091015261053c8161073c565b50610711565b600160208501515151600181111561055c5761055c610958565b14156107115761056e3415600a610717565b6000610579336102a4565b51600181111561058b5761058b610958565b141561059a57600081526105c2565b60016105a5336102a4565b5160018111156105b7576105b7610958565b14156105c257600181525b80516105dd906105d35760016105d6565b60005b600b610717565b6105ef6005836020015114600c610717565b60058260200151101561069a57604051600181527f5382500c0642634f0254e06f17bb824b530b1f21a83916953bd239b2e368e4159060200160405180910390a160016020848101829052336000908152600490915260409020805462ff00ff1916909117905561065e61081f565b825160208083015191151590915283015161067b90600190610c67565b6020808301805190910191909152514360409091015261053c8161073c565b336000908152600460209081526040808320805462ffffff19169055519182527fcb9683a11aa08218110c33c37e2bdaf3035b2fd0affb64e652728e327eb96109910160405180910390a1600060208401526106f461081f565b825160208083015191151590915283015161067b90600190610c7f565b50505050565b816102615760405163100960cb60e01b81526004810182905260240160405180910390fd5b6020810151516107575760058160200151602001511061075a565b60005b156107c8576040805180820182526000808252602080830182815285820180515115158086529051830151825260039093554360015584518083019390935251828501528351808303850181526060909201909352805191926107c39260029290910190610859565b505050565b600080805560018190556107de906002906108dd565b50565b60405180604001604052806000815260200161081a60408051608081018252600060208201818152928201819052606082015290815290565b905290565b604051806040016040528060001515815260200161081a604051806060016040528060001515815260200160008152602001600081525090565b82805461086590610a33565b90600052602060002090601f01602090048101928261088757600085556108cd565b82601f106108a057805160ff19168380011785556108cd565b828001600101855582156108cd579182015b828111156108cd5782518255916020019190600101906108b2565b506108d9929150610913565b5090565b5080546108e990610a33565b6000825580601f106108f9575050565b601f0160209004906000526020600020908101906107de91905b5b808211156108d95760008155600101610914565b60006020828403121561093a57600080fd5b81356001600160a01b038116811461095157600080fd5b9392505050565b634e487b7160e01b600052602160045260246000fd5b600281106107de57634e487b7160e01b600052602160045260246000fd5b8151606082019061099c8161096e565b8083525060208301511515602083015260408301511515604083015292915050565b82815260006020604081840152835180604085015260005b818110156109f2578581018301518582016060015282016109d6565b81811115610a04576000606083870101525b50601f01601f191692909201606001949350505050565b600060808284031215610a2d57600080fd5b50919050565b600181811c90821680610a4757607f821691505b60208210811415610a2d57634e487b7160e01b600052602260045260246000fd5b6040516020810167ffffffffffffffff81118282101715610a9957634e487b7160e01b600052604160045260246000fd5b60405290565b6040516060810167ffffffffffffffff81118282101715610a9957634e487b7160e01b600052604160045260246000fd5b80151581146107de57600080fd5b60008183036080811215610af157600080fd5b6040516040810181811067ffffffffffffffff82111715610b2257634e487b7160e01b600052604160045260246000fd5b604052833581526060601f1983011215610b3b57600080fd5b610b43610a68565b9150610b4d610a9f565b602085013560028110610b5f57600080fd5b81526040850135610b6f81610ad0565b60208201526060850135610b8281610ad0565b6040820152825260208101919091529392505050565b600060408284031215610baa57600080fd5b6040516040810181811067ffffffffffffffff82111715610bdb57634e487b7160e01b600052604160045260246000fd5b6040528251610be981610ad0565b81526020928301519281019290925250919050565b6001600160a01b0383168152815160208083019190915282015151805160a083019190610c2a8161096e565b80604085015250602081015115156060840152604081015115156080840152509392505050565b634e487b7160e01b600052601160045260246000fd5b60008219821115610c7a57610c7a610c51565b500190565b600082821015610c9157610c91610c51565b50039056fea2646970667358221220b444141fc0f0ef435e0055e315559a770562343a3b1350402ad26599dd424a9d64736f6c634300080c0033`,
  BytecodeLen: 4151,
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

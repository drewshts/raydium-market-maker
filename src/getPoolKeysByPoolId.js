function a3_0x351f(){const _0x382ffd=['lpMint','18lifWUP','warn','2698805qTSmmJ','getAccountInfo','toArrayLike','31516IdOaiG','⚠️\x20Only\x20Raydium\x20Standard\x20liquidity\x20is\x20supported.\x20Skipping\x20AMM\x20ID:\x20','OPENBOOK_MARKET','baseVault','baseMint','marketId','toBuffer','8033060rUJATv','70pmHSCV','#FF9900','4745997qCqwjt','4awCrYY','openOrders','decode','toNumber','bids','11660288eARcRO','baseDecimal','status','createProgramAddressSync','quoteVault','error','vaultSignerNonce','ownAddress','asks','1148004RYvjVZ','50558930cRyGgp','data','quoteDecimal'];a3_0x351f=function(){return _0x382ffd;};return a3_0x351f();}(function(_0x5031ff,_0x4c0008){const _0x24e713=a3_0x331b,_0x2c9302=_0x5031ff();while(!![]){try{const _0x537ef2=-parseInt(_0x24e713(0x13b))/0x1*(parseInt(_0x24e713(0x133))/0x2)+-parseInt(_0x24e713(0x13d))/0x3*(parseInt(_0x24e713(0x13e))/0x4)+-parseInt(_0x24e713(0x130))/0x5*(parseInt(_0x24e713(0x12e))/0x6)+-parseInt(_0x24e713(0x13a))/0x7+parseInt(_0x24e713(0x143))/0x8+-parseInt(_0x24e713(0x129))/0x9+parseInt(_0x24e713(0x12a))/0xa;if(_0x537ef2===_0x4c0008)break;else _0x2c9302['push'](_0x2c9302['shift']());}catch(_0x507c8f){_0x2c9302['push'](_0x2c9302['shift']());}}}(a3_0x351f,0xe403f));import{PublicKey}from'@solana/web3.js';import{LIQUIDITY_STATE_LAYOUT_V4,MARKET_STATE_LAYOUT_V3,MAINNET_PROGRAM_ID}from'@raydium-io/raydium-sdk';function a3_0x331b(_0x21875c,_0x38a8bb){const _0x351f6d=a3_0x351f();return a3_0x331b=function(_0x331bb4,_0x5bf8bc){_0x331bb4=_0x331bb4-0x126;let _0x46f245=_0x351f6d[_0x331bb4];return _0x46f245;},a3_0x331b(_0x21875c,_0x38a8bb);}import a3_0x2e8389 from'chalk';export const getPoolKeysByPoolId=async(_0x1c5aa3,_0x14eb51)=>{const _0x2ec398=a3_0x331b;try{const _0x50d8a4=await _0x14eb51['getAccountInfo'](new PublicKey(_0x1c5aa3));if(!_0x50d8a4)return null;const _0x398063=LIQUIDITY_STATE_LAYOUT_V4['decode'](_0x50d8a4['data']);if(!_0x398063[_0x2ec398(0x138)])return null;const _0x4d0712=await _0x14eb51[_0x2ec398(0x131)](new PublicKey(_0x398063['marketId']));if(!_0x4d0712)return null;const _0x1f1f91=MARKET_STATE_LAYOUT_V3[_0x2ec398(0x140)](_0x4d0712[_0x2ec398(0x12b)]);let _0x4a2b6f;try{_0x4a2b6f=PublicKey[_0x2ec398(0x146)]([_0x1f1f91[_0x2ec398(0x127)][_0x2ec398(0x139)](),_0x1f1f91[_0x2ec398(0x126)][_0x2ec398(0x132)](Buffer,'le',0x8)],MAINNET_PROGRAM_ID['OPENBOOK_MARKET']);}catch(_0x172166){return console[_0x2ec398(0x12f)](a3_0x2e8389['hex'](_0x2ec398(0x13c))(_0x2ec398(0x134)+_0x1c5aa3)),null;}return{'id':new PublicKey(_0x1c5aa3),'programId':MAINNET_PROGRAM_ID['AmmV4'],'status':_0x398063[_0x2ec398(0x145)],'baseDecimals':_0x398063[_0x2ec398(0x144)][_0x2ec398(0x141)](),'quoteDecimals':_0x398063[_0x2ec398(0x12c)][_0x2ec398(0x141)](),'lpDecimals':0x9,'baseMint':_0x398063[_0x2ec398(0x137)],'quoteMint':_0x398063['quoteMint'],'version':0x4,'authority':new PublicKey('5Q544fKrFoe6tsEbD7S8EmxGTJYAKtTVhAW5Q5pge4j1'),'openOrders':_0x398063[_0x2ec398(0x13f)],'baseVault':_0x398063['baseVault'],'quoteVault':_0x398063[_0x2ec398(0x147)],'marketProgramId':MAINNET_PROGRAM_ID[_0x2ec398(0x135)],'marketId':_0x1f1f91['ownAddress'],'marketBids':_0x1f1f91[_0x2ec398(0x142)],'marketAsks':_0x1f1f91[_0x2ec398(0x128)],'marketEventQueue':_0x1f1f91['eventQueue'],'marketBaseVault':_0x1f1f91[_0x2ec398(0x136)],'marketQuoteVault':_0x1f1f91[_0x2ec398(0x147)],'marketAuthority':_0x4a2b6f,'targetOrders':_0x398063['targetOrders'],'lpMint':_0x398063[_0x2ec398(0x12d)]};}catch(_0xcbddc5){return console[_0x2ec398(0x148)]('Error\x20in\x20getPoolKeysByPoolId\x20for\x20'+_0x1c5aa3+':',_0xcbddc5),null;}};
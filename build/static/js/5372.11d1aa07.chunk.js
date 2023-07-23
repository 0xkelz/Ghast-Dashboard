"use strict";(self.webpackChunkghastdb=self.webpackChunkghastdb||[]).push([[5372],{87428:function(e,t,n){n.d(t,{W:function(){return h}});var r=n(15671),i=n(43144),a=n(97326),c=n(60136),s=n(29388),o=n(40744),u=n(20710),h=function(e){(0,c.Z)(n,e);var t=(0,s.Z)(n);function n(e){var i;(0,r.Z)(this,n);var c=e.chains,s=void 0===c?u.gL9:c,h=e.options;return i=t.call(this),(0,o._)((0,a.Z)(i),"id",void 0),(0,o._)((0,a.Z)(i),"name",void 0),(0,o._)((0,a.Z)(i),"chains",void 0),(0,o._)((0,a.Z)(i),"options",void 0),(0,o._)((0,a.Z)(i),"ready",void 0),i.chains=s,i.options=h,i}return(0,i.Z)(n,[{key:"getBlockExplorerUrls",value:function(e){var t,n,r=null!==(t=null===(n=e.explorers)||void 0===n?void 0:n.map((function(e){return e.url})))&&void 0!==t?t:[];return r.length>0?r:void 0}},{key:"isChainUnsupported",value:function(e){return!this.chains.some((function(t){return t.chainId===e}))}},{key:"updateChains",value:function(e){this.chains=e}}]),n}(n(62349).Z)},12885:function(e,t,n){n.d(t,{A:function(){return v},C:function(){return f},R:function(){return p},S:function(){return Z},U:function(){return m},a:function(){return l}});var r=n(43144),i=n(15671),a=n(97326),c=n(60136),s=n(29388),o=n(98737),u=n(40744),h=function(e){(0,c.Z)(n,e);var t=(0,s.Z)(n);function n(e,r){var c;(0,i.Z)(this,n);var s=r.cause,o=r.code,h=r.data;if(!Number.isInteger(o))throw new Error('"code" must be an integer.');if(!e||"string"!==typeof e)throw new Error('"message" must be a nonempty string.');return c=t.call(this,"".concat(e,". Cause: ").concat(s)),(0,u._)((0,a.Z)(c),"cause",void 0),(0,u._)((0,a.Z)(c),"code",void 0),(0,u._)((0,a.Z)(c),"data",void 0),c.cause=s,c.code=o,c.data=h,c}return(0,r.Z)(n)}((0,o.Z)(Error)),d=function(e){(0,c.Z)(n,e);var t=(0,s.Z)(n);function n(e,r){(0,i.Z)(this,n);var a=r.cause,c=r.code,s=r.data;if(!(Number.isInteger(c)&&c>=1e3&&c<=4999))throw new Error('"code" must be an integer such that: 1000 <= code <= 4999');return t.call(this,e,{cause:a,code:c,data:s})}return(0,r.Z)(n)}(h),v=function(e){(0,c.Z)(n,e);var t=(0,s.Z)(n);function n(){var e;return(0,i.Z)(this,n),e=t.apply(this,arguments),(0,u._)((0,a.Z)(e),"name","AddChainError"),(0,u._)((0,a.Z)(e),"message","Error adding chain"),e}return(0,r.Z)(n)}((0,o.Z)(Error)),f=function(e){(0,c.Z)(n,e);var t=(0,s.Z)(n);function n(e){var r;(0,i.Z)(this,n);var c=e.chainId,s=e.connectorId;return r=t.call(this,'Chain "'.concat(c,'" not configured for connector "').concat(s,'".')),(0,u._)((0,a.Z)(r),"name","ChainNotConfigured"),r}return(0,r.Z)(n)}((0,o.Z)(Error)),l=function(e){(0,c.Z)(n,e);var t=(0,s.Z)(n);function n(){var e;return(0,i.Z)(this,n),e=t.apply(this,arguments),(0,u._)((0,a.Z)(e),"name","ConnectorNotFoundError"),(0,u._)((0,a.Z)(e),"message","Connector not found"),e}return(0,r.Z)(n)}((0,o.Z)(Error)),p=function(e){(0,c.Z)(n,e);var t=(0,s.Z)(n);function n(e){var r;return(0,i.Z)(this,n),r=t.call(this,"Resource unavailable",{cause:e,code:-32002}),(0,u._)((0,a.Z)(r),"name","ResourceUnavailable"),r}return(0,r.Z)(n)}(h),Z=function(e){(0,c.Z)(n,e);var t=(0,s.Z)(n);function n(e){var r;return(0,i.Z)(this,n),r=t.call(this,"Error switching chain",{cause:e,code:4902}),(0,u._)((0,a.Z)(r),"name","SwitchChainError"),r}return(0,r.Z)(n)}(d),m=function(e){(0,c.Z)(n,e);var t=(0,s.Z)(n);function n(e){var r;return(0,i.Z)(this,n),r=t.call(this,"User rejected request",{cause:e,code:4001}),(0,u._)((0,a.Z)(r),"name","UserRejectedRequestError"),r}return(0,r.Z)(n)}(d)},93207:function(e,t,n){function r(e){return"string"===typeof e?Number.parseInt(e,"0x"===e.trim().substring(0,2)?16:10):"bigint"===typeof e?Number(e):e}n.d(t,{n:function(){return r}})},20115:function(e,t,n){n.d(t,{_:function(){return C}});var r=n(29439),i=n(74165),a=n(15861),c=n(1413),s=n(15671),o=n(43144),u=n(97326),h=n(60136),d=n(29388),v=n(93433),f=n(37762),l=n(95768),p=n(40744),Z=n(41733),m=n(28552),g=n(64249),w=n(52009),k=n(87428),x=n(93207),b=n(12885);n(62349);var y=new WeakMap,C=function(e){(0,h.Z)(n,e);var t=(0,d.Z)(n);function n(e){var r;(0,s.Z)(this,n);var o={shimDisconnect:!0,getProvider:function(){if((0,Z.a)(globalThis.window))return globalThis.window.ethereum}},h=(0,c.Z)((0,c.Z)({},o),e.options);r=t.call(this,{chains:e.chains,options:h}),(0,p._)((0,u.Z)(r),"id",void 0),(0,p._)((0,u.Z)(r),"name",void 0),(0,p._)((0,u.Z)(r),"ready",void 0),(0,l._)((0,u.Z)(r),y,{writable:!0,value:void 0}),(0,p._)((0,u.Z)(r),"connectorStorage",void 0),(0,p._)((0,u.Z)(r),"shimDisconnectKey","injected.shimDisconnect"),(0,p._)((0,u.Z)(r),"onAccountsChanged",function(){var e=(0,a.Z)((0,i.Z)().mark((function e(t){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:0===t.length?r.emit("disconnect"):r.emit("change",{account:m.getAddress(t[0])});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),(0,p._)((0,u.Z)(r),"onChainChanged",(function(e){var t=(0,x.n)(e),n=r.isChainUnsupported(t);r.emit("change",{chain:{id:t,unsupported:n}})})),(0,p._)((0,u.Z)(r),"onDisconnect",function(){var e=(0,a.Z)((0,i.Z)().mark((function e(t){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(1013!==t.code){e.next=10;break}return e.next=3,r.getProvider();case 3:if(!e.sent){e.next=10;break}return e.next=7,r.getAccount();case 7:if(!e.sent){e.next=10;break}return e.abrupt("return");case 10:if(r.emit("disconnect"),!r.options.shimDisconnect){e.next=14;break}return e.next=14,r.connectorStorage.removeItem(r.shimDisconnectKey);case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());var d=h.getProvider();if("string"===typeof h.name)r.name=h.name;else if(d){var g=function(e){var t,n;if(!e)return"Injected";var r=function(e){return e.isAvalanche?"Core Wallet":e.isBitKeep?"BitKeep":e.isBraveWallet?"Brave Wallet":e.isCoinbaseWallet?"Coinbase Wallet":e.isExodus?"Exodus":e.isFrame?"Frame":e.isKuCoinWallet?"KuCoin Wallet":e.isMathWallet?"MathWallet":e.isOneInchIOSWallet||e.isOneInchAndroidWallet?"1inch Wallet":e.isOpera?"Opera":e.isPortal?"Ripio Portal":e.isTally?"Tally":e.isTokenPocket?"TokenPocket":e.isTokenary?"Tokenary":e.isTrust||e.isTrustWallet?"Trust Wallet":e.isMetaMask?"MetaMask":void 0};if(null!==(t=e.providers)&&void 0!==t&&t.length){var i,a,c=new Set,s=1,o=(0,f.Z)(e.providers);try{for(o.s();!(a=o.n()).done;){var u=r(a.value);u||(u="Unknown Wallet #".concat(s),s+=1),c.add(u)}}catch(d){o.e(d)}finally{o.f()}var h=(0,v.Z)(c);return h.length?h:null!==(i=h[0])&&void 0!==i?i:"Injected"}return null!==(n=r(e))&&void 0!==n?n:"Injected"}(d);h.name?r.name=h.name(g):r.name="string"===typeof g?g:g[0]}else r.name="Injected";return r.id="injected",r.ready=!!d,r.connectorStorage=e.connectorStorage,r}return(0,o.Z)(n,[{key:"connect",value:function(){var e=(0,a.Z)((0,i.Z)().mark((function e(){var t,n,r,a,c,s,o,u=arguments;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=u.length>0&&void 0!==u[0]?u[0]:{},e.prev=1,e.next=4,this.getProvider();case 4:if(n=e.sent){e.next=7;break}throw new b.a;case 7:return this.setupListeners(),this.emit("message",{type:"connecting"}),e.next=11,n.request({method:"eth_requestAccounts"});case 11:return r=e.sent,a=m.getAddress(r[0]),e.next=15,this.getChainId();case 15:if(c=e.sent,s=this.isChainUnsupported(c),!t.chainId||c===t.chainId){e.next=28;break}return e.prev=18,e.next=21,this.switchChain(t.chainId);case 21:c=t.chainId,s=this.isChainUnsupported(t.chainId),e.next=28;break;case 25:e.prev=25,e.t0=e.catch(18),console.error("Could not switch to chain id: ".concat(t.chainId),e.t0);case 28:if(!this.options.shimDisconnect){e.next=31;break}return e.next=31,this.connectorStorage.setItem(this.shimDisconnectKey,"true");case 31:return o={account:a,chain:{id:c,unsupported:s},provider:n},this.emit("connect",o),e.abrupt("return",o);case 36:if(e.prev=36,e.t1=e.catch(1),!this.isUserRejectedRequestError(e.t1)){e.next=40;break}throw new b.U(e.t1);case 40:if(-32002!==e.t1.code){e.next=42;break}throw new b.R(e.t1);case 42:throw e.t1;case 43:case"end":return e.stop()}}),e,this,[[1,36],[18,25]])})));return function(){return e.apply(this,arguments)}}()},{key:"disconnect",value:function(){var e=(0,a.Z)((0,i.Z)().mark((function e(){var t;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getProvider();case 2:if(null!==(t=e.sent)&&void 0!==t&&t.removeListener){e.next=5;break}return e.abrupt("return");case 5:if(t.removeListener("accountsChanged",this.onAccountsChanged),t.removeListener("chainChanged",this.onChainChanged),t.removeListener("disconnect",this.onDisconnect),!this.options.shimDisconnect){e.next=11;break}return e.next=11,this.connectorStorage.removeItem(this.shimDisconnectKey);case 11:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getAccount",value:function(){var e=(0,a.Z)((0,i.Z)().mark((function e(){var t,n;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getProvider();case 2:if(t=e.sent){e.next=5;break}throw new b.a;case 5:return e.next=7,t.request({method:"eth_accounts"});case 7:return n=e.sent,e.abrupt("return",m.getAddress(n[0]));case 9:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getChainId",value:function(){var e=(0,a.Z)((0,i.Z)().mark((function e(){var t;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getProvider();case 2:if(t=e.sent){e.next=5;break}throw new b.a;case 5:return e.abrupt("return",t.request({method:"eth_chainId"}).then(x.n));case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getProvider",value:function(){var e=(0,a.Z)((0,i.Z)().mark((function e(){var t;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(t=this.options.getProvider())&&(0,l.a)(this,y,t),e.abrupt("return",(0,l.b)(this,y));case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getSigner",value:function(){var e=(0,a.Z)((0,i.Z)().mark((function e(){var t,n,a,c,s,o=arguments;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=(o.length>0&&void 0!==o[0]?o[0]:{}).chainId,e.next=3,Promise.all([this.getProvider(),this.getAccount()]);case 3:return n=e.sent,a=(0,r.Z)(n,2),c=a[0],s=a[1],e.abrupt("return",new g.Q(c,t).getSigner(s));case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"isAuthorized",value:function(){var e=(0,a.Z)((0,i.Z)().mark((function e(){var t;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,e.t0=this.options.shimDisconnect,!e.t0){e.next=8;break}return e.t1=Boolean,e.next=6,this.connectorStorage.getItem(this.shimDisconnectKey);case 6:e.t2=e.sent,e.t0=!(0,e.t1)(e.t2);case 8:if(!e.t0){e.next=10;break}return e.abrupt("return",!1);case 10:return e.next=12,this.getProvider();case 12:if(e.sent){e.next=15;break}throw new b.a;case 15:return e.next=17,this.getAccount();case 17:return t=e.sent,e.abrupt("return",!!t);case 21:return e.prev=21,e.t3=e.catch(0),e.abrupt("return",!1);case 24:case"end":return e.stop()}}),e,this,[[0,21]])})));return function(){return e.apply(this,arguments)}}()},{key:"switchChain",value:function(){var e=(0,a.Z)((0,i.Z)().mark((function e(t){var n,r,a,c,s;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getProvider();case 2:if(n=e.sent){e.next=5;break}throw new b.a;case 5:return r=w.hexValue(t),e.prev=6,e.next=9,n.request({method:"wallet_switchEthereumChain",params:[{chainId:r}]});case 9:if(!(a=this.chains.find((function(e){return e.chainId===t})))){e.next=12;break}return e.abrupt("return",a);case 12:return e.abrupt("return",{chainId:t,name:"Chain ".concat(r),slug:"".concat(r),nativeCurrency:{name:"Ether",decimals:18,symbol:"ETH"},rpc:[""],chain:"",shortName:"",testnet:!0});case 15:if(e.prev=15,e.t0=e.catch(6),s=this.chains.find((function(e){return e.chainId===t}))){e.next=20;break}throw new b.C({chainId:t,connectorId:this.id});case 20:if(4902!==e.t0.code&&4902!==(null===e.t0||void 0===e.t0||null===(c=e.t0.data)||void 0===c||null===(c=c.originalError)||void 0===c?void 0:c.code)){e.next=32;break}return e.prev=21,e.next=24,n.request({method:"wallet_addEthereumChain",params:[{chainId:r,chainName:s.name,nativeCurrency:s.nativeCurrency,rpcUrls:s.rpc,blockExplorerUrls:this.getBlockExplorerUrls(s)}]});case 24:return e.abrupt("return",s);case 27:if(e.prev=27,e.t1=e.catch(21),!this.isUserRejectedRequestError(e.t1)){e.next=31;break}throw new b.U(e.t0);case 31:throw new b.A;case 32:if(!this.isUserRejectedRequestError(e.t0)){e.next=34;break}throw new b.U(e.t0);case 34:throw new b.S(e.t0);case 35:case"end":return e.stop()}}),e,this,[[6,15],[21,27]])})));return function(t){return e.apply(this,arguments)}}()},{key:"setupListeners",value:function(){var e=(0,a.Z)((0,i.Z)().mark((function e(){var t;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getProvider();case 2:(t=e.sent).on&&(t.on("accountsChanged",this.onAccountsChanged),t.on("chainChanged",this.onChainChanged),t.on("disconnect",this.onDisconnect));case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"isUserRejectedRequestError",value:function(e){return 4001===e.code}}]),n}(k.W)}}]);
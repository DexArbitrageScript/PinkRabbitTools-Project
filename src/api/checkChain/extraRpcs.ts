const extraRpcs = {
    '1': {
      rpcs: [
        'https://eth.llamarpc.com',
        'https://endpoints.omniatech.io/v1/eth/mainnet/public',
        'https://rpc.ankr.com/eth',
        'https://eth-mainnet.nodereal.io/v1/1659dfb40aa24bbb8153a677b98064d7',
        'https://ethereum.publicnode.com',
        'https://1rpc.io/eth',
        'https://rpc.builder0x69.io/',
        'https://rpc.mevblocker.io',
        'https://rpc.flashbots.net/',
        'https://virginia.rpc.blxrbdn.com/',
        'https://uk.rpc.blxrbdn.com/',
        'https://singapore.rpc.blxrbdn.com/',
        'https://eth.rpc.blxrbdn.com/',
        'https://cloudflare-eth.com/',
        'https://eth-mainnet.public.blastapi.io',
        'https://api.securerpc.com/v1',
        'https://api.bitstack.com/v1/wNFxbiJyQsSeLrX8RRCHi7NpRxrlErZk/DjShIqLishPCTB9HiMkPHXjUM9CNM9Na/ETH/mainnet',
        'https://eth-rpc.gateway.pokt.network',
        'https://eth-mainnet-public.unifra.io',
        'https://ethereum.blockpi.network/v1/rpc/public',
        'https://rpc.payload.de',
        'https://api.zmok.io/mainnet/oaen6dy8ff6hju9k',
        'https://eth-mainnet.g.alchemy.com/v2/demo',
        'https://eth.api.onfinality.io/public',
        'https://core.gashawk.io/rpc',
        'https://mainnet.eth.cloud.ava.do/',
        'https://ethereumnodelight.app.runonflux.io',
        'https://eth-mainnet.rpcfast.com?api_key=xbhWBI1Wkguk8SNMu1bvvLurPGLXmgwYeC4S6g2H7WdwFigZSmPWVZRxrskEQwIf',
        'https://main-light.eth.linkpool.io',
        'https://rpc.eth.gateway.fm',
        'https://rpc.chain49.com/ethereum?api_key=14d1a8b86d8a4b4797938332394203dc',
        'https://eth.meowrpc.com',
        'https://eth.drpc.org',
        'https://mainnet.gateway.tenderly.co',
        'https://gateway.tenderly.co/public/mainnet'
      ]
    },
    '2': { rpcs: [ 'https://node.eggs.cool', 'https://node.expanse.tech' ] },
    '3': {
      rpcs: [
        'https://rpc.ankr.com/eth_ropsten',
        'https://ropsten.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161'
      ]
    },
    '4': {
      rpcs: [
        'https://rpc.ankr.com/eth_rinkeby',
        'https://rinkeby.infura.io/3/9aa3d95b3bc440fa88ea12eaa4456161'
      ]
    },
    '5': {
      rpcs: [
        'https://rpc.ankr.com/eth_goerli',
        'https://endpoints.omniatech.io/v1/eth/goerli/public',
        'https://goerli.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161',
        'https://eth-goerli.public.blastapi.io',
        'https://eth-goerli.g.alchemy.com/v2/demo',
        'https://goerli.blockpi.network/v1/rpc/public',
        'https://eth-goerli.api.onfinality.io/public',
        'https://rpc.goerli.eth.gateway.fm',
        'https://ethereum-goerli.publicnode.com',
        'https://goerli.gateway.tenderly.co',
        'https://gateway.tenderly.co/public/goerli'
      ]
    },
    '6': {
      rpcs: [
        'https://www.ethercluster.com/kotti',
        'https://geth-kotti.etc-network.info'
      ]
    },
    '7': { rpcs: [ 'https://rpc.dome.cloud' ] },
    '8': { rpcs: [ 'https://rpc.octano.dev' ] },
    '10': {
      rpcs: [
        'https://mainnet.optimism.io/',
        'https://optimism-mainnet.public.blastapi.io',
        'https://rpc.ankr.com/optimism',
        'https://1rpc.io/op',
        'https://opt-mainnet.g.alchemy.com/v2/demo',
        'https://optimism.blockpi.network/v1/rpc/public',
        'https://endpoints.omniatech.io/v1/op/mainnet/public',
        'https://optimism.api.onfinality.io/public',
        'https://rpc.optimism.gateway.fm',
        'https://optimism.publicnode.com'
      ]
    },
    '11': { rpcs: [ 'https://api.metadium.com/dev' ] },
    '14': { rpcs: [] },
    '15': { rpcs: [ 'https://prenet.diode.io:8443/' ] },
    '17': { rpcs: [ 'https://rpc.thaifi.com' ] },
    '19': { rpcs: [ 'https://songbird.towolabs.com/rpc' ] },
    '20': {
      rpcs: [ 'https://api.elastos.io/esc', 'https://api.trinity-tech.io/esc' ]
    },
    '22': {
      rpcs: [ 'https://api.trinity-tech.io/eid', 'https://api.elastos.io/eid' ]
    },
    '24': { rpcs: [ 'https://rpc.kardiachain.io' ] },
    '25': {
      rpcs: [
        'https://evm.cronos.org',
        'https://cronos-rpc.elk.finance/',
        'https://node.croswap.com/rpc',
        'https://cronos.blockpi.network/v1/rpc/public',
        'https://cronos-evm.publicnode.com'
      ]
    },
    '27': { rpcs: [ 'https://rpc.shibachain.net' ] },
    '29': { rpcs: [ 'https://rpc.genesisl1.org' ] },
    '30': { rpcs: [ 'https://public-node.rsk.co' ] },
    '33': { rpcs: [] },
    '35': { rpcs: [ 'https://rpc.tbwg.io' ] },
    '38': { rpcs: [] },
    '40': {
      rpcs: [
        'https://mainnet.telos.net/evm',
        'https://rpc1.eu.telos.net/evm',
        'https://rpc1.us.telos.net/evm',
        'https://rpc2.us.telos.net/evm',
        'https://api.kainosbp.com/evm',
        'https://rpc2.eu.telos.net/evm',
        'https://evm.teloskorea.com/evm',
        'https://rpc2.teloskorea.com/evm',
        'https://rpc01.us.telosunlimited.io/evm',
        'https://rpc02.us.telosunlimited.io/evm'
      ]
    },
    '44': { rpcs: [ 'https://crab.api.onfinality.io/public' ] },
    '50': {
      rpcs: [
        'https://rpc.xdcrpc.com',
        'https://rpc1.xinfin.network',
        'https://erpc.xinfin.network',
        'https://rpc.xinfin.network',
        'https://rpc-xdc.icecreamswap.com',
        'https://erpc.xdcrpc.com'
      ]
    },
    '51': {
      rpcs: [
        'https://rpc.apothem.network',
        'https://erpc.apothem.network',
        'https://apothem.xdcrpc.com'
      ]
    },
    '52': {
      rpcs: [
        'https://rpc.coinex.net/',
        'https://rpc1.coinex.net/',
        'https://rpc2.coinex.net/',
        'https://rpc3.coinex.net/',
        'https://rpc4.coinex.net/'
      ]
    },
    '55': {
      rpcs: [
        'https://rpc-1.zyx.network/',
        'https://rpc-2.zyx.network/',
        'https://rpc-3.zyx.network/',
        'https://rpc-5.zyx.network/'
      ]
    },
    '56': {
      rpcs: [
        'https://bsc-dataseed.binance.org/',
        'https://bsc-dataseed1.defibit.io/',
        'https://bsc-dataseed1.ninicoin.io/',
        'https://bsc-dataseed2.defibit.io/',
        'https://bsc-dataseed3.defibit.io/',
        'https://bsc-dataseed4.defibit.io/',
        'https://bsc-dataseed2.ninicoin.io/',
        'https://bsc-dataseed3.ninicoin.io/',
        'https://bsc-dataseed4.ninicoin.io/',
        'https://bsc-dataseed1.binance.org/',
        'https://bsc-dataseed2.binance.org/',
        'https://bsc-dataseed3.binance.org/',
        'https://bsc-dataseed4.binance.org/',
        'https://rpc-bsc.48.club',
        'https://koge-rpc-bsc.48.club',
        'https://endpoints.omniatech.io/v1/bsc/mainnet/public',
        'https://bsc-mainnet.gateway.pokt.network/v1/lb/6136201a7bad1500343e248d',
        'https://bsc-mainnet.nodereal.io/v1/64a9df0874fb4a93b9d0a3849de012d3',
        'https://rpc.ankr.com/bsc',
        'https://bscrpc.com',
        'https://bsc.rpcgator.com/',
        'https://binance.nodereal.io',
        'https://bsc-mainnet.rpcfast.com?api_key=xbhWBI1Wkguk8SNMu1bvvLurPGLXmgwYeC4S6g2H7WdwFigZSmPWVZRxrskEQwIf',
        'https://nodes.vefinetwork.org/smartchain',
        'https://1rpc.io/bnb',
        'https://bsc.rpc.blxrbdn.com/',
        'https://bsc.blockpi.network/v1/rpc/public',
        'https://bnb.api.onfinality.io/public',
        'https://bsc.publicnode.com',
        'https://bsc-mainnet.public.blastapi.io',
        'https://bsc.meowrpc.com'
      ]
    },
    '57': {
      rpcs: [ 'https://rpc.syscoin.org', 'https://rpc.ankr.com/syscoin' ]
    },
    '58': {
      rpcs: [
        'https://dappnode1.ont.io:10339',
        'https://dappnode2.ont.io:10339',
        'https://dappnode3.ont.io:10339',
        'https://dappnode4.ont.io:10339'
      ]
    },
    '59': {
      rpcs: [ 'https://api.eosargentina.io', 'https://api.metahub.cash' ]
    },
    '60': { rpcs: [ 'https://rpc.gochain.io' ] },
    '61': {
      rpcs: [
        'https://etc.rivet.link',
        'https://etc.etcdesktop.com',
        'https://etc.mytokenpocket.vip',
        'https://besu-de.etc-network.info',
        'https://geth-de.etc-network.info',
        'https://erigon-de.etc-network.info',
        'https://besu-at.etc-network.info',
        'https://geth-at.etc-network.info',
        'https://erigon-at.etc-network.info',
        'https://rpc.etcplanets.com'
      ]
    },
    '63': {
      rpcs: [
        'https://www.ethercluster.com/mordor',
        'https://geth-mordor.etc-network.info'
      ]
    },
    '64': { rpcs: [] },
    '66': { rpcs: [ 'https://exchainrpc.okex.org' ] },
    '68': { rpcs: [] },
    '70': { rpcs: [ 'https://http-mainnet.hoosmartchain.com' ] },
    '74': { rpcs: [ 'https://idchain.one/rpc/' ] },
    '76': { rpcs: [] },
    '77': { rpcs: [ 'https://sokol.poa.network' ] },
    '78': { rpcs: [ 'https://ethnode.primusmoney.com/mainnet' ] },
    '79': {
      rpcs: [
        'https://dataserver-us-1.zenithchain.co/',
        'https://dataserver-asia-3.zenithchain.co/',
        'https://dataserver-asia-4.zenithchain.co/',
        'https://dataserver-asia-2.zenithchain.co/'
      ]
    },
    '80': { rpcs: [ 'website:https://genechain.io/en/index.html' ] },
    '82': {
      rpcs: [
        'https://rpc.meter.io',
        'https://rpc-meter.jellypool.xyz/',
        'https://meter.blockpi.network/v1/rpc/public'
      ]
    },
    '86': { rpcs: [ 'https://evm.gatenode.cc' ] },
    '87': {
      rpcs: [
        'https://rpc.novanetwork.io:9070',
        'https://dev.rpc.novanetwork.io/'
      ]
    },
    '88': { rpcs: [ 'https://rpc.tomochain.com' ] },
    '90': { rpcs: [ 'https://s0.garizon.net/rpc' ] },
    '91': { rpcs: [ 'https://s1.garizon.net/rpc' ] },
    '92': { rpcs: [ 'https://s2.garizon.net/rpc' ] },
    '93': { rpcs: [ 'https://s3.garizon.net/rpc' ] },
    '96': { rpcs: [ 'https://rpc.nextsmartchain.com' ] },
    '97': {
      rpcs: [
        'https://endpoints.omniatech.io/v1/bsc/testnet/public',
        'https://bsctestapi.terminet.io/rpc',
        'https://bsc-testnet.public.blastapi.io',
        'https://bsc-testnet.publicnode.com'
      ]
    },
    '99': { rpcs: [ 'https://core.poanetwork.dev' ] },
    '100': {
      rpcs: [
        'https://rpc.gnosischain.com',
        'https://xdai-rpc.gateway.pokt.network',
        'https://xdai-archive.blockscout.com',
        'https://rpc.gnosis.gateway.fm',
        'https://gnosis-mainnet.public.blastapi.io',
        'https://rpc.ankr.com/gnosis',
        'https://rpc.ap-southeast-1.gateway.fm/v4/gnosis/non-archival/mainnet',
        'https://gnosis.blockpi.network/v1/rpc/public',
        'https://gnosis.api.onfinality.io/public'
      ]
    },
    '101': { rpcs: [] },
    '106': {
      rpcs: [
        'https://evmexplorer.velas.com/rpc',
        'https://velas-mainnet.rpcfast.com?api_key=xbhWBI1Wkguk8SNMu1bvvLurPGLXmgwYeC4S6g2H7WdwFigZSmPWVZRxrskEQwIf'
      ]
    },
    '108': { rpcs: [ 'https://mainnet-rpc.thundercore.com' ] },
    '111': { rpcs: [ 'https://rpc.etherlite.org' ] },
    '119': { rpcs: [ 'https://evmapi.nuls.io', 'https://evmapi2.nuls.io' ] },
    '122': {
      rpcs: [
        'https://fuse-rpc.gateway.pokt.network/',
        'https://rpc.fuse.io',
        'https://fuse-mainnet.chainstacklabs.com',
        'https://fuse.api.onfinality.io/public'
      ]
    },
    '123': { rpcs: [ 'https://rpc.fusespark.io' ] },
    '124': { rpcs: [] },
    '126': {
      rpcs: [ 'https://rpc.mainnet.oychain.io', 'https://rpc.oychain.io' ]
    },
    '127': { rpcs: [] },
    '128': {
      rpcs: [
        'https://http-mainnet.hecochain.com',
        'https://http-mainnet-node.huobichain.com',
        'https://hecoapi.terminet.io/rpc'
      ]
    },
    '137': {
      rpcs: [
        'https://rpc-mainnet.maticvigil.com',
        'https://endpoints.omniatech.io/v1/matic/mainnet/public',
        'https://polygon-rpc.com',
        'https://rpc-mainnet.matic.network',
        'https://rpc-mainnet.matic.quiknode.pro',
        'https://matic-mainnet.chainstacklabs.com',
        'https://matic-mainnet-full-rpc.bwarelabs.com',
        'https://matic-mainnet-archive-rpc.bwarelabs.com',
        'https://poly-rpc.gateway.pokt.network/',
        'https://rpc.ankr.com/polygon',
        'https://polygon-mainnet.public.blastapi.io',
        'https://polygonapi.terminet.io/rpc',
        'https://1rpc.io/matic',
        'https://polygon-mainnet.rpcfast.com?api_key=xbhWBI1Wkguk8SNMu1bvvLurPGLXmgwYeC4S6g2H7WdwFigZSmPWVZRxrskEQwIf',
        'https://polygon-bor.publicnode.com',
        'https://polygon-mainnet-public.unifra.io',
        'https://polygon-mainnet.g.alchemy.com/v2/demo',
        'https://polygon.blockpi.network/v1/rpc/public',
        'https://polygon.api.onfinality.io/public',
        'https://polygon.rpc.blxrbdn.com/',
        'https://polygon.drpc.org',
        'https://polygon.gateway.tenderly.co',
        'https://gateway.tenderly.co/public/polygon'
      ]
    },
    '142': { rpcs: [ 'https://rpc.prodax.io' ] },
    '163': { rpcs: [ 'https://node.mainnet.lightstreams.io' ] },
    '167': {
      rpcs: [
        'https://node.atoshi.io',
        'https://node2.atoshi.io',
        'https://node3.atoshi.io'
      ]
    },
    '186': { rpcs: [ 'https://rpc.seelen.pro/' ] },
    '188': { rpcs: [ 'https://mainnet.bmcchain.com/' ] },
    '199': { rpcs: [ 'https://rpc.bittorrentchain.io/' ] },
    '200': { rpcs: [ 'https://arbitrum.xdaichain.com' ] },
    '211': { rpcs: [] },
    '222': { rpcs: [ 'https://blockchain-api-mainnet.permission.io/rpc' ] },
    '246': { rpcs: [ 'https://rpc.energyweb.org' ] },
    '248': {
      rpcs: [
        'https://oasys-rpc.gateway.pokt.network',
        'https://oasys.blockpi.network/v1/rpc/public'
      ]
    },
    '250': {
      rpcs: [
        'https://rpcapi.fantom.network',
        'https://endpoints.omniatech.io/v1/fantom/mainnet/public',
        'https://fantom-mainnet.gateway.pokt.network/v1/lb/62759259ea1b320039c9e7ac',
        'https://rpc.ftm.tools/',
        'https://rpc.ankr.com/fantom',
        'https://rpc.fantom.network',
        'https://rpc2.fantom.network',
        'https://rpc3.fantom.network',
        'https://fantom-mainnet.public.blastapi.io',
        'https://1rpc.io/ftm',
        'https://fantom.blockpi.network/v1/rpc/public',
        'https://fantom.publicnode.com',
        'https://fantom.api.onfinality.io/public',
        'https://rpc.fantom.gateway.fm'
      ]
    },
    '256': { rpcs: [ 'https://hecotestapi.terminet.io/rpc' ] },
    '258': { rpcs: [] },
    '262': { rpcs: [ 'https://sur.nilin.org' ] },
    '288': {
      rpcs: [
        'https://mainnet.boba.network/',
        'https://boba-mainnet.gateway.pokt.network/v1/lb/623ad21b20354900396fed7f',
        'https://boba-ethereum.gateway.tenderly.co',
        'https://gateway.tenderly.co/public/boba-ethereum'
      ]
    },
    '311': { rpcs: [ 'https://mainapi.omaxray.com/' ] },
    '314': {
      rpcs: [
        'https://api.node.glif.io',
        'https://rpc.ankr.com/filecoin',
        'https://filecoin.chainup.net/rpc/v1',
        'https://infura.sftproject.io/filecoin/rpc/v1',
        'https://api.chain.love/rpc/v1'
      ]
    },
    '321': {
      rpcs: [
        'https://rpc-mainnet.kcc.network',
        'https://kcc.mytokenpocket.vip',
        'https://kcc-rpc.com'
      ]
    },
    '333': { rpcs: [] },
    '336': {
      rpcs: [
        'https://rpc.shiden.astar.network:8545/',
        'https://shiden.public.blastapi.io'
      ]
    },
    '338': { rpcs: [ 'https://evm-t3.cronos.org/' ] },
    '361': { rpcs: [ 'https://eth-rpc-api.thetatoken.org/rpc' ] },
    '369': { rpcs: [] },
    '385': { rpcs: [] },
    '416': { rpcs: [ 'https://rpc.sx.technology' ] },
    '420': {
      rpcs: [
        'https://endpoints.omniatech.io/v1/op/goerli/public',
        'https://opt-goerli.g.alchemy.com/v2/demo',
        'https://optimism-goerli.public.blastapi.io',
        'https://rpc.goerli.optimism.gateway.fm',
        'https://optimism-goerli.publicnode.com'
      ]
    },
    '499': { rpcs: [] },
    '512': { rpcs: [ 'https://rpc.acuteangle.com' ] },
    '555': { rpcs: [ 'https://rpc.velaverse.io' ] },
    '558': { rpcs: [ 'https://rpc.tao.network' ] },
    '592': {
      rpcs: [
        'https://evm.astar.network/',
        'https://rpc.astar.network:8545',
        'https://astar.public.blastapi.io',
        'https://1rpc.io/astr',
        'https://astar-mainnet.g.alchemy.com/v2/demo',
        'https://astar.api.onfinality.io/public',
        'wss://astar.api.onfinality.io/public-ws'
      ]
    },
    '686': {
      rpcs: [
        'https://eth-rpc-karura.aca-api.network',
        'https://rpc.evm.karura.network',
        'https://karura.api.onfinality.io/public'
      ]
    },
    '707': { rpcs: [] },
    '777': { rpcs: [ 'https://node.cheapeth.org/rpc' ] },
    '787': {
      rpcs: [
        'https://eth-rpc-acala.aca-api.network',
        'https://rpc.evm.acala.network',
        'https://acala-polkadot.api.onfinality.io/public'
      ]
    },
    '803': { rpcs: [] },
    '820': {
      rpcs: [ 'https://rpc.callisto.network', 'https://clo-geth.0xinfra.com/' ]
    },
    '880': { rpcs: [] },
    '888': {
      rpcs: [
        'https://gwan-ssl.wandevs.org:56891',
        'https://gwan2-ssl.wandevs.org'
      ]
    },
    '970': { rpcs: [ 'https://rpc.mainnet.computecoin.com' ] },
    '971': { rpcs: [ 'https://beta-rpc.mainnet.computecoin.com' ] },
    '977': { rpcs: [] },
    '998': { rpcs: [] },
    '1001': {
      rpcs: [
        'https://public-node-api.klaytnapi.com/v1/baobab',
        'https://baobab.fautor.app/archive',
        'https://klaytn-baobab.blockpi.network/v1/rpc/public'
      ]
    },
    '1010': { rpcs: [ 'https://meta.evrice.com' ] },
    '1012': { rpcs: [ 'https://global.rpc.mainnet.newtonproject.org' ] },
    '1022': { rpcs: [] },
    '1024': { rpcs: [ 'https://api-para.clover.finance' ] },
    '1030': {
      rpcs: [
        'https://evm.confluxrpc.com',
        'https://conflux-espace-public.unifra.io'
      ]
    },
    '1071': { rpcs: [ 'https://json-rpc.evm.testnet.shimmer.network/' ] },
    '1088': { rpcs: [ 'https://andromeda.metis.io/?owner=1088' ] },
    '1101': {
      rpcs: [
        'https://rpc.ankr.com/polygon_zkevm',
        'https://rpc.polygon-zkevm.gateway.fm'
      ]
    },
    '1115': { rpcs: [ 'https://rpc.test.btcs.network' ] },
    '1116': {
      rpcs: [ 'https://rpc.coredao.org', 'https://core.public.infstones.com' ]
    },
    '1139': { rpcs: [ 'https://mathchain.maiziqianbao.net/rpc' ] },
    '1197': { rpcs: [] },
    '1202': { rpcs: [] },
    '1213': { rpcs: [ 'https://dataseed.popcateum.org' ] },
    '1214': { rpcs: [] },
    '1231': { rpcs: [ 'https://ultron-rpc.net' ] },
    '1246': { rpcs: [ 'https://rpc-cnx.omplatform.com' ] },
    '1280': { rpcs: [ 'https://nodes.halo.land' ] },
    '1284': {
      rpcs: [
        'https://rpc.api.moonbeam.network',
        'https://moonbeam.api.onfinality.io/public',
        'wss://moonbeam.api.onfinality.io/public-ws',
        'https://moonbeam.unitedbloc.com:3000',
        'wss://moonbeam.unitedbloc.com:3001',
        'https://moonbeam.public.blastapi.io',
        'https://rpc.ankr.com/moonbeam',
        'https://1rpc.io/glmr'
      ]
    },
    '1285': {
      rpcs: [
        'wss://moonriver.api.onfinality.io/public-ws',
        'https://moonriver.api.onfinality.io/public',
        'https://moonriver.unitedbloc.com:2000',
        'wss://moonriver.unitedbloc.com:2001',
        'https://moonriver.public.blastapi.io'
      ]
    },
    '1287': {
      rpcs: [
        'https://rpc.testnet.moonbeam.network',
        'https://moonbase.unitedbloc.com:1000',
        'wss://moonbase.unitedbloc.com:1001',
        'https://moonbase-alpha.public.blastapi.io',
        'https://moonbeam-alpha.api.onfinality.io/public',
        'wss://moonbeam-alpha.api.onfinality.io/public-ws'
      ]
    },
    '1288': { rpcs: [] },
    '1501': {
      rpcs: [
        'https://mainnet.chainx.org/rpc',
        'https://mainnet2.chainx.org/rpc'
      ]
    },
    '1506': { rpcs: [ 'https://mainnet.sherpax.io/rpc' ] },
    '1515': { rpcs: [ 'https://beagle.chat/eth' ] },
    '1618': { rpcs: [ 'https://send.catechain.com' ] },
    '1620': { rpcs: [] },
    '1657': { rpcs: [ 'https://dataseed1.btachain.com/' ] },
    '1856': { rpcs: [ 'rpcWorking:false' ] },
    '1881': { rpcs: [ 'https://rpc.cartenz.works' ] },
    '1975': { rpcs: [ 'https://rpc.onuschain.io' ] },
    '1987': { rpcs: [] },
    '2000': {
      rpcs: [
        'https://rpc.dogechain.dog',
        'https://rpc-us.dogechain.dog',
        'https://rpc-sg.dogechain.dog',
        'https://rpc.dogechain.dog',
        'https://rpc01-sg.dogechain.dog',
        'https://rpc02-sg.dogechain.dog',
        'https://rpc03-sg.dogechain.dog',
        'https://dogechain.ankr.com',
        'https://dogechain-sj.ankr.com'
      ]
    },
    '2021': {
      rpcs: [
        'https://mainnet2.edgewa.re/evm',
        'https://mainnet3.edgewa.re/evm',
        'https://edgeware-evm.jelliedowl.net/',
        'https://edgeware.api.onfinality.io/public'
      ]
    },
    '2025': { rpcs: [ 'https://mainnet.rangersprotocol.com/api/jsonrpc' ] },
    '2077': { rpcs: [ 'http://rpc.qkacoin.org:8548' ] },
    '2100': { rpcs: [ 'https://api.ecoball.org/ecoball/' ] },
    '2213': { rpcs: [ 'https://seed4.evanesco.org:8546' ] },
    '2222': { rpcs: [ 'https://evm.kava.io' ] },
    '2323': {
      rpcs: [
        'https://data-testnet-v1.somanetwork.io',
        'https://block-testnet-v1.somanetwork.io'
      ]
    },
    '2332': {
      rpcs: [
        'https://data-mainnet-v1.somanetwork.io',
        'https://block-mainnet-v1.somanetwork.io'
      ]
    },
    '2559': { rpcs: [] },
    '2612': { rpcs: [ 'https://api.ezchain.com/ext/bc/C/rpc' ] },
    '3141': { rpcs: [ 'https://filecoin-hyperspace.chainup.net/rpc/v1' ] },
    '3501': {
      rpcs: [ 'https://rpc.jfinchain.com', 'https://rpc.jfinchain.com' ]
    },
    '3690': { rpcs: [] },
    '4002': {
      rpcs: [
        'https://rpc.testnet.fantom.network/',
        'https://endpoints.omniatech.io/v1/fantom/testnet/public',
        'https://rpc.ankr.com/fantom_testnet',
        'https://fantom-testnet.public.blastapi.io',
        'https://fantom-testnet.publicnode.com'
      ]
    },
    '4181': { rpcs: [ 'https://rpc1.phi.network' ] },
    '4444': { rpcs: [ 'https://janus.htmlcoin.dev/janus/' ] },
    '4689': {
      rpcs: [
        'https://iotex-mainnet.gateway.pokt.network/v1/lb/6176f902e19001003499f492',
        'https://rpc.ankr.com/iotex',
        'https://babel-api.mainnet.iotex.io',
        'https://babel-api.mainnet.iotex.one',
        'https://pokt-api.iotex.io',
        'https://babel-api.fastblocks.io'
      ]
    },
    '5050': {
      rpcs: [ 'https://rpc.liquidchain.net/', 'https://rpc.xlcscan.com/' ]
    },
    '5177': { rpcs: [] },
    '5197': { rpcs: [ 'https://mainnet.eraswap.network' ] },
    '5315': { rpcs: [] },
    '5551': { rpcs: [ 'https://l2.nahmii.io/' ] },
    '5729': { rpcs: [ 'https://rpc-testnet.hika.network' ] },
    '5869': { rpcs: [ 'https://proxy.wegochain.io' ] },
    '6626': { rpcs: [ 'https://http-mainnet.chain.pixie.xyz' ] },
    '7001': {
      rpcs: [ 'https://zetachain-athens-evm.blockpi.network/v1/rpc/public' ]
    },
    '7341': { rpcs: [ 'https://rpc.shyft.network/' ] },
    '7777': {
      rpcs: [
        'https://testnet1.rotw.games',
        'https://testnet2.rotw.games',
        'https://testnet3.rotw.games',
        'https://testnet4.rotw.games',
        'https://testnet5.rotw.games'
      ]
    },
    '8000': { rpcs: [ 'https://dataseed.testnet.teleport.network' ] },
    '8217': {
      rpcs: [
        'https://public-node-api.klaytnapi.com/v1/cypress',
        'https://cypress.fautor.app/archive',
        'https://klaytn.blockpi.network/v1/rpc/public',
        'https://klaytn.api.onfinality.io/public'
      ]
    },
    '8995': { rpcs: [ 'https://core.bloxberg.org' ] },
    '9001': {
      rpcs: [
        'https://eth.bd.evmos.org:8545/',
        'https://evmos-mainnet.gateway.pokt.network/v1/lb/627586ddea1b320039c95205',
        'https://evmos-json-rpc.stakely.io',
        'https://jsonrpc-evmos-ia.cosmosia.notional.ventures',
        'https://json-rpc.evmos.blockhunters.org',
        'https://evmos-json-rpc.agoranodes.com',
        'https://evmos-mainnet.public.blastapi.io',
        'https://evmos-evm.publicnode.com',
        'https://jsonrpc-evmos.goldenratiostaking.net',
        'https://evmos.api.onfinality.io/public'
      ]
    },
    '9100': { rpcs: [ 'rpcWorking:false' ] },
    '10000': {
      rpcs: [
        'https://smartbch.fountainhead.cash/mainnet',
        'https://global.uat.cash',
        'https://rpc.uatvo.com'
      ]
    },
    '10086': { rpcs: [] },
    '10101': { rpcs: [ 'https://eu.mainnet.xixoio.com' ] },
    '10200': {
      rpcs: [
        'https://rpc.chiadochain.net',
        'https://rpc.chiado.gnosis.gateway.fm'
      ]
    },
    '10248': { rpcs: [] },
    '11111': { rpcs: [ 'https://api.trywagmi.xyz/rpc' ] },
    '12052': { rpcs: [ 'https://zerorpc.singularity.gold' ] },
    '13000': { rpcs: [ 'https://rpc.ssquad.games' ] },
    '13381': { rpcs: [ 'https://rpc.phoenixplorer.com/' ] },
    '14000': { rpcs: [] },
    '15551': { rpcs: [ 'https://api.mainnetloop.com' ] },
    '15557': { rpcs: [ 'https://api.testnet.evm.eosnetwork.com' ] },
    '16000': { rpcs: [] },
    '17777': { rpcs: [ 'https://api.evm.eosnetwork.com' ] },
    '18159': {
      rpcs: [
        'https://mainnet-rpc.memescan.io/',
        'https://mainnet-rpc2.memescan.io/',
        'https://mainnet-rpc3.memescan.io/',
        'https://mainnet-rpc4.memescan.io/'
      ]
    },
    '19845': { rpcs: [] },
    '21816': { rpcs: [ 'https://seed.omlira.com' ] },
    '22776': { rpcs: [] },
    '24484': { rpcs: [] },
    '24734': { rpcs: [ 'https://node1.mintme.com' ] },
    '31102': { rpcs: [ 'rpcWorking:false' ] },
    '32520': {
      rpcs: [
        'https://rpc.icecreamswap.com',
        'https://nodes.vefinetwork.org/bitgert',
        'https://flux-rpc.brisescan.com',
        'https://flux-rpc1.brisescan.com',
        'https://flux-rpc2.brisescan.com',
        'https://rpc-1.chainrpc.com',
        'https://rpc-2.chainrpc.com',
        'https://node1.serverrpc.com',
        'https://node2.serverrpc.com'
      ]
    },
    '32659': {
      rpcs: [
        'https://mainnet.anyswap.exchange',
        'https://mainway.freemoon.xyz/gate',
        'https://fsn.dev/api',
        'https://mainnet.fusionnetwork.io'
      ]
    },
    '35011': { rpcs: [ 'https://rpc.j2o.io' ] },
    '39797': {
      rpcs: [
        'https://nodeapi.energi.network',
        'https://explorer.energi.network/api/eth-rpc'
      ]
    },
    '39815': {
      rpcs: [
        'https://mainnet.oho.ai',
        'https://mainnet-rpc.ohoscan.com',
        'https://mainnet-rpc2.ohoscan.com'
      ]
    },
    '42069': { rpcs: [ 'rpcWorking:false' ] },
    '42161': {
      rpcs: [
        'https://arb1.arbitrum.io/rpc',
        'https://arb1.croswap.com/rpc',
        'https://rpc.ankr.com/arbitrum',
        'https://1rpc.io/arb',
        'https://arbitrum.getblock.io/api_key/mainnet/',
        // eslint-disable-next-line no-template-curly-in-string
        'https://arbitrum-mainnet.infura.io/v3/${INFURA_API_KEY}',
        'https://arb-mainnet.g.alchemy.com/v2/demo',
        'https://arbitrum.blockpi.network/v1/rpc/public',
        'https://arbitrum-one.public.blastapi.io',
        'https://endpoints.omniatech.io/v1/arbitrum/one/public',
        'https://arb-mainnet-public.unifra.io',
        'https://arbitrum.api.onfinality.io/public',
        'https://rpc.arb1.arbitrum.gateway.fm',
        'https://arbitrum-one.publicnode.com'
      ]
    },
    '42170': {
      rpcs: [
        'https://nova.arbitrum.io/rpc',
        'https://arbitrum-nova.public.blastapi.io',
        'https://arbitrum-nova.blockpi.network/v1/rpc/public',
        'https://arbitrum-nova.publicnode.com'
      ]
    },
    '42220': {
      rpcs: [
        'https://forno.celo.org',
        'https://rpc.ankr.com/celo',
        'https://1rpc.io/celo',
        'https://celo.api.onfinality.io/public'
      ]
    },
    '42262': { rpcs: [ 'https://emerald.oasis.dev/' ] },
    '43110': { rpcs: [ 'rpcWorking:false' ] },
    '43113': {
      rpcs: [
        'https://api.avax-test.network/ext/bc/C/rpc',
        'https://endpoints.omniatech.io/v1/avax/fuji/public',
        'https://rpc.ankr.com/avalanche_fuji',
        'https://rpc.ankr.com/avalanche_fuji-c',
        'https://avalanchetestapi.terminet.io/ext/bc/C/rpc',
        'https://ava-testnet.public.blastapi.io/ext/bc/C/rpc',
        'https://avalanche-fuji-c-chain.publicnode.com'
      ]
    },
    '43114': {
      rpcs: [
        'https://api.avax.network/ext/bc/C/rpc',
        'https://avax.rpcgator.com/',
        'https://avalanche.public-rpc.com',
        'https://rpc.ankr.com/avalanche',
        'https://blastapi.io/public-api/avalanche',
        'https://ava-mainnet.public.blastapi.io/ext/bc/C/rpc',
        'https://avalancheapi.terminet.io/ext/bc/C/rpc',
        'https://avalanche-c-chain.publicnode.com',
        'https://1rpc.io/avax/c',
        'https://avalanche.blockpi.network/v1/rpc/public',
        'https://avax-mainnet.gateway.pokt.network/v1/lb/605238bf6b986eea7cf36d5e/ext/bc/C/rpc',
        'https://avalanche.api.onfinality.io/public/ext/bc/C/rpc',
        'https://endpoints.omniatech.io/v1/avax/mainnet/public',
        'https://avax.meowrpc.com'
      ]
    },
    '45000': { rpcs: [ 'https://rpc.autobahn.network' ] },
    '47805': { rpcs: [ 'https://rpc.rei.network' ] },
    '50001': {
      rpcs: [
        'https://rpc.oracle.liveplex.io',
        'https://rpc.oracle.liveplex.io'
      ]
    },
    '53935': {
      rpcs: [
        'https://avax-dfk.gateway.pokt.network/v1/lb/6244818c00b9f0003ad1b619/ext/bc/q2aTwKuyzgs8pynF7UXBZCU7DejbZbZ6EUyHr3JQzYgwNPUPi/rpc',
        'https://dfkchain.api.onfinality.io/public'
      ]
    },
    '55555': { rpcs: [ 'https://rei-rpc.moonrhythm.io' ] },
    '63000': { rpcs: [ 'https://rpc.ecredits.com' ] },
    '70000': { rpcs: [] },
    '70001': { rpcs: [ 'https://proxy1.thinkiumrpc.net/' ] },
    '70002': { rpcs: [ 'https://proxy2.thinkiumrpc.net/' ] },
    '70103': { rpcs: [ 'https://proxy103.thinkiumrpc.net/' ] },
    '71394': { rpcs: [ 'https://mainnet.godwoken.io/rpc/eth-wallet' ] },
    '80001': {
      rpcs: [
        'https://rpc-mumbai.maticvigil.com',
        'https://endpoints.omniatech.io/v1/matic/mumbai/public',
        'https://rpc.ankr.com/polygon_mumbai',
        'https://polygontestapi.terminet.io/rpc',
        'https://polygon-testnet.public.blastapi.io',
        'https://polygon-mumbai.g.alchemy.com/v2/demo',
        'https://polygon-mumbai.blockpi.network/v1/rpc/public',
        'https://polygon-mumbai-bor.publicnode.com',
        'https://polygon-mumbai.gateway.tenderly.co',
        'https://gateway.tenderly.co/public/polygon-mumbai'
      ]
    },
    '84531': { rpcs: [ 'https://base-goerli.public.blastapi.io' ] },
    '99999': { rpcs: [ 'https://rpc.uschain.network' ] },
    '100000': { rpcs: [] },
    '100001': { rpcs: [ 'http://eth-jrpc.mainnet.quarkchain.io:39000' ] },
    '100002': { rpcs: [ 'http://eth-jrpc.mainnet.quarkchain.io:39001' ] },
    '100003': { rpcs: [ 'http://eth-jrpc.mainnet.quarkchain.io:39002' ] },
    '100004': { rpcs: [ 'http://eth-jrpc.mainnet.quarkchain.io:39003' ] },
    '100005': { rpcs: [ 'http://eth-jrpc.mainnet.quarkchain.io:39004' ] },
    '100006': { rpcs: [ 'http://eth-jrpc.mainnet.quarkchain.io:39005' ] },
    '100007': { rpcs: [ 'http://eth-jrpc.mainnet.quarkchain.io:39006' ] },
    '100008': { rpcs: [ 'http://eth-jrpc.mainnet.quarkchain.io:39007' ] },
    '103090': {
      rpcs: [
        'https://evm.cryptocurrencydevs.org',
        'https://rpc.crystaleum.org'
      ]
    },
    '108801': { rpcs: [ 'rpcWorking:false' ] },
    '110000': { rpcs: [ 'rpcWorking:false' ] },
    '110001': { rpcs: [ 'http://eth-jrpc.devnet.quarkchain.io:39900' ] },
    '110002': { rpcs: [ 'http://eth-jrpc.devnet.quarkchain.io:39901' ] },
    '110003': { rpcs: [ 'http://eth-jrpc.devnet.quarkchain.io:39902' ] },
    '110004': { rpcs: [ 'http://eth-jrpc.devnet.quarkchain.io:39903' ] },
    '110005': { rpcs: [ 'http://eth-jrpc.devnet.quarkchain.io:39904' ] },
    '110006': { rpcs: [ 'http://eth-jrpc.devnet.quarkchain.io:39905' ] },
    '110007': { rpcs: [ 'http://eth-jrpc.devnet.quarkchain.io:39906' ] },
    '110008': { rpcs: [ 'http://eth-jrpc.devnet.quarkchain.io:39907' ] },
    '142857': { rpcs: [ 'https://rpcmainnet.ic-plaza.org/' ] },
    '200625': { rpcs: [ 'https://boot2.akroma.org/' ] },
    '201018': { rpcs: [ 'https://openapi.alaya.network/rpc' ] },
    '210425': { rpcs: [] },
    '246529': { rpcs: [] },
    '256256': { rpcs: [ 'https://mainnet.block.caduceus.foundation' ] },
    '281121': { rpcs: [ 'rpcWorking:false' ] },
    '314159': { rpcs: [ 'https://filecoin-calibration.chainup.net/rpc/v1' ] },
    '333999': { rpcs: [ 'https://rpc.polis.tech' ] },
    '420420': {
      rpcs: [
        'https://mainnet.kekchain.com',
        'https://rpc2.kekchain.com',
        'https://kek.interchained.org',
        'https://kekchain.interchained.org'
      ]
    },
    '420666': { rpcs: [ 'https://testnet.kekchain.com' ] },
    '421613': {
      rpcs: [
        'https://endpoints.omniatech.io/v1/arbitrum/goerli/public',
        'https://arb-goerli.g.alchemy.com/v2/demo',
        'https://arbitrum-goerli.public.blastapi.io',
        'https://rpc.goerli.arbitrum.gateway.fm',
        'https://arbitrum-goerli.publicnode.com'
      ]
    },
    '431140': { rpcs: [ 'https://rpc.markr.io/ext/' ] },
    '512512': { rpcs: [ 'https://galaxy.block.caduceus.foundation' ] },
    '534353': {
      rpcs: [
        'https://scroll-alphanet.public.blastapi.io',
        'https://scroll-alpha-public.unifra.io',
        'https://scroll-testnet.blockpi.network/v1/rpc/public'
      ]
    },
    '534354': { rpcs: [ 'https://prealpha-rpc.scroll.io/l2' ] },
    '827431': { rpcs: [ 'https://mainnet-rpc.curvescan.io' ] },
    '888888': { rpcs: [ 'https://infragrid.v.network/ethereum/compatible' ] },
    '900000': {
      rpcs: [ 'https://api.posichain.org', 'https://api.s0.posichain.org' ]
    },
    '955305': { rpcs: [ 'https://host-76-74-28-226.contentfabric.io/eth/' ] },
    '1313114': { rpcs: [ 'https://rpc.ethoprotocol.com' ] },
    '1313500': { rpcs: [ 'https://rpc.xerom.org' ] },
    '2099156': { rpcs: [ 'https://mainnet.plian.io/pchain' ] },
    '7762959': { rpcs: [] },
    '8007736': { rpcs: [ 'https://mainnet.plian.io/child_0' ] },
    '10067275': { rpcs: [ 'https://testnet.plian.io/child_test' ] },
    '11155111': {
      rpcs: [
        'https://eth-sepolia.g.alchemy.com/v2/demo',
        'https://endpoints.omniatech.io/v1/eth/sepolia/public',
        'https://ethereum-sepolia.blockpi.network/v1/rpc/public',
        'https://eth-sepolia.public.blastapi.io',
        'https://eth-sepolia-public.unifra.io',
        'https://sepolia.gateway.tenderly.co',
        'https://gateway.tenderly.co/public/sepolia'
      ]
    },
    '13371337': { rpcs: [] },
    '16658437': { rpcs: [ 'https://testnet.plian.io/testnet' ] },
    '18289463': { rpcs: [] },
    '20181205': { rpcs: [ 'https://hz.rpc.qkiscan.cn' ] },
    '28945486': { rpcs: [] },
    '35855456': { rpcs: [ 'https://node.joys.digital' ] },
    '61717561': { rpcs: [ 'https://c.onical.org' ] },
    '88888888': { rpcs: [ 'https://rpc.teamblockchain.team' ] },
    '192837465': { rpcs: [ 'https://mainnet.gather.network' ] },
    '245022926': { rpcs: [ 'https://proxy.devnet.neonlabs.org/solana' ] },
    '245022934': {
      rpcs: [
        'https://neon-proxy-mainnet.solana.p2p.org',
        'rpcWorking:false',
        'https://neon-mainnet.everstake.one'
      ]
    },
    '311752642': { rpcs: [ 'https://mainnet-rpc.oneledger.network' ] },
    '356256156': { rpcs: [ 'https://testnet.gather.network' ] },
    '486217935': { rpcs: [ 'https://devnet.gather.network' ] },
    '1122334455': { rpcs: [] },
    '1313161554': {
      rpcs: [
        'https://mainnet.aurora.dev',
        'https://endpoints.omniatech.io/v1/aurora/mainnet/public'
      ]
    },
    '1313161555': {
      rpcs: [ 'https://endpoints.omniatech.io/v1/aurora/testnet/public' ]
    },
    '1313161556': { rpcs: [] },
    '1666600000': {
      rpcs: [
        'https://api.harmony.one',
        'https://a.api.s0.t.hmny.io',
        'https://api.s0.t.hmny.io',
        'https://rpc.ankr.com/harmony',
        'https://harmony.api.onfinality.io/public'
      ]
    },
    '1666600001': { rpcs: [ 'https://s1.api.harmony.one' ] },
    '1666600002': { rpcs: [ 'https://s2.api.harmony.one' ] },
    '1666600003': { rpcs: [] },
    '2021121117': { rpcs: [] },
    '3125659152': { rpcs: [] },
    '11297108109': {
      rpcs: [
        'https://palm-mainnet.infura.io/v3/3a961d6501e54add9a41aa53f15de99b',
        'https://palm-mainnet.public.blastapi.io'
      ]
    },
    '836542336838601': { rpcs: [] },
    '11297108099': { rpcs: [ 'https://palm-testnet.public.blastapi.io' ] },
    '197710212030': { rpcs: [ 'https://rpc.ntity.io' ] },
    '6022140761023': { rpcs: [ 'https://molereum.jdubedition.com' ] }
}

export default extraRpcs;

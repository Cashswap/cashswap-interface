import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  // {
  //   label: 'Home',
  //   icon: 'HomeIcon',
  //   href: 'https://cashswap.finance/',
  //   disable: false,
  // },
  // {
  //   label: 'Trade',
  //   icon: 'TradeIcon',
  //   disable: false,
  //   items: [
  {
    label: 'Swap',
    icon: 'TradeIcon',
    href: '/swap',
    disable: false,
  },
  {
    label: 'Liquidity',
    icon: 'VaultsIcon',
    href: '/pool',
    disable: false,
  },
  {
    label: 'PreSale',
    icon: 'IfoIcon',
    href: 'https://presale.cashblock.io/',
    disable: false,
  },
  // {
  //   label: 'Pool',
  //   icon: 'TradeIcon',
  //   href: '/pool',
  //   disable: false,
  // },
  // {
  //   label: 'Charts',
  //   icon: 'TradeIcon',
  //   href: '/chart',
  //   disable: false,
  // },
  // {
  //   label: 'Cross-chain Bridge',
  //   icon: 'TradeIcon',
  //   href: 'https://www.binance.org/en/bridge',
  //   disable: false,
  // },
  //    ],
  //  },
  // {
  //   label: 'About cashswap',
  //   icon: 'InfoIcon',
  //   disable: false,
  //   items: [
  //     {
  //       label: 'Home',
  //       href: 'https://cashswap.finance',
  //       disable: false,
  //     },
  //     {
  //       label: 'Audit by Techrate',
  //       href:
  //         'https://github.com/TechRate/Smart-Contract-Audits/blob/main/cashswap%20Full%20Smart%20Contract%20Security%20Audit.pdf',
  //       disable: false,
  //     },
  //     {
  //       label: 'Litepaper',
  //       href: 'https://cashswap.finance/whitepaper/litepaper.pdf',
  //       disable: false,
  //     },
  //   ],
  // },
  // {
  //   label: 'Chart Tools',
  //   icon: 'IfoIcon',
  //   href: '/chart',
  //   disable: false,
  // },
  // {
  //   label: 'Rug Check',
  //   icon: 'MoreIcon',
  //   href: '/#',
  //   disable: true,
  // },
]

export default config

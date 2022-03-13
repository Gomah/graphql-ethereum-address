# graphql-ethereum-address

[![npm version][npm-version-src]][npm-version-href]
[![Dependencies][david-dm-src]][david-dm-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-000000.svg?style=flat-square)](https://prettier.io/)
[![License: MIT](https://img.shields.io/badge/License-MIT-black.svg?style=flat-square)](https://opensource.org/licenses/MIT)

> Ethereum address scalar types for GraphQL

## Quickstart

Install with yarn:

```bash
yarn add graphql-ethereum-address
```

Install with npm:

```bash
npm install graphql-ethereum-address
```

## Integration to your existing GraphQL Schema

You need to add a scalar definition to your SDL type definitions and resolvers like below:

### In your SDL type definitions

```graphql
scalar EthereumAddress
```

You can also import ready-to-use type definitions like below:

```ts
import { EthereumAddressTypeDefinition } from 'graphql-ethereum-address';

const typeDefs = [
  EthereumAddressTypeDefinition,
  // other typeDefs
];
```

### In your resolver map

```ts
import { EthereumAddressResolver } from 'graphql-ethereum-address';

const myResolverMap = {
  EthereumAddress: EthereumAddressResolver,

  Query: {
    // more stuff here
  },

  Mutation: {
    // more stuff here
  },
};
```

### Using it in your type definitions

That's it. Now you can use the scalar type in your schema definition like this:

```graphql
type Wallet {
  id: String
  address: EthereumAddress
}
```

### With Nexus

```ts
import { asNexusMethod } from 'nexus';
import { makeSchema } from 'nexus';
import { EthereumAddressResolver } from 'graphql-ethereum-address';

const EthereumAddressScalar = asNexusMethod(EthereumAddressResolver, 'eth');

export const Wallet = objectType({
  name: 'Wallet',
  definition(t) {
    t.string('id');
    t.eth('address');
  },
});

const schema = makeSchema({ types: [EthereumAddressScalar, Wallet] });
```

## Development

1. Clone this repository
2. Install dependencies using `yarn install` or `npm install`
3. Build the module using `yarn build` or `npm run build`
4. Start development server using `yarn dev` or `npm run dev`

## 📑 License

[MIT License](./LICENSE)

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/dt/graphql-ethereum-address.svg?style=flat-square
[npm-version-href]: https://npmjs.com/package/graphql-ethereum-address
[npm-downloads-src]: https://img.shields.io/npm/v/graphql-ethereum-address/latest.svg?style=flat-square
[npm-downloads-href]: https://npmjs.com/package/graphql-ethereum-address
[david-dm-src]: https://david-dm.org/gomah/graphql-ethereum-address/status.svg?style=flat-square
[david-dm-href]: https://david-dm.org/gomah/graphql-ethereum-address

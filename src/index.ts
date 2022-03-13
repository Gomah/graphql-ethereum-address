import {
  Kind,
  GraphQLError,
  GraphQLScalarType,
  GraphQLScalarTypeConfig,
} from 'graphql';

const validate = (value: any) => {
  const ETHEREUM_ADDRESS_REGEX = /^0x[a-fA-F0-9]{40}$/;

  if (typeof value !== 'string') {
    throw new TypeError(`Value is not string: ${value}`);
  }

  if (!ETHEREUM_ADDRESS_REGEX.test(value)) {
    throw new TypeError(`Value is not a valid ethereum address: ${value}`);
  }

  return value;
};

const specifiedByURL = 'http://gavwood.com/paper.pdf';

// * typeDef
export const EthereumAddressTypeDefinition = 'scalar EthereumAddress';

export const GraphQLEthereumAddressConfig = /*#__PURE__*/ {
  name: 'EthereumAddress',

  description:
    'A field whose value conforms to the standard ethereum address format as specified in EIP-150 Revision (212): http://gavwood.com/paper.pdf.',

  serialize: validate,

  parseValue: validate,

  parseLiteral(ast) {
    if (ast.kind !== Kind.STRING) {
      throw new GraphQLError(
        `Can only validate strings as ethereum addresses but got a: ${ast.kind}`
      );
    }

    return validate(ast.value);
  },

  specifiedByURL,
  specifiedByUrl: specifiedByURL,
  extensions: {
    codegenScalarType: 'string',
  },
} as GraphQLScalarTypeConfig<string, string>;

export const GraphQLEthereumAddress: GraphQLScalarType = /*#__PURE__*/ new GraphQLScalarType(
  GraphQLEthereumAddressConfig
);

export { GraphQLEthereumAddress as EthereumAddressResolver };

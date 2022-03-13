import { Kind } from 'graphql/language';
import { GraphQLEthereumAddress } from '../src';

describe('EthereumAddress', () => {
  describe('valid', () => {
    test('serialize', () => {
      expect(
        GraphQLEthereumAddress.serialize(
          '0x561b5F3745a1a9e44Ac16010bd670eeAE0cA3379'
        )
      ).toBe('0x561b5F3745a1a9e44Ac16010bd670eeAE0cA3379');
    });

    test('parseValue', () => {
      expect(
        GraphQLEthereumAddress.parseValue(
          '0x561b5F3745a1a9e44Ac16010bd670eeAE0cA3379'
        )
      ).toBe('0x561b5F3745a1a9e44Ac16010bd670eeAE0cA3379');
    });

    test('parseLiteral', () => {
      expect(
        GraphQLEthereumAddress.parseLiteral(
          {
            value: '0x561b5F3745a1a9e44Ac16010bd670eeAE0cA3379',
            kind: Kind.STRING,
          },
          {}
        )
      ).toBe('0x561b5F3745a1a9e44Ac16010bd670eeAE0cA3379');
    });
  });

  describe('invalid', () => {
    describe('not an ethereum address', () => {
      test('serialize', () => {
        expect(() =>
          GraphQLEthereumAddress.serialize('this is not an ethereum address')
        ).toThrow(/Value is not a valid ethereum address/);
      });

      test('parseValue', () => {
        expect(() =>
          GraphQLEthereumAddress.parseValue('this is not an ethereum address')
        ).toThrow(/Value is not a valid ethereum address/);
      });

      test('parseLiteral', () => {
        expect(() =>
          GraphQLEthereumAddress.parseLiteral(
            {
              value: 'this is not an ethereum address',
              kind: Kind.STRING,
            },
            {}
          )
        ).toThrow(/Value is not a valid ethereum address/);
      });
    });

    describe('not a string', () => {
      test('serialize', () => {
        expect(() => GraphQLEthereumAddress.serialize(1337)).toThrow(
          /Value is not string/
        );
      });

      test('parseValue', () => {
        expect(() => GraphQLEthereumAddress.parseValue(1337)).toThrow(
          /Value is not string/
        );
      });

      test('parseLiteral', () => {
        expect(() =>
          GraphQLEthereumAddress.parseLiteral(
            { value: '1337', kind: Kind.INT },
            {}
          )
        ).toThrow(/Can only validate strings as ethereum addresses but got a/);
      });
    });
  });
});

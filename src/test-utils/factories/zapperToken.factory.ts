import { ZapperToken } from "../../types";

const DEFAULT_ZAPPER_TOKEN: ZapperToken = {
  address: "0x001",
  decimals: 18,
  symbol: "DEAD",
  price: 0.01,
  hide: undefined
};

export const createMockZapperToken = (overwrites: Partial<ZapperToken> = {}): ZapperToken => ({
  ...DEFAULT_ZAPPER_TOKEN,
  ...overwrites
});

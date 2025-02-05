import { BigNumber } from '@ethersproject/bignumber';

export type GasPrice = {
  gasPriceWei: BigNumber;
};

/**
 * Provider for getting gas prices.
 */
export abstract class IGasPriceProvider {
  public abstract getGasPrice(latestBlockNumber: number, requestBlockNumber?: number): Promise<GasPrice>;
}

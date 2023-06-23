import { BigNumber } from 'bignumber.js';

BigNumber.set({ DECIMAL_PLACES: 30 });

const AllUnits = {
  wei: '1',
  kwei: '1000',
  Kwei: '1000',
  babbage: '1000',
  femtoether: '1000',
  mwei: '1000000',
  Mwei: '1000000',
  lovelace: '1000000',
  picoether: '1000000',
  gwei: '1000000000',
  Gwei: '1000000000',
  shannon: '1000000000',
  nanoether: '1000000000',
  nano: '1000000000',
  szabo: '1000000000000',
  microether: '1000000000000',
  micro: '1000000000000',
  finney: '1000000000000000',
  milliether: '1000000000000000',
  milli: '1000000000000000',
  ether: '1000000000000000000',
  eth: '1000000000000000000',
  kether: '1000000000000000000000',
  grand: '1000000000000000000000',
  mether: '1000000000000000000000000',
  gether: '1000000000000000000000000000',
  tether: '1000000000000000000000000000000',
};

export type AllUnitsTypes = Record<string, string>;

export function convertUnits(value: string, fromUnit: keyof typeof AllUnits): AllUnitsTypes {
  const result: Record<keyof typeof AllUnits, string> = {
        wei: "",
        kwei: "",
        Kwei: "",
        babbage: "",
        femtoether: "",
        mwei: "",
        Mwei: "",
        lovelace: "",
        picoether: "",
        gwei: "",
        Gwei: "",
        shannon: "",
        nanoether: "",
        nano: "",
        szabo: "",
        microether: "",
        micro: "",
        finney: "",
        milliether: "",
        milli: "",
        ether: "",
        eth: "",
        kether: "",
        grand: "",
        mether: "",
        gether: "",
        tether: ""
    };

    result[fromUnit as keyof typeof AllUnits] = value;
    Object.entries(AllUnits).forEach(([unit, unitValue]) => {
        if (unit !== fromUnit) {
            const dividedValue = new BigNumber(value, 10)
                .multipliedBy(AllUnits[fromUnit])
                .decimalPlaces(0, BigNumber.ROUND_DOWN)
                .div(unitValue)
                .toString(10);
            
            result[unit as keyof typeof AllUnits] = dividedValue;
        }
      });

  return result;
}

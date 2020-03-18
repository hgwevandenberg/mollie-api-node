import { PaymentData } from './data';
import paymentHelpers from './helpers';
import Seal from '../../types/Seal';
import Refund, { injectPrototypes as injectRefundPrototypes } from '../refunds/Refund';
import Chargeback, { injectPrototypes as injectChargebackPrototypes } from '../chargebacks/Chargeback';

type Payment = Seal<
  PaymentData & {
    _embedded: {
      refunds?: Omit<Refund, '_embedded'>[];
      chargebacks?: Omit<Chargeback, '_embedded'>[];
    };
  },
  typeof paymentHelpers
>;

export default Payment;

export function injectPrototypes(input: PaymentData): Payment {
  let _embedded: Payment['_embedded'];
  if (input._embedded != undefined) {
    _embedded = {};
    if (input._embedded.chargebacks != undefined) {
      _embedded.chargebacks = input._embedded.chargebacks.map(injectChargebackPrototypes);
    }
    if (input._embedded.refunds != undefined) {
      _embedded.refunds = input._embedded.refunds.map(injectRefundPrototypes);
    }
  }
  return Object.assign(Object.create(paymentHelpers), input);
}

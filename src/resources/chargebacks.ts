import Resource from '../resource';
import Chargeback from '../models/Chargeback';
import List from '../models/List';
import ApiException from '../exceptions/ApiException';

import { IListParams } from '../types/chargeback/params';
import { ListCallback } from '../types/chargeback/callback';

/**
 * The `chargebacks` resource
 *
 * @since 2.0.0-rc.1
 */
export default class ChargebacksResource extends Resource {
  public resource = 'chargebacks';
  public model = Chargeback;
  public apiName = 'Chargebacks API';

  /**
   * List chargebacks
   *
   * @since 2.0.0
   *
   * @see https://docs.mollie.com/reference/v2/chargebacks-api/list-chargebacks
   * @public ✓ This method is part of the public API
   */
  all = this.list;

  /**
   * List chargebacks
   *
   * @param params - List chargebacks parameters
   *                 (DEPRECATED SINCE 2.2.0) Can also be a callback function
   * @param cb - (DEPRECATED SINCE 2.2.0) Callback function, can be used instead of the returned `Promise` object
   *
   * @returns A list of found Chargebacks
   *
   * @since 2.0.0
   *
   * @see https://docs.mollie.com/reference/v2/chargebacks-api/list-chargebacks
   * @public ✓ This method is part of the public API
   */
  public async list(params?: IListParams | ListCallback, cb?: ListCallback): Promise<List<Chargeback>> {
    // Using callbacks (DEPRECATED SINCE 2.2.0)
    if (typeof params === 'function' || typeof cb === 'function') {
      return super.list(
        typeof params === 'function' ? null : params,
        typeof params === 'function' ? params : cb,
      ) as Promise<List<Chargeback>>;
    }

    return super.list(params, cb) as Promise<List<Chargeback>>;
  }

  // UNAVAILABLE

  /**
   * @deprecated This method is not available
   */
  public async create(): Promise<Chargeback> {
    throw new ApiException(`The method "create" does not exist on the "${this.apiName}"`);
  }

  /**
   * @deprecated This method is not available
   */
  public async update(id: string, data: any, cb?: Function): Promise<Chargeback> {
    throw new ApiException(`The method "update" does not exist on the "${this.apiName}"`);
  }

  /**
   * @deprecated This method is not available
   */
  public async get(id: string, params?: any, cb?: Function): Promise<Chargeback> {
    throw new ApiException(`The method "get" does not exist on the "${this.apiName}"`);
  }

  /**
   * @deprecated This method is not available
   */
  public async cancel(): Promise<boolean> {
    throw new ApiException(`The method "cancel" does not exist on the "${this.apiName}"`);
  }

  /**
   * @deprecated This method is not available
   */
  public async delete(): Promise<boolean> {
    throw new ApiException(`The method "delete" does not exist on the "${this.apiName}"`);
  }
}
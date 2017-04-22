import { RequestHelper, API_URLS } from '../../base';
import { Operator } from '../types';
import { OperatorResponse } from '../responses';
import * as _ from 'lodash';
const protocol = 'https';
const chatMetaUrl = `${protocol}://${API_URLS['operator']}`;

const query = (authHeader: any): Promise<OperatorResponse> => {
    return RequestHelper.get(`${chatMetaUrl}`, authHeader)
           .then(data => {
               return <OperatorResponse>{
                operators: data
               };
           });
};


export const Operators = {
    query
};

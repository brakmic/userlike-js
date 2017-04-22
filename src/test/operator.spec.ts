import { Config } from './settings';
import { Api } from '../platform';

import { expect } from 'chai';
import * as sinon from 'sinon';
import { Promise } from 'es6-promise';
import 'sinon-stub-promise';
import 'isomorphic-fetch';


describe('Operator', () => {

    it('is callable', () => {
        expect(Api.Calls.Operators.query).to.be.a('function');
    });
    it('receives a valid OperatorResponse', (done) => {
        Api.Calls.Operators.query(Config.ApiKey).
            then(value => {
                expect(value).to.be.of('OperatorResponse');
                done();
            }).
            catch(err => {
                done();
            });
    });
});

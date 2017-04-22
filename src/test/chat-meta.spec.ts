import { Config } from './settings';
import { Api } from '../platform';

import { expect } from 'chai';
import * as sinon from 'sinon';
import { Promise } from 'es6-promise';
import 'sinon-stub-promise';
import 'isomorphic-fetch';


describe('ChatMeta', () => {

    it('is callable', () => {
        expect(Api.Calls.ChatMetas.query).to.be.a('function');
    });
    it('receives a valid ChatMetaResponse', (done) => {
        Api.Calls.ChatMetas.query(Config.ApiKey).
            then(value => {
                expect(value).to.be.of('ChatMetaResponse');
                done();
            }).
            catch(err => {
                done();
            });
    });
});

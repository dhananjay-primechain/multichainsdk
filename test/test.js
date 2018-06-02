'use strict';

var expect = require('chai').expect;
var bcSdk = require('../index');

describe('#bcSdk', function() {
    it('should give blockchain parameters', function() {
        var result = bcSdk.getBlockchainParams();
        expect(result);
    });

    it('should give blockchain Information', function() {
        var result = bcSdk.getBlockchainInfo();
        expect(result);
    });

    
});
const dns = require("dns");

const dnsGetServers = dns.getServers();
// const dnsSetServers = dns.setServers("http://localhost:8081", (resp) => return resp);
const dnsLookup = dns.lookup("www.google.com", (resp) => { return resp });
const dnsLookupService = dns.lookupService("14.192.24.32", 32, (resp) => { resp });
const dnsResolve = dns.resolve("14.192.24.32", (resp) => { return resp });
const dnsResolve4 = dns.resolve4("14.192.24.32", (resp) => { return resp });
const dnsResolve6 = dns.resolve6("14.192.24.32", (resp) => { return resp });
const dnsResolveMx = dns.resolveMx("14.192.24.32", (resp) => { return resp });
const dnsResolveNs = dns.resolveNs("14.192.24.32", (resp) => { return resp });
const dnsResolveSoa = dns.resolveSoa("14.192.24.32", (resp) => { return resp });
const dnsResolveSrv = dns.resolveSrv("14.192.24.32", (resp) => { return resp });
const dnsResolvePtr = dns.resolvePtr("14.192.24.32", (resp) => { return resp });
const dnsResolveTxt = dns.resolveTxt("14.192.24.32", (resp) => { return resp });
const dnsReverse = dns.reverse("14.192.24.32", (resp) => { return resp });

const dnsMethods = console.log("dnsMethods", { dnsGetServers,
    // dnsSetServers,
    dnsLookup, dnsLookupService,
    dnsResolve, dnsResolve4, dnsResolve6,
    dnsResolveMx, dnsResolveNs, dnsResolveSoa,
    dnsResolveSrv, dnsResolvePtr, dnsResolveTxt, dnsReverse
});

module.exports = dnsMethods;
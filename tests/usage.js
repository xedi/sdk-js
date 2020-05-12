Xedi.Client.init({ 'base_url': 'http://api.localhost' });
await Xedi.Auth.login('chris@xedi.com', '🖕🖕🖕🖕');

if (window.Worker) {
    const worker = new Worker('token-worker.js');

    worker.onmessage = ev => {
        console.info("Tokens refreshed");
        Xedi.Client.access_token = ev.data.access_token;
        Xedi.Client.refresh_token = ev.data.refresh_token;
        Xedi.Client.token_expires = ev.data.expires;
    }
}

let business_partners = await Xedi.Partners.list(Xedi.Auth.business._id);
let tescos_partnership = lodash.find(business_partners, { 'name': 'Tescos' });

let documents = await Xedi.Documents.forPartnership(tescos_partnership._id);
documents = lodash.orderBy(documents, 'received_date', 'desc');
 
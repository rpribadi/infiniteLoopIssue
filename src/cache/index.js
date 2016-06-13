import request from 'superagent';

const Cache = class {
  constructor() {
    this.collection = [];
  }

  get(url) {
    // Data must exists
    const item = this.collection.find(item => item.url === url);
    return item ? item.data : null;
  }

  getOrFetch(url) {
    let that = this;
    return new Promise(
      (resolve) => {
        const item = that.collection.find((item) => item.url === url);

        if (item) {
          console.log('Cache: available in cache', url);
          resolve({url: url, data: item.data});
        }
        else {
          request
            .get(url)
            .accept('application/json')
            .end((error, response) => {
              if (error || !response.ok) {
                console.log('Cache: failed to download from', url, error);
                resolve({url: url, data: false});
              }
              else {
                const data = JSON.parse(response.text);
                that.collection.push({
                  data: data,
                  url: url
                });
                console.log('Cache: succeded to download from', url);
                resolve({url: url, data: data});
              }
            });
        }
      }
    );
  }
};


// singleton
export default new Cache();

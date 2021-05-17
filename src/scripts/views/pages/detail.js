/* eslint-disable linebreak-style */
const Detail = {
  async render() {
    return `
      <div class="loader"></div>
    `;
  },

  async afterRender() {
    console.log('Detail Page');
  },
};

export default Detail;

/* eslint-disable linebreak-style */

const Favorite = {
  async render() {
    return `
      <div class="loader"></div>
    `;
  },

  async afterRender() {
    console.log('Favorite Page');
  },
};

export default Favorite;

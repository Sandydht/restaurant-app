/* eslint-disable linebreak-style */
const Favorite = {
  async render() {
    return `
      <section class="content">
        <h2 class="content__heading">Favorite Page</h2>
      </section>
    `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default Favorite;

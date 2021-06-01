/* eslint-disable linebreak-style */
const Favorite = {
  async render() {
    return `
      <div id="content"></div>
    `;
  },

  async afterRender() {
    const content = document.getElementById('content');

    try {
      content.innerHTML = `
        <section class="restaurants">
          <h2 class="restaurants__heading">Favorite Cafe</h2>
        </section>
      `;
    } catch (e) {
      content.innerHTML = `
        <section>
          <h2>Gagal memuat data</h2>
        </section>
      `;
    }
  },
};

export default Favorite;

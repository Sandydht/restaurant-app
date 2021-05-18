/* eslint-disable linebreak-style */

const Favorite = {
  async render() {
    return `
      <div class="loader"></div>
    `;
  },

  async afterRender() {
    const mainContent = document.getElementById('mainContent');
    try {
      mainContent.innerHTML = `
        <section id="restaurant" class="restaurant">
          <h2 class="restaurant__label">Favorite Cafe</h2>
        </section>
      `;
    } catch (e) {
      mainContent.innerHTML = `
        <section class="restaurant">
          <h2 class="restaurant__label">Gagal Memuat Data</h2>
        </section>
      `;
    }
  },
};

export default Favorite;

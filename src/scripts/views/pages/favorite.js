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
        <section>
          <h2 style="text-align: center; margin: 30px 20px; font-size: 20pt;">Gagal Memuat Data</h2>
        </section>
      `;
    }
  },
};

export default Favorite;

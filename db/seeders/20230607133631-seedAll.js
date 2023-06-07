/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      'Candidates',
      [
        {
          name: 'Станислав',
          email: '123@321',
          second_name: 'Растропович',
          age: 20,
          img: 'https://img.freepik.com/premium-vector/cool-man-profile-photo-icon-profile-icon-male-head-face-flat-design-vector-illustration_750364-393.jpg',
          pdf: 'id-1-070623.pdf',
          comments: 'Лучший чувак',
          phone: '89122171166',
          skills: 'Ооочень много умею ',
          prof_id: 2,
          status_id: 1,
        },
        {
          name: 'Екатерина',
          email: '123@456',
          second_name: 'Гончаренко',
          age: 20,
          img: 'https://kartinkin.net/uploads/posts/2022-02/1645062630_1-kartinkin-net-p-kartinki-dlya-profilya-1.jpg',
          pdf: 'id-2-070623.pdf',
          comments: 'Лучшая чувиха',
          phone: '89122186654',
          skills: 'Ооочень много не умею ',
          prof_id: 1,
          status_id: 2,
        },
      ],
      {},
    );
    await queryInterface.bulkInsert(
      'Professions',
      [
        {
          profession: 'Маркетолог',
        },
        {
          profession: 'Менеджер',
        },
        {
          profession: 'Программист',
        },
      ],
      {},
    );
    await queryInterface.bulkInsert(
      'Statuses',
      [
        {
          status: 'Направлено приглашение',
        },
        {
          status: 'Звонок скрининг',
        },
        {
          status: 'Интервью',
        },
        {
          status: 'Видео-интервью',
        },
        {
          status: 'Передано заказчику',
        },
        {
          status: 'Выход на работу',
        },
        {
          status: 'Отказ',
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Candidates', null, {});
    await queryInterface.bulkDelete('Professions', null, {});
    await queryInterface.bulkDelete('Statuses', null, {});
  },
};

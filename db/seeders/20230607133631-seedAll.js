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
          img: 'img-1686249275520.jpg',
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
          img: 'img-1686249275520.jpg',
          pdf: 'id-2-070623.pdf',
          comments: 'Лучшая чувиха',
          phone: '89122186654',
          skills: 'Ооочень много не умею ',
          prof_id: 1,
          status_id: 2,
        },
        {
          name: 'Marshal',
          email: '123@321',
          second_name: 'Eriksen',
          age: 32,
          img: 'img-1686249275520.jpg',
          pdf: 'id-1-070623.pdf',
          comments: 'Лучший чувак',
          phone: '89122171166',
          skills: 'Ооочень много умею ',
          prof_id: 3,
          status_id: 1,
        },
        {
          name: 'Ted',
          email: '123@321',
          second_name: 'Mosby',
          age: 34,
          img: 'img-1686249275520.jpg',
          pdf: 'id-1-070623.pdf',
          comments: 'Лучший чувак',
          phone: '89122171166',
          skills: 'Ооочень много умею ',
          prof_id: 3,
          status_id: 1,
        },
        {
          name: 'Barnie',
          email: '123@321',
          second_name: 'Stinson',
          age: 32,
          img: 'img-1686249275520.jpg',
          pdf: 'id-1-070623.pdf',
          comments: 'Лучший чувак',
          phone: '89122171166',
          skills: 'Ооочень много умею ',
          prof_id: 3,
          status_id: 1,
        },
        {
          name: 'Robin',
          email: '123@456',
          second_name: 'Scherbatzky',
          age: 30,
          img: 'img-1686249275520.jpg',
          pdf: 'id-2-070623.pdf',
          comments: 'Лучшая чувиха',
          phone: '89122186654',
          skills: 'Ооочень много не умею ',
          prof_id: 1,
          status_id: 7,
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

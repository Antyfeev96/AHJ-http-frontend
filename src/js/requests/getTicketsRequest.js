/* eslint-disable no-unused-vars */
/* eslint-disable no-return-assign */
/* eslint-disable consistent-return */
/* eslint-disable no-unreachable */
/* eslint-disable no-undef */
async function getRequest(type, e) {
  e.preventDefault();

  if (type !== 'GET') return;

  try {
    const formData = new FormData();
    formData.append('method', 'allTickets');

    const response = await fetch(
      `http://localhost:7070/?method=${formData.get('method')}`,
      {
        method: type,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      },
    );

    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
}

export default getRequest;
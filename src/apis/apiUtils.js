export async function handleResponse(response) {
  if (response.status === 200) {
    return response.data;
  }

  if (response.status === 400) {
    const error = await response.statusText;
    throw new Error(error);
  }
  throw new Error('Network response was not ok.');
}

export function handleError(error) {
  throw error;
}
